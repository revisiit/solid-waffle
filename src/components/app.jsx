import React, { Component } from 'react'
import Logo from './Logo'
import Home from './home'
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'

import styles from './app.css'

class App extends Component {
  render() {
    return (
      <div className={styles.hello}>
        Hello World.
        <p className={styles.bold}>ReVisiit</p>
        Handing over to Aravind.
      </div>
    )
  }
}

export default App
