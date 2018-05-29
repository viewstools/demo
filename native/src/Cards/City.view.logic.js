import City from './City.view.js'
import React from 'react'
import Stagger from '../Custom/Stagger.js'

export default ({ onClick, ...props }) => (
  <Stagger index={props.index}>
    {stagger => (
      <City {...props} {...stagger} onClick={() => onClick(props.id)} />
    )}
  </Stagger>
)
