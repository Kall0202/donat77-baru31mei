"use client"

import { useState } from "react"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [favorites, setFavorites] = useState<string[]>([])
  const { addToCart } = useCart()

  const categories = [
    { id: "all", name: "Semua Menu" },
    { id: "classic", name: "Classic" },
    { id: "premium", name: "Premium" },
    { id: "special", name: "Special" },
  ]

  const menuItems = [
    {
      id: "1",
      name: "Donat Coklat Classic",
      category: "classic",
      price: "Rp 6.000",
      priceValue: 6000,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.8,
      description: "Donat lembut dengan topping coklat manis yang melimpah",
      isPopular: true,
    },
    {
      id: "2",
      name: "Donat Strawberry Fresh",
      category: "classic",
      price: "Rp 7.000",
      priceValue: 7000,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.7,
      description: "Donat dengan topping strawberry segar dan cream lembut",
    },
    {
      id: "3",
      name: "Donat Vanilla Dream",
      category: "classic",
      price: "Rp 6.500",
      priceValue: 6500,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.9,
      description: "Donat vanilla dengan glazur putih yang meleleh di mulut",
    },
    {
      id: "4",
      name: "Donat Keju Premium",
      category: "premium",
      price: "Rp 9.000",
      priceValue: 9000,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.8,
      description: "Donat dengan keju berkualitas tinggi dan taburan keju parut",
      isPopular: true,
    },
    {
      id: "5",
      name: "Donat Nutella Deluxe",
      category: "premium",
      price: "Rp 10.000",
      priceValue: 10000,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.9,
      description: "Donat dengan filling nutella asli dan topping kacang",
    },
    {
      id: "6",
      name: "Donat Matcha Fusion",
      category: "special",
      price: "Rp 8.500",
      priceValue: 8500,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.6,
      description: "Donat dengan rasa matcha autentik dan white chocolate",
    },
    {
      id: "7",
      name: "Donat Red Velvet",
      category: "special",
      price: "Rp 9.500",
      priceValue: 9500,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.8,
      description: "Donat red velvet dengan cream cheese frosting",
    },
    {
      id: "8",
      name: "Donat Tiramisu",
      category: "special",
      price: "Rp 11.000",
      priceValue: 11000,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.9,
      description: "Donat dengan rasa tiramisu dan taburan cocoa powder",
      isPopular: true,
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  const toggleFavorite = (itemId: string) => {
    setFavorites((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      priceValue: item.priceValue,
      image: item.image || "/placeholder.svg",
    })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Menu Donat 77</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Pilihan donat terlezat dengan harga ramah mahasiswa
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-200 group"
              >
                {/* Image Container */}
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Popular Badge */}
                  {item.isPopular && (
                    <div className="absolute top-2 left-2 bg-yellow-400 text-amber-800 px-2 py-1 rounded-full text-xs font-bold">
                      Popular
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-amber-50 transition-colors"
                  >
                    <Heart
                      size={16}
                      className={favorites.includes(item.id) ? "text-red-500 fill-current" : "text-gray-400"}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-gray-600 ml-1 text-sm">{item.rating}</span>
                    <span className="text-gray-400 ml-1 text-sm">(50+ reviews)</span>
                  </div>

                  {/* Price and Order */}
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-700">{item.price}</span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full hover:from-amber-600 hover:to-orange-600 transition-colors flex items-center space-x-2"
                    >
                      <ShoppingCart size={16} />
                      <span>Tambah</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Promo Spesial</h2>
            <p className="text-gray-600 text-lg">Penawaran terbaik untuk mahasiswa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Beli 3 Gratis 1</h3>
              <p className="text-amber-100 mb-4">Untuk semua varian classic</p>
              <button className="bg-white text-amber-700 px-4 py-2 rounded-full font-semibold hover:bg-amber-50 transition-colors">
                Ambil Promo
              </button>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Diskon 20%</h3>
              <p className="text-yellow-100 mb-4">Untuk pembelian di atas Rp 50.000</p>
              <button className="bg-white text-yellow-500 px-4 py-2 rounded-full font-semibold hover:bg-yellow-50 transition-colors">
                Klaim Diskon
              </button>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Paket Hemat</h3>
              <p className="text-amber-100 mb-4">6 donat + 2 minuman hanya Rp 45.000</p>
              <button className="bg-white text-amber-700 px-4 py-2 rounded-full font-semibold hover:bg-amber-50 transition-colors">
                Pesan Paket
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Memesan?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Tambahkan donat ke keranjang dan pesan sekarang melalui WhatsApp!
          </p>
          <button
            onClick={() => document.querySelector(".cart-icon")?.dispatchEvent(new Event("click"))}
            className="bg-gradient-to-r from-amber-300 to-yellow-300 text-amber-800 px-8 py-4 rounded-full font-bold text-lg hover:from-amber-400 hover:to-yellow-400 transition-colors transform hover:scale-105"
          >
            Lihat Keranjang
          </button>
        </div>
      </section>
    </div>
  )
}
