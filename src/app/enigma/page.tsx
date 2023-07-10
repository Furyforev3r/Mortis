import styles from './enigma.module.css'
import Header from '@/components/header/Header'
import AnswerInput from '@/components/answerInput/AnswerInput'

export default function Enigma() {

  return (
      <>
        <Header/>
        <main className={styles.main}>
          <h1>.. / -. . . -.. / -.-- --- ..- / .- --. .- .. -. .-.-.-</h1>
          <AnswerInput/>
        </main>
      </>
    )
}
