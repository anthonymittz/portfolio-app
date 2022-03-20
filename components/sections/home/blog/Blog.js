import Container from '../../../layout/container/Container'
import styles from './Blog.module.sass'

export default function Blog() {
  return <div className={styles.section}>
    <Container>
      <div className={styles.inner}>
        <h2>Blog</h2>
        <p>Lorem</p>
        <p>Ipsum</p>
        <p>Dolor</p>
        <p>Sit</p>
        <p>Amet</p>
      </div>
    </Container>
  </div>
}
