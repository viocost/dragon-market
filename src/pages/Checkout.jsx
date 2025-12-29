import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Checkout.css'

function Checkout() {
  const { cart, updateQuantity, removeFromCart, getTotal, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [formData, setFormData] = useState({
    name: 'Gandalf the Grey',
    email: 'gandalf@middleearth.realm',
    address: '123 Bag End Lane, Hobbiton',
    kingdom: 'The Shire',
    portalCode: 'ME-12345'
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="success-message">
          <div className="success-icon">🎉</div>
          <h1>Order Confirmed!</h1>
          <p>Thank you for your purchase, {formData.name}!</p>
          <p className="success-details">
            Your dragons will be delivered via enchanted portal to {formData.address} within 3-5 business days.
          </p>
          <p className="success-details">
            You'll receive a magical confirmation email at {formData.email} with tracking information
            and care instructions for your new companions.
          </p>
          <div className="success-actions">
            <Link to="/products" className="continue-shopping-btn">
              Adopt More Dragons
            </Link>
            <Link to="/" className="home-btn">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="empty-cart">
          <div className="empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some dragons to get started!</p>
          <Link to="/products" className="browse-btn">
            Browse Dragons
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>
      
      <div className="checkout-container">
        <div className="cart-section">
          <h2 className="section-title">Your Dragons</h2>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <span className="item-emoji" style={{ color: item.color }}>
                    {item.emoji}
                  </span>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-type">{item.type}</p>
                    <p className="item-price">${item.price.toLocaleString()}</p>
                  </div>
                </div>
                <div className="item-controls">
                  <div className="quantity-controls">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <span className="total-label">Total:</span>
            <span className="total-amount">${getTotal().toLocaleString()}</span>
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Delivery Information</h2>
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Sir Lancelot the Brave"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="knight@camelot.realm"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Castle Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="123 Dragon Keep Lane"
              />
            </div>

            <div className="form-group">
              <label htmlFor="kingdom">Kingdom/Realm *</label>
              <input
                type="text"
                id="kingdom"
                name="kingdom"
                value={formData.kingdom}
                onChange={handleInputChange}
                required
                placeholder="The Northern Realm"
              />
            </div>

            <div className="form-group">
              <label htmlFor="portalCode">Portal Code *</label>
              <input
                type="text"
                id="portalCode"
                name="portalCode"
                value={formData.portalCode}
                onChange={handleInputChange}
                required
                placeholder="NK-12345"
              />
            </div>

            <button type="submit" className="place-order-btn">
              Place Order - ${getTotal().toLocaleString()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout
