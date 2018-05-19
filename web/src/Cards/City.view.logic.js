import React from 'react'
import City from './City.view.js'

export default ({ onClick, ...props }) => (
  <City
    {...props}
    onClick={() => onClick(props.id)}
  />
)
