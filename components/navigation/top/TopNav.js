import Link from './link/TopNavLink'
import styles from './TopNav.module.sass'

export default function TopNav() {
  return <nav className={styles.component}>
    <Link href="/#about">About</Link>
    <Link href="/#work">Work</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/admin">Admin</Link>
    <Link href="/auth">Auth</Link>
  </nav>
}