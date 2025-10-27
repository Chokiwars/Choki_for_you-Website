import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialMedia = () => {
  const socialPlatforms = [
  {
    name: 'Instagram',
    handle: '@choki_for_you',
    followers: '12.5K',
    description: 'Acompanhe o processo criativo diário, bastidores do ateliê e obras em andamento',
    icon: 'Instagram',
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
    url: 'https://instagram.com/choki_for_you',
    posts: [
    {
      image: "https://images.unsplash.com/photo-1623492962907-bb87ee8673bc",
      alt: 'Artista pintando com pincel detalhes em tela colorida no ateliê'
    },
    {
      image: "https://images.unsplash.com/photo-1577187603960-0f080bddcb0b",
      alt: 'Paleta de tintas com cores vibrantes e pincéis organizados'
    },
    {
      image: "https://images.unsplash.com/photo-1631414828314-06766a0c593a",
      alt: 'Obra de arte abstrata com tons de roxo e dourado em exposição'
    }]

  },
  {
    name: 'Facebook',
    handle: 'Choki For You Arte',
    followers: '8.2K',
    description: 'Compartilhamento de obras finalizadas, eventos e histórias por trás de cada criação',
    icon: 'Facebook',
    color: 'bg-blue-600',
    url: 'https://facebook.com/chokiforyouarte',
    posts: [
    {
      image: "https://images.unsplash.com/photo-1589307212996-1dae78b82ed5",
      alt: 'Galeria de arte com várias pinturas coloridas nas paredes'
    },
    {
      image: "https://images.unsplash.com/photo-1635636994292-f8f3d5b6cc87",
      alt: 'Cliente sorrindo ao lado de obra de arte recém adquirida'
    }]

  },
  {
    name: 'YouTube',
    handle: 'Choki For You',
    followers: '3.8K',
    description: 'Tutoriais de técnicas artísticas, time-lapse de criações e tours pelo ateliê',
    icon: 'Youtube',
    color: 'bg-red-600',
    url: 'https://youtube.com/@chokiforyou',
    posts: [
    {
      image: "https://images.unsplash.com/photo-1636971828014-0f3493cba88a",
      alt: 'Setup de gravação no ateliê com câmera focando tela em processo'
    }]

  },
  {
    name: 'TikTok',
    handle: '@choki.for.you',
    followers: '15.7K',
    description: 'Vídeos rápidos do processo criativo, transformações de telas e dicas artísticas',
    icon: 'Music',
    color: 'bg-black',
    url: 'https://tiktok.com/@choki.for.you',
    posts: [
    {
      image: "https://images.unsplash.com/photo-1608752447543-8f0838531776",
      alt: 'Mãos de artista aplicando tinta roxa em movimento rápido'
    }]

  }];


  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Conecte-se Comigo
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Acompanhe meu trabalho nas redes sociais! Compartilho o processo criativo, 
            bastidores do ateliê, obras em andamento e muito mais conteúdo exclusivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {socialPlatforms?.map((platform, index) =>
          <div
            key={index}
            className="bg-card rounded-2xl p-8 shadow-purple hover:shadow-purple-hover transition-all duration-300 border border-border group hover:-translate-y-2">

              {/* Platform Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${platform?.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={platform?.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-text-primary">
                      {platform?.name}
                    </h3>
                    <p className="text-text-secondary">
                      {platform?.handle}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {platform?.followers}
                  </div>
                  <div className="text-sm text-text-secondary">
                    seguidores
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-6 leading-relaxed">
                {platform?.description}
              </p>

              {/* Recent Posts Preview */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-text-primary mb-3">
                  Postagens Recentes
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {platform?.posts?.map((post, postIndex) =>
                <div key={postIndex} className="aspect-square rounded-lg overflow-hidden">
                      <Image
                    src={post?.image}
                    alt={post?.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />

                    </div>
                )}
                  {platform?.posts?.length < 3 &&
                Array.from({ length: 3 - platform?.posts?.length })?.map((_, emptyIndex) =>
                <div key={`empty-${emptyIndex}`} className="aspect-square rounded-lg bg-muted flex items-center justify-center">
                        <Icon name="Plus" size={20} className="text-text-secondary" />
                      </div>
                )
                }
                </div>
              </div>

              {/* Follow Button */}
              <button
              onClick={() => handleSocialClick(platform?.url)}
              className={`w-full py-3 px-4 ${platform?.color} text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 font-medium`}>

                <Icon name={platform?.icon} size={20} />
                <span>Seguir no {platform?.name}</span>
              </button>
            </div>
          )}
        </div>

        {/* Social Media CTA */}
        <div className="bg-gradient-to-br from-purple-light via-purple-medium to-purple-deep rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <Icon name="Users" size={48} className="text-white mx-auto mb-6" />
            
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              Faça Parte da Comunidade
            </h3>
            
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Mais de 40 mil pessoas já acompanham meu trabalho nas redes sociais. 
              Junte-se a essa comunidade apaixonada por arte e seja o primeiro a ver 
              novas criações, participar de sorteios exclusivos e receber dicas artísticas.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {socialPlatforms?.map((platform, index) =>
              <button
                key={index}
                onClick={() => handleSocialClick(platform?.url)}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-colors group">

                  <Icon name={platform?.icon} size={32} className="text-white mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-medium text-sm">
                    {platform?.followers}
                  </div>
                  <div className="text-white/80 text-xs">
                    {platform?.name}
                  </div>
                </button>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleSocialClick('https://instagram.com/choki_for_you')}
                className="bg-white text-purple-deep px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center space-x-2">

                <Icon name="Instagram" size={20} />
                <span>Seguir no Instagram</span>
              </button>
              
              <button
                onClick={() => handleSocialClick('https://youtube.com/@chokiforyou')}
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">

                <Icon name="Youtube" size={20} />
                <span>Inscrever no YouTube</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SocialMedia;