import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const sampleProducts = [
  { id: 1, name: 'Apple', price: 1.0, category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: 2.5, category: 'Dairy', inStock: false },
]

const App = () => {
  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)

  // State for cart management
  const [cart, setCart] = useState([])

  // State for category filtering
  const [category, setCategory] = useState('all')

  // Filter products based on selected category
  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === category)

  // Toggle dark mode state
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Add selected product to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />

      {/* Implement category filter dropdown */}
     <label>Filter by Category: </label>
<select value={category} onChange={(e) => setCategory(e.target.value)}>
  <option value="all">All</option>
  <option value="Fruits">Fruits</option>
  <option value="Dairy">Dairy</option>
  <option value="Veggies">Veggies</option>
</select>

      {/* Render filtered product list and pass add-to-cart handler */}
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />

      {/* Implement and render Cart component */}
      <Cart cartItems={cart} />
    </div>
  )
}

export default App