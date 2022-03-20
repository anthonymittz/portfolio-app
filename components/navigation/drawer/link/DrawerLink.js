import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppDispatcher } from '../../../../context/app/hooks'
import styles from './DrawerLink.module.sass'

export default function DrawerLink({href, children}) {
  const router = useRouter();
  const {drawer} = useAppDispatcher();
  const isActive = router.asPath == href;

  return <Link href={href}>
    <a 
      className={`${styles.link} ${isActive ? styles.active : ''}`}
      onClick={drawer.close}
      onMouseLeave={() => console.log('Mouse!')}
    >
      {children}
    </a>
  </Link>
}