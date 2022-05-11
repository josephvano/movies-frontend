import {NextPage} from "next";
import {Fragment} from "react";
import {useApi}   from "../../lib/api";
import {Movie}    from "../../types";

const Movies: NextPage = () => {
  const {isLoaded, error, data: movies} = useApi<Movie[]>('movies')

  if (error) {
    return (
      <>
        <p>Error loading data</p>
        <pre>{error.message}</pre>
      </>)
  }

  if (!isLoaded || !movies) {
    return (
      <Fragment>
        <h2>Movies</h2>
        <div>
          Loading...
        </div>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <h2>Movies</h2>
      <div>
        <ul>
          {movies.map((item: Movie, i: number) => <li key={i}>{item.title}</li>)}
        </ul>
      </div>
    </Fragment>
  )
}

export default Movies;