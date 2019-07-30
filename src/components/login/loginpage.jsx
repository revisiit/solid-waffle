import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { PostCredentials } from '../../helpers/api'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    //setiing initial state
    this.state = {
      email: 'abcde@gmail.com',
      password: 'hbdfufenifnernfin',
    }
  }

  changeHandler = event => {
    //getting name and value and changing the state
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = event => {
    event.preventDefault() //stops thedefault action from changing ..eg: notsubmitting the form the moment it is clicked
    const { email, password } = this.state
    const user = {
      email,
      password,
    }

    PostCredentials(user).then(res => {
      const { isLoggedIn } = res.data //deconstructing success

      if ((status = 200 && isLoggedIn == true)) {
        console.log('reg success')
        this.props.history.push('/') //navigating to the home if condition is true
      } else {
        console.log('Failed', res.data)
      }
    })
  }

  render() {
    const { email, password } = this.state //deconstructing all the input values
    return (
      <div>
        <form>
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
            <button type="submit" onClick={this.submitHandler}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginPage
