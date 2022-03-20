import { useAppState, useAppDispatcher } from '../../../context/app/hooks'
import DrawerLink from './link/DrawerLink'
import styles from './Drawer.module.sass'

export default function Drawer() {
  const {drawerVisible} = useAppState();
  const {drawer} = useAppDispatcher();

  return <aside className={`${styles.component} ${drawerVisible ? styles.open : ''}`}>
    <div className={styles.backdrop} onClick={drawer.close}></div>
    <nav className={styles.navigation}>
      <DrawerLink href="/">Homepage</DrawerLink>
      <DrawerLink href="/blog">Blog</DrawerLink>
      <DrawerLink href="/admin">Admin</DrawerLink>
      <DrawerLink href="/auth">Auth</DrawerLink>
      <DrawerLink href="/test">Test</DrawerLink>
      <DrawerLink href="/404">Error</DrawerLink>
    </nav>
  </aside>
}

