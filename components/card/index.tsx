'use client'

import { MouseEventHandler, useState, useEffect } from 'react'
import styles from './card.module.css'

function Card({
  sentence,
  type,
  nextCard,
}: {
  sentence: any
  type: string
  nextCard: MouseEventHandler<HTMLButtonElement>
}) {
  // init
  const text = sentence.text.split(/({{.*?}})/)
  const initialState: Record<number, string> = {}
  text.forEach((s: string, i: number) => {
    if (s[0] === '{') {
      initialState[i] = ''
    }
  })
  const [inputs, setInputs] = useState<Record<number, string>>({
    ...initialState,
  })

  // needed to refresh the inputs state...
  useEffect(() => {
    const initialState: Record<number, string> = {}
    text.forEach((s: string, i: number) => {
      if (s[0] === '{') {
        initialState[i] = ''
      }
    })
    setInputs({ ...initialState })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentence.text])

  return (
    <div className={styles.container}>
      <h3>{type}</h3>
      <p>
        {text.map((word: string, i: number) => {
          if (word[0] === '{') {
            return (
              <input
                key={i}
                value={inputs[i]}
                onChange={(e) => {
                  setInputs({ ...inputs, [i]: e.target.value })
                }}
              ></input>
            )
          }
          return <span key={i}>{word}</span>
        })}
      </p>
      <p className={styles.translation}>{sentence.translation}</p>
      <button onClick={nextCard}>continue</button>
    </div>
  )
}

export { Card }
