import { Container, MovieList, Movie } from './styles'
import { useState } from 'react'

function Home(){

const [movies, setMovies] = useState([])

  return(
    <Container>
      <h1>Movies</h1> 
      <MovieList>

        {movies.map(movie => {
          return (
            <Movie key={movie.id}>
              <a href="#"><img src={movie.image_url} alt="" />
              </a>
              <span>{movie.title}</span>
            </Movie>
          )
        })}

      </MovieList>
    </Container>
  )
}

export default Home