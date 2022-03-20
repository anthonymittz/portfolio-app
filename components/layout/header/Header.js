import useScrollObserver from '../../../hooks/useScrollObserver'
import { useAppState } from '../../../context/app/hooks'
import Container from '../container/Container'
import Logotype from '../../elements/logotype/Logotype'
import TopNav from '../../navigation/top/TopNav'
import ToggleButton from '../../navigation/drawer/toggle/ToggleButton'
import Drawer from '../../navigation/drawer/Drawer'
import styles from './Header.module.sass'

export default function Header() {
  const { drawerVisible } = useAppState();
  const scrolled = useScrollObserver(80);

  return <header className={`${styles.component} ${drawerVisible ? '' : scrolled ? '' : styles.transparent}`}>
    <Container>
      <div className={styles.inner}>
        <div className={styles.mobile_navigation}>
          <ToggleButton />
        </div>
        <div className={styles.logo} id="logotype">
          <Logotype title='A'/>
        </div>
        <div className={styles.desktop_navigation}>
          <TopNav />
        </div>
      </div>
    </Container>
    <Drawer transparent={scrolled} />
  </header>
}

function addScrollListener() {
  window.addEventListener('scroll', )
}