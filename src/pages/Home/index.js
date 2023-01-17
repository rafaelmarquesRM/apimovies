import { Container, MovieList, Movie } from './styles'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home(){

const [movies, setMovies] = useState([])
const image_path = 'https://image.tmdb.org/t/p/w500'

useEffect(() => {
  // consumir a api
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => setMovies(data.results))

}, [])

  return(
    <Container>
      <h1>Movies</h1> 
      <MovieList>
        {movies.map(movie => {
          return (
            <Movie key={movie.id}>

              <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt="" /></Link>      
              <span>{movie.title}</span>
            </Movie>
          )
        })}
      </MovieList>
    </Container>
  )
}

export default Home