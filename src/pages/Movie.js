import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
function Movie() {
  const params = useParams()
  const [movieDetails, setMovieDetails] = useState([])
  const {title, time, genres} = movieDetails
  const movieId = params.id
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then((resp) => resp.json())
    .then((data) => {
      setMovieDetails(data)
      
    })
  }, [movieId])
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{title}</h1>
        <p>{time}</p>
        {/* {genres.map((genre) => {
          <span key={genre}>{genre}</span>
        })} */}
      </main>
    </>
  ); 
};

export default Movie;
