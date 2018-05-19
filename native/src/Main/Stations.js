import { getLiveInfo, getStations } from '../cities/index.js'
import React from 'react'

export default class Stations extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      from: getStations(props.city, props.coords),
      refresh: this.refresh,
    }
  }

  componentDidMount() {
    this.getLiveInfo()
  }

  componentDidUpdate(prevProps, prevState) {
    const { props } = this

    if (prevProps.coordsIsReady !== props.coordsIsReady && props.coords) {
      this.getLiveInfo()
    }
  }

  getLiveInfo = async () => {
    const { props } = this

    this.setState({
      from: await getLiveInfo(
        props.city,
        getStations(props.city, props.coords)
      ),
    })
  }

  refresh = () => {
    if (this.props.refresh) {
      this.props.refresh()
    } else {
      this.getLiveInfo()
    }
  }

  render() {
    return this.props.children(this.state)
  }
}
