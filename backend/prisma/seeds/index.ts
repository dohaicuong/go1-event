import { PrismaClient } from '@prisma/client'

import seatData from './seats'
import locationData from './locations'
import eventData from './events'

const db = new PrismaClient()

;(async () => {
  await db.seat.deleteMany({})
  await db.event.deleteMany({})
  await db.location.deleteMany({})

  await Promise.all(seatData.map(seat => db.seat.create({ data: { id: seat.id }})))
  const locations = await Promise.all(locationData.map(location => {
    return db.location.create({ data: {
      city: location.City,
      state: location.State,
      country: location.Country,
    }})
  }))

  for(const event of eventData) {
    const locationId = locations.find(location => location.city === event.Location.City)?.id
    await db.event.create({
      data: {
        title: event.Title,
        time: event.Time,
        image: event.Image,
        location: { connect: { id: locationId }},
        availableSeats: {
          connect: event.AvailableSeats
        }
      }
    })
  }

})()
  .finally(() => db.$disconnect())
  .catch(err => {
    console.log(err)
  })