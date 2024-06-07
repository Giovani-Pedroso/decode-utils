type Response = {
  text: string
  err: string | null
}

export const encodeUriEncode = (text: string): Response => {
  try {
    return { text: encodeURIComponent(text), err: null }
  } catch (err: any) {
    return { text: 'Invalid text', err: err.message }
  }
}

export const decodeUriEncode = (text: string): Response => {
  try {
    return { text: decodeURIComponent(text), err: null }
  } catch (err: any) {
    return { text: 'Invalid text', err: err.message }
  }
}
