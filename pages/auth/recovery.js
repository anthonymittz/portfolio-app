import PasswordRecovery from '../../components/sections/auth/password_recovery/PasswordRecovery'
import Report from '../../components/sections/auth/report/Report'
import styles from '../../styles/pages/auth/Recovery.module.sass'

export default function RecoveryPage() {
  return <div id={styles.auth_recovery_page}>
    <PasswordRecovery />
    <Report />
  </div>
}