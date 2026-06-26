import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";

// ── Category emoji map for cart item display ──────────────────────────────────
const CATEGORY_COLORS = {
  cheesecakes:   { bg: "#FFF8F0", dot: "#C49A6C" },
  "custom-cakes":{ bg: "#F5F0FF", dot: "#9C6FD4" },
  kunafa:        { bg: "#FFF0F5", dot: "#D46F8C" },
  pasta:         { bg: "#F0FFF5", dot: "#4CAF82" },
  mexican:       { bg: "#FFF5F0", dot: "#D4834F" },
  beverages:     { bg: "#F0F5FF", dot: "#5B8DD4" },
};

const ItemRow = ({ item, onRemove, onIncrease, onDecrease }) => {
  const colors = CATEGORY_COLORS[item.category] || { bg: "#F8F8F8", dot: "#C49A6C" };
  const numericPrice = parseFloat(
    item.price.replace(/Starting\s*/i, "").replace("₹", "").replace(/,/g, "")
  ) || 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40, height: 0, marginBottom: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex items-start gap-4 py-5 border-b border-gray-100 last:border-0"
    >
      {/* Category colour dot */}
      <div
        className="w-11 h-11 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl"
        style={{ background: colors.bg }}
      >
        {item.image}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="font-serif font-semibold text-sm leading-snug text-deep-espresso pr-1 truncate">
            {item.name}
          </p>
          {/* Remove button */}
          <button
            onClick={() => onRemove(item.id)}
            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-gray-300 hover:text-red-400 hover:bg-red-50 transition-all duration-200"
            aria-label="Remove item"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between mt-2">
          {/* Qty stepper */}
          <div className="flex items-center gap-1 bg-gray-50 rounded-full px-1 py-1">
            <button
              onClick={() => onDecrease(item.id, item.quantity - 1)}
              className="w-6 h-6 rounded-full flex items-center justify-center text-warm-caramel hover:bg-warm-caramel hover:text-white transition-all duration-200 font-bold text-base leading-none"
              aria-label="Decrease"
            >
              −
            </button>
            <span className="w-6 text-center text-sm font-semibold text-deep-espresso tabular-nums">
              {item.quantity}
            </span>
            <button
              onClick={() => onIncrease(item.id)}
              className="w-6 h-6 rounded-full flex items-center justify-center text-warm-caramel hover:bg-warm-caramel hover:text-white transition-all duration-200 font-bold text-base leading-none"
              aria-label="Increase"
            >
              +
            </button>
          </div>

          {/* Line total */}
          <span className="font-bold text-sm text-warm-caramel tabular-nums">
            ₹{(numericPrice * item.quantity).toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const CartDrawer = () => {
  const {
    items, removeItem, updateQuantity, addItem, clearCart,
    totalItems, totalAmount, isOpen, setIsOpen,
  } = useCart();

  const handleWhatsAppOrder = () => {
    const lines = items.map(
      i => `• ${i.name} × ${i.quantity}  —  ₹${(parseFloat(i.price.replace(/Starting\s*/i,"").replace("₹","").replace(/,/g,"")) * i.quantity).toLocaleString("en-IN")}`
    ).join("%0A");
    const total = `%0A%0A*Total: ₹${totalAmount.toLocaleString("en-IN")}*`;
    const msg   = `Hi! I'd like to place an order:%0A%0A${lines}${total}`;
    window.open(`https://wa.me/917041168701?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-deep-espresso/40 backdrop-blur-sm z-[9990]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 38 }}
            className="fixed top-0 right-0 h-full z-[9991] flex flex-col"
            style={{
              width: "min(420px, 100vw)",
              background: "#FFFFFF",
              boxShadow: "-8px 0 60px rgba(62,39,35,0.18)",
            }}
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div>
                <h2 className="font-serif font-bold text-deep-espresso text-xl">
                  Your Order
                </h2>
                {totalItems > 0 && (
                  <p className="text-xs text-gray-400 mt-0.5">
                    {totalItems} item{totalItems !== 1 ? "s" : ""} in cart
                  </p>
                )}
              </div>
              <div className="flex items-center gap-3">
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-xs text-gray-400 hover:text-red-400 transition-colors px-2 py-1 rounded-lg hover:bg-red-50"
                  >
                    
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Close cart"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke="#3E2723" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* ── Items list ── */}
            <div className="flex-1 overflow-y-auto px-6">
              <AnimatePresence mode="popLayout">
                {items.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-64 text-center"
                  >
                    <div className="text-6xl mb-4">🛒</div>
                    <p className="font-serif text-deep-espresso text-lg font-semibold mb-1">
                      Your cart is empty
                    </p>
                    <p className="text-sm text-gray-400">
                      Add something delicious from our menu
                    </p>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="mt-6 px-6 py-2.5 rounded-full text-sm font-medium text-warm-caramel border border-warm-caramel hover:bg-warm-caramel hover:text-white transition-all duration-200"
                    >
                      Browse Menu
                    </button>
                  </motion.div>
                ) : (
                  <div key="list">
                    {items.map(item => (
                      <ItemRow
                        key={item.id}
                        item={item}
                        onRemove={removeItem}
                        onIncrease={(id) => {
                          const i = items.find(x => x.id === id);
                          if (i) addItem(i);
                        }}
                        onDecrease={updateQuantity}
                      />
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Order summary + checkout ── */}
            <AnimatePresence>
              {items.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="border-t border-gray-100 px-6 pt-5 pb-8"
                  style={{ background: "#FFFFFF" }}
                >
                  {/* Summary rows */}
                  <div className="space-y-2.5 mb-5">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Subtotal</span>
                      <span className="tabular-nums">₹{totalAmount.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Delivery</span>
                      <span className="text-green-500 font-medium">Free</span>
                    </div>
                    <div className="h-px bg-gray-100" />
                    <div className="flex justify-between items-baseline">
                      <span className="font-serif font-bold text-deep-espresso text-base">Total</span>
                      <span className="font-bold text-warm-caramel text-xl tabular-nums">
                        ₹{totalAmount.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp order button */}
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                    style={{
                      background: "linear-gradient(135deg, #3E2723 0%, #5D4037 50%, #C49A6C 100%)",
                      boxShadow: "0 8px 32px rgba(62,39,35,0.25)",
                    }}
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Order via WhatsApp
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-3">
                    We'll confirm your order within 5 minutes
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartDrawer;