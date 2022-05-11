import {NextPage}  from "next";
import {useRouter} from "next/router";
import {useApi}    from "../../lib/api";
import {Movie}     from "../../types";
import styles      from "./movie.module.sass";

const Movie: NextPage = () => {
  const router = useRouter();
  const id     = router.query["id"];

  let url: string = "";

  if (id) {
    url = `movies/${id}`
  }

  const {isLoaded, error, data: movie} = useApi<Movie>(url);

  if (!isLoaded || !movie) {
    return (
      <>
        <div className="placeholder col-12 bg-dark p-2">
          Loading...
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <p>There was an error loading the movie.</p>
        <div>
          <pre>
            {error.message}
          </pre>
        </div>
      </>
    )
  }

  return (
    <>
      <header>
        <h2 className="display-3">
          {movie.title}
        </h2>
      </header>
      <div className={styles.meta}>
        <div className={styles.mpaaRatingContainer}>
          <label className={styles.mpaaRatingLabel}>Rating</label>
          <span className={styles.mpaaRating}>
            {movie.mpaa_rating}
          </span>
        </div>
        <div className={styles.genres}>
          {movie?.genres?.map((genre, index) => (
            <div className="badge rounded-pill bg-primary" key={index}>{genre}</div>))}
        </div>
      </div>
      <main className={styles.main}>
        <p className="lead">{movie.description}</p>
        <div>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Year</td>
                <td>{movie.year}</td>
              </tr>
              <tr>
                <td>Runtime</td>
                <td>{movie.runtime} minutes</td>
              </tr>
              <tr>
                <td>Released</td>
                <td>{movie.release_date.replace(/T.*/,'')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default Movie;