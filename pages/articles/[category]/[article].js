import { useRouter } from 'next/router'
import styles from '../../../styles/pages/articles/Article.module.sass'

export default function Article() {
  const router = useRouter();
  const { article } = router.query;

  return <>
    <h1>Article: { article }</h1>
  </>
}

Article.getLayout = function getLayout(page) {
  return <div id={styles.page}>{page}</div>
}