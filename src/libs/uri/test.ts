import { describe, test } from '@jest/globals'
import { encodeUriEncode } from './index'
import { decodeUriEncode } from './index'

describe('Testing the urlEncode functions', () => {
  test('Enconding a string', () => {
    const stringToEncode = 'hello a bunch of char :/?$%@#$\\'
    const encodedString = encodeUriEncode(stringToEncode)
    expect(encodedString.text).toBe(
      'hello%20a%20bunch%20of%20char%20%3A%2F%3F%24%25%40%23%24%5C',
    )
  })

  test('decoding a string', () => {
    const stringToDecode =
      'hello%20a%20bunch%20of%20char%20%3A%2F%3F%24%25%40%23%24%5C'
    const decodedString = decodeUriEncode(stringToDecode)
    expect(decodedString.text).toBe('hello a bunch of char :/?$%@#$\\')
  })
})
