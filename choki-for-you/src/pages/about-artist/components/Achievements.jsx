import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState('exhibitions');

  const achievements = {
    exhibitions: [
    {
      year: "2024",
      title: "Exposição \'Tons de Alma'",
      location: "Museu de Arte Moderna - São Paulo",
      description: "Exposição individual com 30 obras explorando a psicologia das cores roxas.",
      image: "https://images.unsplash.com/photo-1634478135664-2898de574141",
      imageAlt: "Galeria de museu com paredes brancas exibindo pinturas em tons roxos e visitantes admirando as obras",
      status: "Destaque"
    },
    {
      year: "2023",
      title: "Coletiva \'Novas Vozes'",
      location: "Centro Cultural Banco do Brasil - Rio de Janeiro",
      description: "Participação em exposição coletiva com artistas emergentes brasileiros.",
      image: "https://images.unsplash.com/photo-1632288976817-76c61986e4b7",
      imageAlt: "Espaço expositivo moderno com obras de arte contemporânea e iluminação profissional",
      status: "Participação"
    },
    {
      year: "2022",
      title: "Arte Digital Brasileira",
      location: "Galeria Virtual - Plataforma Nacional",
      description: "Primeira exposição digital com obras criadas exclusivamente em meio digital.",
      image: "https://images.unsplash.com/photo-1617331099789-743fe4394b2f",
      imageAlt: "Tela de computador mostrando galeria virtual com obras de arte digital em tons vibrantes",
      status: "Inovação"
    }],

    awards: [
    {
      year: "2024",
      title: "Prêmio Jovem Arte Contemporânea",
      organization: "Fundação Bienal de São Paulo",
      description: "Reconhecimento pela contribuição inovadora à arte contemporânea brasileira.",
      image: "https://images.unsplash.com/photo-1695071565254-1015d8594dbc",
      imageAlt: "Troféu dourado em formato moderno sobre pedestal com certificado de premiação ao fundo",
      category: "Arte Contemporânea"
    },
    {
      year: "2023",
      title: "Menção Honrosa - Arte Digital",
      organization: "Festival Internacional de Arte Digital",
      description: "Reconhecimento pela excelência técnica e criativa em arte digital.",
      image: "https://images.unsplash.com/photo-1640222493748-5bb47aa91265",
      imageAlt: "Certificado emoldurado de menção honrosa com medalha prateada em destaque",
      category: "Arte Digital"
    },
    {
      year: "2022",
      title: "Artista Revelação",
      organization: "Revista Arte Brasileira",
      description: "Eleita uma das 10 artistas revelação do ano pela crítica especializada.",
      image: "https://images.unsplash.com/photo-1596618471107-fb1bda2971f5",
      imageAlt: "Revista de arte aberta mostrando matéria sobre artistas revelação com fotos e texto destacado",
      category: "Crítica"
    }],

    press: [
    {
      year: "2024",
      title: "Perfil na Revista Vogue Brasil",
      publication: "Vogue Brasil - Edição Arte",
      description: "Matéria especial sobre a nova geração de artistas brasileiros e o uso inovador das cores.",
      image: "https://images.unsplash.com/photo-1596383040495-749988f555cb",
      imageAlt: "Revista Vogue aberta mostrando matéria sobre arte com fotos coloridas e layout elegante",
      reach: "2M+ leitores"
    },
    {
      year: "2023",
      title: "Entrevista no Programa Arte & Cultura",
      publication: "TV Cultura - Programa Nacional",
      description: "Participação em programa especial sobre arte contemporânea e processo criativo.",
      image: "https://images.unsplash.com/photo-1665045626220-7bb46c5a7370",
      imageAlt: "Estúdio de televisão com cenário moderno, câmeras e apresentadora entrevistando artista",
      reach: "1.5M+ telespectadores"
    },
    {
      year: "2022",
      title: "Artigo no Jornal Folha de S.Paulo",
      publication: "Folha de S.Paulo - Caderno Ilustrada",
      description: "Análise crítica sobre o movimento de arte digital no Brasil e novos talentos.",
      image: "https://images.unsplash.com/photo-1596618471107-fb1bda2971f5",
      imageAlt: "Jornal aberto na seção de cultura com artigo sobre arte digital e foto da artista",
      reach: "800K+ leitores"
    }]

  };

  const categories = [
  { key: 'exhibitions', label: 'Exposições', icon: 'Image', count: achievements?.exhibitions?.length },
  { key: 'awards', label: 'Prêmios', icon: 'Award', count: achievements?.awards?.length },
  { key: 'press', label: 'Imprensa', icon: 'Newspaper', count: achievements?.press?.length }];


  const stats = [
  { icon: "Trophy", label: "Prêmios Recebidos", value: "8" },
  { icon: "Eye", label: "Exposições", value: "15+" },
  { icon: "Users", label: "Matérias na Mídia", value: "25+" },
  { icon: "Star", label: "Anos de Carreira", value: "8" }];


  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success/10 rounded-full border border-success/20 mb-6">
            <Icon name="Trophy" size={16} className="text-success mr-2" />
            <span className="text-sm font-body font-body-medium text-success">Reconhecimentos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-heading-bold text-gradient-purple mb-6">
            Conquistas e Reconhecimentos
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Uma jornada marcada por reconhecimentos que validam meu compromisso com a excelência artística 
            e a inovação criativa.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) =>
          <div key={index} className="bg-card rounded-xl p-6 text-center shadow-subtle border border-border">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-success" />
              </div>
              <div className="text-2xl font-heading font-heading-bold text-success mb-1">
                {stat?.value}
              </div>
              <div className="text-sm text-text-secondary">
                {stat?.label}
              </div>
            </div>
          )}
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) =>
          <button
            key={category?.key}
            onClick={() => setActiveCategory(category?.key)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-body font-body-medium transition-all duration-300 ${
            activeCategory === category?.key ?
            'bg-primary text-primary-foreground shadow-purple' :
            'bg-card text-text-secondary hover:bg-primary/10 hover:text-primary border border-border'}`
            }>

              <Icon name={category?.icon} size={16} />
              <span>{category?.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
            activeCategory === category?.key ?
            'bg-primary-foreground/20 text-primary-foreground' :
            'bg-muted text-text-secondary'}`
            }>
                {category?.count}
              </span>
            </button>
          )}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements?.[activeCategory]?.map((item, index) =>
          <div key={index} className="bg-card rounded-xl shadow-subtle border border-border overflow-hidden hover:shadow-purple transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                src={item?.image}
                alt={item?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                
                {/* Year Badge */}
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 border border-border">
                  <span className="text-sm font-heading font-heading-semibold text-primary">
                    {item?.year}
                  </span>
                </div>

                {/* Status/Category Badge */}
                {(item?.status || item?.category || item?.reach) &&
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-body font-body-medium text-primary-foreground">
                      {item?.status || item?.category || item?.reach}
                    </span>
                  </div>
              }
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-heading-bold text-text-primary mb-2 line-clamp-2">
                  {item?.title}
                </h3>
                
                <div className="text-sm text-primary mb-3 font-body font-body-medium">
                  {item?.location || item?.organization || item?.publication}
                </div>
                
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                  {item?.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Press Kit CTA */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-success/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Download" size={32} className="text-primary-foreground" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-heading font-heading-bold text-text-primary mb-4">
              Kit de Imprensa Completo
            </h3>
            
            <p className="text-lg text-text-secondary mb-8">
              Acesse materiais profissionais incluindo biografia detalhada, fotos em alta resolução, 
              histórico de exposições e informações para imprensa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="bg-gradient-cta hover:opacity-90 shadow-purple">

                Download Kit Completo
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">

                Contato para Imprensa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default Achievements;