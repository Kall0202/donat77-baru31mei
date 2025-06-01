"use client"

import { useState } from "react"
import { MapPin, Clock, Phone, Navigation, Car, Bike } from "lucide-react"

export default function Location() {
  const [selectedLocation, setSelectedLocation] = useState(0)

  const locations = [
    {
      name: "Donat 77 - Kampus Utama",
      address: "Jl. Universitas No. 123, Depan Gerbang Utama",
      phone: "+62 812-3456-7890",
      hours: {
        weekday: "07:00 - 20:00",
        weekend: "08:00 - 19:00",
      },
      features: ["Drive Thru", "Tempat Duduk", "WiFi Gratis", "Charging Station"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Donat 77 - Area Kos",
      address: "Jl. Mahasiswa Raya No. 45, Komplek Kos Bersama",
      phone: "+62 812-3456-7891",
      hours: {
        weekday: "06:00 - 22:00",
        weekend: "07:00 - 22:00",
      },
      features: ["24/7 Order", "Delivery", "Study Corner", "Group Discount"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Donat 77 - Kantin Fakultas",
      address: "Gedung Fakultas Ekonomi Lt. 1, Kantin Bersama",
      phone: "+62 812-3456-7892",
      hours: {
        weekday: "07:30 - 17:00",
        weekend: "Tutup",
      },
      features: ["Student Discount", "Quick Service", "Cashless Payment", "Bulk Order"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const transportOptions = [
    {
      icon: Car,
      name: "Mobil",
      description: "Parkir tersedia di semua lokasi",
      color: "text-blue-500",
    },
    {
      icon: Bike,
      name: "Motor/Sepeda",
      description: "Area parkir khusus kendaraan roda dua",
      color: "text-green-500",
    },
    {
      icon: Navigation,
      name: "Jalan Kaki",
      description: "Akses mudah dari berbagai titik kampus",
      color: "text-purple-500",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Lokasi Kami</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">Temukan outlet Donat 77 terdekat dari lokasi Anda</p>
        </div>
      </section>

      {/* Location Selector */}
      <section className="py-8 bg-white sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => setSelectedLocation(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedLocation === index
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700"
                }`}
              >
                {location.name.split(" - ")[1]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Location Details */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{locations[selectedLocation].name}</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-amber-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Alamat</h3>
                    <p className="text-gray-600">{locations[selectedLocation].address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-amber-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Telepon</h3>
                    <p className="text-gray-600">{locations[selectedLocation].phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="text-amber-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Jam Operasional</h3>
                    <div className="text-gray-600">
                      <p>Senin - Jumat: {locations[selectedLocation].hours.weekday}</p>
                      <p>Sabtu - Minggu: {locations[selectedLocation].hours.weekend}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 mb-4">Fasilitas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {locations[selectedLocation].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    window.open(
                      `https://maps.google.com/?q=${encodeURIComponent(locations[selectedLocation].address)}`,
                      "_blank",
                    )
                  }
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full hover:from-amber-600 hover:to-orange-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Navigation size={20} />
                  <span>Buka di Maps</span>
                </button>
                <button
                  onClick={() => window.open(`tel:${locations[selectedLocation].phone}`, "_blank")}
                  className="border-amber-500 text-amber-700 px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-white transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Hubungi</span>
                </button>
              </div>
            </div>

            <div>
              <img
                src={locations[selectedLocation].image || "/placeholder.svg"}
                alt={locations[selectedLocation].name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Cara Menuju Lokasi</h2>
            <p className="text-gray-600 text-lg">Berbagai pilihan transportasi untuk mencapai outlet kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <option.icon className={option.color} size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{option.name}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Locations Map */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Semua Lokasi Donat 77</h2>
            <p className="text-gray-600 text-lg">Jaringan outlet kami di area kampus</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{location.name}</h3>
                  <p className="text-gray-600 mb-3 flex items-start">
                    <MapPin size={16} className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                    {location.address}
                  </p>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <Clock size={16} className="text-pink-500 mr-2" />
                    {location.hours.weekday}
                  </p>
                  <button
                    onClick={() => setSelectedLocation(index)}
                    className="w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition-colors"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for New Locations */}
      <section className="py-16 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ingin Outlet di Lokasi Anda?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Kami selalu terbuka untuk membuka outlet baru di area strategis kampus. Hubungi kami untuk diskusi
            kerjasama!
          </p>
          <button
            onClick={() =>
              window.open(
                "https://wa.me/6281234567890?text=Halo! Saya tertarik untuk membuka outlet Donat 77 di lokasi saya",
                "_blank",
              )
            }
            className="bg-gradient-to-r from-amber-300 to-yellow-300 text-amber-800 px-8 py-4 rounded-full font-bold text-lg hover:from-amber-400 hover:to-yellow-400 transition-colors transform hover:scale-105"
          >
            Diskusi Kerjasama Outlet
          </button>
        </div>
      </section>
    </div>
  )
}
