const MIN_WIDTH_LIMIT = 1
const MAX_WIDTH_LIMIT = 5000
const MEDIUM_SCREEN_MIN_WIDTH = 640
const LARGE_SCREEN_MIN_WIDTH = 1500


export function getScreenWidth() {
  const { innerWidth } = window
  const d = document
  const e = d.documentElement
  const g = d.getElementsByTagName('body')[0]
  const width = innerWidth || e.clientWidth || g.clientWidth
  return width
}


export function getVisibleZones(minWidth, maxWidth, screens) {
  let visibleZones = []

  const hasCustomWidth = minWidth || maxWidth
  const hasScreenSizes = !!screens
  const isSmallScreen = hasScreenSizes && screens.indexOf('S') !== -1
  const isMediumScreen = hasScreenSizes && screens.indexOf('M') !== -1
  const isLargeScreen = hasScreenSizes && screens.indexOf('L') !== -1

  if (hasCustomWidth) {
    if (minWidth && maxWidth) {
      visibleZones = [[minWidth, maxWidth]]
    }
    else if (minWidth) {
      visibleZones = [[minWidth, MAX_WIDTH_LIMIT]]
    }
    else if (maxWidth) {
      visibleZones = [[MIN_WIDTH_LIMIT, maxWidth]]
    }
  }
  else if (hasScreenSizes) {
    if (isSmallScreen) {
      visibleZones = [[MIN_WIDTH_LIMIT, MEDIUM_SCREEN_MIN_WIDTH - 1]]
    }
    if (isMediumScreen) {
      visibleZones = [...visibleZones, [MEDIUM_SCREEN_MIN_WIDTH, LARGE_SCREEN_MIN_WIDTH - 1]]
    }
    if (isLargeScreen) {
      visibleZones = [...visibleZones, [LARGE_SCREEN_MIN_WIDTH, MAX_WIDTH_LIMIT]]
    }
  }
  return visibleZones
}


export function isOnVisibleZone(visibleZones, width) {
  return !!visibleZones.find(
    function (zone) {
      return zone[0] <= width && width <= zone[1]
    }
  )
}
