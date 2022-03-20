import Container from '../../../layout/container/Container'
import styles from './Contacts.module.sass'

export default function Contacts() {
  return <div className={styles.section} id="contacts">
    <Container>
      <div className={styles.inner}>
        <h2>Contacts</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
    </Container>
  </div>
}
