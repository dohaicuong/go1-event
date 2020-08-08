import { schema } from 'nexus'

schema.objectType({
  name: 'Location',
  definition: t => {
    t.implements('Node')
    t.model.city()
    t.model.state()
    t.model.country()
  }
})