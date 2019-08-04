import React from 'react'
import Loader from '../common/loader'
import Error from '../common/error'
import { getPackageId } from '../../helpers/api'
import { Link } from 'react-router-dom'
import { postCredentials } from '../../helpers/api'
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
    const slug = this.props.match.params.slug
    console.log(slug)

    getPackageId(slug)
      .then(output => {
        this.setState({ pkg: output, isloading: false })
        console.log(output)
      })
      .catch(error => this.setState({ error, isloading: false }))
  }

  render() {
    if (this.state.isloading) {
      return <Loader />
    }
    if (this.state.error) {
      return <Error />
    }
    const { pkg } = this.state
    return (
      <div>
        <h1>Name:{pkg.name}</h1>
        <h2>Description:{pkg.description}</h2>
        {/* booking for user */}
        <Link to={`/booking/${pkg._id}`}>Book Now</Link>
      </div>
    )
  }
}

export default Package
