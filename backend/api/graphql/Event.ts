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

schema.extendType({
  type: 'Query',
  definition: t => {
    t.connection('eventConnection', {
      type: 'Event',
      // TODO: wait for fix (args types not match)
      // @ts-ignore
      resolve: async (_, args, { db }) => {
        return connectionFromPromisedArray(db.event.findMany({}), args)
      }
    })
  }
})