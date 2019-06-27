import React from 'react'
import Loader from './loader'
import Error from './error'

class Fetch extends React.Component {
  constructor() {
    super()
    this.state = {
      category: [],
      isloading: true,
    }
  }

  componentWillMount() {
    const id = this.props.match.params.id
    fetch(`http://127.0.0.1:3000/api/v1/category/${id}`)
      .then(res => res.json())
      .then(output => {
        this.setState({ category: output, isloading: false })
        console.log(output)
      })
  }

  render() {
    if (this.state.isloading) {
      return (
        <div>
          <Loader />
        </div>
      )
    }
    if (this.state.error) {
      retur(
        <div>
          <Error />
        </div>,
      )
    }
    const { category } = this.state
    return (
      <div>
        <h3>{category.name}</h3>
      </div>
    )
  }
}

export default Fetch
