import styles from './reflection.module.css'
import Header from '@/components/header/Header'
import AnswerInput from '@/components/answerInput/AnswerInput'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mortis. - B64."
}

export default function Reflection() {
  return (
      <>
        <Header/>
        <main className={styles.main}>
        <audio controls>
          <source src='/insidehim.mp3' type="audio/mp3"/>
          Your browser does not support the audio element.
        </audio>
        <AnswerInput/>
          <ul className={styles.hints}>
            <li><p>*Hint: See inside it.</p></li>
          </ul>
        </main>
      </>
    )
}
