import React from 'react'
import ButtonOutline from './ButtonOutline.view.js'
import PressRelease from './PressRelease.js'

export default class ButtonOutlineLogic extends React.Component {
  render() {
    const { onClick, ...props } = this.props

    return (
      <PressRelease>
        {({ released, pressed, onPress, onRelease }) => (
          <ButtonOutline
            {...props}
            released={released}
            pressed={pressed}
            onPress={event => {
              onPress()
            }}
            onRelease={event => {
              const code = event.charCode || event.keyCode
              if (event.type === 'keypress' && !(code === 32 || code === 13)) {
                return
              }

              onRelease()

              if (typeof onClick === 'function') {
                onClick(event)
              }
            }}
          />
        )}
      </PressRelease>
    )
  }
}
