import styles from '../../styles/pages/articles/Articles.module.sass'

export default function Articles() {
  return <>
    <h1>Articles</h1>
  </>
}

Articles.getLayout = function getLayout(page) {
  return <div id={styles.page}>{page}</div>
}