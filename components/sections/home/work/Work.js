import Container from '../../../layout/container/Container'
import styles from './Work.module.sass'

export default function Work() {
  return <div className={styles.section} id="work">
    <Container>
      <div className={styles.inner}>
        <h2>Work</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </Container>
  </div>
}
