import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((item) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(i => i.id !== id));
    } else {
      setItems(prev =>
        prev.map(i => i.id === id ? { ...i, quantity } : i)
      );
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems  = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalAmount = items.reduce((sum, i) => {
    // strip "Starting " and "₹" then parse
    const raw = i.price.replace(/Starting\s*/i, "").replace("₹", "").replace(/,/g, "");
    return sum + (parseFloat(raw) || 0) * i.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQuantity, clearCart,
      totalItems, totalAmount,
      isOpen, setIsOpen,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};