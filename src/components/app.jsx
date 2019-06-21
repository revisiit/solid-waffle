import React, { Component } from 'react'
import Logo from './Logo'
import Home from './home'

import styles from './app.css'

class App extends Component {
  render() {
    return (
      <div className={styles.hello}>
        Hello World.
        <p className={styles.bold}>ReVisiit</p>
        Handing over to Aravind.
        <Home />
      </div>
    )
  }
}

export default App
