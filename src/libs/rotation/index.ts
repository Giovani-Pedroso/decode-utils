const ROT13 = 'abcdefghijklmnopqrstuvwxyz'
const ROT18 = 'abcdefghijklmnopqrstuvwxyz0123456789'

export const rotationLetters = (text: string, steps: number) => {
  return rotationCustom(text, steps, ROT13)
}

export const rotationLettersNumbers = (text: string, steps: number) => {
  return rotationCustom(text, steps, ROT18)
}

export const rotationCustom = (
  text: string,
  steps: number,
  alphabet: string,
) => {
  const lengthOfSearch = alphabet.length
  // Allow to use numbers bigger than lengthOfSearch or smaller than -26
  if (steps > 0) {
    steps = steps > lengthOfSearch ? steps % lengthOfSearch : steps
  } else {
    steps = steps < -lengthOfSearch ? steps % lengthOfSearch : steps
  }

  let rottedLetters = ''

  for (let i of text) {
    const possition = alphabet.indexOf(i.toLowerCase())
    // Check if the char is on the Array
    if (possition == -1) {
      rottedLetters += i
      continue
    }

    let newPossition = possition + steps

    if (newPossition > lengthOfSearch) {
      newPossition = newPossition - lengthOfSearch
      rottedLetters +=
        i.charCodeAt(0) >= 97
          ? alphabet[newPossition]
          : alphabet[newPossition].toUpperCase()
      continue
    }
    if (newPossition < 0) {
      newPossition = lengthOfSearch + newPossition
      rottedLetters +=
        i.charCodeAt(0) >= 97
          ? alphabet[newPossition]
          : alphabet[newPossition].toUpperCase()
      continue
    }
    rottedLetters +=
      i.charCodeAt(0) >= 97
        ? alphabet[newPossition]
        : alphabet[newPossition].toUpperCase()
  }

  return rottedLetters
}
