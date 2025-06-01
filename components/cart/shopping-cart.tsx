"use client"

import { useCart } from "./cart-context"
import { X, Plus, Minus, ShoppingBag, Send } from "lucide-react"
import { formatRupiah } from "@/lib/utils"

export default function ShoppingCart() {
  const { cartItems, isCartOpen, closeCart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()

  const handleCheckout = () => {
    if (cartItems.length === 0) return

    // Create WhatsApp message with order details
    let message = "Halo Donat 77! Saya ingin memesan:\n\n"

    // Add each item to the message
    cartItems.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} (${item.price})\n`
    })

    // Add total price
    message += `\nTotal: ${formatRupiah(totalPrice)}\n\n`
    message += "Mohon konfirmasi pesanan saya. Terima kasih!"

    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Clear cart after checkout
    clearCart()
    closeCart()
  }

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeCart}></div>

      {/* Cart panel */}
      <div className="relative w-full max-w-md bg-white h-full overflow-y-auto shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white">
          <h2 className="text-xl font-bold flex items-center">
            <ShoppingBag className="mr-2" size={20} />
            Keranjang Belanja
          </h2>
          <button onClick={closeCart} className="p-1 hover:bg-orange-600 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 p-4">
            <ShoppingBag size={64} className="text-gray-300 mb-4" />
            <p className="text-gray-500 text-center">Keranjang belanja Anda kosong</p>
            <button
              onClick={closeCart}
              className="mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full hover:from-amber-600 hover:to-orange-600 transition-colors"
            >
              Lihat Menu
            </button>
          </div>
        ) : (
          <>
            <div className="p-4 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex border-b border-gray-100 pb-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-amber-700 font-semibold">{item.price}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="mx-2 w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-amber-50 border-t border-amber-100">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">{formatRupiah(totalPrice)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Jumlah Item</span>
                <span className="font-semibold">{cartItems.reduce((sum, item) => sum + item.quantity, 0)} item</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-full hover:from-amber-600 hover:to-orange-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Pesan via WhatsApp</span>
              </button>
              <button
                onClick={clearCart}
                className="w-full mt-2 border border-gray-300 text-gray-600 py-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                Kosongkan Keranjang
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
