import styles from './enigma.module.css'
import Header from '@/components/header/Header'
import AnswerInput from '@/components/answerInput/AnswerInput'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mortis. - Samuel Morse, 1835."
}

export default function Enigma() {
  return (
      <>
        <Header/>
        <main className={styles.main}>
          <p className={styles.titleEnigma}>.. ..-. / -. --- - .... .. -. --. / -- .- -.- . ... / ... . -. ... .</p>
          <AnswerInput/>
          <ul className={styles.hints}>
            <li><p>*Hint: Put the answers all together, in lowercase and without accentuation.</p></li>
            <li><p>*Hint: Some hints may be in the page name, current url or other places you don't think, but not always.</p></li>
          </ul>
        </main>
      </>
    )
}
