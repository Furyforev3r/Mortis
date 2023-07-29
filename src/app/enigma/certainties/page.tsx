import styles from './reflection.module.css'
import Header from '@/components/header/Header'
import AnswerInput from '@/components/answerInput/AnswerInput'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "35.791756, 14.452529"
}

export default function Reflection() {
  return (
      <>
        <Header/>
        <main className={styles.main}>
          <audio controls>
            <source src='/hahaha.mp3' type="audio/mp3"/>
            Your browser does not support the audio element.
          </audio>
          <AnswerInput/>
          <ul className={styles.hints}>
            <li><p>*Hint: The knights of that place.</p></li>
            <li><p>*Hint: The obligation of one of the points.</p></li>
          </ul>
        </main>
      </>
    )
}
