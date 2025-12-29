import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Navigation.css'

function Navigation() {
  const { getItemCount } = useCart()
  const itemCount = getItemCount()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="dragon-emoji">🐉</span>
          <span className="logo-text">Dragon Market</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/checkout" className="nav-link cart-link">
            Checkout
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
