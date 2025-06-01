"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, Instagram, Facebook, Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Halo! Saya ${formData.name}. ${formData.message}`
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/6281234567890",
      color: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
      description: "Chat langsung untuk pemesanan",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/donat77",
      color: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
      description: "Follow untuk update menu terbaru",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/donat77",
      color: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
      description: "Join komunitas pecinta donat",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">Siap melayani pemesanan dan pertanyaan Anda 24/7</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Cara Menghubungi Kami</h2>
            <p className="text-gray-600 text-lg">Pilih platform yang paling nyaman untuk Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((social) => (
              <div
                key={social.name}
                className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-16 h-16 ${social.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-colors`}
                >
                  <social.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{social.name}</h3>
                <p className="text-gray-600 mb-4">{social.description}</p>
                <button
                  onClick={() => window.open(social.url, "_blank")}
                  className={`${social.color} text-white px-6 py-2 rounded-full transition-colors`}
                >
                  Hubungi Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="nama@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tulis pesan atau pertanyaan Anda..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-6 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Kirim via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Phone className="text-amber-600 mr-2" size={24} />
                  Informasi Kontak
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center">
                    <Phone size={16} className="mr-2 text-amber-600" />
                    +62 812-3456-7890
                  </p>
                  <p className="flex items-center">
                    <Mail size={16} className="mr-2 text-amber-600" />
                    info@donat77.com
                  </p>
                  <p className="flex items-center">
                    <MapPin size={16} className="mr-2 text-amber-600" />
                    Area Kampus Universitas
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Clock className="text-amber-600 mr-2" size={24} />
                  Jam Operasional
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="font-semibold">07:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu - Minggu</span>
                    <span className="font-semibold">08:00 - 19:00</span>
                  </div>
                  <div className="mt-3 p-3 bg-green-100 rounded-lg">
                    <p className="text-green-700 text-sm font-semibold">📱 Pemesanan online 24/7 via WhatsApp</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Kerjasama & Event</h3>
                <p className="text-gray-600 mb-4">Tertarik untuk bekerjasama dengan Donat 77? Kami menerima:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Jasa titip untuk acara kampus</li>
                  <li>• Catering untuk event mahasiswa</li>
                  <li>• Partnership dengan organisasi</li>
                  <li>• Sponsorship acara</li>
                </ul>
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/6281234567890?text=Halo! Saya tertarik untuk bekerjasama dengan Donat 77",
                      "_blank",
                    )
                  }
                  className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors"
                >
                  Diskusi Kerjasama
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-600 text-lg">Jawaban untuk pertanyaan yang sering ditanyakan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Bagaimana cara memesan?</h4>
                <p className="text-gray-600">
                  Anda bisa memesan melalui WhatsApp, Instagram, atau Facebook. Cukup kirim pesan dengan menu yang
                  diinginkan.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Apakah ada minimum order?</h4>
                <p className="text-gray-600">Tidak ada minimum order. Anda bisa memesan mulai dari 1 donat saja.</p>
              </div>

              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Berapa lama waktu pembuatan?</h4>
                <p className="text-gray-600">
                  Untuk pesanan reguler, waktu pembuatan sekitar 15-30 menit. Untuk pesanan besar, mohon pesan H-1.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Apakah ada layanan antar?</h4>
                <p className="text-gray-600">
                  Ya, kami melayani antar untuk area sekitar kampus dengan minimal pembelian Rp 25.000.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Bagaimana dengan pembayaran?</h4>
                <p className="text-gray-600">
                  Kami menerima pembayaran tunai, transfer bank, dan e-wallet (GoPay, OVO, DANA).
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Apakah donat selalu fresh?</h4>
                <p className="text-gray-600">
                  Ya! Kami membuat donat fresh setiap hari dan tidak menjual donat yang sudah lebih dari 1 hari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
