'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'WhatsApp',
      value: '+62 812-1234-5678',
      link: 'https://wa.me/6281212345678',
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'info@webprobatam.com',
      link: 'mailto:info@webprobatam.com',
    },
    {
      icon: '📍',
      title: 'Lokasi',
      value: 'Jl. Sudirman No. 123, Batam',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">
            Hubungi Kami
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Ada pertanyaan atau ingin memulai proyek baru? Hubungi kami dan kami akan segera meresponse Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="block p-6 bg-[#F2F2F2] rounded-xl hover:bg-[#0A2463] hover:text-white transition-all duration-300 group cursor-pointer"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="font-semibold text-slate-900 group-hover:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-slate-600 group-hover:text-blue-100 text-sm">
                  {info.value}
                </p>
              </a>
            ))}

            {/* Jam Operasional */}
            <div className="p-6 bg-[#0A2463] text-white rounded-xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">🕐</span>
                Jam Operasional
              </h3>
              <div className="space-y-2 text-sm">
                <p>Senin - Jumat: 09:00 - 18:00</p>
                <p>Sabtu: 10:00 - 16:00</p>
                <p>Minggu: Tutup</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Terima Kasih!</h3>
                  <p className="text-slate-600">
                    Pesan Anda telah kami terima. Tim kami akan menghubungi Anda dalam waktu 24 jam.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2463] focus:border-transparent transition-all"
                      placeholder="Nama Anda"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2463] focus:border-transparent transition-all"
                      placeholder="email@example.com"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Nomor Telepon / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2463] focus:border-transparent transition-all"
                      placeholder="0812-1234-5678"
                    />
                  </div>

                  {/* Company Input */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Nama Perusahaan / Bisnis (Opsional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2463] focus:border-transparent transition-all"
                      placeholder="Nama perusahaan Anda"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Pesan / Deskripsi Proyek
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2463] focus:border-transparent transition-all resize-none"
                      placeholder="Ceritakan kebutuhan website Anda..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Mengirim...
                      </>
                    ) : (
                      'Kirim Pesan'
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    Kami akan merespon pesan Anda dalam waktu 24 jam
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
