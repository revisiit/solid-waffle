import React, { Component } from 'react'
import axios from 'axios'

class postform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      title: '',
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = event => {
    event.preventDefault()
    const user = {
      username: this.state.username,
      title: this.state.title,
    }
    let config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    }

    axios.post('http://127.0.0.1:3000/api/v1', user, config).then(res => {
      console.log(res)
    })
  }

  render() {
    const { username, title } = this.state
    return (
      <div>
        <form>
          <div>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <input
              type="text"
              name="title"
              value={title}
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

export default postform
