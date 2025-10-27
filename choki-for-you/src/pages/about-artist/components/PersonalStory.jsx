import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PersonalStory = () => {
  const storyMilestones = [
  {
    icon: "Heart",
    title: "A Descoberta",
    text: "Aos 8 anos, ganhei minha primeira caixa de lápis de cor. Foi amor à primeira vista - cada cor tinha uma personalidade, cada desenho contava uma história que eu ainda não sabia que estava criando."
  },
  {
    icon: "Star",
    title: "O Despertar",
    text: "Na adolescência, descobri que arte não era apenas hobby, mas minha forma de me comunicar com o mundo. Cada obra era um pedaço da minha alma compartilhado."
  },
  {
    icon: "Lightbulb",
    title: "A Transformação",
    text: "O roxo entrou na minha vida como uma revelação. Não era apenas uma cor, mas a representação da minha essência criativa - místico, profundo e transformador."
  },
  {
    icon: "Users",
    title: "A Conexão",
    text: "Percebi que minha arte tocava as pessoas de forma única. Cada cliente não comprava apenas uma obra, mas levava um pedaço da minha história e criava a sua própria."
  }];


  const personalValues = [
  {
    icon: "Palette",
    title: "Autenticidade",
    description: "Cada obra reflete minha verdade interior, sem máscaras ou pretensões."
  },
  {
    icon: "Heart",
    title: "Conexão Emocional",
    description: "Arte que toca a alma e cria vínculos duradouros entre artista e observador."
  },
  {
    icon: "Sparkles",
    title: "Transformação",
    description: "Acredito no poder da arte de transformar espaços e vidas."
  },
  {
    icon: "Users",
    title: "Colaboração",
    description: "Cada comissão é uma jornada compartilhada de criação e descoberta."
  }];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Icon name="Heart" size={16} className="text-primary mr-2" />
            <span className="text-sm font-body font-body-medium text-primary">Minha História</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-heading-bold text-gradient-purple mb-6">
            A Pessoa por Trás da Arte
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Mais do que técnicas e cores, minha arte carrega histórias, emoções e uma jornada 
            de autodescoberta que quero compartilhar com você.
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-heading font-heading-bold text-text-primary">
                "Arte é a linguagem da alma que não precisa de tradução"
              </h3>
              
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Nasci em uma família onde a criatividade sempre foi valorizada. Minha avó, uma bordadeira talentosa, 
                  me ensinou que cada ponto carrega intenção, cada cor tem propósito. Foi ela quem me mostrou que 
                  arte não é luxo, mas necessidade da alma.
                </p>
                
                <p>
                  Cresci desenhando em qualquer superfície disponível - cadernos, paredes, até mesmo na areia da praia. 
                  Meus pais, inicialmente preocupados, logo perceberam que não era apenas uma fase, mas minha forma 
                  natural de existir no mundo.
                </p>
                
                <p>
                  O roxo chegou à minha vida durante um período de grande transformação pessoal. Era como se essa cor 
                  capturasse toda a complexidade das minhas emoções - a profundidade, o mistério, a espiritualidade 
                  e a força feminina que eu estava descobrindo em mim.
                </p>
              </div>
            </div>

            {/* Personal Quote */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border-l-4 border-primary">
              <blockquote className="text-lg font-body italic text-text-primary">
                "Cada obra que crio é um convite para que você encontre um pedaço de si mesmo. 
                Arte não é apenas decoração - é transformação."
              </blockquote>
              <cite className="text-sm text-text-secondary mt-2 block">- Choki, Artista</cite>
            </div>
          </div>

          {/* Personal Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-purple">
              <Image
                src="https://images.unsplash.com/photo-1611086699165-3462914132c0"
                alt="Retrato íntimo da artista Choki em seu estúdio, sorrindo naturalmente enquanto segura um pincel com tinta roxa"
                className="w-full h-full object-cover" />

            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Story Milestones */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-heading-bold text-text-primary text-center mb-12">
            Momentos que Definiram Minha Jornada
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {storyMilestones?.map((milestone, index) =>
            <div key={index} className="bg-card rounded-xl p-6 shadow-subtle border border-border hover:shadow-purple transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={milestone?.icon} size={20} className="text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-heading font-heading-semibold text-text-primary mb-3">
                      {milestone?.title}
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {milestone?.text}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Personal Values */}
        <div className="bg-gradient-to-br from-muted/50 to-background rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-heading-bold text-text-primary mb-4">
              Valores que Guiam Minha Arte
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Estes princípios fundamentais moldam cada pincelada, cada decisão criativa e cada interação com meus clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalValues?.map((value, index) =>
            <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={value?.icon} size={24} className="text-white" />
                </div>
                
                <h4 className="text-lg font-heading font-heading-semibold text-text-primary mb-2">
                  {value?.title}
                </h4>
                
                <p className="text-sm text-text-secondary leading-relaxed">
                  {value?.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default PersonalStory;