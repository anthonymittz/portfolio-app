import styles from './Content.module.sass'

export default function Content({children}) {
  return <main id="content" className={styles.component}>
      {children}
  </main>
}