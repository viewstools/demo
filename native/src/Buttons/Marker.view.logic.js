// @view
import { MapView } from 'expo'
import Marker from './Marker.view.js'
import React from 'react'

export default ({ latitude, longitude, ...props }) => (
  <MapView.Marker
    centerOffset={{
      x: 54,
      y: 18
    }}
    coordinate={{
      latitude,
      longitude,
    }}
  >
    <Marker {...props} selected={props.selected === props.id} />
  </MapView.Marker>
)
