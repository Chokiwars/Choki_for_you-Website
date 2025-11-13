import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentArtworkIndex, setCurrentArtworkIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const featuredArtworks = [
  {
    id: 1,
    title: "Sonhos Violetas",
    image: "https://i.pinimg.com/736x/34/77/f5/3477f5bc16cda74b0b05fcdaacd9c0ff.jpg",
    alt: "Um gato sob a luz do luar numa maravilhosa noite estrelada roxa",
    price: "R$ 2.500,00",
    description: "Um gato sob a luz do luar numa maravilhosa noite estrelada roxa"
  },
  {
    id: 2,
    title: "Bem me quer, Mal me quer",
    image: "https://57f24e445b.cbaul-cdnwnd.com/38a00c7c7576a2c66768ffa797741dd9/system_preview_detail_200000089-bd289bf1bf/rosa%20roxa%201.jpg",
    price: "R$ 1.500,00",
    description: "Rosa tão perfeita como o mais doce violeta"
  },
  {
    id: 3,
    title: "Oceano Roxo",
    image: "https://i.pinimg.com/736x/5e/9a/93/5e9a93c4d90c5d89b34f8877436c7268.jpg",
    alt: "Um oceano sendo carregado pelas ondas da imaginação",
    price: "R$ 3.500,00",
    description: "Uma jornada através das galáxias da imaginação"
  },
  {
    id: 4,
    title: "Particulas Roxas",
    image: "https://cdn.pixabay.com/photo/2014/04/04/21/56/bokeh-313993_640.jpg",
    alt: "Particulas roxas voando no ar",
    price: "R$ 1.000,00",
    description: "Particulas roxas no ar"
  }
];


  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentArtworkIndex((prev) => (prev + 1) % featuredArtworks?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredArtworks?.length]);

  const currentArtwork = featuredArtworks?.[currentArtworkIndex];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-light via-purple-medium to-purple-deep overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-electric/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-accent/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-dark/40 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-purple-dark">
                <Icon name="Palette" size={16} />
                <span className="text-sm font-body font-body-medium">Arte Criada Para Você</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-heading font-heading-bold text-white leading-tight">
                Criando Arte que
                <span className="block text-gradient-purple bg-gradient-to-r from-accent to-purple-electric bg-clip-text text-transparent">
                  Fala à Sua Alma
                </span>
              </h1>
              
              <p className="text-xl text-white/90 font-body leading-relaxed max-w-lg">
                Bem-vindo ao universo roxo da Choki, onde cada pincelada carrega emoção e cada obra é criada especialmente para tocar seu coração. Descubra arte original que transforma espaços e desperta sentimentos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/gallery">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Image"
                  iconPosition="left"
                  className="bg-white text-purple-deep hover:bg-white/90 shadow-purple w-full sm:w-auto">

                  Explorar Galeria
                </Button>
              </Link>
              
              <Link to="/commissions">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Palette"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-purple-deep w-full sm:w-auto">

                  Encomendar Arte
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-heading font-heading-bold text-white">150+</div>
                <div className="text-sm text-white/80 font-body">Obras Criadas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-heading-bold text-white">89</div>
                <div className="text-sm text-white/80 font-body">Clientes Felizes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-heading-bold text-white">5</div>
                <div className="text-sm text-white/80 font-body">Anos de Arte</div>
              </div>
            </div>
          </div>

          {/* Right Content - Artwork Carousel */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative">
              {/* Main Artwork Display */}
              <div className="relative bg-white rounded-2xl p-6 shadow-purple-hover">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={currentArtwork?.image}
                    alt={currentArtwork?.alt}
                    className="w-full h-full object-cover transition-all duration-700" />

                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-heading font-heading-bold text-text-primary">
                      {currentArtwork?.title}
                    </h3>
                    <span className="text-lg font-body font-body-medium text-primary">
                      {currentArtwork?.price}
                    </span>
                  </div>
                  
                  <p className="text-text-secondary font-body">
                    {currentArtwork?.description}
                  </p>
                  
                  <div className="flex items-center space-x-3 pt-2">
                    <Button
                      variant="default"
                      size="sm"
                      iconName="Eye"
                      iconPosition="left"
                      className="bg-gradient-cta">

                      Ver Detalhes
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Heart"
                      iconPosition="left">

                      Favoritar
                    </Button>
                  </div>
                </div>
              </div>

              {/* Artwork Navigation */}
              <div className="flex items-center justify-center space-x-2 mt-6">
                {featuredArtworks?.map((_, index) =>
                <button
                  key={index}
                  onClick={() => setCurrentArtworkIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentArtworkIndex ?
                  'bg-white shadow-lg scale-125' :
                  'bg-white/50 hover:bg-white/70'}`
                  }
                  aria-label={`Ver obra ${index + 1}`} />

                )}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent rounded-full p-3 shadow-lg animate-bounce">
                <Icon name="Sparkles" size={20} color="white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-purple-electric rounded-full p-3 shadow-lg">
                <Icon name="Brush" size={20} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-white/80">
          <span className="text-sm font-body">Descubra Mais</span>
          <Icon name="ChevronDown" size={24} />
        </div>
      </div>
    </section>);

};

export default HeroSection;