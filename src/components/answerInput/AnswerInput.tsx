"use client";

import styles from './answerInput.module.css'
import toast, { Toaster } from 'react-hot-toast'

const errorNotify = () => toast.error("Wrong answer!")

export default function AnswerInput() {
  return (
    <>
      <Toaster position='top-right' toastOptions={{ duration: 1000, style: { background: '#333', color: '#fff' } }}/>
      <form onSubmit={(e) => {
        e.preventDefault();
        errorNotify()
      }} className={styles.form}>
        <input type="text" placeholder="Answer..."/>
        <input type="submit" value="Try"/>
      </form>
    </>
    )
}
