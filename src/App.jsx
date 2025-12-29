import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Products from './pages/Products'
import Checkout from './pages/Checkout'
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2025 Dragon Market. All dragons ethically sourced. 🐉</p>
        </footer>
      </div>
    </CartProvider>
  )
}

export default App
