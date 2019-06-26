import React from 'react'
import Loader from '../images/loader.svg'

class Package extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      pkg: null,
      isloading: true,
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id

    fetch(`http://127.0.0.1:3000/api/v1/package/${id}`)
      .then(res => res.json())
      .then(output => {
        this.setState({ pkg: output, isloading: false })
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
    if (this.state.error) {
      return (
        <div>
          <p>something wrong!!!!!</p>
        </div>
      )
    }
    const { pkg } = this.state
    return (
      <div>
        <h1>Name:{pkg.name}</h1>
      </div>
    )
  }
}

export default Package
