import React from 'react'

const Context = React.createContext({})

export class MapView extends React.Component {
  constructor(props) {
    super(props)
    const api = window.google && window.google.maps
    this.state = {
      api,
      isReady: !!api,
      map: null,
    }
  }

  componentDidMount() {
    if (this.state.isReady) {
      this.setState({
        map: this.makeMap(this.state.api),
      })
      return
    }

    if (window.onGoogleMapsLibraryReady) {
      window.onGoogleMapsLibraryReadyLoad.push(this.whenReady)
      return
    }

    window.onGoogleMapsLibraryReady = () => {
      window.onGoogleMapsLibraryReadyLoad.forEach(fn => fn())
    }
    window.onGoogleMapsLibraryReadyLoad = [this.whenReady]

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = `https://maps.google.com/maps/api/js?key=${
      this.props.apiKey
    }&callback=onGoogleMapsLibraryReady`
    const x = document.getElementsByTagName('script')[0]
    x.parentNode.insertBefore(script, x)
  }

  makeMap(api) {
    const { props } = this
    return new api.Map(this.$element, {
      center: {
        lat: props.latitude,
        lng: props.longitude,
      },
      zoom: props.zoom,
    })
  }

  setupRef = $element => {
    this.$element = $element
  }

  whenReady = () => {
    const api = window.google.maps

    this.setState({
      api,
      isReady: true,
      map: this.makeMap(api),
    })

    delete window.onGoogleMapsLibraryReady
    delete window.onGoogleMapsLibraryReadyLoad
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div ref={this.setupRef} style={this.props.style}>
          {this.props.children}
        </div>
      </Context.Provider>
    )
  }
}

class TheMarker extends React.Component {
  componentDidMount() {
    this.maybeMakeMarker()
  }

  componentDidUpdate(prevProps) {
    if (!this.marker) {
      return this.maybeMakeMarker()
    }

    if (prevProps.title !== this.props.title) {
      this.marker.setLabel(this.props.title)
    }
  }

  maybeMakeMarker() {
    const { props } = this
    if (props.api && props.api.Marker && props.map) {
      this.marker = new props.api.Marker({
        map: props.map,
        position: { lat: props.latitude, lng: props.longitude },
        icon: props.selected
          ? 'https://mt.google.com/vt/icon?color=ff004C13&name=icons/spotlight/spotlight-waypoint-blue.png'
          : undefined,
        label: props.title,
      })
    }
  }

  render() {
    return null
  }
}

export const Marker = props => (
  <Context.Consumer>
    {({ api, isReady, map }) =>
      isReady ? <TheMarker {...props} api={api} map={map} /> : null
    }
  </Context.Consumer>
)
