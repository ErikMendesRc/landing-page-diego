// src/app/components/HighlightsSection.tsx
"use client";

import React from 'react';
import { FaThumbsUp, FaStar, FaClock } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaThumbsUp className="text-white w-12 h-12" />,
    number: '+100',
    label: 'Clientes Atendidos',
    color: 'bg-green-500',
  },
  {
    icon: <FaStar className="text-white w-12 h-12" />,
    number: '+10',
    label: 'Certificações',
    color: 'bg-blue-500',
  },
  {
    icon: <FaClock className="text-white w-12 h-12" />,
    number: '+30k',
    label: 'Horas de Projeto',
    color: 'bg-purple-500',
  },
];

const HighlightCard: React.FC<{ icon: React.ReactNode; number: string; label: string; color: string }> = ({
  icon,
  number,
  label,
  color,
}) => {
  return (
    <div
      className={`flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
    >
      <div className={`p-4 rounded-full ${color} mb-4`}>
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-gray-800 mb-2">{number}</h3>
      <p className="text-lg text-gray-600">{label}</p>
    </div>
  );
};

const Highlight = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-6">Nossa Empresa</h2>
        <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-16">
          A NRG TECHNOLOGY é uma empresa brasileira que fornece soluções inovadoras para o crescimento do seu negócio. Com anos de experiência, oferecemos serviços de alta qualidade em diversos segmentos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={index}
              icon={highlight.icon}
              number={highlight.number}
              label={highlight.label}
              color={highlight.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlight;