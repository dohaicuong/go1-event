import { schema } from 'nexus'

schema.objectType({
  name: 'Location',
  definition: t => {
    t.model.id()
    t.model.city()
    t.model.state()
    t.model.country()
  }
})