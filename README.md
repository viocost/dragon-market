# Dragon Market 🐉

A fun Single Page Application (SPA) e-commerce website for purchasing legendary dragons! Built with React and React Router for testing SPA tracking and analytics.

## 🎯 Purpose

This project was created for the TagSense Hackathon 2026 to serve as a test website for detecting and fixing incorrect tag configurations on Single Page Applications. The site demonstrates common SPA navigation patterns that can cause analytics tracking issues.

## ✨ Features

- **Single Page Application** with React Router (client-side routing)
- **Home/About Section** - Learn about Dragon Market's 500-year legacy
- **Products Gallery** - Browse 12 unique dragons with different types and abilities
- **Filtering System** - Filter dragons by type
- **Shopping Cart** - Add dragons to cart with quantity management
- **Checkout Flow** - Complete checkout form with order confirmation

## 🐲 Dragon Inventory

The site features 12 legendary dragons:
- Ember the Crimson (Fire Dragon)
- Frost the Eternal (Ice Dragon)
- Sparkle the Tiny (Pocket Dragon)
- Shadow the Silent (Night Dragon)
- Tsunami the Mighty (Sea Dragon)
- Zephyr the Swift (Wind Dragon)
- Terra the Ancient (Earth Dragon)
- Thunder the Fierce (Lightning Dragon)
- Blossom the Gentle (Nature Dragon)
- Void the Cosmic (Space Dragon)
- Cookie the Sweet (Dessert Dragon)
- Prism the Radiant (Rainbow Dragon)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd static-site
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🌐 Deploying to GitHub Pages

### First Time Setup

1. Update `vite.config.js` with your repository name:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

2. Update `src/main.jsx` basename:
```javascript
<BrowserRouter basename="/your-repo-name">
```

3. Install gh-pages (already in package.json):
```bash
npm install
```

### Deploy

```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy to the `gh-pages` branch
3. Make your site available at `https://yourusername.github.io/your-repo-name/`

### Enable GitHub Pages

1. Go to your repository Settings
2. Navigate to "Pages" section
3. Under "Source", select the `gh-pages` branch
4. Save and wait a few minutes for deployment

## 🏗️ Project Structure

```
static-site/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Main navigation with cart badge
│   │   └── Navigation.css
│   ├── context/
│   │   └── CartContext.jsx      # Cart state management
│   ├── data/
│   │   └── dragons.js           # Dragon inventory data
│   ├── pages/
│   │   ├── Home.jsx             # Home/About page
│   │   ├── Home.css
│   │   ├── Products.jsx         # Products gallery
│   │   ├── Products.css
│   │   ├── Checkout.jsx         # Checkout flow
│   │   └── Checkout.css
│   ├── App.jsx                  # Main app with routes
│   ├── App.css
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## 🧪 Testing SPA Tracking

This site is perfect for testing:
- **Soft Navigation Detection** - Uses React Router for client-side navigation
- **Page View Tracking** - Routes: `/`, `/products`, `/checkout`
- **Dynamic Content** - Product filtering and cart updates
- **Form Submissions** - Checkout form
- **User Interactions** - Add to cart, remove from cart, quantity changes

## 🎨 Customization

### Adding More Dragons

Edit `src/data/dragons.js` to add more dragons to the inventory.

### Styling

The site uses CSS custom properties (variables) defined in `src/index.css`:
- `--primary-color`: Main brand color (crimson)
- `--secondary-color`: Accent color (gold)
- `--background`: Dark background
- `--surface`: Card/surface color
- `--text-primary`: Primary text color
- `--text-secondary`: Secondary text color

## 📝 License

This project is created for educational and hackathon purposes.

## 🤝 Contributing

This is a hackathon project, but feel free to fork and modify for your own testing needs!

---

Built with ❤️ and 🐉 for TagSense Hackathon 2026
