import * as AsyncStorage from '../async-storage.js'
import { Constants, Location, Permissions } from 'expo'
import { findMyCity } from '../cities/index.js'
import { Platform } from 'react-native'
import React from 'react'

export default class LocationComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      askForPermission: this.askForPermission,
      checkLocationServices: this.checkLocationServices,
      city: null,
      dontGrantPermission: this.dontGrantPermission,
      isLoading: false,
      isLocationServicesEnabled: false,
      isPermissionGranted: false,
      isReady: false,
      location: null,
      refresh: this.refresh,
    }
  }

  async componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        isLoading: false,
        isReady: true,
        location: null,
      })
    } else {
      this.checkLocationServices(async () => {
        if (!this.state.isLocationServicesEnabled) return

        const isPermissionGranted = await AsyncStorage.getItem(
          '@joyride:isPermissionGranted'
        )
        if (isPermissionGranted) {
          // it might be the case that we think we have permissions
          // but the user revoked them afterwards by hand
          this.askForPermission()
        } else {
          this.ready()
        }
      })
    }
  }

  askForPermission = async callback => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)

    const isPermissionGranted = status === 'granted'

    await AsyncStorage.setItem(
      '@joyride:isPermissionGranted',
      isPermissionGranted
    )

    this.setState(
      {
        isPermissionGranted,
        location: null,
      },
      this.refresh
    )
  }

  checkLocationServices = async callback => {
    const service = await Location.getProviderStatusAsync()
    const isLocationServicesEnabled = service.locationServicesEnabled
    this.setState(
      {
        isLocationServicesEnabled,
      },
      callback
    )
  }

  loading = callback => {
    this.setState(
      {
        isLoading: true,
        isReady: false,
      },
      callback
    )
  }

  ready = callback => {
    this.setState(
      {
        isLoading: false,
        isReady: true,
      },
      callback
    )
  }

  refresh = async callback => {
    if (
      this.state.isLoading ||
      !this.state.isLocationServicesEnabled ||
      !this.state.isPermissionGranted
    ) {
      if (typeof callback === 'function') {
        callback()
      }
      return
    }

    this.setState({
      isReady: false,
      isLoading: true,
      location: null,
    })

    try {
      const location = await Location.getCurrentPositionAsync()
      this.setState({
        city: location.coords ? findMyCity(location.coords) : null,
        location,
      })
    } catch (error) {
      console.error(error)
    }

    this.ready(callback)
  }

  dontGrantPermission = async () => {
    await AsyncStorage.setItem('@joyride:isPermissionGranted', false)
    this.setState({ isPermissionGranted: false })
  }

  render() {
    return this.props.children(this.state)
  }
}
