import { createTestContext as originalCreateTestContext, TestContext } from 'nexus/testing'

export function createTestContext(): TestContext {
  let ctx = {} as TestContext

  beforeAll(async () => {
    Object.assign(ctx, await originalCreateTestContext())
    await ctx.app.start()
  })
  
  afterAll(async () => {
    // TODO: wait for nexus fix @types
    // @ts-ignore
    await ctx.app.db.client.$disconnect()
    await ctx.app.stop()
  })
  
  return ctx
}