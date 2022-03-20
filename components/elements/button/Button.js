import styles from './Button.module.sass'

export default function Button({text, children, className, id}) {
  return <button className={className} id={id}>
    {text || children || 'Button'}
  </button>
}