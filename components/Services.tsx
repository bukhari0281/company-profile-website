export default function Services() {
  const services = [
    {
      icon: '🌐',
      title: 'Website Korporat',
      description: 'Website profesional untuk perusahaan dengan design modern dan fitur lengkap untuk membangun kredibilitas bisnis Anda.',
    },
    {
      icon: '🛍️',
      title: 'E-Commerce',
      description: 'Platform e-commerce yang powerful untuk menjual produk online dengan sistem pembayaran terintegrasi dan inventory management.',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Semua website kami dirancang fully responsive, terlihat sempurna di desktop, tablet, dan mobile devices.',
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Optimasi SEO lengkap untuk memastikan website Anda mudah ditemukan di search engine dan meningkatkan traffic organik.',
    },
    {
      icon: '⚡',
      title: 'Website Speed Optimization',
      description: 'Kecepatan website yang optimal adalah prioritas kami untuk memberikan pengalaman terbaik kepada pengunjung Anda.',
    },
    {
      icon: '🔒',
      title: 'Security & Maintenance',
      description: 'Keamanan data dan maintenance berkala untuk memastikan website Anda selalu aman dari ancaman cyber dan selalu update.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-[#F2F2F2]">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">
            Layanan Kami
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan website development yang komprehensif untuk memenuhi kebutuhan bisnis Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0A2463] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* CTA */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-[#0A2463] font-semibold text-sm hover:text-blue-700 transition-colors">
                  Pelajari Lebih Lanjut →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
