import Link   from "next/link";
import styles from "../pages/app.module.sass";

function Menu() {
  return (
    <>
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
          <Link href="/genres">
            <a className={styles.link}>Genres</a>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Menu;