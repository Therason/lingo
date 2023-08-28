import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <Link href='/articles'>Practice articles</Link>
      </section>
    </main>
  )
}
