import { arrayOf, oneOf, shape, string } from 'prop-types'
import React from 'react'

import { useImage } from '../../providers'

const Image = ({
  src,
  sources,
  alt = '',
  fetchPriority = 'low',
  loading = 'lazy',
  decoding = 'async',
  className,
  ...rest
}) => {
  const renderImage = useImage()

  if (!src) return null

  const Picture = ({ render, children }) =>
    sources?.length ? render(children) : children

  return (
    <Picture
      render={children => (
        <picture className={className}>
          {sources.map((props, index) => (
            <source key={index} {...props} />
          ))}
          {children}
        </picture>
      )}
    >
      {renderImage({
        ...(!sources?.length && { className }),
        src,
        alt,
        fetchPriority,
        loading,
        decoding,
        ...rest
      })}
    </Picture>
  )
}

Image.propTypes = {
  src: string,
  sources: arrayOf(
    shape({ srcSet: string, sizes: string, media: string, type: string })
  ),
  alt: string,
  fetchPriority: oneOf(['auto', 'low', 'high']),
  loading: oneOf(['auto', 'lazy', 'eager']),
  decoding: oneOf(['auto', 'async', 'sync']),
  className: string
}

export default Image
