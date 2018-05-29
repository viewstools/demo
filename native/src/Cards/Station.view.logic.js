import React from 'react'
import Stagger from '../Custom/Stagger.js'
import Station from './Station.view.js'

const A_KM = 1000
const A_1000_KM = A_KM * 100

const formatDistance = distance =>
  typeof distance === 'undefined'
    ? '∞'
    : distance >= A_KM
      ? distance >= A_1000_KM
        ? '∞'
        : Math.round(distance / A_KM)
      : Math.ceil(distance / 5) * 5

export default ({ onClick, ...props }) => (
  <Stagger index={props.index}>
    {stagger => (
      <Station
        {...props}
        {...stagger}
        distance={formatDistance(props.distance)}
        onClick={() => onClick(props.id)}
        unit={props.distance >= A_KM ? 'km' : 'm'}
      />
    )}
  </Stagger>
)
