import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (dragon) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === dragon.id)
      if (existing) {
        return prevCart.map(item =>
          item.id === dragon.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...dragon, quantity: 1 }]
    })
  }

  const removeFromCart = (dragonId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== dragonId))
  }

  const updateQuantity = (dragonId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(dragonId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === dragonId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const getItemCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
