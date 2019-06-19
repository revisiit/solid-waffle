import React, { Component } from 'react'
import Logo from './Logo'

import styles from './app.css'
import Fetch from './fetch'

class App extends Component {
  render() {
    return (
      <div className={styles.hello}>
        Hello World.
        <p className={styles.bold}>ReVisiit</p>
        Handing over to Aravind.
        <Fetch />
      </div>
    )
  }
}

export default App
