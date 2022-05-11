export type Movie = {
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

export type Data = {
  movies: Movie[]
}