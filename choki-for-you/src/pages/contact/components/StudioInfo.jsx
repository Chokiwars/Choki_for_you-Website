import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StudioInfo = () => {
  const studioHours = [
    { day: 'Segunda-feira', hours: '9:00 - 18:00', available: true },
    { day: 'Terça-feira', hours: '9:00 - 18:00', available: true },
    { day: 'Quarta-feira', hours: '9:00 - 18:00', available: true },
    { day: 'Quinta-feira', hours: '9:00 - 18:00', available: true },
    { day: 'Sexta-feira', hours: '9:00 - 18:00', available: true },
    { day: 'Sábado', hours: '10:00 - 16:00', available: true },
    { day: 'Domingo', hours: 'Fechado', available: false }
  ];

  const studioFeatures = [
    {
      icon: 'Palette',
      title: 'Ateliê Completo',
      description: 'Espaço equipado com todas as ferramentas para criação artística'
    },
    {
      icon: 'Coffee',
      title: 'Área de Recepção',
      description: 'Ambiente acolhedor para conversas sobre projetos'
    },
    {
      icon: 'Image',
      title: 'Galeria Privada',
      description: 'Exposição de obras disponíveis e trabalhos em andamento'
    },
    {
      icon: 'Car',
      title: 'Estacionamento',
      description: 'Vagas disponíveis para visitantes'
    }
  ];

  const handleScheduleVisit = () => {
    // Simulate scheduling system
    window.open('https://calendly.com/choki-for-you/studio-visit', '_blank');
  };

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=-23.5505,-46.6333', '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Visite Meu Ateliê
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Conheça o espaço onde a magia acontece. Agende uma visita para ver as obras de perto, 
            conhecer o processo criativo e discutir seu projeto pessoalmente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Studio Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-card rounded-2xl p-8 shadow-purple border border-border">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                    Localização do Ateliê
                  </h3>
                  <p className="text-text-secondary">
                    Rua das Artes, 123 - Vila Madalena<br />
                    São Paulo, SP - CEP 05433-000<br />
                    Brasil
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  iconName="Navigation"
                  iconPosition="left"
                  onClick={handleDirections}
                  className="bg-gradient-cta flex-1"
                >
                  Ver Direções
                </Button>
                
                <Button
                  variant="outline"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={handleScheduleVisit}
                  className="flex-1"
                >
                  Agendar Visita
                </Button>
              </div>
            </div>

            {/* Studio Hours */}
            <div className="bg-card rounded-2xl p-8 shadow-purple border border-border">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-text-primary">
                  Horários de Funcionamento
                </h3>
              </div>

              <div className="space-y-3">
                {studioHours?.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-text-primary font-medium">
                      {schedule?.day}
                    </span>
                    <span className={`font-medium ${
                      schedule?.available ? 'text-success' : 'text-text-secondary'
                    }`}>
                      {schedule?.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-text-primary font-medium mb-1">
                      Visitas por Agendamento
                    </p>
                    <p className="text-sm text-text-secondary">
                      Para garantir atendimento personalizado, todas as visitas devem ser agendadas com antecedência.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Features */}
            <div className="bg-card rounded-2xl p-8 shadow-purple border border-border">
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
                O Que Você Encontrará
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {studioFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-light rounded-lg flex items-center justify-center">
                      <Icon name={feature?.icon} size={20} className="text-purple-deep" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary mb-1">
                        {feature?.title}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {feature?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-purple border border-border">
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
                Localização no Mapa
              </h3>
              
              <div className="w-full h-96 rounded-xl overflow-hidden border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Ateliê Choki For You - Vila Madalena, São Paulo"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=-23.5505,-46.6333&z=16&output=embed"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Navigation" size={16} />
                  <span>Vila Madalena, São Paulo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Car" size={16} />
                  <span>Estacionamento disponível</span>
                </div>
              </div>
            </div>

            {/* Visit CTA */}
            <div className="bg-gradient-to-br from-purple-light to-purple-medium rounded-2xl p-8 text-center">
              <Icon name="Heart" size={32} className="text-purple-deep mx-auto mb-4" />
              
              <h3 className="text-2xl font-heading font-semibold text-purple-dark mb-4">
                Experiência Única
              </h3>
              
              <p className="text-purple-dark/80 mb-6 leading-relaxed">
                Uma visita ao ateliê é mais que uma reunião - é uma imersão no processo criativo. 
                Veja obras em diferentes estágios, conheça técnicas e materiais, e sinta a energia 
                do espaço onde suas ideias ganharão vida.
              </p>

              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={handleScheduleVisit}
                className="bg-purple-deep hover:bg-purple-electric text-white shadow-purple-hover"
              >
                Agendar Minha Visita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioInfo;