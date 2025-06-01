"use client"

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-600 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Falling Donuts Animation */}
        <div className="relative mb-8">
          <div className="animate-bounce delay-100">
            <div className="w-20 h-20 bg-amber-200 rounded-full border-8 border-orange-300 mx-auto mb-4 relative">
              <div className="w-8 h-8 bg-amber-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <div className="animate-bounce delay-300">
            <div className="w-16 h-16 bg-yellow-200 rounded-full border-6 border-orange-300 mx-auto relative">
              <div className="w-6 h-6 bg-amber-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">Donat 77</h1>
        <p className="text-amber-100 text-lg">Memuat kelezatan...</p>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-orange-300 rounded-full mx-auto mt-6 overflow-hidden">
          <div className="h-full bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
