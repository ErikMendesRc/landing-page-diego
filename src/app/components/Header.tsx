// src/app/components/Header.tsx
"use client"; // Diretiva para indicar que este é um Componente de Cliente

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones de menu de hambúrguer e fechamento

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Aumentado de h-16 para h-20 */}
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo1.png"
                alt="SuaEmpresa Logo"
                width={240} // Aumentado de 120 para 240
                height={100} // Aumentado de 50 para 100
                className="object-contain"
                priority // Carregamento prioritário para o logo
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="#sobre" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Sobre
            </Link>
            <Link href="#servicos" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Serviços
            </Link>
            <Link href="#segmentos" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Segmentos
            </Link>
            <Link href="#parceiros" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Parceiros
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Fechar menu principal' : 'Abrir menu principal'}
            >
              {/* Ícone Hamburger ou Fechamento */}
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md" id="mobile-menu">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#sobre" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition duration-300">
              Sobre
            </Link>
            <Link href="#servicos" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition duration-300">
              Serviços
            </Link>
            <Link href="#segmentos" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition duration-300">
              Segmentos
            </Link>
            <Link href="#parceiros" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition duration-300">
              Parceiros
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;