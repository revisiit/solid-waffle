import React from 'react'
import Loader from '../common/loader'
import Error from '../common/error'
import { getCategoryId } from '../common/api'

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
    getCategoryId(id).then(output => {
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
