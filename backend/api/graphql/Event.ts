import { schema } from 'nexus'

schema.objectType({
  name: 'Event',
  definition: t => {
    t.model.id()
    t.model.title()
    t.model.time()
    t.model.image()
    t.model.location()
    t.model.availableSeats()
  }
})