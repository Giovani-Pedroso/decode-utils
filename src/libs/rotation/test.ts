import { describe, expect } from '@jest/globals'
import { rotationLetters } from './index'

describe('Testing the rotation letters script:', () => {
  test('Cesar rotation', () => {
    const textTest = 'abcd@#$ABCD'
    const cesarCipher = rotationLetters(textTest, 3)
    expect(cesarCipher).toBe('defg@#$DEFG')
  })

  test('reverse Cesar rotaton', () => {
    const textTest = 'abcd@#$ABCD'
    const cesarCipher = rotationLetters(textTest, -3)
    expect(cesarCipher).toBe('xyza@#$XYZA')
  })

  test('Big Cesar rotaton', () => {
    const textTest = 'abcd@#$ABCD'
    const cesarCipher = rotationLetters(textTest, 300)
    expect(cesarCipher).toBe('opqr@#$OPQR')
  })

  // test('Big Cesar inverted rotaton', () => {
  //   const textTest = 'abcd@#$ABCD'
  //   const cesarCipher = rotationLetters(textTest, -300)
  //   expect(cesarCipher).toBe('opqr@#$OPQR')
  // })
})
