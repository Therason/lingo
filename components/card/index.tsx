'use client'

import { MouseEventHandler, useState, useEffect } from 'react'
import styles from './card.module.css'

function Card({
  sentence,
  type,
  onNext,
  onIncorrect,
}: {
  sentence: any
  type: string
  onNext: MouseEventHandler<HTMLButtonElement>
  onIncorrect: any
}) {
  // prepare inputs
  const text = sentence.text.split(/({{.*?}})/)

  // helper function to populate input state
  const getInitialState = () => {
    const initialState: Record<number, string> = {}
    text.forEach((s: string, i: number) => {
      if (s[0] === '{') {
        initialState[i] = ''
      }
    })
    return initialState
  }

  const [inputs, setInputs] = useState(getInitialState())

  // check inputs
  const [hasGuessed, setHasGuessed] = useState(false)
  const [isCorrect, setIsCorrect] = useState(true)
  const handleCheck = () => {
    for (let i = 0; i < text.length; i++) {
      if (text[i][0] !== '{') continue
      if (
        inputs[i].toLowerCase() !==
        text[i].replace(/{{(.*)}}/, '$1').toLowerCase()
      ) {
        setIsCorrect(false)
        onIncorrect()
        break
      }
    }
    setHasGuessed(true)
  }

  // needed to refresh everything...
  useEffect(() => {
    setInputs(getInitialState())
    setHasGuessed(false)
    setIsCorrect(true)
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
      {!hasGuessed && <button onClick={handleCheck}>check</button>}
      {hasGuessed && (
        <>
          <p>{isCorrect ? 'correct' : 'incorrect'}</p>
          <button onClick={onNext}>continue</button>
        </>
      )}
    </div>
  )
}

export { Card }
