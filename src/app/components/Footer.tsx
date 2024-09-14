// src/app/components/Footer.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/logo1.png"
                  alt="NGR Technology Logo"
                  width={225} // Aumentado de 150 para 225
                  height={75} // Aumentado de 50 para 75
                  className="object-contain
                             sm:w-48 sm:h-24
                             md:w-60 md:h-30
                             lg:w-72 lg:h-36
                             xl:w-84 xl:h-42"
                  priority // Carregamento prioritário para o logo
                />
              </div>
            </Link>
            <p className="mt-4 text-gray-400">
              Na NGR Technology, nos dedicamos a oferecer soluções tecnológicas que impulsionam o crescimento do seu negócio.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#sobre" className="hover:text-white transition-colors duration-300">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors duration-300">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#segmentos" className="hover:text-white transition-colors duration-300">
                  Segmentos
                </Link>
              </li>
              <li>
                <Link href="#parceiros" className="hover:text-white transition-colors duration-300">
                  Parceiros
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 text-blue-600 mr-2" />
                <span>RUA COPAIBA LOTE 1 - DF PLAZA SALA 920<br />AGUAS CLARAS BRASILIA DF</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 text-blue-600 mr-2" />
                <span>+55 62 9840-2599</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 text-blue-600 mr-2" />
                <span>ndtecnologiadf@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} NGR Technology. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Política de Privacidade
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Termos de Serviço
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Créditos de Desenvolvimento */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Desenvolvido por <a href="https://www.eebtecnologia.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">E&B Tecnologia</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;