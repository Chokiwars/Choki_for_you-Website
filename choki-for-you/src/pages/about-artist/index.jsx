import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PersonalStory from './components/PersonalStory';
import ArtisticJourney from './components/ArtisticJourney';
import StudioTour from './components/StudioTour';
import Achievements from './components/Achievements';
import CallToAction from './components/CallToAction';

const AboutArtist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sobre a Artista - Choki For You Official | História, Jornada e Estúdio</title>
        <meta 
          name="description" 
          content="Conheça a história pessoal, jornada artística e estúdio da artista Choki. Descubra os valores, conquistas e processo criativo por trás de cada obra única em tons roxos." 
        />
        <meta name="keywords" content="artista brasileira, história pessoal, jornada artística, estúdio de arte, processo criativo, arte roxa, biografia artista" />
        <meta property="og:title" content="Sobre a Artista Choki - História e Jornada Criativa" />
        <meta property="og:description" content="Uma jornada criativa marcada por paixão, autenticidade e conexão emocional através da arte em tons roxos." />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href="/about-artist" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          <PersonalStory />
          <ArtisticJourney />
          <StudioTour />
          <Achievements />
          <CallToAction />
        </main>
      </div>
    </>
  );
};

export default AboutArtist;