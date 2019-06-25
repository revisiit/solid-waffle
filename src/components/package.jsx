import React from 'react'
import Loader from '../images/loader.svg'

class Package extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = [
      {
        data: null,
        isloading: true,
      },
    ]
  }

  componentDidMount() {
    const id = this.props.match.params.id
    fetch(`http://127.0.0.1:3000/api/v1/package/${id}`)
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
    if (this.state.error) {
      return (
        <div>
          <p>something wrong!!!!!</p>
        </div>
      )
    }
    return (
      <div>
        <p>Hello</p>
      </div>
    )
  }
}

export default Package
