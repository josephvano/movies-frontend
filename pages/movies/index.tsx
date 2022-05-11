import {NextPage} from "next";
import {
  Fragment,
  useEffect,
  useState
}                 from "react";

const BASE = `http://localhost:4000`

const apiUrl = (path: string): string => {
  return `${BASE}/v1/${path}`
}

type Movie = {
  id: number,
  title: string,
  description: string,
  genres: string[],
  mpaa_rating: string,
  runtime: number,
  rating: number,
  year: number,
  release_date: string,
}

type Data = {
  movies: Movie[]
}

const Movies: NextPage = () => {
  const url                     = apiUrl('movies');
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies]     = useState<Movie[]>([]);
  const [error, setError]       = useState<Error | null>(null);

  useEffect(() => {
    if (isLoaded) {
      return;
    }

    const makeRequest = async () => {
      const response = await fetch(url);

      setIsLoaded(true)

      const status = response.status;

      if(200 !== status){
        setError(new Error(`${status}: ${response.statusText}`))
        return;
      }

      const data: Data = await response.json() as Data;

      //TODO: remove or proper log
      console.log(data);

      setMovies(data.movies)
    }

    makeRequest();
  }, [url, isLoaded]);

  if (error) {
    return (
      <>
        <p>Error loading data</p>
        <pre>{error.message}</pre>
      </>)
  }

  if (!isLoaded) {
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