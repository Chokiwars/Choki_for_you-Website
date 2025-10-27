import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "São Paulo, SP",
    avatar: "https://images.unsplash.com/photo-1665023021123-71ba5e860b2d",
    avatarAlt: "Professional headshot of smiling woman with brown hair in white blouse",
    rating: 5,
    text: `A obra da Choki transformou completamente minha sala de estar. As cores roxas trazem uma energia única e todos os visitantes ficam encantados. É mais que uma pintura, é uma experiência emocional que vivo todos os dias.`,
    artwork: "https://images.unsplash.com/photo-1728488444676-9f4035cb8d81",
    artworkAlt: "Purple abstract painting hanging on white wall in modern living room",
    purchaseType: "Obra Original",
    date: "Outubro 2024"
  },
  {
    id: 2,
    name: "Carlos Mendes",
    location: "Rio de Janeiro, RJ",
    avatar: "https://images.unsplash.com/photo-1585066047759-3438c34cf676",
    avatarAlt: "Professional headshot of middle-aged man with beard in dark suit",
    rating: 5,
    text: `Encomendei uma peça personalizada para meu escritório e o resultado superou todas as expectativas. A Choki conseguiu capturar exatamente a essência que eu queria transmitir. O processo foi incrível, desde a primeira conversa até a entrega.`,
    artwork: "https://images.unsplash.com/photo-1627422541102-8809a3ba9396",
    artworkAlt: "Custom purple and gold abstract painting displayed in modern office space",
    purchaseType: "Comissão Personalizada",
    date: "Setembro 2024"
  },
  {
    id: 3,
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    avatar: "https://images.unsplash.com/photo-1643206687509-e152509f8eca",
    avatarAlt: "Professional headshot of young woman with long dark hair smiling at camera",
    rating: 5,
    text: `Comprei três obras da série 'Universo Roxo' e cada uma conta uma história diferente. A qualidade é excepcional e o atendimento da Choki é muito carinhoso. Ela realmente se importa com cada cliente e cada obra que cria.`,
    artwork: "https://images.unsplash.com/photo-1677623395283-a9bcc5bd4345",
    artworkAlt: "Three purple cosmic paintings arranged on bedroom wall above bed",
    purchaseType: "Coleção Completa",
    date: "Agosto 2024"
  },
  {
    id: 4,
    name: "Roberto Lima",
    location: "Brasília, DF",
    avatar: "https://images.unsplash.com/photo-1708617451137-f94b1c4c4dc5",
    avatarAlt: "Professional headshot of man with glasses and friendly smile in business attire",
    rating: 5,
    text: `A arte da Choki trouxe vida para nossa clínica. Os pacientes sempre comentam sobre as obras roxas que decoram o ambiente. É incrível como a arte pode influenciar positivamente o humor e a energia de um espaço.`,
    artwork: "https://images.unsplash.com/photo-1727778989093-a1522ef8de96",
    artworkAlt: "Purple abstract artwork displayed in modern medical clinic waiting room",
    purchaseType: "Decoração Comercial",
    date: "Julho 2024"
  }];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('testimonials');
    if (section) observer?.observe(section);

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const currentReview = testimonials?.[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-light/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary mb-6">
            <Icon name="MessageCircle" size={16} />
            <span className="text-sm font-body font-body-medium">Depoimentos</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-heading-bold text-text-primary mb-6">
            O que Nossos
            <span className="block text-gradient-purple">Clientes Dizem</span>
          </h2>
          
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto leading-relaxed">
            Cada obra encontra seu lar perfeito. Veja como a arte da Choki tem transformado 
            espaços e tocado corações ao redor do Brasil.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Testimonial Content */}
            <div className="space-y-8">
              {/* Rating Stars */}
              <div className="flex items-center space-x-1">
                {[...Array(currentReview?.rating)]?.map((_, index) =>
                <Icon key={index} name="Star" size={24} className="text-accent fill-current" />
                )}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-2xl lg:text-3xl font-body leading-relaxed text-text-primary">
                "{currentReview?.text}"
              </blockquote>
              
              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={currentReview?.avatar}
                    alt={currentReview?.avatarAlt}
                    className="w-full h-full object-cover" />

                </div>
                
                <div className="space-y-1">
                  <h4 className="text-xl font-heading font-heading-bold text-text-primary">
                    {currentReview?.name}
                  </h4>
                  <p className="text-text-secondary font-body">
                    {currentReview?.location}
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-primary">
                    <Icon name="ShoppingBag" size={14} />
                    <span className="font-body font-body-medium">{currentReview?.purchaseType}</span>
                    <span className="text-text-secondary">• {currentReview?.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Artwork Installation Photo */}
            <div className="relative">
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-purple">
                <div className="aspect-[4/3]">
                  <Image
                    src={currentReview?.artwork}
                    alt={currentReview?.artworkAlt}
                    className="w-full h-full object-cover" />

                </div>
                
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-dark/90 to-transparent p-6">
                  <div className="flex items-center space-x-3 text-white">
                    <Icon name="Home" size={20} />
                    <span className="font-body font-body-medium">Arte em Casa</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-primary rounded-full p-3 shadow-lg">
                <Icon name="Quote" size={24} color="white" />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex items-center justify-center space-x-4 mt-12">
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length)}
            className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Depoimento anterior">

            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <div className="flex space-x-2">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentTestimonial ?
              'bg-primary scale-125' : 'bg-muted hover:bg-primary/50'}`
              }
              aria-label={`Ver depoimento ${index + 1}`} />

            )}
          </div>
          
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length)}
            className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Próximo depoimento">

            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center space-y-2">
            <div className="text-3xl font-heading font-heading-bold text-primary">89</div>
            <div className="text-sm text-text-secondary font-body">Clientes Satisfeitos</div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-3xl font-heading font-heading-bold text-primary">150+</div>
            <div className="text-sm text-text-secondary font-body">Obras Entregues</div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-3xl font-heading font-heading-bold text-primary">4.9</div>
            <div className="text-sm text-text-secondary font-body">Avaliação Média</div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-3xl font-heading font-heading-bold text-primary">100%</div>
            <div className="text-sm text-text-secondary font-body">Recomendação</div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;