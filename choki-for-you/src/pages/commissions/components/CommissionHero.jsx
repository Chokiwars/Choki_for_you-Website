import React from 'react';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CommissionHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-light via-purple-medium to-purple-deep py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
              Comissões
              <span className="block text-accent">Personalizadas</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Transforme suas ideias em obras de arte únicas. Colabore comigo para criar peças personalizadas que reflitam sua visão e estilo pessoal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                iconName="Palette"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-white shadow-lg">

                Solicitar Comissão
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-purple-deep">

                Ver Processo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1569880097883-02d0e7d9f0bd"
                alt="Artista trabalhando em pintura personalizada com pincéis e tinta colorida em estúdio"
                className="w-full h-96 object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-deep to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">50+</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Comissões</p>
                  <p className="text-sm text-gray-600">Concluídas</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-accent rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">4.9</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Avaliação</p>
                  <p className="text-sm text-purple-100">Média</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CommissionHero;