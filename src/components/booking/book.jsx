//if is loggedin ==true: booking will happen else link to signup page
//here method is post : userdetails and packagedetails
import React, { Component } from 'react'

class BookingPage extends Component {
  constructor(props) {
    super(props)
    //setiing initial state
    this.state = {
      packageId: '',
      userId: '',
    }
  }

  componentDidMount() {
    const userdet = localStorage.getItem('userdetails')
    const userid = JSON.parse(userdet)
    const packageid = this.props.match.params

    this.setState({
      userId: userid._id,
      packageId: packageid.id,
    })
  }
  render() {
    const { userId, packageId } = this.state
    const bookingDetails = {
      userId,
      packageId,
    }

    return <div>hello</div>
  }
}

export default BookingPage
