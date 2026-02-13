export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Gambar About */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-full h-80 bg-gradient-to-br from-[#0A2463] to-blue-700 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">💼</div>
                <p className="text-lg font-semibold">Tim Profesional & Berpengalaman</p>
              </div>
            </div>
          </div>

          {/* Konten Tentang */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-2">
                Tentang WebPro Batam
              </h2>
              <div className="w-12 h-1 bg-[#0A2463] rounded"></div>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg">
              WebPro Batam adalah perusahaan jasa pembuatan website yang berdedikasi untuk membantu bisnis lokal di Batam berkembang melalui kehadiran digital yang kuat.
            </p>

            <p className="text-slate-600 leading-relaxed text-lg">
              Dengan tim developer dan designer berpengalaman lebih dari 5 tahun, kami telah membantu ratusan klien mencapai tujuan bisnis mereka melalui website yang modern, responsif, dan SEO-friendly.
            </p>

            {/* Nilai-nilai */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#0A2463] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Profesional & Terpercaya</h3>
                  <p className="text-slate-600 text-sm">Kami berkomitmen memberikan hasil terbaik dengan standar kualitas tinggi</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#0A2463] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Inovatif & Modern</h3>
                  <p className="text-slate-600 text-sm">Menggunakan teknologi terkini untuk hasil yang optimal dan future-proof</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#0A2463] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Support & Maintenance</h3>
                  <p className="text-slate-600 text-sm">Dukungan penuh pasca-launch untuk memastikan website Anda selalu optimal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
