import styles from './articles.module.css'
import ArticlesClient from './articlesClient'
import prisma from '@/lib/db'

async function getSentences(query?: {
  [key: string]: string | string[] | undefined
}) {
  // parse params
  let isDifficult = false
  if (query?.difficult === 'true') isDifficult = true

  const sentences = await prisma.sentence.findMany({
    take: 3,
    where: {
      difficult: isDifficult,
      type: 'article',
    },
  })
  return sentences
}

export default async function Articles({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const data = await getSentences(searchParams)
  return (
    <main className={styles.main}>
      <header>
        <h2>Article practice</h2>
        <ArticlesClient sentences={data} />
      </header>
    </main>
  )
}
