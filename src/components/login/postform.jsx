import React, { Component } from 'react'
import axios from 'axios'

class Postform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: 'akkkkkk',
      last_name: 'sdfsdfsd',
      email: 'aksucks@gmail.com',
      phone: '9876543210',
      password: 'akakakakak',
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = async event => {
    event.preventDefault()
    const { first_name, last_name, email, password, phone } = this.state
    const user = {
      first_name,
      last_name,
      email,
      phone,
      password,
    }

    const response = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/user',
      data: user,
    })
    //   const { status, data } = response
    //   if (status == 200 && data && data.success) {
    //     console.log('Reg suc')
    //   }
    // }
  }
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
