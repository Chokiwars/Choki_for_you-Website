import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      title: "Email Direto",
      description: "Para consultas gerais, orçamentos e informações sobre obras",
      email: "contato@chokiforyou.com.br",
      icon: "Mail",
      color: "bg-purple-deep",
      responseTime: "Resposta em até 24 horas"
    },
    {
      id: 2,
      title: "WhatsApp Business",
      description: "Atendimento rápido para dúvidas e agendamentos",
      phone: "+55 (11) 99999-8888",
      icon: "MessageSquare",
      color: "bg-accent",
      responseTime: "Resposta imediata"
    },
    {
      id: 3,
      title: "Telefone do Ateliê",
      description: "Ligações diretas para consultas detalhadas",
      phone: "+55 (11) 3333-4444",
      icon: "Phone",
      color: "bg-purple-electric",
      responseTime: "Seg-Sex: 9h às 18h"
    },
    {
      id: 4,
      title: "Redes Sociais",
      description: "Acompanhe o processo criativo e entre em contato",
      social: "@choki_for_you",
      icon: "Instagram",
      color: "bg-purple-medium",
      responseTime: "Resposta em até 12 horas"
    }
  ];

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleSocialClick = () => {
    window.open('https://instagram.com/choki_for_you', '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Como Prefere Entrar em Contato?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Escolha o canal que mais se adequa à sua necessidade. Estou disponível em múltiplas plataformas 
            para garantir que sua mensagem chegue até mim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className="bg-card rounded-2xl p-8 shadow-purple hover:shadow-purple-hover transition-all duration-300 border border-border group hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${method?.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={method?.icon} size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                {method?.title}
              </h3>

              <p className="text-text-secondary mb-6 leading-relaxed">
                {method?.description}
              </p>

              <div className="space-y-4">
                {method?.email && (
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Mail"
                    iconPosition="left"
                    onClick={() => handleEmailClick(method?.email)}
                    className="justify-start text-left"
                  >
                    {method?.email}
                  </Button>
                )}

                {method?.phone && (
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Phone"
                    iconPosition="left"
                    onClick={() => handlePhoneClick(method?.phone)}
                    className="justify-start text-left"
                  >
                    {method?.phone}
                  </Button>
                )}

                {method?.social && (
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Instagram"
                    iconPosition="left"
                    onClick={handleSocialClick}
                    className="justify-start text-left"
                  >
                    {method?.social}
                  </Button>
                )}

                <div className="flex items-center space-x-2 text-sm text-text-secondary pt-2">
                  <Icon name="Clock" size={16} />
                  <span>{method?.responseTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-light to-purple-medium rounded-2xl p-8 max-w-4xl mx-auto">
            <Icon name="Heart" size={32} className="text-purple-deep mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-semibold text-purple-dark mb-4">
              Atendimento Personalizado
            </h3>
            <p className="text-purple-dark/80 text-lg leading-relaxed">
              Cada projeto é único e merece atenção especial. Independente do canal escolhido, 
              você receberá um atendimento dedicado e personalizado para suas necessidades artísticas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;