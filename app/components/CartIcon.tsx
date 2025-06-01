"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "../context/CartContext"

export default function CartIcon() {
  const { toggleCart, totalItems } = useCart()

  return (
    <button
      onClick={toggleCart}
      className="relative p-2 text-amber-700 hover:text-amber-800 transition-colors"
      aria-label="Shopping Cart"
    >
      <ShoppingCart size={24} />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {totalItems}
        </span>
      )}
    </button>
  )
}
