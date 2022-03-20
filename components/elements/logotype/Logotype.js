import Link from 'next/link'
import styles from './Logotype.module.sass'

export default function Logotype({title = "Application", children}) {
  return <Link href="/">
    {title || children}
  </Link>
}