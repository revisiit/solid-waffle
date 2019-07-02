import React from 'react'
import Loader from '../common/loader'
import Error from '../common/error'
import { getPackageId } from '../../helpers/api'
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

    getPackageId(id)
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
        <h3>Duration:{pkg.duration}</h3>
        {pkg.conditions.map(item => (
          <h4>condition:{item}</h4>
        ))}
      </div>
    )
  }
}

export default Package
