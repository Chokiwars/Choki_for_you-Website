import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    role: "Colecionadora de Arte",
    image: "https://images.unsplash.com/photo-1663507897721-c6c216a8fb28",
    alt: "Mulher sorridente de meia idade com cabelos castanhos em ambiente profissional",
    rating: 5,
    text: `A experiência de encomendar uma obra com a Choki foi simplesmente excepcional. Desde a primeira conversa até a entrega final, tudo foi conduzido com profissionalismo e carinho. A obra superou todas as minhas expectativas - cada detalhe foi cuidadosamente pensado e executado. Recomendo de olhos fechados!`,
    project: "Retrato Familiar em Óleo",
    date: "Outubro 2024",
    location: "São Paulo, SP"
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Empresário",
    image: "https://images.unsplash.com/photo-1718722183119-2ee4129f1a73",
    alt: "Homem executivo de terno sorrindo em escritório moderno",
    rating: 5,
    text: `Precisava de uma obra para o lobby da minha empresa e a Choki entendeu perfeitamente nossa visão corporativa. O resultado foi uma peça moderna e impactante que impressiona todos os visitantes. O processo foi transparente, com atualizações constantes do progresso. Profissionalismo exemplar!`,
    project: "Paisagem Urbana Abstrata",
    date: "Setembro 2024",
    location: "Rio de Janeiro, RJ"
  },
  {
    id: 3,
    name: "Ana Paula Costa",
    role: "Designer de Interiores",
    image: "https://images.unsplash.com/photo-1548666987-fed1d40b4b13",
    alt: "Mulher jovem com cabelos loiros sorrindo em estúdio criativo",
    rating: 5,
    text: `Como designer, trabalho com muitos artistas, mas a Choki se destaca pela sua capacidade de interpretar briefings complexos e transformá-los em arte. A obra que encomendei para um cliente ficou perfeita - cores, composição, tudo harmonioso. Uma verdadeira parceira criativa!`,
    project: "Composição Abstrata Personalizada",
    date: "Agosto 2024",
    location: "Belo Horizonte, MG"
  },
  {
    id: 4,
    name: "Roberto Silva",
    role: "Colecionador",
    image: "https://images.unsplash.com/photo-1584981886809-8920959a5e9b",
    alt: "Homem maduro de barba grisalha em ambiente elegante",
    rating: 5,
    text: `Já tenho várias obras em minha coleção, mas o retrato que a Choki fez da minha esposa é especial. A técnica é impecável e ela conseguiu capturar não apenas a aparência física, mas a essência da pessoa. É uma obra que emociona a cada olhar. Investimento que vale cada centavo!`,
    project: "Retrato Clássico em Óleo",
    date: "Julho 2024",
    location: "Curitiba, PR"
  }];


  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-light via-background to-purple-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gradient-purple mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Histórias reais de clientes satisfeitos que transformaram suas ideias em obras de arte únicas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-purple border border-border mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Client Info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="relative inline-block mb-4">
                  <Image
                    src={current?.image}
                    alt={current?.alt}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20" />

                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={16} color="white" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-text-primary mb-1">
                  {current?.name}
                </h3>
                <p className="text-text-secondary text-sm mb-2">
                  {current?.role}
                </p>
                <div className="flex justify-center lg:justify-start items-center space-x-1 mb-2">
                  {Array.from({ length: current?.rating }, (_, i) =>
                  <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                  )}
                </div>
                <p className="text-xs text-text-secondary">
                  {current?.location}
                </p>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <blockquote className="text-lg text-text-primary leading-relaxed mb-6 italic">
                  "{current?.text}"
                </blockquote>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="font-medium text-primary mb-1">
                      {current?.project}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {current?.date}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success" />
                    <span className="text-sm text-success font-medium">
                      Projeto Concluído
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              iconName="ChevronLeft"
              iconPosition="left"
              className="border-primary text-primary hover:bg-primary hover:text-white">

              Anterior
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ?
                'bg-primary scale-125' : 'bg-border hover:bg-primary/50'}`
                } />

              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              iconName="ChevronRight"
              iconPosition="right"
              className="border-primary text-primary hover:bg-primary hover:text-white">

              Próximo
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
          { number: "50+", label: "Comissões Concluídas", icon: "Palette" },
          { number: "4.9", label: "Avaliação Média", icon: "Star" },
          { number: "100%", label: "Clientes Satisfeitos", icon: "Heart" },
          { number: "2-6", label: "Semanas de Prazo", icon: "Clock" }]?.
          map((stat, index) =>
          <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} color="white" />
              </div>
              <div className="text-3xl font-heading font-bold text-primary mb-2">
                {stat?.number}
              </div>
              <div className="text-sm text-text-secondary">
                {stat?.label}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Seja o Próximo Cliente Satisfeito
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Junte-se aos nossos clientes satisfeitos e transforme sua visão em uma obra de arte única e personalizada
            </p>
            <Button
              variant="outline"
              size="lg"
              iconName="Palette"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary">

              Iniciar Minha Comissão
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;