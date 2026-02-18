import { getIcon, loadIcon } from '@iconify/react'
import { useEffect, useState } from 'react'

export const useIcon = name => {
  const [icon, setIcon] = useState(getIcon(name))

  useEffect(() => {
    if (!name) return

    let mounted = true

    loadIcon(name).then(icon => {
      if (mounted) setIcon(icon)
    })

    return () => {
      mounted = false
    }
  }, [name])

  return icon
}
