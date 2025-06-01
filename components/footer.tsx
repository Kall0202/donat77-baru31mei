import { Instagram, MessageCircle, Facebook, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 text-white">
      {/* Donuts Animation */}
      <div className="py-4 overflow-hidden">
        <div className="flex justify-center space-x-16">
          <div className="transform rotate-12 animate-pulse">
            <div className="w-12 h-12 bg-amber-200 rounded-full border-6 border-orange-200 relative">
              <div className="w-4 h-4 bg-amber-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <div className="transform -rotate-12 animate-pulse delay-300">
            <div className="w-12 h-12 bg-yellow-200 rounded-full border-6 border-orange-200 relative">
              <div className="w-4 h-4 bg-amber-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Donat 77</h3>
            <p className="text-amber-100 mb-4">
              Donat segar dan lezat untuk mahasiswa. Murah meriah, kenyang maksimal!
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/6281234567890" className="text-amber-200 hover:text-white transition-colors">
                <MessageCircle size={24} />
              </a>
              <a href="https://instagram.com/donat77" className="text-amber-200 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/donat77" className="text-amber-200 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Favorit</h4>
            <ul className="space-y-2 text-amber-100">
              <li>Donat Coklat</li>
              <li>Donat Strawberry</li>
              <li>Donat Vanilla</li>
              <li>Donat Keju</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-amber-100">
              <p>📍 Kampus Universitas</p>
              <p>📞 0812-3456-7890</p>
              <p>⏰ 07:00 - 20:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-500 mt-8 pt-8 text-center">
          <p className="text-amber-100 flex items-center justify-center">
            Made with <Heart className="mx-2 text-red-400" size={16} /> for hungry students
          </p>
          <p className="text-amber-200 mt-2">© 2024 Donat 77. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
