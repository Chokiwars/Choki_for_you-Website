import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-light via-background to-purple-medium">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Icon name="Palette" size={16} className="text-primary mr-2" />
                <span className="text-sm font-body font-body-medium text-primary">Artista Brasileira</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-heading-bold text-gradient-purple leading-tight">
                Conheça a Artista por Trás da Magia
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                Uma jornada criativa que começou com sonhos coloridos e se transformou em uma paixão que conecta corações através da arte. Cada pincelada conta uma história, cada cor carrega uma emoção.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="bg-gradient-cta hover:opacity-90 shadow-purple">

                Assista Minha História
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">

                Download Portfólio
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-heading font-heading-bold text-primary">8+</div>
                <div className="text-sm text-text-secondary">Anos Criando</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-heading-bold text-primary">500+</div>
                <div className="text-sm text-text-secondary">Obras Criadas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-heading-bold text-primary">200+</div>
                <div className="text-sm text-text-secondary">Clientes Felizes</div>
              </div>
            </div>
          </div>

          {/* Artist Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-purple bg-card">
                <Image
                  src="https://images.unsplash.com/photo-1611086699165-3462914132c0"
                  alt="Retrato profissional da artista Choki sorrindo em seu estúdio, usando avental de pintura roxo com pincéis na mão"
                  className="w-full h-full object-cover" />

              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-purple border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-body font-body-medium text-text-primary">Criando agora</span>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 right-8 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute top-4 right-4 w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl transform -rotate-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;