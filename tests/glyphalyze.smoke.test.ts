import { describe, it, expect } from 'vitest'
import { TextCounter } from 'glyphalyze'

describe('Glyphalize (Smoke test)', () => {
  it('Can be imported and correctly counts words', () => {
    const counter = new TextCounter('Hello world')
    expect(counter.countWords()).toBe(2)
  })
})
