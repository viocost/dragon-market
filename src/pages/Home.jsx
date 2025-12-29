import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to Dragon Market
            <span className="sparkle">✨</span>
          </h1>
          <p className="hero-subtitle">
            The Premier Destination for Legendary Companions
          </p>
          <p className="hero-description">
            Since 1523, Dragon Market has been the trusted source for ethically sourced,
            professionally trained dragons. Whether you need a majestic guardian,
            a loyal companion, or a fire-breathing security system, we have the perfect
            dragon for you.
          </p>
          <Link to="/products" className="cta-button">
            Browse Our Collection
          </Link>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-card">
            <div className="card-icon">🏰</div>
            <h3>Established Legacy</h3>
            <p>
              Over 500 years of experience in dragon care, training, and placement.
              Our family-run business has served kingdoms, wizards, and dragon
              enthusiasts across the realm.
            </p>
          </div>
          <div className="about-card">
            <div className="card-icon">🛡️</div>
            <h3>Quality Guaranteed</h3>
            <p>
              Every dragon comes with a lifetime health guarantee, comprehensive
              training certification, and 24/7 support from our expert dragon handlers.
            </p>
          </div>
          <div className="about-card">
            <div className="card-icon">🌟</div>
            <h3>Ethical Sourcing</h3>
            <p>
              All our dragons are responsibly bred in spacious mountain habitats,
              fed organic livestock, and trained using positive reinforcement methods only.
            </p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose Dragon Market?</h2>
        <ul className="features-list">
          <li>🔥 Fire-breathing training included</li>
          <li>📦 Free delivery via enchanted portal</li>
          <li>🎓 Certified by the International Dragon Association</li>
          <li>💎 Premium dragon insurance available</li>
          <li>🏔️ Mountain habitat setup consultation</li>
          <li>🍖 First month of premium dragon food free</li>
        </ul>
      </section>
    </div>
  )
}

export default Home
