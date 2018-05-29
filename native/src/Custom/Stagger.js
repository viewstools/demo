import Component from '@reactions/component'
import React from 'react'

export default props => (
  <Component
    state={{ in: false }}
    didMount={({ setState }) => {
      setTimeout(() => setState({ in: true }), 50 * props.index)
    }}
  >
    {({ state }) => props.children(state)}
  </Component>
)
