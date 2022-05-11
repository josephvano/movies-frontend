import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Link            from "next/link";
import styles          from './app.module.sass';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Movies on the GO</h1>
        </div>
      </header>
      <nav className={`${styles.container} ${styles.nav}`}>
        <div className={styles.navItem}>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/movies">
            <a className={styles.link}>Movies</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/categories">
            <a className={styles.link}>Categories</a>
          </Link>
        </div>
      </nav>
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
