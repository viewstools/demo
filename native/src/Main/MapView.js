// @view
import { MapView } from 'expo'
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
    showsUserLocation={showsUserLocation}
    initialRegion={
      latitude && longitude
        ? {
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.002,
          }
        : undefined
    }
  >
    {children}
  </MapView>
)
