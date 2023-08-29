import styles from './articles.module.css'
import ArticlesClient from './articlesClient'

async function getSentences() {
  // dummy data
  return [
    {
      text: '{{Das}} Mädchen ist {{ein}} Kind.',
      translation: 'The girl is a child.',
    },
    {
      text: '{{Der}} Hund ist braun.',
      translation: 'The dog is brown.',
    },
    {
      text: 'Warum ist {{die}} Frau hier?',
      translation: 'Why is the woman here?',
    },
    {
      text: 'Mach bitte {{das}} Fenster auf.',
      translation: 'Open the window, please.',
    },
    {
      text: '{{Die}} Kinder sind gerade beschäftig.',
      translation: 'The children are busy right now.',
    },
  ]
}

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
