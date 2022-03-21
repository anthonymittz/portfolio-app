import { useRouter } from 'next/router'
import styles from '../../../styles/pages/articles/Article.module.sass'

export default function Article() {
  const router = useRouter();
  const { article } = router.query;

  return <div id={styles.page}>
    <h1>Article: { article }</h1>
  </div>
}