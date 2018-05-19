import { list } from '../cities/index.js'
import Cities from './Cities.view.js'

Cities.defaultProps = {
  contentContainerStyle: {
    paddingBottom: 200,
  },
  from: list,
}
export default Cities

// import { getCities } from '../cities/index.js'
// import Cities from './Cities.view.js'
// import React from 'react'

// export default class CitiesLogic extends React.Component {
//   state = {
//     from: [],
//   }

//   async componentDidMount() {
//     this.setState({
//       from: await getCities(),
//     })
//   }

//   render() {
//     return (
//       <Cities
//         {...this.props}
//         {...this.state}
//         contentContainerStyle={{
//           paddingBottom: 200,
//         }}
//       />
//     )
//   }
// }
