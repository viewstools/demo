import Component from '@reactions/component'
import React from 'react'

const Stagger = props => (
  <Component
    initialState={{ before: true }}
    didMount={({ setState, state }) => {
      setTimeout(
        () => requestAnimationFrame(() => setState({ before: false })),
        props.delay * props.index
      )
    }}
  >
    {({ state }) => props.children(state)}
  </Component>
)
Stagger.defaultProps = {
  delay: 15,
  index: 0,
}
export default Stagger
