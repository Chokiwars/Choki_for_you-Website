import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e?.preventDefault();
    
    if (!email || !name) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      setName('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1500);
  };

  const benefits = [
    {
      icon: "Palette",
      title: "Obras Exclusivas",
      description: "Seja o primeiro a ver e adquirir novas criações"
    },
    {
      icon: "Percent",
      title: "Descontos Especiais",
      description: "Ofertas exclusivas para assinantes da newsletter"
    },
    {
      icon: "Calendar",
      title: "Eventos Privados",
      description: "Convites para exposições e eventos exclusivos"
    },
    {
      icon: "BookOpen",
      title: "Processo Criativo",
      description: "Bastidores e insights do processo artístico"
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary/10 to-purple-light/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-3xl p-12 shadow-purple">
            <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={40} color="white" />
            </div>
            
            <h3 className="text-3xl font-heading font-heading-bold text-text-primary mb-4">
              Bem-vindo à Família Choki! 🎨
            </h3>
            
            <p className="text-lg text-text-secondary font-body mb-8 max-w-2xl mx-auto">
              Obrigada por se juntar à nossa comunidade artística! Você receberá em breve 
              um email de confirmação com um desconto especial para sua primeira compra.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                iconName="Image"
                iconPosition="left"
                className="bg-gradient-cta"
              >
                Explorar Galeria
              </Button>
              
              <Button 
                variant="outline" 
                iconName="Instagram"
                iconPosition="left"
              >
                Seguir no Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-purple-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/20 rounded-full px-4 py-2 text-primary">
                <Icon name="Mail" size={16} />
                <span className="text-sm font-body font-body-medium">Newsletter Exclusiva</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-heading font-heading-bold text-text-primary leading-tight">
                Faça Parte do
                <span className="block text-gradient-purple">Universo Roxo</span>
              </h2>
              
              <p className="text-xl text-text-secondary font-body leading-relaxed">
                Receba em primeira mão novidades sobre obras exclusivas, bastidores do processo 
                criativo, eventos especiais e ofertas únicas para colecionadores.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits?.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-xl shadow-subtle">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={benefit?.icon} size={20} className="text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-heading-bold text-text-primary">
                      {benefit?.title}
                    </h4>
                    <p className="text-sm text-text-secondary font-body">
                      {benefit?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-6 border-t border-border">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-accent border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-electric border-2 border-white"></div>
                </div>
                <span className="text-sm text-text-secondary font-body">
                  +2.500 assinantes
                </span>
              </div>
              
              <div className="flex items-center space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                ))}
                <span className="text-sm text-text-secondary font-body ml-2">
                  4.9/5 avaliação
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Newsletter Form */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-purple">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-cta rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={32} color="white" />
                </div>
                
                <h3 className="text-2xl font-heading font-heading-bold text-text-primary mb-2">
                  Junte-se à Nossa Comunidade
                </h3>
                
                <p className="text-text-secondary font-body">
                  Inscreva-se e ganhe 10% de desconto na sua primeira compra
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="space-y-6">
                <Input
                  type="text"
                  label="Nome Completo"
                  placeholder="Como você gostaria de ser chamado?"
                  value={name}
                  onChange={(e) => setName(e?.target?.value)}
                  required
                  className="mb-4"
                />
                
                <Input
                  type="email"
                  label="Email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value)}
                  required
                  className="mb-6"
                />
                
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isLoading}
                  iconName="Mail"
                  iconPosition="left"
                  className="bg-gradient-cta hover:opacity-90 shadow-purple"
                  disabled={!email || !name}
                >
                  {isLoading ? 'Inscrevendo...' : 'Inscrever-se Gratuitamente'}
                </Button>
                
                <p className="text-xs text-text-secondary font-body text-center">
                  Ao se inscrever, você concorda em receber emails da Choki. 
                  Você pode cancelar a qualquer momento. Respeitamos sua privacidade.
                </p>
              </form>

              {/* Trust Badges */}
              <div className="flex items-center justify-center space-x-6 mt-8 pt-6 border-t border-border">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="Shield" size={16} />
                  <span className="text-xs font-body">100% Seguro</span>
                </div>
                
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="X" size={16} />
                  <span className="text-xs font-body">Sem Spam</span>
                </div>
                
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="UserX" size={16} />
                  <span className="text-xs font-body">Cancele Quando Quiser</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent rounded-full p-3 shadow-lg animate-bounce">
              <Icon name="Gift" size={20} color="white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-primary rounded-full p-3 shadow-lg">
              <Icon name="Heart" size={20} color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;