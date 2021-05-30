import { MathService } from '../src/math.servis'

describe("Adder Module", () => {
  it("it should sum number", () => {
  // Given 
  const expectedValue = 10

  // When
  const value = MathService.adder(5, 5)

  // Then
  expect(value).toBe(expectedValue)
  })
})
