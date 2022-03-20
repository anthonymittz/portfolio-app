import NavLink from 'next/link'
import styles from './Link.module.sass'

export default function Link({href, className, id, children}) {
  return <NavLink href={href} passHref>
    <a tabIndex='0' className={className} id={id}>
      {children}
    </a>
  </NavLink>
}