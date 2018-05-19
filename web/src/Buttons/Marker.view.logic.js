// @view
import { Marker } from '../Main/GoogleMaps.js'
import React from 'react'

export default ({ latitude, longitude, ...props }) => (
  <Marker
    latitude={latitude}
    longitude={longitude}
    selected={props.id === props.selected}
    title={`${props.freeBikes} bike${props.freeBikes === 1 ? '' : 's'} ${
      props.emptySpaces
    } space${props.emptySpaces === 1 ? '' : 's'}`}
  />
)
