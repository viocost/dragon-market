import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { dragons } from '../data/dragons'
import './Products.css'

function Products() {
  const { addToCart } = useCart()
  const [filter, setFilter] = useState('all')
  const [notification, setNotification] = useState('')

  const types = ['all', ...new Set(dragons.map(d => d.type))]

  const filteredDragons = filter === 'all'
    ? dragons
    : dragons.filter(d => d.type === filter)

  const handleAddToCart = (dragon) => {
    addToCart(dragon)
    setNotification(`${dragon.name} added to cart! 🐉`)
    setTimeout(() => setNotification(''), 3000)
  }

  return (
    <div className="products-page">
      <div className="products-header">
        <h1 className="page-title">Our Dragon Collection</h1>
        <p className="page-subtitle">
          Choose your legendary companion from our carefully curated selection
        </p>
      </div>

      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}

      <div className="filter-section">
        <label className="filter-label">Filter by type:</label>
        <div className="filter-buttons">
          {types.map(type => (
            <button
              key={type}
              className={`filter-btn ${filter === type ? 'active' : ''}`}
              onClick={() => setFilter(type)}
            >
              {type === 'all' ? 'All Dragons' : type}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredDragons.map(dragon => (
          <div key={dragon.id} className="product-card">
            <div className="dragon-emoji-large" style={{ color: dragon.color }}>
              {dragon.emoji}
            </div>
            <h2 className="dragon-name">{dragon.name}</h2>
            <p className="dragon-type">{dragon.type}</p>
            <p className="dragon-description">{dragon.description}</p>
            
            <div className="dragon-details">
              <div className="detail-item">
                <strong>Age:</strong> {dragon.age}
              </div>
              <div className="detail-item">
                <strong>Size:</strong> {dragon.size}
              </div>
              <div className="detail-item">
                <strong>Skills:</strong>
                <div className="skills-list">
                  {dragon.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-footer">
              <div className="price">${dragon.price.toLocaleString()}</div>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(dragon)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
