import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedGallery from './components/FeaturedGallery';
import ArtistIntroduction from './components/ArtistIntroduction';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Choki For You Official</title>
        <meta 
          name="description" 
          content="Descubra o universo roxo da artista Choki. Obras originais, comissões personalizadas e arte que transforma espaços. Criando arte especialmente para você há mais de 5 anos." />
        <meta name="keywords" content="arte roxa, pintura original, comissões personalizadas, artista brasileira, Choki, arte contemporânea, decoração, galeria online" />
        <meta property="og:title" content="Choki For You Official - Arte Roxa que Fala à Sua Alma" />
        <meta property="og:description" content="Descubra o universo roxo da artista Choki. Obras originais, comissões personalizadas e arte que transforma espaços." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chokiforyou.com.br" />
        <meta property="og:image" content="https://chokiforyou.com.br/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Choki For You Official - Arte Roxa que Fala à Sua Alma" />
        <meta name="twitter:description" content="Descubra o universo roxo da artista Choki. Obras originais, comissões personalizadas e arte que transforma espaços." />
        <link rel="canonical" href="https://chokiforyou.com.br" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <FeaturedGallery />
          <ArtistIntroduction />
          <TestimonialsSection />
          <NewsletterSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Homepage;