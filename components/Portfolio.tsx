'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Toko Online Fashion Lokal',
      category: 'ecommerce',
      description: 'Platform e-commerce modern untuk butik fashion dengan katalog produk lengkap',
      image: '/placeholder-1.png', // Placeholder image path
      tags: ['E-Commerce', 'Responsive', 'SEO'],
    },
    {
      id: 2,
      title: 'Website Kafe Specialty Coffee',
      category: 'corporate',
      description: 'Website cafe dengan menu digital, reservasi online, dan blog artikel',
      image: '/placeholder-2.png', // Placeholder image path
      tags: ['Corporate', 'Blog', 'Reservasi'],
    },
    {
      id: 3,
      title: 'Portal Pendaftaran Seminar',
      category: 'corporate',
      description: 'Portal pendaftaran online dengan sistem tiket dan email konfirmasi otomatis',
      image: '/placeholder-3.png', // Placeholder image path
      tags: ['Corporate', 'Automation'],
    },
    {
      id: 4,
      title: 'Marketplace Produk Lokal',
      category: 'ecommerce',
      description: 'Platform marketplace untuk seller lokal dengan sistem rating dan review',
      image: '/placeholder-4.png', // Placeholder image path
      tags: ['E-Commerce', 'Marketplace'],
    },
    {
      id: 5,
      title: 'Website Agency Digital Marketing',
      category: 'corporate',
      description: 'Website agency profesional dengan portfolio, case studies, dan contact form',
      image: '/placeholder-5.png', // Placeholder image path
      tags: ['Corporate', 'Portfolio'],
    },
    {
      id: 6,
      title: 'Toko Online Produk Handmade',
      category: 'ecommerce',
      description: 'E-commerce untuk penjual handmade dengan sistem pembayaran terintegrasi',
      image: '/placeholder-6.png', // Placeholder image path
      tags: ['E-Commerce', 'Payment Gateway'],
    },
  ];

  const categories = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">
            Portofolio Kami
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Lihat beberapa proyek terbaik yang telah kami kerjakan untuk klien-klien kami
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#0A2463] text-white shadow-lg'
                  : 'bg-gray-200 text-slate-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={`https://via.placeholder.com/400x300.png?text=${encodeURIComponent(project.title)}`}
                  alt={`Contoh gambar untuk proyek ${project.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A2463] mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-[#F2F2F2] text-[#0A2463] rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full py-2 bg-[#0A2463] text-white rounded-lg font-medium hover:bg-blue-900 transition-colors duration-300">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
