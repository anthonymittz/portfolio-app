import { useRouter } from 'next/router'
import styles from '../../styles/pages/articles/Category.module.sass'

export default function Category({}) {
  const router = useRouter();
  const { category } = router.query;
  
  return <div id={styles.page}>
    <h1>Category: { category }</h1>
  </div>
}