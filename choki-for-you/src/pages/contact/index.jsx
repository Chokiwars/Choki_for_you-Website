import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import StudioInfo from './components/StudioInfo';
import FAQ from './components/FAQ';
import SocialMedia from './components/SocialMedia';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contato - Choki For You Official | Arte Personalizada em São Paulo</title>
        <meta 
          name="description" 
          content="Entre em contato com Choki For You para compras, encomendas personalizadas, colaborações e visitas ao ateliê. Múltiplos canais de comunicação disponíveis em São Paulo, Brasil." 
        />
        <meta name="keywords" content="contato artista, encomenda arte personalizada, ateliê São Paulo, comprar arte original, colaboração artística" />
        <meta property="og:title" content="Contato - Choki For You Official" />
        <meta property="og:description" content="Entre em contato para compras, encomendas e colaborações artísticas. Ateliê em São Paulo com atendimento personalizado." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://chokiforyou.com.br/contact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <ContactHero />
          
          {/* Contact Methods */}
          <ContactMethods />
          
          {/* Contact Form */}
          <ContactForm />
          
          {/* Studio Information */}
          <StudioInfo />
          
          {/* FAQ Section */}
          <FAQ />
          
          {/* Social Media */}
          <SocialMedia />
        </main>
      </div>
    </>
  );
};

export default Contact;