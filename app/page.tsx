"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, Star, Phone, MapPin, Clock, X, Menu, Heart, Award, Users, Send, Plus, Minus } from "lucide-react"

export default function DonatWebsite() {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState("home")
  const [cart, setCart] = useState<any[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  const menuItems = [
    {
      id: "1",
      name: "Donat Coklat Classic",
      price: "Rp 6.000",
      priceValue: 6000,
      rating: 4.8,
      description: "Donat lembut dengan topping coklat manis",
      isPopular: true,
    },
    {
      id: "2",
      name: "Donat Strawberry Fresh",
      price: "Rp 7.000",
      priceValue: 7000,
      rating: 4.7,
      description: "Donat dengan topping strawberry segar",
    },
    {
      id: "3",
      name: "Donat Vanilla Dream",
      price: "Rp 6.500",
      priceValue: 6500,
      rating: 4.9,
      description: "Donat vanilla dengan glazur putih",
    },
    {
      id: "4",
      name: "Donat Keju Premium",
      price: "Rp 9.000",
      priceValue: 9000,
      rating: 4.8,
      description: "Donat dengan keju berkualitas tinggi",
      isPopular: true,
    },
  ]

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
    },
  ]

  const addToCart = (item: any) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id)
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== id))
    } else {
      setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }
  }

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotalPrice = () => cart.reduce((total, item) => total + item.priceValue * item.quantity, 0)
  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0)
  const formatRupiah = (amount: number) => `Rp ${amount.toLocaleString("id-ID")}`

  const handleCheckout = () => {
    if (cart.length === 0) return
    let message = "Halo Donat 77! Saya ingin memesan:\n\n"
    cart.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} (${item.price})\n`
    })
    message += `\nTotal: ${formatRupiah(getTotalPrice())}\n\nMohon konfirmasi pesanan saya. Terima kasih!`
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank")
    clearCart()
    setIsCartOpen(false)
  }

  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, #d97706 0%, #ea580c 50%, #eab308 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <div style={{ textAlign: "center", color: "white" }}>
          <div style={{ marginBottom: "2rem" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#fef3c7",
                borderRadius: "50%",
                border: "8px solid #fed7aa",
                margin: "0 auto 1rem",
                position: "relative",
                animation: "bounce 1s infinite",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#d97706",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            </div>
          </div>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>Donat 77</h1>
          <p style={{ color: "#fef3c7", fontSize: "1.2rem" }}>Memuat kelezatan...</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #fffbeb 0%, #fed7aa 100%)" }}>
      {/* Navigation */}
      <nav
        style={{
          background: "white",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        {/* Animated Header */}
        <div
          style={{ background: "linear-gradient(90deg, #f59e0b 0%, #ea580c 50%, #eab308 100%)", padding: "0.5rem 0" }}
        >
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "#fef3c7",
                borderRadius: "50%",
                border: "4px solid #fed7aa",
                position: "relative",
                animation: "bounce 1s infinite",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  background: "#d97706",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "#fef9c3",
                borderRadius: "50%",
                border: "4px solid #fed7aa",
                position: "relative",
                animation: "bounce 1s infinite 0.15s",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  background: "#d97706",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button
              onClick={() => setCurrentPage("home")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#d97706",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                D77
              </div>
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#d97706" }}>Donat 77</span>
            </button>

            {/* Desktop Menu */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ display: window.innerWidth > 768 ? "flex" : "none", gap: "1rem" }}>
                {["home", "menu", "about", "location", "contact"].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      background: currentPage === page ? "#fef3c7" : "transparent",
                      color: currentPage === page ? "#d97706" : "#374151",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "500",
                    }}
                  >
                    {page === "home"
                      ? "Beranda"
                      : page === "menu"
                        ? "Menu"
                        : page === "about"
                          ? "Tentang"
                          : page === "location"
                            ? "Lokasi"
                            : "Kontak"}
                  </button>
                ))}
              </div>

              {/* Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                style={{
                  position: "relative",
                  padding: "0.5rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#d97706",
                }}
              >
                <ShoppingCart size={24} />
                {getTotalItems() > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      right: "-4px",
                      background: "#f59e0b",
                      color: "white",
                      fontSize: "0.75rem",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{
                  display: window.innerWidth <= 768 ? "block" : "none",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#374151",
                }}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div style={{ marginTop: "1rem", padding: "1rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
              {["home", "menu", "about", "location", "contact"].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page)
                    setIsMobileMenuOpen(false)
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "0.75rem",
                    textAlign: "left",
                    background: currentPage === page ? "#fef3c7" : "transparent",
                    color: currentPage === page ? "#d97706" : "#374151",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "0.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {page === "home"
                    ? "Beranda"
                    : page === "menu"
                      ? "Menu"
                      : page === "about"
                        ? "Tentang"
                        : page === "location"
                          ? "Lokasi"
                          : "Kontak"}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Page */}
      {currentPage === "home" && (
        <div>
          {/* Hero Section */}
          <section
            style={{
              background: "linear-gradient(135deg, #d97706 0%, #ea580c 50%, #eab308 100%)",
              color: "white",
              padding: "5rem 1rem",
              textAlign: "center",
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h1 style={{ fontSize: "4rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
                Donat <span style={{ color: "#fef3c7" }}>77</span>
              </h1>
              <p style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "#fef3c7" }}>
                Donat Segar untuk Mahasiswa Lapar!
              </p>
              <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
                Murah meriah, kenyang maksimal. Cocok untuk pengganjal perut di sela-sela kuliah.
              </p>
              <button
                onClick={() => setCurrentPage("menu")}
                style={{
                  background: "linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)",
                  color: "#92400e",
                  padding: "1rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Pesan Sekarang
              </button>
            </div>
          </section>

          {/* Stats */}
          <section style={{ padding: "4rem 1rem", background: "white" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "2rem",
                  textAlign: "center",
                }}
              >
                {[
                  { number: "1000+", label: "Donat Terjual" },
                  { number: "500+", label: "Mahasiswa Puas" },
                  { number: "4.8", label: "Rating Bintang" },
                  { number: "24/7", label: "Siap Melayani" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#d97706", marginBottom: "0.5rem" }}>
                      {stat.number}
                    </div>
                    <div style={{ color: "#6b7280" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Menu */}
          <section style={{ padding: "4rem 1rem", background: "linear-gradient(135deg, #fffbeb 0%, #fed7aa 100%)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1rem" }}>
                  Menu Favorit
                </h2>
                <p style={{ color: "#6b7280", fontSize: "1.1rem" }}>Donat pilihan yang paling disukai mahasiswa</p>
              </div>

              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}
              >
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: "white",
                      borderRadius: "1rem",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      overflow: "hidden",
                      transition: "transform 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <div
                      style={{
                        height: "200px",
                        background: "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      {item.isPopular && (
                        <div
                          style={{
                            position: "absolute",
                            top: "0.5rem",
                            left: "0.5rem",
                            background: "#fbbf24",
                            color: "#92400e",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "9999px",
                            fontSize: "0.75rem",
                            fontWeight: "bold",
                          }}
                        >
                          Popular
                        </div>
                      )}
                      <div
                        style={{
                          width: "96px",
                          height: "96px",
                          background: "#fbbf24",
                          borderRadius: "50%",
                          border: "8px solid #fed7aa",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            background: "#d97706",
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1f2937", marginBottom: "0.5rem" }}>
                        {item.name}
                      </h3>
                      <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                        {item.description}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.75rem" }}>
                        <Star size={16} style={{ color: "#fbbf24", fill: "#fbbf24" }} />
                        <span style={{ color: "#6b7280", marginLeft: "0.25rem" }}>{item.rating}</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#d97706" }}>{item.price}</span>
                        <button
                          onClick={() => addToCart(item)}
                          style={{
                            background: "linear-gradient(90deg, #f59e0b 0%, #ea580c 100%)",
                            color: "white",
                            padding: "0.5rem 1rem",
                            borderRadius: "9999px",
                            border: "none",
                            cursor: "pointer",
                            fontWeight: "500",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <ShoppingCart size={16} />
                          Tambah
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Menu Page */}
      {currentPage === "menu" && (
        <div style={{ paddingTop: "2rem" }}>
          <section
            style={{
              background: "linear-gradient(135deg, #d97706 0%, #ea580c 50%, #eab308 100%)",
              color: "white",
              padding: "4rem 1rem",
              textAlign: "center",
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Menu Donat 77</h1>
              <p style={{ fontSize: "1.2rem", color: "#fef3c7" }}>
                Pilihan donat terlezat dengan harga ramah mahasiswa
              </p>
            </div>
          </section>

          <section style={{ padding: "4rem 1rem", background: "linear-gradient(135deg, #fffbeb 0%, #fed7aa 100%)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}
              >
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: "white",
                      borderRadius: "1rem",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "200px",
                        background: "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      {item.isPopular && (
                        <div
                          style={{
                            position: "absolute",
                            top: "0.5rem",
                            left: "0.5rem",
                            background: "#fbbf24",
                            color: "#92400e",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "9999px",
                            fontSize: "0.75rem",
                            fontWeight: "bold",
                          }}
                        >
                          Popular
                        </div>
                      )}
                      <div
                        style={{
                          width: "96px",
                          height: "96px",
                          background: "#fbbf24",
                          borderRadius: "50%",
                          border: "8px solid #fed7aa",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            background: "#d97706",
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1f2937", marginBottom: "0.5rem" }}>
                        {item.name}
                      </h3>
                      <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                        {item.description}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.75rem" }}>
                        <Star size={16} style={{ color: "#fbbf24", fill: "#fbbf24" }} />
                        <span style={{ color: "#6b7280", marginLeft: "0.25rem", fontSize: "0.9rem" }}>
                          {item.rating}
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#d97706" }}>{item.price}</span>
                        <button
                          onClick={() => addToCart(item)}
                          style={{
                            background: "linear-gradient(90deg, #f59e0b 0%, #ea580c 100%)",
                            color: "white",
                            padding: "0.5rem 1rem",
                            borderRadius: "9999px",
                            border: "none",
                            cursor: "pointer",
                            fontWeight: "500",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <ShoppingCart size={16} />
                          Tambah
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* About Page */}
      {currentPage === "about" && (
        <div style={{ paddingTop: "2rem" }}>
          <section
            style={{
              background: "linear-gradient(135deg, #d97706 0%, #ea580c 50%, #eab308 100%)",
              color: "white",
              padding: "4rem 1rem",
              textAlign: "center",
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Tentang Donat 77</h1>
              <p style={{ fontSize: "1.2rem", color: "#fef3c7" }}>
                Cerita di balik donat terenak untuk mahasiswa di seluruh kampus
              </p>
            </div>
          </section>

          {/* Story Section */}
          <section style={{ padding: "4rem 1rem", background: "white" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "3rem",
                  alignItems: "center",
                }}
              >
                <div>
                  <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1.5rem" }}>
                    Cerita Kami
                  </h2>
                  <div style={{ color: "#6b7280", fontSize: "1.1rem", lineHeight: "1.6" }}>
                    <p style={{ marginBottom: "1rem" }}>
                      Donat 77 lahir dari pengalaman seorang mahasiswa yang sering kelaparan di tengah kesibukan kuliah.
                      Kami memahami betul bagaimana rasanya mencari makanan yang enak, mengenyangkan, tapi tetap ramah
                      di kantong.
                    </p>
                    <p style={{ marginBottom: "1rem" }}>
                      Dengan resep rahasia yang telah dikembangkan selama bertahun-tahun, kami menciptakan donat yang
                      tidak hanya lezat, tapi juga bergizi dan mengenyangkan. Setiap gigitan donat kami dibuat dengan
                      cinta untuk para mahasiswa.
                    </p>
                    <p>
                      Kini, Donat 77 telah menjadi pilihan utama mahasiswa di berbagai kampus. Kami bangga menjadi
                      bagian dari perjalanan akademik kalian!
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      height: "300px",
                      background: "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)",
                      borderRadius: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        width: "150px",
                        height: "150px",
                        background: "#fbbf24",
                        borderRadius: "50%",
                        border: "12px solid #fed7aa",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          background: "#d97706",
                          borderRadius: "50%",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section style={{ padding: "4rem 1rem", background: "linear-gradient(135deg, #fffbeb 0%, #fed7aa 100%)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1rem" }}>
                  Nilai-Nilai Kami
                </h2>
                <p style={{ color: "#6b7280", fontSize: "1.1rem" }}>
                  Prinsip yang kami pegang dalam melayani mahasiswa
                </p>
              </div>

              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}
              >
                {[
                  {
                    icon: Heart,
                    title: "Dibuat dengan Cinta",
                    description: "Setiap donat dibuat dengan perhatian dan kasih sayang",
                  },
                  {
                    icon: Award,
                    title: "Kualitas Terbaik",
                    description: "Menggunakan bahan-bahan berkualitas tinggi",
                  },
                  {
                    icon: Users,
                    title: "Ramah Mahasiswa",
                    description: "Harga terjangkau untuk semua kalangan mahasiswa",
                  },
                  {
                    icon: Clock,
                    title: "Selalu Fresh",
                    description: "Donat dibuat fresh setiap hari",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    style={{
                      textAlign: "center",
                      padding: "2rem",
                      background: "white",
                      borderRadius: "1rem",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        background: "linear-gradient(90deg, #f59e0b 0%, #ea580c 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1rem",
                      }}
                    >
                      <value.icon size={32} style={{ color: "white" }} />
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1f2937", marginBottom: "0.5rem" }}>
                      {value.title}
                    </h3>
                    <p style={{ color: "#6b7280" }}>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section style={{ padding: "4rem 1rem", background: "white" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1rem" }}>
                  Tim Kami
                </h2>
                <p style={{ color: "#6b7280", fontSize: "1.1rem" }}>Orang-orang hebat di balik kelezatan Donat 77</p>
              </div>

              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}
              >
                {[
                  {
                    name: "Ahmad Rizki",
                    role: "Founder & Head Chef",
                    description: "Mahasiswa yang menciptakan resep rahasia Donat 77",
                  },
                  {
                    name: "Sari Dewi",
                    role: "Operations Manager",
                    description: "Memastikan kualitas dan pelayanan terbaik setiap hari",
                  },
                  {
                    name: "Budi Santoso",
                    role: "Marketing Lead",
                    description: "Menghubungkan Donat 77 dengan mahasiswa di seluruh kampus",
                  },
                ].map((member, index) => (
                  <div key={index} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        width: "128px",
                        height: "128px",
                        background: "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)",
                        borderRadius: "50%",
                        margin: "0 auto 1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          background: "#fbbf24",
                          borderRadius: "50%",
                          border: "6px solid #fed7aa",
                        }}
                      ></div>
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1f2937", marginBottom: "0.5rem" }}>
                      {member.name}
                    </h3>
                    <p style={{ color: "#d97706", fontWeight: "600", marginBottom: "0.5rem" }}>{member.role}</p>
                    <p style={{ color: "#6b7280" }}>{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section
            style={{
              padding: "4rem 1rem",
              background: "linear-gradient(90deg, #d97706 0%, #ea580c 50%, #eab308 100%)",
              color: "white",
              textAlign: "center",
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Misi Kami</h2>
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#fef3c7",
                  maxWidth: "800px",
                  margin: "0 auto 2rem",
                  lineHeight: 1.6,
                }}
              >
                "Menyediakan donat berkualitas tinggi dengan harga terjangkau untuk mendukung perjalanan akademik
                mahasiswa di seluruh Indonesia. Kami berkomitmen untuk menjadi teman setia di setiap langkah perkuliahan
                kalian."
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "2rem",
                  marginTop: "3rem",
                }}
              >
                {[
                  { number: "1000+", label: "Mahasiswa Dilayani" },
                  { number: "5+", label: "Kampus Partner" },
                  { number: "24/7", label: "Siap Melayani" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{stat.number}</div>
                    <div style={{ color: "#fef3c7" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Location Page */}
      {currentPage === "location" && (
        <div style={{ paddingTop: "2rem" }}>
          <section
            style={{
              background: "linear-gradient(135deg, #d97706 0%, #ea580c 50%, #eab308 100%)",
              color: "white",
              padding: "4rem 1rem",
              textAlign: "center",
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Lokasi Kami</h1>
              <p style={{ fontSize: "1.2rem", color: "#fef3c7" }}>Temukan outlet Donat 77 terdekat dari lokasi Anda</p>
            </div>
          </section>

          {/* Locations List */}
          <section style={{ padding: "4rem 1rem", background: "linear-gradient(135deg, #fffbeb 0%, #fed7aa 100%)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}
              >
                {locations.map((location, index) => (
                  <div
                    key={index}
                    style={{
                      background: "white",
                      borderRadius: "1rem",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      overflow: "hidden",
                      transition: "transform 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <div
                      style={{
                        height: "200px",
                        background: "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "96px",
                          height: "96px",
                          background: "#fbbf24",
                          borderRadius: "50%",
                          border: "8px solid #fed7aa",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            background: "#d97706",
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1rem" }}>
                        {location.name}
                      </h3>

                      <div style={{ marginBottom: "1rem" }}>
                        <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                          <MapPin size={18} style={{ color: "#d97706", marginRight: "0.5rem", marginTop: "0.25rem" }} />
                          <div>
                            <h4 style={{ fontWeight: "600", color: "#1f2937", marginBottom: "0.25rem" }}>Alamat</h4>
                            <p style={{ color: "#6b7280" }}>{location.address}</p>
                          </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                          <Phone size={18} style={{ color: "#d97706", marginRight: "0.5rem", marginTop: "0.25rem" }} />
                          <div>
                            <h4 style={{ fontWeight: "600", color: "#1f2937", marginBottom: "0.25rem" }}>Telepon</h4>
                            <p style={{ color: "#6b7280" }}>{location.phone}</p>
                          </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "flex-start" }}>
                          <Clock size={18} style={{ color: "#d97706", marginRight: "0.5rem", marginTop: "0.25rem" }} />
                          <div>
                            <h4 style={{ fontWeight: "600", color: "#1f2937", marginBottom: "0.25rem" }}>
                              Jam Operasional
                            </h4>
                            <p style={{ color: "#6b7280", margin: 0 }}>Senin - Jumat: {location.hours.weekday}</p>
                            <p style={{ color: "#6b7280", margin: 0 }}>Sabtu - Minggu: {location.hours.weekend}</p>
                          </div>
                        </div>
                      </div>

                      <div style={{ marginTop: "1.5rem" }}>
                        <h4 style={{ fontWeight: "600", color: "#1f2937", marginBottom: "0.5rem" }}>Fasilitas</h4>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                          {location.features.map((feature, idx) => (
                            <div key={idx} style={{ display: "flex", alignItems: "center" }}>
                              <div
                                style={{
                                  width: "8px",
                                  height: "8px",
                                  background: "#d97706",
                                  borderRadius: "50%",
                                  marginRight: "0.5rem",
                                }}
                              ></div>
                              <span style={{ color: "#6b7280", fontSize: "0.9rem" }}>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
                        <button
                          onClick={() =>
                            window.open(`https://maps.google.com/?q=${encodeURIComponent(location.address)}`, "_blank")
                          }
                          style={{
                            flex: 1,
                            background: "linear-gradient(90deg, #f59e0b 0%, #ea580c 100%)",
                            color: "white",
                            padding: "0.75rem",
                            borderRadius: "9999px",
                            border: "none",
                            cursor: "pointer",
                            fontWeight: "500",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <MapPin size={16} />
                          <span>Buka Maps</span>
                        </button>
                        <button
                          onClick={() => window.open(`tel:${location.phone}`, "_blank")}
                          style={{
                            flex: 1,
                            background: "white",
                            color: "#d97706",
                            padding: "0.75rem",
                            borderRadius: "9999px",
                            border: "1px solid #f59e0b",
                            cursor: "pointer",
                            fontWeight: "500",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <Phone size={16} />
                          <span>Hubungi</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Transportation Options */}
          <section style={{ padding: "4rem 1rem", background: "white" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1rem" }}>
                  Cara Menuju Lokasi
                </h2>
                <p style={{ color: "#6b7280", fontSize: "1.1rem" }}>
                  Berbagai pilihan transportasi untuk mencapai outlet kami
                </p>
              </div>

              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}
              >
                {[
                  { icon: "🚗", title: "Mobil", description: "Parkir tersedia di semua lokasi" },
                  { icon: "🏍️", title: "Motor/Sepeda", description: "Area parkir khusus kendaraan roda dua" },
                  { icon: "🚶", title: "Jalan Kaki", description: "Akses mudah dari berbagai titik kampus" },
                ].map((option, index) => (
                  <div
                    key={index}
                    style={{
                      textAlign: "center",
                      padding: "2rem",
                      background: "#f9fafb",
                      borderRadius: "1rem",
                    }}
                  >
                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{option.icon}</div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1f2937", marginBottom: "0.5rem" }}>
                      {option.title}
                    </h3>
                    <p style={{ color: "#6b7280" }}>{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* New Location CTA */}
          <section
            style={{
              padding: "4rem 1rem",
              background: "linear-gradient(90deg, #d97706 0%, #ea580c 50%, #eab308 100%)",
              color: "white",
              textAlign: "center",
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
                Ingin Outlet di Lokasi Anda?
              </h2>
              <p style={{ fontSize: "1.25rem", color: "#fef3c7", maxWidth: "600px", margin: "0 auto 2rem" }}>
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
                style={{
                  background: "linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)",
                  color: "#92400e",
                  padding: "1rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Diskusi Kerjasama Outlet
              </button>
            </div>
          </section>
        </div>
      )}

      {/* Contact Page */}
      {currentPage === "contact" && (
        <div style={{ paddingTop: "2rem" }}>
          <section
            style={{
              background: "linear-gradient(135deg, #d97706 0%, #ea580c 50%, #eab308 100%)",
              color: "white",
              padding: "4rem 1rem",
              textAlign: "center",
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Hubungi Kami</h1>
              <p style={{ fontSize: "1.2rem", color: "#fef3c7" }}>Siap melayani pemesanan dan pertanyaan Anda 24/7</p>
            </div>
          </section>

          <section style={{ padding: "4rem 1rem", background: "white" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}
              >
                {[
                  {
                    icon: Phone,
                    title: "WhatsApp",
                    description: "Chat langsung untuk pemesanan",
                    action: () => window.open("https://wa.me/6281234567890", "_blank"),
                  },
                  {
                    icon: MapPin,
                    title: "Lokasi",
                    description: "Area Kampus Universitas\nJl. Universitas No. 123",
                    action: null,
                  },
                  {
                    icon: Clock,
                    title: "Jam Buka",
                    description: "Senin - Jumat: 07:00 - 20:00\nSabtu - Minggu: 08:00 - 19:00",
                    action: null,
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    style={{
                      textAlign: "center",
                      padding: "2rem",
                      background: "#f9fafb",
                      borderRadius: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        background: "linear-gradient(90deg, #f59e0b 0%, #ea580c 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1rem",
                      }}
                    >
                      <contact.icon size={32} style={{ color: "white" }} />
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1f2937", marginBottom: "0.5rem" }}>
                      {contact.title}
                    </h3>
                    <p style={{ color: "#6b7280", marginBottom: "1rem", whiteSpace: "pre-line" }}>
                      {contact.description}
                    </p>
                    {contact.action && (
                      <button
                        onClick={contact.action}
                        style={{
                          background: "linear-gradient(90deg, #f59e0b 0%, #ea580c 100%)",
                          color: "white",
                          padding: "0.75rem 1.5rem",
                          borderRadius: "9999px",
                          border: "none",
                          cursor: "pointer",
                          fontWeight: "500",
                        }}
                      >
                        Hubungi Sekarang
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Shopping Cart */}
      {isCartOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 50,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0, 0, 0, 0.5)" }}
            onClick={() => setIsCartOpen(false)}
          ></div>
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "400px",
              background: "white",
              height: "100%",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                padding: "1rem",
                borderBottom: "1px solid #e5e7eb",
                background: "linear-gradient(90deg, #f59e0b 0%, #ea580c 100%)",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <ShoppingCart size={20} />
                Keranjang Belanja
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                style={{
                  padding: "0.25rem",
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                <X size={24} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "300px",
                  padding: "1rem",
                }}
              >
                <ShoppingCart size={64} style={{ color: "#d1d5db", marginBottom: "1rem" }} />
                <p style={{ color: "#6b7280", textAlign: "center" }}>Keranjang belanja Anda kosong</p>
              </div>
            ) : (
              <>
                <div style={{ padding: "1rem" }}>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        borderBottom: "1px solid #f3f4f6",
                        paddingBottom: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          background: "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)",
                          borderRadius: "0.5rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            background: "#fbbf24",
                            borderRadius: "50%",
                            border: "4px solid #fed7aa",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              background: "#d97706",
                              borderRadius: "50%",
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div style={{ marginLeft: "1rem", flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <h3 style={{ fontWeight: "500", color: "#1f2937" }}>{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              color: "#6b7280",
                            }}
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <p style={{ color: "#d97706", fontWeight: "600" }}>{item.price}</p>
                        <div style={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            style={{
                              padding: "0.25rem",
                              background: "#f3f4f6",
                              border: "none",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                          >
                            <Minus size={14} />
                          </button>
                          <span style={{ margin: "0 0.5rem", width: "32px", textAlign: "center" }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            style={{
                              padding: "0.25rem",
                              background: "#f3f4f6",
                              border: "none",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ padding: "1rem", background: "#fffbeb", borderTop: "1px solid #fbbf24" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <span style={{ color: "#6b7280" }}>Subtotal</span>
                    <span style={{ fontWeight: "600" }}>{formatRupiah(getTotalPrice())}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span style={{ color: "#6b7280" }}>Jumlah Item</span>
                    <span style={{ fontWeight: "600" }}>{getTotalItems()} item</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    style={{
                      width: "100%",
                      background: "linear-gradient(90deg, #f59e0b 0%, #ea580c 100%)",
                      color: "white",
                      padding: "0.75rem",
                      borderRadius: "9999px",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Send size={18} />
                    Pesan via WhatsApp
                  </button>
                  <button
                    onClick={clearCart}
                    style={{
                      width: "100%",
                      marginTop: "0.5rem",
                      background: "white",
                      color: "#6b7280",
                      padding: "0.5rem",
                      borderRadius: "9999px",
                      border: "1px solid #d1d5db",
                      cursor: "pointer",
                      fontWeight: "500",
                    }}
                  >
                    Kosongkan Keranjang
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        style={{
          background: "linear-gradient(90deg, #b45309 0%, #ea580c 50%, #d97706 100%)",
          color: "white",
          padding: "3rem 1rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Donat 77</h3>
          <p style={{ color: "#fef3c7", marginBottom: "1rem" }}>
            Donat segar dan lezat untuk mahasiswa. Murah meriah, kenyang maksimal!
          </p>
          <p style={{ color: "#fed7aa" }}>© 2024 Donat 77. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  )
}
