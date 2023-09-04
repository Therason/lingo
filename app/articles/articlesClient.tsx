'use client'
import styles from './articles.module.css'
import { Card } from '@/components'
import { useState, useRef } from 'react'
import type { Sentence } from '@prisma/client'

// i'm not really sure how to organize this stuff
export default function ArticlesClient({
  sentences,
}: {
  sentences: Sentence[]
}) {
  const [index, setIndex] = useState(0)
  const [sentence, setSentence] = useState(sentences[0])
  const correct = useRef(sentences.length)

  // card handler functions
  const handleIncorrect = () => {
    correct.current--
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    if (index < sentences.length) {
      setSentence(sentences[index + 1])
      setIndex((i) => i + 1)
      return
    }
  }

  if (index < sentences.length) {
    return (
      <>
        <Card
          sentence={sentence}
          type='Article'
          onNext={handleNext}
          onIncorrect={handleIncorrect}
        />
      </>
    )
  } else {
    return (
      <>
        <h3>Score:</h3>
        <p>
          {correct.current}/{sentences.length}
        </p>
      </>
    )
  }
}
