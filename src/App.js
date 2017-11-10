import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import 'bulma/css/bulma.css'

import routes from './routes'


const App = () => (
  <div>
    <header>
      <Link className="button is-primary" to="/">Home</Link>
      <Link className="button is-primary" to="/products">Products</Link>

    </header>
    <Switch>
      {routes.map(route => (
        <Route key={route.path} { ...route } />
      ))}
    </Switch>
    <footer>
      I`m the footer, I am on every page.
        </footer>
  </div>
)

export default App
