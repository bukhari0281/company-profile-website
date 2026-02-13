'use client';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      company: 'Toko Fashion "Style Batam"',
      image: '👨‍💼',
      rating: 5,
      text: 'WebPro Batam berhasil mengubah bisnis online kami. Website e-commerce yang mereka buat sangat user-friendly dan meningkatkan penjualan kami hingga 200% dalam 3 bulan pertama.',
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      company: 'Kafe Specialty Coffee "Bean Batam"',
      image: '👩‍💼',
      rating: 5,
      text: 'Tim WebPro Batam sangat profesional dan responsif. Website mereka tidak hanya cantik secara desain, tapi juga meningkatkan traffic Google kami secara signifikan.',
    },
    {
      id: 3,
      name: 'Ahmad Wijaya',
      company: 'Agency Digital Marketing "Nexus Digital"',
      image: '👨‍💻',
      rating: 5,
      text: 'Kualitas layanan WebPro Batam luar biasa. Mereka mengerti kebutuhan bisnis kami dan memberikan solusi yang tepat. Harga juga sangat kompetitif dibanding kompetitor.',
    },
  ];

  return (
    <section id="testimonial" className="section-padding bg-[#F2F2F2]">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Dengarkan testimoni dari klien-klien kami yang puas
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-600 leading-relaxed mb-6 text-sm italic">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0A2463] to-blue-600 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-500 text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 text-lg mb-6">
            Ingin menjadi klien kami berikutnya?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Hubungi Kami Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
