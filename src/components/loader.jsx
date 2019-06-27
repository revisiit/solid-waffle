import React from 'react'
import Loading from '../images/loader.svg'

class Loader extends React.Component {
  render() {
    return (
      <div>
        <p>Loading....</p>
        <img src={Loading} />
      </div>
    )
  }
}

export default Loader
