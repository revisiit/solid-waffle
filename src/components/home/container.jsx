import React from 'react'
import Loader from '../common/loader'
import { Link } from 'react-router-dom'
import ErrorComponent from '../common/error'

class Fetch extends React.Component {
  constructor() {
    super()
    this.state = {
      pkg: [],
      isloading: true,
      error: null,
      category: [],
    }
  }

  componentWillMount() {
    fetch('http://127.0.0.1:3000/api/v1/package/all')
      .then(res => res.json())
      .then(pkg_output => {
        this.setState({ pkg: pkg_output, isloading: false })
        console.log(pkg_output)
      })
      .catch(error => this.setState({ error, isloading: false }))

    fetch('http://127.0.0.1:3000/api/v1/category/all')
      .then(res => res.json())
      .then(category_output => {
        this.setState({ category: category_output, isloading: false })
        console.log(category_output)
      })
      .catch(error => this.setState({ error, isloading: false }))
  }

  render() {
    if (this.state.isloading) {
      return <Loader />
    }
    if (this.state.error) {
      return <ErrorComponent />
    }
    const { pkg } = this.state
    const { category } = this.state
    return (
      <div>
        {pkg.map(pkg_item => (
          <div key={pkg_item._id}>
            {' '}
            <h2>
              <Link to={`/package/${pkg_item._id}`}>{pkg_item.name}</Link>
            </h2>
            <h3>{pkg_item.description}</h3>
          </div>
        ))}
        {category.map(category_item => (
          <div key={category_item._id}>
            {' '}
            <h2>
              <Link to={`/category/${category_item._id}`}>
                {category_item.name}
              </Link>
            </h2>
          </div>
        ))}
      </div>
    )
  }
}

export default Fetch
