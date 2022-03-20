import Link from 'next/link'
import styles from '../styles/pages/Test.module.sass'

export default function test() {
  return <div id={styles.test_page}>
    <h2>Test Playground</h2>
    <Link href="https://google.com/" passHref >
      <a tabIndex="1">Google</a>
    </Link>
    <a href="https://yandex.ru/">Yandex</a><br />
    <a href="/">Homepage</a><br />
    <a href="#">Ref</a>
  </div>
}