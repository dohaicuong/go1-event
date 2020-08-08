import { createTestContext } from './__helpers'

const ctx = createTestContext()

describe('Event', () => {
  test('eventConnection query', async () => {
    const result = await ctx.client.send(`
      query EventConnectionQuery {
        eventConnection(first: 10) {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            cursor
            node {
              id
              title
              time
              image
            }
          }
        }
      }
    `)
    result.eventConnection.edges.forEach(({ node }: any) => {
      expect(node).toMatchSnapshot({
        id: expect.any(String)
      })
    })

    const nodeId = result.eventConnection.edges[0].node.id
    const nodeResult = await ctx.client.send(
      `
        query EventNodeQuery($id: ID!) {
          node(id: $id) {
            id
            __typename
            ... on Event {
              title
              time
              image
            }
          }
        }
      `,
      { id: nodeId }
    )
    expect(nodeResult.node).toHaveProperty('id')
    expect(nodeResult.node).toHaveProperty('title')
    expect(nodeResult.node).toHaveProperty('time')
    expect(nodeResult.node).toHaveProperty('image')
  })
})