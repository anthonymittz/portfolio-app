import Container from '../../../layout/container/Container'
import Button from '../../../elements/button/Button'
import Link from '../../../navigation/link/Link'
import styles from './Hero.module.sass'

export default function Hero() {
  return <div className={styles.section}>
    <Container>
      <div className={styles.inner} id="hero">
        <small> Development | UI/UX</small>
        <h1>Exploring the World of Web Design</h1>
        <p>Hi! I'm Anthony. I like to design and to build web applications with function and aesthetics in mind.</p>
        <Link href="/#work" className={styles.primary_btn}>See my work</Link>
        <Link href="/#about" className={styles.secondary_btn}>About me</Link>
      </div>
    </Container>
  </div>
}
