'use client'
import styles from './articles.module.css'
import { Card } from '@/components'
import { useState } from 'react'

// i'm not really sure how to organize this stuff
export default function ArticlesClient({ sentences }: { sentences: any }) {
  const [index, setIndex] = useState(0)
  return (
    <>
      <Card
        sentence={sentences[index]}
        type='Article'
        nextCard={() => setIndex((i) => i + 1)}
      />
    </>
  )
}
