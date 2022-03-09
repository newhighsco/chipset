import React, { FC } from 'react'
import { ImageProps } from './Image.types'

const Image: FC<ImageProps> = ({
  src,
  sources,
  alt = '',
  loading = 'lazy',
  decoding = 'async',
  className,
  ...rest
}) => {
  if (!src) return null

  const Picture = ({ render, children }) =>
    sources?.length ? render(children) : children

  return (
    <Picture
      render={(children: HTMLImageElement) => (
        <picture className={className}>
          {sources?.map((props, index) => (
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
        decoding={decoding}
        {...rest}
      />
    </Picture>
  )
}

export default Image
