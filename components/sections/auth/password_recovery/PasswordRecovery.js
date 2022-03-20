import styles from './PasswordRecovery.module.sass'

export default function PasswordRecovery() {
  return <>
    <h2>Forgot your password?</h2>
    <form action="/api/restore">
      <label htmlFor="credential">
        Username / Email
      </label>
      <input 
        tabIndex="0"
        type="text"
        name="credential"
        id="credential"
        placeholder="johndoe@mail.com"
        required
        minLength="8"
        maxLength="20" />
        <input type="submit" tabIndex="0" value='Restore' />
    </form>
  </>
}