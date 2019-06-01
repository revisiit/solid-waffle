import React, { Component } from 'react';
import styles from './app.css';

class App extends Component {
  render() {
    return (
      <div className={styles.hello}>
        Hello World.
        <p className={styles.bold}>ReVisiit</p>
      </div>
    );
  }
}

export default App;
