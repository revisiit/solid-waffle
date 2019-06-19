import React from 'react'

class Fetch extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(output => {
        this.setState({ data: output })
        console.log(this.state.data)
      })
  }

  render() {
    return (
      <div>
        <div>
          <p>bravo </p>
        </div>
      </div>
    )
  }
}

export default Fetch
