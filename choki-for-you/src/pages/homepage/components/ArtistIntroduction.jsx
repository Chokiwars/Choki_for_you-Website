import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ArtistIntroduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const studioImages = [
  {
    src: "https://images.unsplash.com/photo-1528387775599-6d62a86861a0",
    alt: "Artist Choki painting in purple-themed studio with easel and colorful palette"
  },
  {
    src: "https://images.unsplash.com/photo-1596653038131-330fa75d23ab",
    alt: "Close-up of artist\'s hands mixing purple paint on palette with brushes"
  },
  {
    src: "https://images.unsplash.com/photo-1716114543499-b428eaa6ef2b",
    alt: "Artist\'s workspace showing purple paintings on easels and art supplies organized on table"
  }];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('artist-intro');
    if (section) observer?.observe(section);

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % studioImages?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [studioImages?.length]);

  return (
    <section id="artist-intro" className="py-20 bg-gradient-to-br from-purple-light/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary">
                <Icon name="User" size={16} />
                <span className="text-sm font-body font-body-medium">Conheça a Artista</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-heading font-heading-bold text-text-primary leading-tight">
                Olá, eu sou a
                <span className="block text-gradient-purple">Choki</span>
              </h2>
              
              <div className="space-y-4 text-lg text-text-secondary font-body leading-relaxed">
                <p>
                  Há mais de 5 anos, mergulho no universo das cores roxas, criando obras que 
                  conectam almas e transformam espaços. Cada pincelada carrega uma parte de mim 
                  e uma mensagem especial para você.
                </p>
                
                <p>
                  Minha jornada artística começou com a descoberta de que o roxo não é apenas 
                  uma cor - é uma emoção, uma energia, uma forma de expressar o que palavras 
                  não conseguem dizer. Através da minha arte, convido você a explorar esse 
                  universo mágico comigo.
                </p>
                
                <p>
                  Acredito que cada obra tem seu dono especial, alguém que vai se conectar 
                  profundamente com ela. Por isso, além das obras prontas, ofereço comissões 
                  personalizadas - arte criada especialmente para você, com sua energia e 
                  sua história.
                </p>
              </div>
            </div>

            {/* Artist Stats */}
            <div className="grid grid-cols-2 gap-6 py-6 border-t border-border">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-primary">
                  <Icon name="Award" size={20} />
                  <span className="text-2xl font-heading font-heading-bold">150+</span>
                </div>
                <p className="text-sm text-text-secondary font-body">Obras Criadas</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-primary">
                  <Icon name="Users" size={20} />
                  <span className="text-2xl font-heading font-heading-bold">89</span>
                </div>
                <p className="text-sm text-text-secondary font-body">Clientes Satisfeitos</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-primary">
                  <Icon name="Palette" size={20} />
                  <span className="text-2xl font-heading font-heading-bold">25</span>
                </div>
                <p className="text-sm text-text-secondary font-body">Comissões Ativas</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-primary">
                  <Icon name="Calendar" size={20} />
                  <span className="text-2xl font-heading font-heading-bold">5</span>
                </div>
                <p className="text-sm text-text-secondary font-body">Anos de Experiência</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about-artist">
                <Button
                  variant="default"
                  size="lg"
                  iconName="User"
                  iconPosition="left"
                  className="bg-gradient-cta hover:opacity-90 shadow-purple w-full sm:w-auto">

                  Minha História
                </Button>
              </Link>
              
              <Link to="/commissions">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="w-full sm:w-auto">

                  Conversar Comigo
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Studio Images */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-purple">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={studioImages?.[currentImageIndex]?.src}
                    alt={studioImages?.[currentImageIndex]?.alt}
                    className="w-full h-full object-cover transition-all duration-700" />

                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/40 via-transparent to-transparent"></div>
                  
                  {/* Image Navigation */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {studioImages?.map((_, index) =>
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ?
                      'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'}`
                      }
                      aria-label={`Ver imagem ${index + 1} do estúdio`} />

                    )}
                  </div>
                </div>
                
                {/* Image Caption */}
                <div className="p-6 bg-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center">
                      <Icon name="Camera" size={20} color="white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-heading-bold text-text-primary">Meu Estúdio</h4>
                      <p className="text-sm text-text-secondary font-body">Onde a magia acontece</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-accent rounded-full p-4 shadow-lg">
                <Icon name="Sparkles" size={24} color="white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-full p-4 shadow-lg">
                <Icon name="Heart" size={24} color="white" />
              </div>

              {/* Decorative Quote */}
              <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white rounded-lg p-4 shadow-purple max-w-xs hidden lg:block">
                <div className="flex items-start space-x-3">
                  <Icon name="Quote" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-text-primary font-body italic">
                      "Arte é a linguagem universal que conecta corações"
                    </p>
                    <p className="text-xs text-text-secondary font-body mt-2">- Choki</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ArtistIntroduction;