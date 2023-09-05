import Link from 'next/link'
import styles from './nav.module.css'

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href='/'>Lingo</Link>
    </nav>
  )
}

export { Nav }
