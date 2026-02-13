'use client';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 bg-gradient-to-br from-blue-50 to-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Konten Teks */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2463] leading-tight">
              Wujudkan Website Impian Bisnis Anda
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Kami menyediakan jasa pembuatan website profesional dan modern untuk meningkatkan kehadiran digital bisnis Anda di Batam dan sekitarnya.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="btn-primary"
              >
                Mulai Proyek Anda
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Lihat Layanan Kami
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#0A2463]">150+</p>
                <p className="text-sm text-slate-600">Website Dibuat</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#0A2463]">98%</p>
                <p className="text-sm text-slate-600">Kepuasan Klien</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#0A2463]">5+</p>
                <p className="text-sm text-slate-600">Tahun Berpengalaman</p>
              </div>
            </div>
          </div>

          {/* Gambar Hero */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-full h-96 bg-gradient-to-br from-[#0A2463] to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-lg font-semibold">Solusi Website Terpercaya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
