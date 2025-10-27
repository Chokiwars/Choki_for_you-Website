import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StudioTour = () => {
  const [activeArea, setActiveArea] = useState(0);

  const studioAreas = [
  {
    name: "Área de Pintura",
    description: "Meu espaço principal onde a magia acontece. Cavaletes, telas e uma paleta sempre pronta para criar.",
    image: "https://images.unsplash.com/photo-1656274866691-517104a24cca",
    imageAlt: "Estúdio de arte com cavaletes de madeira, telas em branco e paletas de tinta organizadas em mesa",
    features: ["3 Cavaletes profissionais", "Iluminação natural", "Paletas organizadas", "Telas de diversos tamanhos"]
  },
  {
    name: "Mesa Digital",
    description: "Onde crio arte digital e faço os primeiros esboços. Tecnologia e criatividade se encontram aqui.",
    image: "https://images.unsplash.com/photo-1588876380784-90011e0df76d",
    imageAlt: "Mesa de trabalho com tablet digital, stylus, monitor e sketches coloridos espalhados",
    features: ["Tablet profissional", "Monitor 4K", "Software especializado", "Biblioteca de referências"]
  },
  {
    name: "Área de Materiais",
    description: "Organização é fundamental. Aqui guardo todos os materiais de forma acessível e inspiradora.",
    image: "https://images.unsplash.com/photo-1625547461808-c78c36427b67",
    imageAlt: "Estante organizada com potes de tinta, pincéis em recipientes e materiais artísticos classificados por cor",
    features: ["Mais de 200 cores", "Pincéis especializados", "Papéis texturizados", "Materiais experimentais"]
  },
  {
    name: "Espaço de Inspiração",
    description: "Um cantinho especial com livros, plantas e objetos que me inspiram diariamente.",
    image: "https://images.unsplash.com/photo-1672586420486-053debf804c3",
    imageAlt: "Canto aconchegante com poltrona roxa, plantas verdes, livros de arte e objetos decorativos inspiradores",
    features: ["Biblioteca de arte", "Plantas inspiradoras", "Objetos de referência", "Espaço para reflexão"]
  }];


  const studioStats = [
  { icon: "Home", label: "Estúdio", value: "120m²" },
  { icon: "Palette", label: "Cores Disponíveis", value: "200+" },
  { icon: "Brush", label: "Pincéis", value: "50+" },
  { icon: "Frame", label: "Obras em Andamento", value: "15" }];


  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
            <Icon name="Home" size={16} className="text-accent mr-2" />
            <span className="text-sm font-body font-body-medium text-accent">Meu Estúdio</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-heading-bold text-gradient-purple mb-6">
            Bem-vindo ao Meu Universo Criativo
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Cada canto do meu estúdio foi pensado para inspirar e facilitar o processo criativo. 
            Venha conhecer onde a arte ganha vida.
          </p>
        </div>

        {/* Studio Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {studioStats?.map((stat, index) =>
          <div key={index} className="bg-card rounded-xl p-6 text-center shadow-subtle border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-heading font-heading-bold text-primary mb-1">
                {stat?.value}
              </div>
              <div className="text-sm text-text-secondary">
                {stat?.label}
              </div>
            </div>
          )}
        </div>

        {/* Studio Areas Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {studioAreas?.map((area, index) =>
          <button
            key={index}
            onClick={() => setActiveArea(index)}
            className={`px-6 py-3 rounded-full font-body font-body-medium transition-all duration-300 ${
            activeArea === index ?
            'bg-primary text-primary-foreground shadow-purple' :
            'bg-card text-text-secondary hover:bg-primary/10 hover:text-primary border border-border'}`
            }>

              {area?.name}
            </button>
          )}
        </div>

        {/* Active Area Display */}
        <div className="bg-card rounded-2xl shadow-purple border border-border overflow-hidden mb-12">
          <div className="grid lg:grid-cols-3 gap-0">
            {/* Image */}
            <div className="lg:col-span-2 relative h-64 lg:h-96">
              <Image
                src={studioAreas?.[activeArea]?.image}
                alt={studioAreas?.[activeArea]?.imageAlt}
                className="w-full h-full object-cover" />

              
              {/* Overlay with area name */}
              <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
                <span className="font-heading font-heading-semibold text-text-primary">
                  {studioAreas?.[activeArea]?.name}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-xl font-heading font-heading-bold text-text-primary mb-4">
                {studioAreas?.[activeArea]?.name}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {studioAreas?.[activeArea]?.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-sm font-heading font-heading-semibold text-text-primary uppercase tracking-wide">
                  Características
                </h4>
                
                {studioAreas?.[activeArea]?.features?.map((feature, index) =>
                <div key={index} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Virtual Tour CTA */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Video" size={32} className="text-primary-foreground" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-heading font-heading-bold text-text-primary mb-4">
              Tour Virtual Completo
            </h3>
            
            <p className="text-lg text-text-secondary mb-8">
              Quer conhecer cada detalhe do meu estúdio? Assista ao tour virtual completo 
              e veja como cada espaço contribui para o processo criativo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="bg-gradient-cta hover:opacity-90 shadow-purple">

                Assistir Tour Virtual
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">

                Agendar Visita Presencial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default StudioTour;