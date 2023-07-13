import styles from './doubt.module.css'
import Header from '@/components/header/Header'
import AnswerInput from '@/components/answerInput/AnswerInput'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mortis. - it's so dark in here."
}

export default function Doubt() {
  return (
      <>
        <Header/>
        <main className={styles.main}>
          <img
            src="/doubt.jpg"
            alt="?"
            className={styles.image}
          />
          <AnswerInput/>
          <ul className={styles.hints}>
            <li><p>*Hint: Just a simple tweak.</p></li>
          </ul> 
        </main>
      </>
    )
}
