import { Component } from 'react'
import { render } from 'react-dom'
import {
  setGlobalStyles,
  registerServiceWorker,
} from '~/utilities'
import Container from '~/styles'

setGlobalStyles()

class App extends Component {
  render() {
    return (
      <Container>
        <header>
          <img
            src={ require('./assets/images/logo.svg') }
            className='App-logo'
            alt='logo'
          />
          <h1 children='Welcome to React' />
        </header>
        <p>
          { `To get started, edit ` }
          <code children='src/App.js' />
          { ` and save to reload.` }
        </p>
      </Container>
    )
  }
}


const root = document.getElementById('root')
if (root) {
  render(<App />, root)
  registerServiceWorker()
}