import React from 'react'
import Loader from '../common/loader'
import Error from '../common/error'

class Category extends React.Component {
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
      return <Loader />
    }
    if (this.state.error) {
      return <Error />
    }
    const { category } = this.state
    return (
      <div>
        <h3>{category.name}</h3>
      </div>
    )
  }
}

export default Category
