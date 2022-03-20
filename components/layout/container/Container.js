import styles from './Container.module.sass'

export default function Container({children}) {
  return <div className='container'>
    { children }
  </div>
}