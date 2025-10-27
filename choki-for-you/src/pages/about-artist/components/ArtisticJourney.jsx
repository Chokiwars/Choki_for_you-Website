import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ArtisticJourney = () => {
  const [activePhase, setActivePhase] = useState(0);

  const journeyPhases = [
  {
    year: "2016",
    title: "Primeiros Traços",
    description: "Descobri minha paixão pela arte durante a faculdade de Design. Cada desenho era uma nova descoberta sobre mim mesma.",
    image: "https://images.unsplash.com/photo-1611576671487-69edace05802",
    imageAlt: "Mesa de desenho com lápis coloridos espalhados e esboços de retratos em papel branco",
    achievements: ["Primeiro desenho vendido", "Participação em feira local", "10 obras criadas"],
    color: "from-purple-200 to-purple-300"
  },
  {
    year: "2018",
    title: "Explorando Cores",
    description: "Mergulhei no mundo das tintas acrílicas e aquarelas. O roxo se tornou minha assinatura, representando criatividade e espiritualidade.",
    image: "https://images.unsplash.com/photo-1713447882842-3fcacb5bdf17",
    imageAlt: "Paleta de tintas com tons vibrantes de roxo, violeta e lavanda misturados com pincéis artísticos",
    achievements: ["Primeira exposição solo", "50 obras vendidas", "Técnica própria desenvolvida"],
    color: "from-purple-300 to-purple-400"
  },
  {
    year: "2020",
    title: "Arte Digital",
    description: "A pandemia me levou ao mundo digital. Aprendi novas ferramentas e expandi minha criatividade para o universo online.",
    image: "https://images.unsplash.com/photo-1685798545497-286aa64ea751",
    imageAlt: "Tablet digital com stylus criando arte digital colorida em tons roxos e dourados",
    achievements: ["Transição para digital", "Loja online criada", "Comunidade de 1000 seguidores"],
    color: "from-purple-400 to-purple-500"
  },
  {
    year: "2022",
    title: "Reconhecimento",
    description: "Minhas obras ganharam reconhecimento nacional. Participei de exposições importantes e conquistei prêmios significativos.",
    image: "https://images.unsplash.com/photo-1541665948641-b1258efe53c8",
    imageAlt: "Galeria de arte moderna com obras emolduradas nas paredes e visitantes admirando as pinturas",
    achievements: ["Prêmio Arte Contemporânea", "Exposição no MAM", "200+ obras vendidas"],
    color: "from-purple-500 to-purple-600"
  },
  {
    year: "2024",
    title: "Choki For You",
    description: "Lancei minha marca pessoal focada em criar arte personalizada. Cada obra é única e feita especialmente para você.",
    image: "https://images.unsplash.com/photo-1686059631078-5fb83e86afb2",
    imageAlt: "Estúdio de arte organizado com cavaletes, telas em andamento e materiais artísticos dispostos profissionalmente",
    achievements: ["Marca própria lançada", "500+ clientes atendidos", "Equipe de 3 pessoas"],
    color: "from-purple-600 to-purple-700"
  }];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
            <Icon name="Clock" size={16} className="text-secondary mr-2" />
            <span className="text-sm font-body font-body-medium text-secondary">Minha Jornada</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-heading-bold text-gradient-purple mb-6">
            Uma Evolução Artística Contínua
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Cada fase da minha jornada trouxe novos aprendizados, desafios e conquistas. 
            Descubra como minha arte evoluiu ao longo dos anos.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {journeyPhases?.map((phase, index) =>
          <button
            key={index}
            onClick={() => setActivePhase(index)}
            className={`px-6 py-3 rounded-full font-body font-body-medium transition-all duration-300 ${
            activePhase === index ?
            'bg-primary text-primary-foreground shadow-purple' :
            'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'}`
            }>

              {phase?.year}
            </button>
          )}
        </div>

        {/* Active Phase Content */}
        <div className="bg-card rounded-2xl shadow-purple border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <div className={`absolute inset-0 bg-gradient-to-br ${journeyPhases?.[activePhase]?.color} opacity-20`}></div>
              <Image
                src={journeyPhases?.[activePhase]?.image}
                alt={journeyPhases?.[activePhase]?.imageAlt}
                className="w-full h-full object-cover" />

              
              {/* Year Badge */}
              <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
                <span className="text-2xl font-heading font-heading-bold text-primary">
                  {journeyPhases?.[activePhase]?.year}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-heading font-heading-bold text-text-primary mb-4">
                {journeyPhases?.[activePhase]?.title}
              </h3>
              
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                {journeyPhases?.[activePhase]?.description}
              </p>

              {/* Achievements */}
              <div className="space-y-4">
                <h4 className="text-lg font-heading font-heading-semibold text-text-primary mb-4">
                  Principais Conquistas
                </h4>
                
                <div className="grid gap-3">
                  {journeyPhases?.[activePhase]?.achievements?.map((achievement, index) =>
                  <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-text-secondary">{achievement}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
                  <span>Progresso da Jornada</span>
                  <span>{Math.round((activePhase + 1) / journeyPhases?.length * 100)}%</span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(activePhase + 1) / journeyPhases?.length * 100}%` }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
            disabled={activePhase === 0}
            className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">

            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <div className="flex space-x-2">
            {journeyPhases?.map((_, index) =>
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activePhase ? 'bg-primary' : 'bg-muted'}`
              }>
            </div>
            )}
          </div>
          
          <button
            onClick={() => setActivePhase(Math.min(journeyPhases?.length - 1, activePhase + 1))}
            disabled={activePhase === journeyPhases?.length - 1}
            className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">

            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>
    </section>);

};

export default ArtisticJourney;