import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { PostUser } from '../../helpers/api'

class SignUp extends Component {
  constructor(props) {
    super(props)
    //setiing initial state
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      password: '',
    }
  }

  changeHandler = event => {
    //getting name and value and changing the state
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = event => {
    event.preventDefault() //stops thedefault action from changing ..eg: notsubmitting the form the moment it is clicked
    const { first_name, last_name, email, password, phone } = this.state
    const user = {
      first_name,
      last_name,
      email,
      phone,
      password,
    }

    postUser(user).then(res => {
      const { entity, success } = res.data //deconstructing success

      if ((status = 200 && success == true)) {
        console.log('reg success')
        localStorage.setItem('userdetails', JSON.stringify(entity))
        this.props.history.push('/') //navigating to the home if condition is true
      } else {
        console.log('Failed', res.data)
      }
    })
  }

  render() {
    const { first_name, last_name, email, password, phone } = this.state //deconstructing all the input values
    return (
      <div>
        <form>
          <div>
            <input
              type="text"
              name="first_name"
              placeholder="firstname"
              value={first_name}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <input
              type="text"
              name="last_name"
              placeholder="lastname"
              value={last_name}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={this.changeHandler} //changing the defalut values from input values
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="phone"
              value={phone}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <button type="submit" onClick={this.submitHandler}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
