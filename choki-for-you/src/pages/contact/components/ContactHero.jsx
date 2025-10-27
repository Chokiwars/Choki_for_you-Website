import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-light via-purple-medium to-purple-deep py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-white rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
            <Icon name="MessageCircle" size={40} className="text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Vamos Conversar
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Múltiplos pontos de contato para compras, encomendas, colaborações e consultas gerais. 
            Estou aqui para transformar suas ideias em arte única.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} />
              <span>Resposta em 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={20} />
              <span>São Paulo, Brasil</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Palette" size={20} />
              <span>Consultas Gratuitas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;