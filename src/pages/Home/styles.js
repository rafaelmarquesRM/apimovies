import styled from "styled-components";

export const Container = styled.div `
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
`

export const MovieList = styled.ul `
 {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 1.5rem;
    margin-top: 1rem;
  }
`

export const Movie = styled.li `
 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    border-radius: 1rem;
    margin-bottom: 1rem;
    width: 200px;
  }
  span {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  a {
    transition: 0.3s ;
  }

  a:hover {
    transform: scale(1.1);
  }
`