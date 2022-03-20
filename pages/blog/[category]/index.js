import { useRouter } from 'next/router'
import styles from '../../../styles/pages/blog/Category.module.sass'

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query

  return <div id={styles.blog_category_page}>
    <h2>Category: {category}</h2>
  </div>
}