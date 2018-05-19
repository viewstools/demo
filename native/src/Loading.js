// @view
import { MaterialIndicator } from 'react-native-indicators'
import React from 'react'

export default class Loading extends React.Component {
  static defaultProps = {
    after: 500
  }

  state = {
    isShowing: false,
  }

  componentDidMount() {
    this.cancel = setTimeout(() => {
      this.setState({
        isShowing: true,
      })
    }, this.props.after)
  }

  componentWillUnmount() {
    clearTimeout(this.cancel)
  }

  render() {
    return this.state.isShowing ? <MaterialIndicator {...this.props} /> : null
  }
}
