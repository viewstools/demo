import React from 'react'

export default class PressRelease extends React.Component {
  static defaultProps = {
    resetAfter: 500,
  }

  constructor(props) {
    super(props)

    this.state = {
      onPress: this.onPress,
      onRelease: this.onRelease,
      // the internals might be `pressed` and `released` instead of `isPressed` and `isReleased` to keep it closer to the system whens like `hover`
      pressed: false,
      released: false,
    }
  }

  componentWillUnmount() {
    this.willUnmount = true
  }

  onPress = () => {
    this.setState({ pressed: true })
  }

  onRelease = () => {
    this.setState({ pressed: false, released: true }, () => {
      setTimeout(this.reset, this.props.resetAfter)
    })
  }

  reset = () => {
    if (!this.state.pressed && !this.willUnmount) {
      this.setState({ released: false })
    }
  }

  render() {
    return this.props.children(this.state)
  }
}
