import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";

const CartButton = () => {
  const { totalItems, setIsOpen } = useCart();

  return (
    <motion.button
      onClick={() => setIsOpen(true)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 left-6 z-[9980] flex items-center gap-3 pl-4 pr-5 py-3.5 rounded-full font-medium text-white shadow-2xl"
      style={{
        background: "linear-gradient(135deg, #3E2723 0%, #5D4037 60%, #C49A6C 100%)",
        boxShadow: "0 8px 32px rgba(62,39,35,0.35)",
      }}
      aria-label={`Open cart — ${totalItems} items`}
    >
      {/* Cart icon */}
      <div className="relative">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

        {/* Badge */}
        <AnimatePresence>
          {totalItems > 0 && (
            <motion.span
              key={totalItems}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold tabular-nums"
              style={{ background: "#C49A6C", color: "#FFFFFF", fontSize: "10px" }}
            >
              {totalItems > 99 ? "99+" : totalItems}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Label — only when cart has items */}
      <AnimatePresence mode="wait">
        {totalItems > 0 ? (
          <motion.span
            key="count"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm overflow-hidden whitespace-nowrap"
          >
            View Cart
          </motion.span>
        ) : (
          <motion.span
            key="empty"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm overflow-hidden whitespace-nowrap"
          >
            Cart
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CartButton;