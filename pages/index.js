import { testApi } from '$libs/api'
import { useEffect } from 'react'
import styles from '../styles/pages/Home.module.sass'

export default function Home() {

  useEffect(() => {
    testApi()
      .then(() => console.log('[Homepage] Done'))
      .catch(() => console.error('[Homepage] Error'));
  }, []);

  return <div id={styles.page}>
    <h1>Homepage</h1>
  </div>
}