import React, { Component } from 'react'
// import history from './history'
import { withRouter } from 'react-router-dom'

import Home from '../home'
import { PostUser } from '../../helpers/postform'

class Postform extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: 'aravind',
      last_name: 'krishnan',
      email: 'abcde@gmail.com',
      phone: '987654321',
      password: 'hbdfufenifnernfin',
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = event => {
    event.preventDefault()
    const { history } = this.props
    console.log(history)
    const { first_name, last_name, email, password, phone } = this.state
    const user = {
      first_name,
      last_name,
      email,
      phone,
      password,
    }

    PostUser(user).then(res => {
      const output = res.data.success

      console.log(output)
      if ((status = 200 && output == true)) {
        console.log('reg success')
        // console.log(props.history)
        // this.props.history.push('/')
      } else {
        console.log('faile')
      }
    })
  }
  //   const response = await axios({
  //     method: 'POST',
  //     url: 'http://localhost:3000/api/v1/user',
  //     data: user,
  //   }).then(res => {
  //     const output = res.data.success
  //     // console.log(output)

  //     if ((status = 200 && output == true)) {
  //       console.log('reg success')
  //     } else {
  //       console.log('faile')
  //     }
  //   })

  // console.log(response.body)

  render() {
    const { first_name, last_name, email, password, phone } = this.state

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
              onChange={this.changeHandler}
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

export default Postform
