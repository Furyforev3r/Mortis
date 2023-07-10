"use client";

import styles from './answerInput.module.css'

export default function AnswerInput() {
  return (
    <form onSubmit={(e) => {e.preventDefault()}}className={styles.form}>
      <input type="text" placeholder="Answer..."/>
      <input type="submit" value="Try"/>
    </form>
    )
}
