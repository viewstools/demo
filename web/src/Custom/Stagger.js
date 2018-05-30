import Component from '@reactions/component'
import React from 'react'

export default props => (
  <Component
    initialState={{ before: true }}
    didMount={({ setState }) => {
      setTimeout(() => setState({ before: false }), 50 * props.index)
    }}
  >
    {({ state }) => props.children(state)}
  </Component>
)
