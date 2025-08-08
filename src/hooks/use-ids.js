import { useId } from 'react'

export const useIds = (elements = []) => {
  const id = useId()

  return elements.map(element => [id, element].join('-'))
}
