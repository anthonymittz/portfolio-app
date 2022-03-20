import { useAppState, useAppDispatcher } from '../../../../context/app/hooks'
import styles from './ToggleButton.module.sass'

export default function ToggleButton() {
  const {drawerVisible} = useAppState();
  const {drawer} = useAppDispatcher();

  return <button tabIndex="1"
    className={`${styles.button} ${drawerVisible ? styles.open : ''}`}
    onClick={drawer.toggle}>
      <div className={styles.burger}></div>
  </button>
}