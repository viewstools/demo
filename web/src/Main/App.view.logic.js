import * as Storage from '../async-storage.js'
import App from './App.view.js'
import Location from './Location.js'
import React from 'react'

class AppLogic extends React.Component {
  state = {
    city: null,
    isCities: false,
    isSetup: false,
    isStations: false,
    isMap: false,
    station: null,
  }

  componentDidMount() {
    const { props } = this
    const isSetup = Storage.getItem('@joyride:setup')

    if (isSetup) {
      this.setState({ isSetup: true })
      if (props.location.isReady) {
        this.isItCitiesOrStations()
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { props } = this

    if (
      prevProps.location.isReady !== props.location.isReady &&
      props.location.isReady
    ) {
      this.isItCitiesOrStations()
    }
  }

  isItCitiesOrStations() {
    const { city } = this.props.location
    const isCities = city === null

    this.setState({
      city,
      isCities,
      isStations: !isCities,
    })
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

    const { isLoading } = props.location

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
        isLoading={isLoading}
        isNotSetupOrLoading={!(state.isSetup || isLoading)}
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
