import * as Storage from '../async-storage.js'
// import { Constants, Location, Permissions } from 'expo'
import { findMyCity } from '../cities/index.js'
// import { Platform } from 'react-native'
import React from 'react'

export default class LocationComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      askForPermission: this.askForPermission,
      city: null,
      dontGrantPermission: this.dontGrantPermission,
      isLoading: false,
      isLocationServicesEnabled: true,
      isPermissionGranted: false,
      isReady: false,
      location: null,
      refresh: this.refresh,
    }
  }

  async componentDidMount() {
    const isPermissionGranted = Storage.getItem(
      '@joyride:isPermissionGranted'
    )
    if (isPermissionGranted) {
      // it might be the case that we think we have permissions
      // but the user revoked them afterwards by hand
      this.askForPermission()
    } else {
      this.ready()
    }
  }

  askForPermission = async callback => {
    const { state: status } = await (navigator.permissions
      ? navigator.permissions.query({
          name: 'geolocation',
        })
      : { state: 'granted' })

    const isPermissionGranted = status === 'granted' || status === 'prompt'

    Storage.setItem(
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

  componentWillUnmount() {
    this.willUnmount = true
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

    window.navigator.geolocation.getCurrentPosition(
      location => {
        if (this.willUnmount) return

        console.log(location)

        this.setState(
          {
            city: location.coords
              ? findMyCity({
                  longitude: location.coords.longitude,
                  latitude: location.coords.latitude,
                })
              : null,
            location: location.coords
              ? {
                  coords: {
                    longitude: location.coords.longitude,
                    latitude: location.coords.latitude,
                  },
                }
              : null,
          },
          () => this.ready(callback)
        )
      },
      error => {
        if (this.willUnmount) return

        this.ready(callback)
      },
      { enableHighAccuracy: true, timeout: 10000, /* Infinity, maximumAge: 0 */ }
    )
  }

  dontGrantPermission = () => {
    Storage.setItem('@joyride:isPermissionGranted', false)
    this.setState({ isPermissionGranted: false })
  }

  render() {
    return this.props.children(this.state)
  }
}
