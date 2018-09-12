import styled from 'styled-components'
import { keyframes } from './utilities'

export default styled.div`

  text-align: center;
  
  img {
    animation: ${ keyframes.spin } infinite 20s linear;
    height: 80px;
  }

  header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  h1 {
    font-size: 1.5em;
  }

  p {
    font-size: large;
  }

`