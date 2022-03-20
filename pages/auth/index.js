import Link from '../../components/navigation/link/Link'
import styles from '../../styles/pages/auth/Auth.module.sass'

export default function AuthPage() {
  return <div id={styles.auth_page}>
    <h2>Authentication</h2>
    <form action="/api/auth" method="POST">
      <label htmlFor="username">
        Username
      </label>
      <input 
        tabIndex="0"
        type="text"
        name="username"
        id="username"
        placeholder="Username..."
        required
        minLength="8"
        maxLength="20" />
      <label htmlFor="password">
        Password
      </label>
      <input 
        tabIndex="0"
        type="password" 
        name="password" 
        id="password" 
        placeholder="Password..." 
        required 
        minLength="12" 
        maxLength="32"
        />
      <input type="submit" tabIndex="0" value='Sign in' />
      <Link href="/auth/recovery">Forgot your password?</Link>
    </form>
  </div>
}