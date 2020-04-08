const absoluteUrlRegEx = /^\w[\w-.+]+:/

export const absoluteUrl = url => {
  return absoluteUrlRegEx.exec(url)
}
