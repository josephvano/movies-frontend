import {NextPage}  from "next";
import {useRouter} from "next/router";

const GenreMoviePage: NextPage = () => {
  const router = useRouter();
  const name   = router.query["name"] || "";

  if (!name) {
    return (
      <>
        <header>
          <h2 className="display-3">Movies</h2>
        </header>
      </>
    )
  }

  return (
    <>
      <header>
        <h2 className="display-3">Movies</h2>
      </header>
    </>
  )
}

export default GenreMoviePage;