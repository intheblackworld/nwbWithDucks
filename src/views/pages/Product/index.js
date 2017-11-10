import { Link } from 'react-router-dom'

export default () => (
  <div>
    {[1, 2, 3].map(index => (
      <Link to={`/products/${index}`}>{`产品${index}`}</Link>
    ))}
  </div>
)
