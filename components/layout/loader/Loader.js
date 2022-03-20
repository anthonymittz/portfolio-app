import styles from './Loader.module.sass'

export default function Loader() {
  return <div id="welcome_loader" className={styles.loader}>
    Loading...
  </div>
}