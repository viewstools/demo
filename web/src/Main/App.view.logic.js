import * as Storage from '../async-storage.js'
import App from './App.view.js'
import Location from './Location.js'
import React from 'react'

class AppLogic extends React.Component {
  state = {
    city: null,
    isCities: false,
    isLoading: true,
    isSetup: false,
    isStations: false,
    isMap: false,
    station: null,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.location.isReady &&
      (prevState.isLoading || prevState.isSetup)
    ) {
      const { city } = nextProps.location
      const isCities = city === null

      return {
        city,
        isLoading: false,
        isCities,
        isStations: !isCities,
      }
    }

    if (nextProps.location.isLoading && prevState.isSetup) {
      return {
        isLoading: true
      }
    }

    return null
  }

  async componentDidMount() {
    const isSetup = Storage.getItem('@joyride:setup')

    if (isSetup) {
      this.setState({ isSetup: true })

      if (this.props.location.isReady) {
        this.setState({
          isLoading: false,
          isCities: true,
        })
      }
    } else {
      this.setState({ isLoading: false })
    }
  }

  back = () => {
    if (!this.state.isCities) return
    if (!this.state.city) return

    this.setState({
      isCities: false,
      isStations: true,
    })
  }

  chooseCity = city => {
    this.setState({
      city,
      isCities: false,
      isMap: false,
      isStations: true,
      station: null,
    })
  }

  chooseStation = station => {
    this.setState({
      station,
      isCities: false,
      isStations: false,
      isMap: true,
    })
  }

  goToCities = () => {
    this.setState({
      isCities: true,
      isMap: false,
      isStations: false,
      station: null,
    })
  }

  goToStations = () => {
    this.setState({
      isCities: false,
      isMap: false,
      isStations: true,
      station: null,
    })
  }

  finishSetup = async () => {
    Storage.setItem('@joyride:setup', true)
    this.setState({ isSetup: true })
  }

  setup = async () => {
    await this.props.location.askForPermission()
    await this.finishSetup()
  }

  skipSetup = async () => {
    await this.props.location.dontGrantPermission()
    await this.finishSetup()
    this.setState({ isCities: true })
  }

  render() {
    const { props, state } = this

    return (
      <App
        {...state}
        back={this.back}
        canGoBack={state.city !== null}
        chooseCity={this.chooseCity}
        chooseStation={this.chooseStation}
        coords={props.location.location && props.location.location.coords}
        coordsIsReady={props.location.isReady}
        goToCities={this.goToCities}
        goToStations={this.goToStations}
        isNotSetupOrLoading={!(state.isSetup || state.isLoading)}
        refresh={
          props.location.location && props.location.city === state.city
            ? props.location.refresh
            : null
        }
        setup={this.setup}
        skipSetup={this.skipSetup}
      />
    )
  }
}

const AppWithLocation = () => (
  <Location>{location => <AppLogic location={location} />}</Location>
)
export default AppWithLocation
