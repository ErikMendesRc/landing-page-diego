// src/app/components/PartnersSection.tsx
"use client";

import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { src: '/fortinet.jpg', alt: 'Fortinet', link: 'https://www.fortinet.com.br/' },
  { src: '/microsoft.png', alt: 'Microsoft', link: 'https://www.microsoft.com/' },
  { src: '/paloalto.png', alt: 'Palo Alto Networks', link: 'https://www.paloaltonetworks.com/' },
  { src: '/logitech.png', alt: 'Logitech', link: 'https://www.logitech.com/' },
  { src: '/nutanix.png', alt: 'Nutanix', link: 'https://www.nutanix.com/' },
  // Adicione mais parceiros conforme necessário
];

interface Partner {
  src: string;
  alt: string;
  link?: string; // Link opcional para o site do parceiro
}

const PartnerCard: React.FC<Partner> = ({ src, alt, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}
      className="flex items-center justify-center bg-white rounded-lg p-4 transition-transform duration-300"
      role="img"
      aria-label={alt}
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            width={150}
            height={100}
            className="object-contain grayscale hover:grayscale-0 transition duration-500"
          />
        </a>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={150}
          height={100}
          className="object-contain grayscale hover:grayscale-0 transition duration-500"
        />
      )}
    </motion.div>
  );
};

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-6">
          Nossos Parceiros
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          Trabalhamos com líderes de mercado para oferecer as melhores soluções tecnológicas.
        </p>
        <div className="relative">
          <Marquee
            speed={50}
            pauseOnHover={false}
            gradient={false}
            className="flex items-center"
          >
            {partners.map((partner, index) => (
              <div key={index} className="mx-8">
                <PartnerCard src={partner.src} alt={partner.alt} link={partner.link} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partners;