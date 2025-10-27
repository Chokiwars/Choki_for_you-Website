import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommissionExamples = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
  { id: 'all', name: 'Todos', icon: 'Grid3X3' },
  { id: 'portrait', name: 'Retratos', icon: 'User' },
  { id: 'landscape', name: 'Paisagens', icon: 'Mountain' },
  { id: 'abstract', name: 'Abstrato', icon: 'Palette' },
  { id: 'pet', name: 'Pets', icon: 'Heart' }];


  const commissionExamples = [
  {
    id: 1,
    title: "Retrato Familiar Personalizado",
    category: "portrait",
    image: "https://images.unsplash.com/photo-1641064496126-cf64a61c6fae",
    alt: "Pintura em óleo de família de quatro pessoas sorrindo em jardim com flores coloridas",
    size: "60x80 cm",
    medium: "Óleo sobre tela",
    duration: "3 semanas",
    price: "R$ 2.800",
    client: "Família Santos",
    description: "Retrato familiar em óleo capturando a essência e personalidade de cada membro da família em ambiente natural."
  },
  {
    id: 2,
    title: "Paisagem Urbana Noturna",
    category: "landscape",
    image: "https://images.unsplash.com/photo-1698579357710-731a4a0c7665",
    alt: "Pintura acrílica de cidade à noite com luzes coloridas refletindo em rio",
    size: "80x100 cm",
    medium: "Acrílico sobre tela",
    duration: "4 semanas",
    price: "R$ 3.500",
    client: "Empresa Arquitetura",
    description: "Paisagem urbana contemporânea com jogos de luz e sombra, criando atmosfera única para escritório corporativo."
  },
  {
    id: 3,
    title: "Composição Abstrata Moderna",
    category: "abstract",
    image: "https://images.unsplash.com/photo-1578907274535-b92c4794e162",
    alt: "Pintura abstrata com formas geométricas em tons de roxo, dourado e azul",
    size: "70x90 cm",
    medium: "Técnica mista",
    duration: "2 semanas",
    price: "R$ 2.200",
    client: "Colecionador Privado",
    description: "Obra abstrata contemporânea explorando formas geométricas e paleta de cores harmoniosa para ambiente residencial."
  },
  {
    id: 4,
    title: "Retrato de Pet Realista",
    category: "pet",
    image: "https://images.unsplash.com/photo-1509474194467-4e939d144f51",
    alt: "Pintura realista de golden retriever com expressão alegre em fundo neutro",
    size: "40x50 cm",
    medium: "Óleo sobre tela",
    duration: "2 semanas",
    price: "R$ 1.800",
    client: "Maria Silva",
    description: "Retrato detalhado e emotivo de animal de estimação, capturando personalidade e características únicas."
  },
  {
    id: 5,
    title: "Paisagem Marinha Serena",
    category: "landscape",
    image: "https://images.unsplash.com/photo-1719840100258-09c81e88fb72",
    alt: "Pintura de praia tropical com águas cristalinas e palmeiras ao pôr do sol",
    size: "90x120 cm",
    medium: "Óleo sobre tela",
    duration: "5 semanas",
    price: "R$ 4.200",
    client: "Resort Tropical",
    description: "Paisagem marinha tranquila com técnicas impressionistas, criando ambiente relaxante para espaço comercial."
  },
  {
    id: 6,
    title: "Retrato Executivo Corporativo",
    category: "portrait",
    image: "https://images.unsplash.com/photo-1719462874685-7a021157002a",
    alt: "Pintura formal de executivo em terno escuro com expressão confiante",
    size: "50x70 cm",
    medium: "Óleo sobre tela",
    duration: "3 semanas",
    price: "R$ 2.500",
    client: "CEO Empresa Tech",
    description: "Retrato corporativo clássico com técnica refinada, transmitindo profissionalismo e autoridade."
  }];


  const filteredExamples = selectedCategory === 'all' ?
  commissionExamples :
  commissionExamples?.filter((example) => example?.category === selectedCategory);

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gradient-purple mb-4">
            Exemplos de Comissões
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Explore algumas das obras personalizadas que criei para clientes, cada uma única e especial
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) =>
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
            selectedCategory === category?.id ?
            'bg-primary text-primary-foreground shadow-purple' :
            'bg-card text-text-primary hover:bg-primary/10 hover:text-primary border border-border'}`
            }>

              <Icon name={category?.icon} size={18} />
              <span className="font-medium">{category?.name}</span>
            </button>
          )}
        </div>

        {/* Examples Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExamples?.map((example) =>
          <div
            key={example?.id}
            className="bg-card rounded-2xl overflow-hidden shadow-purple border border-border hover:shadow-purple-hover transition-all duration-300 group">

              <div className="relative overflow-hidden">
                <Image
                src={example?.image}
                alt={example?.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  {example?.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-heading font-semibold text-text-primary">
                    {example?.title}
                  </h3>
                  <span className="text-sm text-text-secondary">
                    {example?.duration}
                  </span>
                </div>

                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {example?.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Tamanho:</span>
                    <span className="text-text-primary font-medium">{example?.size}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Técnica:</span>
                    <span className="text-text-primary font-medium">{example?.medium}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Cliente:</span>
                    <span className="text-text-primary font-medium">{example?.client}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-4 border-t border-border">
                  <Icon name="Eye" size={16} className="text-primary" />
                  <span className="text-sm text-text-secondary">Ver processo completo</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">

            Ver Mais Exemplos
          </Button>
        </div>
      </div>
    </section>);

};

export default CommissionExamples;