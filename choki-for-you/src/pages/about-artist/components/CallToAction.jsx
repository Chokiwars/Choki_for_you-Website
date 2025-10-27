import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const actionCards = [
    {
      icon: "ShoppingBag",
      title: "Explore Minha Galeria",
      description: "Descubra obras únicas disponíveis para compra, cada uma com sua própria história e energia.",
      buttonText: "Ver Galeria",
      buttonVariant: "default",
      link: "/gallery",
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      icon: "Palette",
      title: "Encomende Sua Arte",
      description: "Vamos criar juntos uma obra personalizada que reflita sua essência e transforme seu espaço.",
      buttonText: "Fazer Encomenda",
      buttonVariant: "outline",
      link: "/commissions",
      gradient: "from-secondary/20 to-accent/20"
    },
    {
      icon: "Mail",
      title: "Vamos Conversar",
      description: "Tem uma ideia, pergunta ou quer apenas bater um papo sobre arte? Estou sempre aberta ao diálogo.",
      buttonText: "Entrar em Contato",
      buttonVariant: "outline",
      link: "/contact",
      gradient: "from-accent/20 to-primary/20"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-heading-bold text-gradient-purple mb-6">
            Pronto para Começar Sua Jornada Artística?
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Agora que você conhece minha história, que tal criarmos a sua? Seja através de uma obra existente 
            ou uma criação personalizada, estou aqui para transformar sua visão em realidade.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {actionCards?.map((card, index) => (
            <div key={index} className={`relative bg-gradient-to-br ${card?.gradient} rounded-2xl p-8 border border-border hover:shadow-purple transition-all duration-300 group`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-16 h-16 bg-primary rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-secondary rounded-full"></div>
              </div>

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-6 shadow-subtle group-hover:scale-110 transition-transform duration-300">
                  <Icon name={card?.icon} size={28} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-heading-bold text-text-primary mb-4">
                  {card?.title}
                </h3>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {card?.description}
                </p>

                {/* Button */}
                <Link to={card?.link}>
                  <Button
                    variant={card?.buttonVariant}
                    size="lg"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className={card?.buttonVariant === 'default' 
                      ? "bg-gradient-cta hover:opacity-90 shadow-purple w-full" 
                      : "border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                    }
                  >
                    {card?.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Bell" size={32} className="text-white" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-heading font-heading-bold mb-4">
              Fique por Dentro das Novidades
            </h3>
            
            <p className="text-lg mb-8 opacity-90">
              Receba em primeira mão informações sobre novas obras, exposições e oportunidades especiais. 
              Sem spam, apenas arte e inspiração.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <Button
                variant="default"
                size="lg"
                iconName="Send"
                iconPosition="right"
                className="bg-white text-primary hover:bg-white/90 font-body-medium"
              >
                Inscrever-se
              </Button>
            </div>
            
            <p className="text-sm opacity-70 mt-4">
              Ao se inscrever, você concorda em receber e-mails sobre arte e pode cancelar a qualquer momento.
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-6">
            Junte-se a mais de 2.000 pessoas que já fazem parte da comunidade Choki For You
          </p>
          
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} className="text-primary" />
              <span className="text-sm text-text-secondary">2.000+ Seguidores</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Heart" size={20} className="text-primary" />
              <span className="text-sm text-text-secondary">500+ Obras Vendidas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={20} className="text-primary" />
              <span className="text-sm text-text-secondary">200+ Clientes Satisfeitos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;