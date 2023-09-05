import styles from './articles.module.css'
import ArticlesClient from './articlesClient'
import prisma from '@/lib/db'

async function getSentences() {
  const sentences = await prisma.sentence.findMany({
    take: 5,
  })
  return sentences
}
//

export default async function Articles() {
  const data = await getSentences()
  return (
    <main className={styles.main}>
      <header>
        <h2>Noun article practice</h2>
        <ArticlesClient sentences={data} />
      </header>
    </main>
  )
}
