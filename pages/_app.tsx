import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useEffect}     from "react";
import Menu            from "../components/Menu";
import styles          from './app.module.sass';

function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    typeof document !== undefined ? require("bootstrap/dist/js/bootstrap.min") : null;
  }, []);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Movies on the GO</h1>
        </div>
      </header>
      <div className={styles.container}>
        <Menu/>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
