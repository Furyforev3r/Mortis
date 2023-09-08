import styles from './depenumbra.module.css'
import Header from '@/components/header/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ilha de Penumbra."
}

export default function Penumbra() {
  return (
      <>
        <Header/>
        <main className={styles.main}>
          <ul className={styles.hints}>
            <li><p>A Ilha de Penumbra é uma pequena ilha situada a cerca de 300 quilômetros da costa do Rio de Janeiro. Ela abriga um modesto vilarejo que serve de lar para seus 25-30 habitantes. A ilha é famosa por sua Praia de Penumbra, que atrai turistas em busca de uma experiência tranquila e autêntica.</p></li>
          </ul>
        </main>
      </>
    )
}
