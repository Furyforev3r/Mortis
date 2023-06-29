import Image from 'next/image'
import styles from './page.module.css'
import Texts from './texts'

export default function Home() {
  const RandomText = Texts[Math.floor(Math.random() * Texts.length)]

  return (
      <main className={styles.main}>
        <div>
          <a href="https://github.com/furyforev3r"><h1>{RandomText}</h1></a>
        </div>
      </main> 
    )
}
