// https://github.com/manuelbieh/Geolib/blob/master/src/geolib.js#L67
const toRad = n => n * Math.PI / 180
// https://github.com/manuelbieh/Geolib/blob/master/src/geolib.js#L17
const RADIUS = 6378137
// src https://github.com/manuelbieh/Geolib/blob/master/src/geolib.js#L341
export default function getDistance(start, end) {
  return Math.round(
    Math.acos(
      Math.sin(toRad(end.latitude)) * Math.sin(toRad(start.latitude)) +
        Math.cos(toRad(end.latitude)) *
          Math.cos(toRad(start.latitude)) *
          Math.cos(toRad(start.longitude) - toRad(end.longitude))
    ) * RADIUS
  )
}
