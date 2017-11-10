import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import configureStore from './state/store'
import './index.scss'
import App from './App'

const reduxStore = configureStore(window.REDUX_INITIAL_DATA)

const RootHtml = () => (
  <ReduxProvider store={reduxStore}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>
)

render(<RootHtml />, document.querySelector('#app'))
