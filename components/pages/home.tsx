"use client"

import { useState, useEffect } from "react"
import { Star, Clock, MapPin, Users, ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"

export default function HomePage() {
  const [animateHero, setAnimateHero] = useState(false)
  const { addToCart } = useCart()

  useEffect(() => {
    setAnimateHero(true)
  }, [])

  const featuredDonuts = [
    {
      id: "featured1",
      name: "Donat Coklat Premium",
      price: "Rp 8.000",
      priceValue: 8000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
    },
    {
      id: "featured2",
      name: "Donat Strawberry Fresh",
      price: "Rp 7.500",
      priceValue: 7500,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
    },
    {
      id: "featured3",
      name: "Donat Vanilla Classic",
      price: "Rp 7.000",
      priceValue: 7000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
    },
  ]

  const handleAddToCart = (donut: any) => {
    addToCart({
      id: donut.id,
      name: donut.name,
      price: donut.price,
      priceValue: donut.priceValue,
      image: donut.image || "/placeholder.svg",
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-600 text-white py-20 overflow-hidden">
        {/* Animated Falling Donuts */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-bounce absolute top-10 left-10 opacity-30">
            <div className="w-16 h-16 bg-amber-200 rounded-full border-8 border-orange-200 relative">
              <div className="w-6 h-6 bg-amber-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <div className="animate-bounce delay-500 absolute top-20 right-20 opacity-20">
            <div className="w-20 h-20 bg-yellow-200 rounded-full border-8 border-orange-200 relative">
              <div className="w-8 h-8 bg-amber-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${animateHero ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Donat <span className="text-amber-200">77</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100">Donat Segar untuk Mahasiswa Lapar!</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Murah meriah, kenyang maksimal. Cocok untuk pengganjal perut di sela-sela kuliah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-800 px-8 py-3 rounded-full font-bold text-lg hover:from-amber-500 hover:to-yellow-500 transition-colors duration-200 transform hover:scale-105">
                Pesan Sekarang
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-amber-800 transition-colors duration-200">
                Lihat Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-amber-700 mb-2">1000+</div>
              <div className="text-gray-600">Donat Terjual</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-amber-700 mb-2">500+</div>
              <div className="text-gray-600">Mahasiswa Puas</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-amber-700 mb-2">4.8</div>
              <div className="text-gray-600">Rating Bintang</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-amber-700 mb-2">24/7</div>
              <div className="text-gray-600">Siap Melayani</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Menu Favorit</h2>
            <p className="text-gray-600 text-lg">Donat pilihan yang paling disukai mahasiswa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDonuts.map((donut, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
              >
                <img src={donut.image || "/placeholder.svg"} alt={donut.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{donut.name}</h3>
                  <div className="flex items-center mb-3">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-gray-600 ml-1">{donut.rating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-700">{donut.price}</span>
                    <button
                      onClick={() => handleAddToCart(donut)}
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

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Kenapa Pilih Donat 77?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Selalu Fresh</h3>
                    <p className="text-gray-600">Dibuat setiap hari dengan bahan berkualitas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Lokasi Strategis</h3>
                    <p className="text-gray-600">Dekat dengan area kampus dan kos mahasiswa</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Ramah Mahasiswa</h3>
                    <p className="text-gray-600">Harga terjangkau untuk kantong mahasiswa</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/placeholder.svg?height=400&width=400" alt="Donat 77" className="rounded-lg shadow-lg" />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-amber-800 px-4 py-2 rounded-full font-bold transform rotate-12">
                Murah!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ingin Bekerjasama?</h2>
          <p className="text-xl mb-8 text-amber-100">Kami menerima jasa titip dan event-event khusus untuk mahasiswa</p>
          <button className="bg-gradient-to-r from-amber-300 to-yellow-300 text-amber-800 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 transform hover:scale-105">
            Hubungi Kami untuk Kerjasama
          </button>
        </div>
      </section>
    </div>
  )
}
