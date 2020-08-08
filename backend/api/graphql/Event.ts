import { schema } from 'nexus'
import { connectionFromPromisedArray } from 'graphql-relay'

schema.objectType({
  name: 'Event',
  definition: t => {
    t.implements('Node')
    t.model.title()
    t.model.time()
    t.model.image()
    t.model.location()
    t.model.availableSeats()
  }
})

schema.inputObjectType({
  name: 'EventConnectionWhereInput',
  definition: t => {
    t.string('keywords')
    t.date('time')
    t.string('city')
    t.string('state')
    t.string('country')
  }
})

schema.extendType({
  type: 'Query',
  definition: t => {
    t.connection('eventConnection', {
      type: 'Event',
      additionalArgs: {
        where: 'EventConnectionWhereInput'
      },
      // TODO: wait for fix (args types not match)
      // @ts-ignore
      resolve: async (_, { where, ...args }, { db }) => {
        return connectionFromPromisedArray(db.event.findMany({
          where: {
            AND: [
              { title: { contains: where?.keywords ?? undefined } },
              { time: { gte: where?.time ?? undefined }},
              { location: {
                city: { equals: where?.city ?? undefined }
              }},
              { location: {
                state: { equals: where?.state ?? undefined }
              }},
              { location: {
                country: { equals: where?.country ?? undefined }
              }},
            ],
          },
        }), args)
      }
    })
  }
})