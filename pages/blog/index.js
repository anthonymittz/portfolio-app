import { useAppState } from '../../context/app/hooks'
import Container from '../../components/layout/container/Container'
import styles from '../../styles/pages/blog/Blog.module.sass'

export default function BlogPage() {
  const { blog } = useAppState();

  return <div id={styles.blog_page}>
    <Container>
      <h2>My Blog</h2>
      {blog.isFetched ? 
        blog.categories.map(c => <section key={c.id}>{c.name}</section>) : 
        <p>Fetching...</p>
      }
    </Container>
  </div>
}