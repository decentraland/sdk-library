import { Component } from 'decentraland-ecs'
import { constant } from '../src/exampleComponent'

describe('Example spec', () => {
  (globalThis as any).Component = Component
  it('Should return constant', () => {
    expect(constant).toBe('constant')
  })
})