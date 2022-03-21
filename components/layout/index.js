import styles from './layout.module.sass'

export default function Layout({ children }) {
  return <div id={styles.app_layout}>
    { children }
  </div>
}