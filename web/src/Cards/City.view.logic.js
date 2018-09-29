import City from './City.view.js'
import React from 'react'
import Stagger from '../Custom/Stagger.js'

const CityLogic = props => (
  <Stagger index={props.index}>
    {stagger => (
      <City {...props} {...stagger} onClick={() => props.onClick(props.id)} />
    )}
  </Stagger>
)
export default CityLogic
