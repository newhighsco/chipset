const absoluteUrlRegEx = /^\w[\w-.+]+:/

export const absoluteUrl = (url: string): boolean => absoluteUrlRegEx.test(url)
