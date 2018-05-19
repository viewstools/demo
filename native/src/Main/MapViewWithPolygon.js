// @view
// TEST

import { MapView } from 'expo'
import React from 'react'
import { Text } from 'react-native'
import geolib from 'geolib'

const point = {
  latitude: 53.1,
  longitude: -8.830732,
}

const area = [
  // top left
  {
    latitude: 53.7004,
    longitude: -7.077924,
  },
  // top right
  {
    latitude: 53.63531,
    longitude: -5.990278,
  },
  // bottom right
  {
    latitude: 53.002011,
    longitude: -5.957319,
  },
  // bottom left
  {
    latitude: 52.973903,
    longitude: -6.830732,
  },
]

export default () => (
  <React.Fragment>
    <MapView style={{ flex: 1 }}>
      <MapView.Polygon coordinates={area} />
      <MapView.Marker coordinate={point} />
    </MapView>
    <Text>{geolib.isPointInside(point, area) ? 'yes' : 'no'}</Text>
  </React.Fragment>
)
