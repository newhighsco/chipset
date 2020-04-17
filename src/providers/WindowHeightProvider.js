import React, { useEffect, useState } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

const getWindowHeight = () =>
  (document &&
    document.documentElement &&
    document.documentElement.clientHeight) ||
  window.innerHeight

const withWindowHeight = WrappedComponent => {
  const Wrapper = props => {
    const [height, setHeight] = useState()

    useEffect(() => {
      const handleResize = () => setHeight(getWindowHeight())

      handleResize()

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [height])

    return <WrappedComponent {...props} windowHeight={height} />
  }

  Wrapper.propTypes = {
    ...WrappedComponent.propTypes
  }

  hoistNonReactStatics(Wrapper, WrappedComponent)

  return Wrapper
}

export { withWindowHeight }
