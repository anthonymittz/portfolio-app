import styles from './Loader.module.sass'

export default function Loader() {
  return <div className={styles.container}>
    <div className={styles.ripple}>
      <div />
      <div />
    </div>
  </div>
}