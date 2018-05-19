import React from 'react'
import Stations from './Stations.js'
import StationsView from './Stations.view.js'

export default props => (
  <Stations {...props}>
    {stations => (
      <StationsView
        {...props}
        {...stations}
        contentContainerStyle={{ paddingBottom: 200 }}
      />
    )}
  </Stations>
)
