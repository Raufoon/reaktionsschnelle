import { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getScreenWidth, getVisibleZones, isOnVisibleZone } from './utils'


export default function Responsive(props) {
  const { screens, minWidth, maxWidth, children } = props
  const visibleZones = useRef(getVisibleZones(minWidth, maxWidth, screens))

  const [isVisible, setVisible] = useState(
    function init() {
      const width = getScreenWidth()
      return isOnVisibleZone(visibleZones.current, width)
    }
  )

  useEffect(
    function adaptToScreenSizeChange() {
      function onResize() {
        const width = getScreenWidth()
        setVisible(
          isOnVisibleZone(visibleZones.current, width)
        )
      }

      window.addEventListener('resize', onResize)

      return function clear() {
        window.removeEventListener('resize', onResize)
      }
    }
    , [])

  return isVisible && children
}


Responsive.propTypes = {
  screens: PropTypes.arrayOf(PropTypes.oneOf(['S', 'M', 'L'])),
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number
}
