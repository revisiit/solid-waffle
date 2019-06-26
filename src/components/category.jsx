import React from 'react'
import Loader from '../images/loader.svg'

class Fetch extends React.Component {
  constructor() {
    super()
    this.state = {
      ctg: [],
      isloading: true,
    }
  }

  componentWillMount() {
    const id = this.props.match.params.id
    fetch(`http://127.0.0.1:3000/api/v1/category/${id}`)
      .then(res => res.json())
      .then(output => {
        this.setState({ ctg: output, isloading: false })
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
    if (this.state.error) {
      retur(
        <div>
          <p>something wrong!!!!!</p>
        </div>,
      )
    }
    const { ctg } = this.state
    return (
      <div>
        <h2>{ctg._id}</h2>
        <h3>{ctg.name}</h3>
      </div>
    )
  }
}

export default Fetch
