// src/app/components/SegmentsSection.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Biblioteca para animações

const segments = [
  { src: '/varejo.png', alt: 'Varejo', title: 'Varejo' },
  { src: '/judiciario.png', alt: 'Judiciário', title: 'Judiciário' },
  { src: '/publico.png', alt: 'Setor Público', title: 'Setor Público' },
  { src: '/financeiro.png', alt: 'Financeiro', title: 'Financeiro' },
];

interface Segment {
  src: string;
  alt: string;
  title: string;
}

const SegmentCard: React.FC<Segment> = ({ src, alt, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300"
      role="button"
      tabIndex={0}
      aria-label={`Segmento de atuação: ${title}`}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          // Ação ao pressionar Enter (se necessário)
        }
      }}
    >
      {/* Imagem do Segmento */}
      <div className="relative w-full h-48 md:h-64">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 25vw"
          className="object-cover transition-transform duration-500 hover:scale-110"
          priority={false}
        />
      </div>

      {/* Sobreposição com Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
        <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
        {/* Botão "Saiba Mais" removido */}
      </div>
    </motion.div>
  );
};

const SegmentsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-6">
          Segmentos de Atuação
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          Oferecemos soluções para diversos segmentos do mercado, garantindo a excelência e a satisfação de nossos clientes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment, index) => (
            <SegmentCard
              key={index}
              src={segment.src}
              alt={segment.alt}
              title={segment.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;