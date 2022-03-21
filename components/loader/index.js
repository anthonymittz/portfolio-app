import { useState, useEffect } from 'react';
import styles from './Loader.module.sass'

export default function Loader() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timeout = setTimeout(() => setLoaded(true), 3500);
    return () => clearTimeout(timeout);
  });

  return loaded 
  ? null 
  : <div className={styles.container}>
      <div className={styles.ripple}>
        <div />
        <div />
      </div>
    </div>;
}