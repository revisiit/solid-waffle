import React, { Component } from 'react';
import Logo from './Logo';

import styles from './app.css';

class App extends Component {
  render() {
    return (
      <div className={styles.hello}>
        Hello World.
        <p className={styles.bold}>ReVisiit</p>
        sdfadsf ads fdfadf
        <Logo />
      </div>
    );
  }
}

export default App;
