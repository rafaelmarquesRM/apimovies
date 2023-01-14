import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  
  h1 {
    
  }
  .movie {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 300px;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2em;
    max-width: 50%;
  }

  button {
    background-color: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 1rem;
    margin-top: 1em;
    font-size: 100%;
    transition: all 0.3s;
  }

  button:hover {
    background-color: #5848c2;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }

  .release-date {
    opacity: 0.5;
  }
`
