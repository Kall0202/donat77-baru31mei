"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import CartIcon from "./CartIcon"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Kontak", path: "/contact" },
    { name: "Lokasi", path: "/location" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      {/* Animated Donuts Header */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 py-2 overflow-hidden">
        <div className="flex justify-center space-x-8">
          <div className="animate-bounce">
            <div className="w-8 h-8 bg-amber-200 rounded-full border-4 border-orange-200 relative">
              <div className="w-3 h-3 bg-amber-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <div className="animate-bounce delay-150">
            <div className="w-8 h-8 bg-yellow-200 rounded-full border-4 border-orange-200 relative">
              <div className="w-3 h-3 bg-amber-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D77</span>
              </div>
              <span className="text-2xl font-bold text-amber-700">Donat 77</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-amber-700 bg-amber-100"
                    : "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <CartIcon />
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full hover:from-amber-600 hover:to-orange-600 transition-colors duration-200">
              Pesan Sekarang
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <CartIcon />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-amber-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? "text-amber-700 bg-amber-100"
                    : "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full text-left bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-2 rounded-md hover:from-amber-600 hover:to-orange-600">
              Pesan Sekarang
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
