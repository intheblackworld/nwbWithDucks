import { Home, ProductList, ProductDetail } from '../views/pages'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/products',
    component: ProductList,
    exact: true,
  },
  {
    path: '/products/:id',
    example: '/products/apple',
    component: ProductDetail,
    exact: true,
  },
]

export default routes
