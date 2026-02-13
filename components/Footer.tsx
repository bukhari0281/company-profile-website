export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigasi',
      links: [
        { label: 'Beranda', href: '#home' },
        { label: 'Tentang Kami', href: '#about' },
        { label: 'Layanan', href: '#services' },
        { label: 'Portofolio', href: '#portfolio' },
      ],
    },
    {
      title: 'Layanan',
      links: [
        { label: 'Website Korporat', href: '#services' },
        { label: 'E-Commerce', href: '#services' },
        { label: 'Responsive Design', href: '#services' },
        { label: 'SEO Optimization', href: '#services' },
      ],
    },
    {
      title: 'Hubungi Kami',
      links: [
        { label: '+62 812-1234-5678 (WhatsApp)', href: 'https://wa.me/6281212345678' },
        { label: 'info@webprobatam.com', href: 'mailto:info@webprobatam.com' },
        { label: 'Jl. Sudirman No. 123, Batam', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-[#0A2463] text-white">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0A2463] font-bold text-lg">W</span>
              </div>
              <span className="font-poppins font-bold text-xl">WebPro</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Jasa pembuatan website profesional untuk bisnis Anda di Batam dan sekitarnya.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all"
                title="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all"
                title="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all"
                title="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-blue-100 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100 text-sm">
            &copy; {currentYear} WebPro Batam. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-blue-100">
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/6281212345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40"
        title="Chat di WhatsApp"
      >
        💬
      </a>
    </footer>
  );
}
