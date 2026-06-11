import urljoin from 'url-join'

export const urlJoin = (...paths) =>
  urljoin(paths.filter(Boolean).map(path => `${path}`))
