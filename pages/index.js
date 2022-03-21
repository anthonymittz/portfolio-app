import styles from '../styles/pages/Home.module.sass'

export default function Home() {
  return <>
    <h1>Homepage</h1>
  </>
}

Home.getLayout = page => <div id={styles.page}>{page}</div>;