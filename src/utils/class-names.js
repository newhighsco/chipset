import classnames from 'classnames/dedupe'

export const classNames = (...args) =>
  classnames(...args)
    .replace(undefined, '')
    .trim()
