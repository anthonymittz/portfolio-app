import Container from '../container/Container'
import styles from './Footer.module.sass'

export default function Footer({children}) {
  return <footer className={styles.component}>
    <Container>
      [FOOTER]
      {children}
    </Container>  
  </footer>
}