import { useRouter } from 'next/router'
import styles from '../../styles/pages/articles/Category.module.sass'

export default function Category({}) {
  const router = useRouter();
  const { category } = router.query;
  
  return <>
    <h1>Category: { category }</h1>
  </>
}

Category.getLayout = function getLayout(page) {
  return <div id={styles.page}>{page}</div>
}