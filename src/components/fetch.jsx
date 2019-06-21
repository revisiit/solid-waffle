import React from 'react'
import Loader from '../images/loader.svg'
import Image from '../images/logo-visit.png'

class Fetch extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      isloading: true,
    }
  }

  componentWillMount() {
    fetch('http://127.0.0.1:3000/api/v1/category/all')
      .then(res => res.json())
      .then(output => {
        this.setState({ data: output, isloading: false })
        console.log(output)
      })
  }

  render() {
    if (this.state.isloading) {
      return (
        <div>
          <p>loading....</p>
          <img src={Loader} />
        </div>
      )
    }

    return (
      <div>
        {this.state.data.map(item => (
          <h4 key={item.key}>{item._id}</h4>
        ))}
        <div>
          <p>bravo </p>
          <img src={Image} />
        </div>
      </div>
    )
  }
}

export default Fetch
