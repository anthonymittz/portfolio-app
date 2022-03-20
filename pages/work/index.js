import Container from '../../components/layout/container/Container'
import styles from '../../styles/pages/work/Work.module.sass'

export default function index() {
  return <div id={styles.work_page}>
    <Container>
      <h2>Work</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veniam ut vero.</p>
    </Container>
  </div>
}