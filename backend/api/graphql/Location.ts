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

// schema.extendType({
//   type: 'Query',
//   definition: t => {
//     t.crud.locations()
//   }
// })