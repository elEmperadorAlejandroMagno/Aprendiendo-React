import './App.css'
import { products } from './mock/products.json'
import { Products } from './Components/Products.jsx'
import { Header } from './Components/Header.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './Components/Cart.jsx'
import { CartProvider } from './context/cart_useReducer.jsx'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts}/>
    </CartProvider>
  )
}

export default App
