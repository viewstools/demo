// @view
import { MapView } from './GoogleMaps.js'
import React from 'react'

export default ({
  children,
  marginTop,
  showsUserLocation,
  latitude,
  longitude,
}) => (
  <MapView
    style={{ flex: 1, marginTop }}
    apiKey={process.env.REACT_APP_GOOGLE_MAPS}
    latitude={latitude}
    longitude={longitude}
    zoom={16}
  >
    {children}
  </MapView>
)
