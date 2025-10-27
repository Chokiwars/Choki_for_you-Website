import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingGuide = () => {
  const [selectedSize, setSelectedSize] = useState('medium');

  const pricingTiers = [
    {
      id: 'small',
      name: 'Pequeno',
      size: '30x40 cm',
      description: 'Perfeito para espaços íntimos e presentes especiais',
      basePrice: 1200,
      features: [
        'Técnica: Óleo ou Acrílico',
        'Prazo: 1-2 semanas',
        'Revisões: 2 incluídas',
        'Embalagem premium',
        'Certificado de autenticidade'
      ],
      popular: false,
      icon: 'Square'
    },
    {
      id: 'medium',
      name: 'Médio',
      size: '50x70 cm',
      description: 'Tamanho ideal para a maioria dos ambientes residenciais',
      basePrice: 2500,
      features: [
        'Técnica: Óleo ou Acrílico',
        'Prazo: 2-3 semanas',
        'Revisões: 3 incluídas',
        'Embalagem premium',
        'Certificado de autenticidade',
        'Fotos do processo'
      ],
      popular: true,
      icon: 'Square'
    },
    {
      id: 'large',
      name: 'Grande',
      size: '80x100 cm',
      description: 'Obras impactantes para espaços amplos e comerciais',
      basePrice: 4200,
      features: [
        'Técnica: Óleo ou Acrílico',
        'Prazo: 3-5 semanas',
        'Revisões: Ilimitadas',
        'Embalagem premium',
        'Certificado de autenticidade',
        'Vídeo time-lapse',
        'Consultoria de instalação'
      ],
      popular: false,
      icon: 'Square'
    }
  ];

  const additionalServices = [
    {
      name: 'Técnica Mista',
      description: 'Combinação de diferentes materiais e técnicas',
      price: '+R$ 300-800',
      icon: 'Palette'
    },
    {
      name: 'Moldura Personalizada',
      description: 'Moldura sob medida para sua obra',
      price: '+R$ 200-600',
      icon: 'Frame'
    },
    {
      name: 'Entrega Expressa',
      description: 'Redução do prazo em 50%',
      price: '+30%',
      icon: 'Zap'
    },
    {
      name: 'Múltiplas Figuras',
      description: 'Cada pessoa/animal adicional',
      price: '+R$ 400',
      icon: 'Users'
    }
  ];

  const complexityFactors = [
    {
      factor: 'Detalhamento',
      basic: 'Estilo simplificado',
      premium: 'Hiper-realismo',
      impact: '0% - +50%'
    },
    {
      factor: 'Fundo',
      basic: 'Fundo neutro',
      premium: 'Cenário complexo',
      impact: '0% - +40%'
    },
    {
      factor: 'Elementos',
      basic: '1-2 elementos',
      premium: 'Múltiplos elementos',
      impact: '0% - +60%'
    },
    {
      factor: 'Urgência',
      basic: 'Prazo normal',
      premium: 'Entrega expressa',
      impact: '0% - +30%'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gradient-purple mb-4">
            Guia de Preços
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Preços transparentes baseados em tamanho, complexidade e técnica. Todos os valores incluem materiais premium e garantia de satisfação.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers?.map((tier) => (
            <div
              key={tier?.id}
              className={`relative bg-card rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-purple-hover ${
                tier?.popular
                  ? 'border-primary shadow-purple scale-105'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {tier?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  tier?.popular ? 'bg-primary' : 'bg-muted'
                }`}>
                  <Icon 
                    name={tier?.icon} 
                    size={24} 
                    color={tier?.popular ? 'white' : 'var(--color-primary)'} 
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                  {tier?.name}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {tier?.size}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-heading font-bold text-primary">
                    R$ {tier?.basePrice?.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-text-secondary ml-2">a partir de</span>
                </div>
                <p className="text-text-secondary text-sm">
                  {tier?.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier?.features?.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier?.popular ? "default" : "outline"}
                fullWidth
                iconName="MessageCircle"
                iconPosition="left"
                className={tier?.popular ? "bg-primary hover:bg-primary/90" : ""}
              >
                Solicitar Orçamento
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-text-primary text-center mb-8">
            Serviços Adicionais
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices?.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={service?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-text-primary">
                      {service?.name}
                    </h4>
                    <p className="text-accent font-medium text-sm">
                      {service?.price}
                    </p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm">
                  {service?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Complexity Factors */}
        <div className="bg-muted rounded-2xl p-8">
          <h3 className="text-2xl font-heading font-bold text-text-primary text-center mb-8">
            Fatores que Influenciam o Preço
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-heading font-semibold text-text-primary">
                    Fator
                  </th>
                  <th className="text-left py-3 px-4 font-heading font-semibold text-text-primary">
                    Básico
                  </th>
                  <th className="text-left py-3 px-4 font-heading font-semibold text-text-primary">
                    Premium
                  </th>
                  <th className="text-left py-3 px-4 font-heading font-semibold text-text-primary">
                    Impacto no Preço
                  </th>
                </tr>
              </thead>
              <tbody>
                {complexityFactors?.map((item, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium text-text-primary">
                      {item?.factor}
                    </td>
                    <td className="py-3 px-4 text-text-secondary">
                      {item?.basic}
                    </td>
                    <td className="py-3 px-4 text-text-secondary">
                      {item?.premium}
                    </td>
                    <td className="py-3 px-4 text-accent font-medium">
                      {item?.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-deep to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Precisa de um Orçamento Personalizado?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Cada obra é única. Entre em contato para discutirmos sua visão e recebermos um orçamento detalhado sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-purple-deep"
              >
                Calculadora de Preços
              </Button>
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-white text-purple-deep hover:bg-purple-100"
              >
                Falar com Artista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingGuide;