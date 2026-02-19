import { useId } from 'react'

export const useIds = (...elements) => {
  const id = useId()

  if (!elements.length) return id

  return elements.map(element => [id, element].join('-'))
}
