const absoluteUrlRegEx = /^\w[\w-.+]+:/

export const absoluteUrl = url => absoluteUrlRegEx.exec(url)
