//if is loggedin ==true: booking will happen else link to signup page
//here method is post : userdetails and packagedetails
import React, { Component } from 'react'
import { postBookingDetails } from '../../helpers/api'
import { withRouter } from 'react-router-dom'

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
    if (userdet == undefined || userdet == null) {
      this.props.history.push('/login')
    }
  }

  submitHandler = event => {
    event.preventDefault()
    const { userId, packageId } = this.state
    const bookingDetails = {
      userId,
      packageId,
    }
    console.log('hi')
    postBookingDetails(bookingDetails).then(res => {
      console.log(res.data)
    })
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.submitHandler}>
          Book Now
        </button>
      </div>
    )
  }
}

export default BookingPage
