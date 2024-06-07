type Response = {
  text: string
  err: string | null
}

export const base64Decode = (text: string): Response => {
  try {
    return { text: atob(text), err: null }
  } catch (err: any) {
    return { text: 'Invalid text', err: err.message }
  }
}

export const base64Encode = (text: string): Response => {
  try {
    return { text: btoa(text), err: null }
  } catch (err) {
    return { text: 'Invalid text', err: null }
  }
}
