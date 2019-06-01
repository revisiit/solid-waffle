import React from 'react';
import styles from './index.css';
import Image from '../../images/logo-visit.png';

const Logo = () => (
  <div className={styles.container}>
    <img src={Image} className={styles.image} />
  </div>
);

export default Logo;
