import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    {[1, 2, 3].map(index => (
      <Link className="button is-danger" to={`/products/${index}`}>{`产品${index}`}</Link>
    ))}
  </div>
)
