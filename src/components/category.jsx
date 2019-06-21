import React from 'react'
import Loader from '../images/loader.svg'

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
          <h4 key={item._id}>{item.name}</h4>
        ))}
        <div>
          <p>bravo </p>
        </div>
      </div>
    )
  }
}

export default Fetch
