import NavBar from './NavBar.view.js'
import React from 'react'

export default props => (
  <NavBar {...props} isCitiesAndCanGoBack={props.isCities && props.canGoBack} />
)
