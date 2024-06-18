import { test, describe, expect } from 'vitest'

function add(a, b) {
  return a + b
}

describe('describe A', () => {
  describe('describe B', () => {
    test('test 1', () => {
      expect(add(2, 2)).toBe(4)
    })

    test('test 2', () => {
      expect(add(2, 2)).toBe(444) // This test will fail
    })
  })
})
