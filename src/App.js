import { Link, Route, Switch } from 'react-router-dom'
import routes from './routes'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>

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
