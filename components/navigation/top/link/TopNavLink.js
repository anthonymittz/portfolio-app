import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './TopNavLink.module.sass'

export default function DrawerLink({href, noscroll, children}) {
  const router = useRouter();
  const isActive = router.asPath == href;

  return <Link href={href} passHref scroll={!noscroll}>
    <a className={`${styles.link} ${isActive ? styles.active : ''}`}>
      {children}
    </a>
  </Link>
}