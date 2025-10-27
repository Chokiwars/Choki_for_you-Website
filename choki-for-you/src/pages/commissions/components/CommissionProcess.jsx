import React from 'react';
import Icon from '../../../components/AppIcon';

const CommissionProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "Consulta Inicial",
      description: "Conversamos sobre sua visão, preferências de estilo, tamanho e orçamento para entender perfeitamente o que você deseja.",
      icon: "MessageCircle",
      duration: "1-2 dias",
      color: "from-purple-deep to-purple-medium"
    },
    {
      id: 2,
      title: "Proposta & Contrato",
      description: "Envio uma proposta detalhada com cronograma, preços e termos. Após aprovação, iniciamos com 50% de entrada.",
      icon: "FileText",
      duration: "1 dia",
      color: "from-purple-medium to-accent"
    },
    {
      id: 3,
      title: "Esboços Iniciais",
      description: "Crio esboços preliminares e mood boards para alinharmos a direção artística antes de começar a obra final.",
      icon: "Palette",
      duration: "3-5 dias",
      color: "from-accent to-purple-electric"
    },
    {
      id: 4,
      title: "Criação da Obra",
      description: "Desenvolvimento da peça com atualizações regulares do progresso. Você pode acompanhar cada etapa da criação.",
      icon: "Brush",
      duration: "1-4 semanas",
      color: "from-purple-electric to-purple-deep"
    },
    {
      id: 5,
      title: "Revisões Finais",
      description: "Apresento a obra finalizada para sua aprovação. Pequenos ajustes podem ser feitos nesta etapa.",
      icon: "Eye",
      duration: "2-3 dias",
      color: "from-purple-deep to-purple-medium"
    },
    {
      id: 6,
      title: "Entrega",
      description: "Após pagamento final, a obra é cuidadosamente embalada e enviada com seguro e rastreamento completo.",
      icon: "Package",
      duration: "3-7 dias",
      color: "from-purple-medium to-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gradient-purple mb-4">
            Como Funciona o Processo
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Um processo transparente e colaborativo para garantir que sua comissão seja exatamente como você imaginou
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-deep to-accent rounded-full"></div>

          <div className="space-y-12 lg:space-y-16">
            {processSteps?.map((step, index) => (
              <div
                key={step?.id}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <div className={`bg-card rounded-2xl p-8 shadow-purple border border-border ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        Etapa {step?.id}
                      </span>
                      <span className="text-sm text-text-secondary">
                        {step?.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                      {step?.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {step?.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step?.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <Icon name={step?.icon} size={24} color="white" />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 lg:max-w-md hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-light to-purple-medium rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-semibold text-purple-dark mb-4">
              Pronto para Começar?
            </h3>
            <p className="text-purple-dark/80 mb-6">
              O processo completo leva de 2 a 6 semanas, dependendo da complexidade da obra
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-purple-dark">
                <Icon name="Shield" size={20} />
                <span className="text-sm font-medium">100% Garantido</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-dark">
                <Icon name="Clock" size={20} />
                <span className="text-sm font-medium">Prazos Respeitados</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-dark">
                <Icon name="Heart" size={20} />
                <span className="text-sm font-medium">Satisfação Garantida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommissionProcess;