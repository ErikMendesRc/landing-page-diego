// src/app/components/Hero.tsx
"use client"; // Diretiva para indicar que este é um Componente de Cliente

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const autoPlay = true;
  const slideDuration = 5000; // 5 segundos

  const slides = [
    {
      title: 'Venda de Hardwares de Alta Performance',
      image: '/hardware.png',
      description: 'Oferecemos uma ampla gama de hardwares de alta qualidade para impulsionar a performance do seu negócio.',
      link: '#servicos',
      linkText: 'Saiba Mais',
    },
    {
      title: 'Licenças de Softwares Oficiais',
      image: '/softwares.png',
      description: 'Adquira licenças de softwares oficiais com total segurança e suporte especializado.',
      link: '#servicos',
      linkText: 'Saiba Mais',
    },
    // Você pode adicionar mais slides aqui
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (autoPlay) {
      slideInterval.current = setInterval(() => {
        nextSlide();
      }, slideDuration);
    }

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentSlide]);

  const handleMouseEnter = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      slideInterval.current = setInterval(() => {
        nextSlide();
      }, slideDuration);
    }
  };

  return (
    <section
      className="relative w-full h-screen md:h-[600px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Hero Section com Carrossel de Slides"
    >
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            className="object-cover w-full h-full"
            priority={index === 0} // Prioriza o carregamento do primeiro slide
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-center items-center text-center text-white p-8">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl mb-6 drop-shadow-md max-w-2xl">
              {slide.description}
            </p>
            <Link
              href={slide.link}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-xl font-semibold transition-transform transform hover:scale-105 shadow-lg"
            >
              {slide.linkText}
            </Link>
          </div>
        </div>
      ))}

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition-colors"
        aria-label="Anterior Slide"
      >
        <MdChevronLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition-colors"
        aria-label="Próximo Slide"
      >
        <MdChevronRight size={30} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="text-white focus:outline-none"
            aria-label={`Ir para o slide ${index + 1}`}
          >
            {index === currentSlide ? (
              <FaCircle size={12} />
            ) : (
              <FaRegCircle size={12} />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;