import { describe, expect, test } from '@jest/globals'
import { base64Decode, base64Encode } from './index'

describe('Testing the base64 functions', () => {
  test('convert a common string to base64', () => {
    const string = "Hello I'm a string"
    const stringB64 = base64Encode(string)
    expect(stringB64.text).toBe('SGVsbG8gSSdtIGEgc3RyaW5n')
  })

  test('convert a base64 string to a normal string', () => {
    const string = 'SGVsbG8gSSdtIGEgc3RyaW5n'
    const stringB64 = base64Decode(string)
    expect(stringB64.text).toBe("Hello I'm a string")
  })

  test('handle incorrect text', () => {
    const string = "it's just a regular text"
    const stringB64 = base64Decode(string)
    expect(stringB64.text).toBe('Invalid text')
  })
})
