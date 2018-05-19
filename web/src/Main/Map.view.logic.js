import { getCoords } from '../cities/index.js'
import Map from './Map.view.js'
import React from 'react'
import Stations from './Stations.js'

export default props => (
  <Stations {...props}>
    {stations => (
      <Map {...props} {...stations} {...getCoords(props.city, props.station)} />
    )}
  </Stations>
)
