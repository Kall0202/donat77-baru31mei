"use client"

import { useState, useEffect } from "react"
import { Heart, Award, Users, Clock } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Tentang Donat 77</h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Cerita di balik donat terenak untuk mahasiswa di seluruh kampus
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Cerita Kami</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Donat 77 lahir dari pengalaman seorang mahasiswa yang sering kelaparan di tengah kesibukan kuliah.
                  Kami memahami betul bagaimana rasanya mencari makanan yang enak, mengenyangkan, tapi tetap ramah di
                  kantong.
                </p>
                <p>
                  Dengan resep rahasia yang telah dikembangkan selama bertahun-tahun, kami menciptakan donat yang tidak
                  hanya lezat, tapi juga bergizi dan mengenyangkan. Setiap gigitan donat kami dibuat dengan cinta untuk
                  para mahasiswa.
                </p>
                <p>
                  Kini, Donat 77 telah menjadi pilihan utama mahasiswa di berbagai kampus. Kami bangga menjadi bagian
                  dari perjalanan akademik kalian!
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Cerita Donat 77"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-gray-600 text-lg">Prinsip yang kami pegang dalam melayani mahasiswa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dibuat dengan Cinta</h3>
              <p className="text-gray-600">Setiap donat dibuat dengan perhatian dan kasih sayang</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Kualitas Terbaik</h3>
              <p className="text-gray-600">Menggunakan bahan-bahan berkualitas tinggi</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ramah Mahasiswa</h3>
              <p className="text-gray-600">Harga terjangkau untuk semua kalangan mahasiswa</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Selalu Fresh</h3>
              <p className="text-gray-600">Donat dibuat fresh setiap hari</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tim Kami</h2>
            <p className="text-gray-600 text-lg">Orang-orang hebat di balik kelezatan Donat 77</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Founder"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ahmad Rizki</h3>
              <p className="text-amber-700 font-semibold mb-2">Founder & Head Chef</p>
              <p className="text-gray-600">Mahasiswa yang menciptakan resep rahasia Donat 77</p>
            </div>

            <div className="text-center">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Manager"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sari Dewi</h3>
              <p className="text-amber-700 font-semibold mb-2">Operations Manager</p>
              <p className="text-gray-600">Memastikan kualitas dan pelayanan terbaik setiap hari</p>
            </div>

            <div className="text-center">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Marketing"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Budi Santoso</h3>
              <p className="text-amber-700 font-semibold mb-2">Marketing Lead</p>
              <p className="text-gray-600">Menghubungkan Donat 77 dengan mahasiswa di seluruh kampus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Misi Kami</h2>
          <p className="text-xl text-amber-100 max-w-4xl mx-auto mb-8">
            "Menyediakan donat berkualitas tinggi dengan harga terjangkau untuk mendukung perjalanan akademik mahasiswa
            di seluruh Indonesia. Kami berkomitmen untuk menjadi teman setia di setiap langkah perkuliahan kalian."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-amber-100">Mahasiswa Dilayani</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-amber-100">Kampus Partner</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-amber-100">Siap Melayani</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
