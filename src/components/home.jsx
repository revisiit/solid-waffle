import React from 'react'
import Loader from '../images/loader.svg'
import Image from '../images/logo-visit.png'

class Fetch extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      isloading: true,
      error: null,
    }
  }

  componentWillMount() {
    fetch('http://127.0.0.1:3000/api/v1/package/all')
      .then(res => res.json())
      .then(output => {
        this.setState({ data: output, isloading: false })
        console.log(output)
      })
      .catch(error => this.setState({ error, isloading: false }))
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
          <div key={item._id}>
            {' '}
            <h4>{item.name}</h4>
            <h3>{item.description}</h3>
          </div>
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
