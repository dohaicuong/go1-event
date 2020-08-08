import { schema } from 'nexus'

schema.objectType({
  name: 'Seat',
  definition: t => {
    t.model.id()
  }
})