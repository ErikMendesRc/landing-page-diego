import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Highlight from './components/Highlight';
import SegmentsSection from './components/Segments';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NGR Technology - Soluções Inovadoras para Seu Negócio</title>
        <meta name="description" content="Na NGR Technology, oferecemos soluções tecnológicas para impulsionar o crescimento do seu negócio. Entre em contato conosco!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="NGR Technology - Soluções Inovadoras para Seu Negócio" />
        <meta property="og:description" content="Na NGR Technology, oferecemos soluções tecnológicas para impulsionar o crescimento do seu negócio. Entre em contato conosco!" />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <meta property="og:url" content="https://www.ngrtech.com.br" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NGR Technology - Soluções Inovadoras para Seu Negócio" />
        <meta name="twitter:description" content="Na NGR Technology, oferecemos soluções tecnológicas para impulsionar o crescimento do seu negócio. Entre em contato conosco!" />
        <meta name="twitter:image" content="/assets/twitter-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="bg-gray-100">
        <section id="servicos">
          <Hero />
        </section>
        
        <section id="sobre">
          <Highlight />
        </section>
        
        <section id="segmentos">
          <SegmentsSection />
        </section>
        
        <section id="parceiros">
          <Partners />
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Home;