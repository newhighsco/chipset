const absoluteUrlRegEx = /^\w[\w-.+]+:/

export const absoluteUrl = (url: string) => absoluteUrlRegEx.exec(url)
