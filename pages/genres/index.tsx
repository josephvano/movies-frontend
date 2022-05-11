import {NextPage}  from "next";
import Link        from "next/link";
import {useRouter} from "next/router";
import {Fragment}  from "react";
import {useApi}    from "../../lib/api";
import styles      from "./genres.module.sass";

type Genre = {
  genre_name: string,
  id: number
}

function normalizeLink(path: string) {
  if (!path) return "";

  return path.toLowerCase().replace(/\s/, '-');
}

const Genres: NextPage = () => {
  const {isLoaded, error, data: genres} = useApi<Genre[]>("genres");
  const router                          = useRouter();

  const handleClick = async (name: string) => {
    if (!name) {
      return;
    }

    await router.push(`/genres/${normalizeLink(name)}`);
  }

  if (error) {
    return (
      <div>
        <header>
          <h2 className="display-3">Genres</h2>
        </header>
        <p>There was an error loading data.</p>
        <div>
          <pre>{error.message}</pre>
        </div>
      </div>
    )
  }

  if (!isLoaded || !genres) {
    return (
      <div>
        <header>
          <h2 className="display-3">Genres</h2>
        </header>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <Fragment>
      <header>
        <h2 className="display-3">Genres</h2>
      </header>
      <main>
        <p className="lead">Listing of movie genres</p>
        <div className={styles.cards}>
          {genres.map((genre, index) => (
            <div key={index} className={`card ${styles.card} bg-info`}>
              <div
                className={`${styles.cardLink} card-body text-white`}
                onClick={() => handleClick(genre.genre_name)}
              >
                <Link href={`/genres/${normalizeLink(genre.genre_name)}`}>
                  <a className="text-white">{genre.genre_name}</a>
                </Link>
              </div>
            </div>
          ))}
          <div className="card"></div>
        </div>
      </main>
    </Fragment>
  )
}

export default Genres;
