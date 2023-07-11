"use client";

import { FormEvent, useState } from 'react';
import styles from './answerInput.module.css'
import toast, { Toaster } from 'react-hot-toast'
import Enigmas, { EnigmaInterface } from './Enigmas';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

const errorNotify = () => toast.error("Wrong answer!")
export default function AnswerInput() {
  const [Answer, setAnswer] = useState("")
  const router: AppRouterInstance = useRouter()


  function Verify(e: FormEvent<HTMLFormElement>, answerSent: string) {
    e.preventDefault()
    const filtered: Array<EnigmaInterface> = Enigmas.filter((Enigma: EnigmaInterface) => Enigma.answer == answerSent)

    if (filtered.length > 0) {
      router.push("enigma/"+filtered[0].nextUrl)
    } else {
      errorNotify()
    }
  }

  return (
    <>
      <Toaster position='top-right' toastOptions={{ duration: 1000, style: { background: '#333', color: '#fff' } }}/>
      <form onSubmit={(e) => {
        Verify(e, Answer)
      }} className={styles.form}>
        <input type="text" placeholder="Answer..." onChange={(e) => setAnswer(e.target.value)}/>
        <input type="submit" value="Try"/>
      </form>
    </>
    )
}
