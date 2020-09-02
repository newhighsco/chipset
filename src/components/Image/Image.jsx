import React from 'react'
import { arrayOf, oneOf, shape, string } from 'prop-types'

const Image = ({
  src,
  sources,
  alt = '',
  loading = 'lazy',
  className,
  ...rest
}) => {
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
      <img
        {...(!sources?.length && { className })}
        src={src}
        alt={alt}
        loading={loading}
        {...rest}
      />
    </Picture>
  )
}

Image.propTypes = {
  src: string,
  sources: arrayOf(
    shape({
      srcSet: string,
      sizes: string,
      media: string,
      type: string
    })
  ),
  alt: string,
  loading: oneOf(['auto', 'lazy', 'eager']),
  className: string
}

export default Image
