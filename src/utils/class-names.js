import classnames from 'classnames/dedupe'

export const classNames = (...args) => {
  const names = classnames(...args)
    .replace(undefined, '')
    .trim()

  return names.length ? names : undefined
}
