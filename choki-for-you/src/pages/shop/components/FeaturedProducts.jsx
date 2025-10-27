import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedProducts = ({ onAddToCart, onAddToWishlist }) => {
  const featuredProducts = [
  {
    id: 'featured-1',
    title: 'Sonhos Violetas',
    image: "https://images.unsplash.com/photo-1614521185607-c374b6c5609c",
    imageAlt: 'Abstract purple and violet painting with flowing organic shapes and golden accents',
    price: 2500,
    originalPrice: 3200,
    category: 'Original',
    artist: 'Choki',
    dimensions: '80x100cm',
    isNew: true,
    isFeatured: true,
    description: 'Uma explosão de cores violetas que dança entre o real e o imaginário, capturando a essência dos sonhos mais profundos.',
    badge: 'Destaque da Semana'
  },
  {
    id: 'featured-2',
    title: 'Impressão Premium - Galáxia Roxa',
    image: "https://images.unsplash.com/photo-1602981256888-244edc1f444f",
    imageAlt: 'Cosmic purple galaxy artwork with swirling nebula patterns and starlight effects',
    price: 180,
    category: 'Impressão',
    artist: 'Choki',
    dimensions: '40x50cm',
    isLimitedEdition: true,
    description: 'Impressão de alta qualidade em papel fotográfico premium, edição limitada de 50 unidades.',
    badge: 'Edição Limitada'
  },
  {
    id: 'featured-3',
    title: 'Camiseta Artística - Universo Choki',
    image: "https://images.unsplash.com/photo-1714628402329-4fdbd0bd4e44",
    imageAlt: 'Black t-shirt with purple artistic universe design featuring cosmic patterns and Choki branding',
    price: 89,
    category: 'Produto',
    artist: 'Choki',
    dimensions: 'P, M, G, GG',
    isNew: true,
    description: 'Camiseta 100% algodão com estampa exclusiva do universo artístico Choki.',
    badge: 'Novo Produto'
  }];


  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })?.format(price);
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="font-heading font-heading-bold text-3xl text-card-foreground mb-4">
          Produtos em Destaque
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Descubra nossas peças mais especiais, cuidadosamente selecionadas para você
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featuredProducts?.map((product, index) =>
        <div
          key={product?.id}
          className={`group relative ${
          index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`
          }>

            <div className="relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-purple transition-all duration-500 hover:-translate-y-2">
              {/* Product Image */}
              <div className={`relative overflow-hidden ${
            index === 0 ? 'aspect-[4/3]' : 'aspect-square'}`
            }>
                <Image
                src={product?.image}
                alt={product?.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-body-medium rounded-full">
                    {product?.badge}
                  </span>
                  {product?.isNew &&
                <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-body-medium rounded-full">
                      Novo
                    </span>
                }
                  {product?.isLimitedEdition &&
                <span className="px-3 py-1 bg-purple-deep text-white text-sm font-body-medium rounded-full">
                      Limitado
                    </span>
                }
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <button
                  onClick={() => onAddToWishlist(product)}
                  className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors">

                    <Icon name="Heart" size={18} />
                  </button>
                  <button className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors">
                    <Icon name="Eye" size={18} />
                  </button>
                </div>

                {/* Hover Actions */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex gap-2">
                    <Button
                    variant="default"
                    size="sm"
                    iconName="ShoppingCart"
                    iconPosition="left"
                    onClick={() => onAddToCart(product)}
                    className="flex-1 bg-primary hover:bg-primary/90">

                      Adicionar
                    </Button>
                    <Button
                    variant="outline"
                    size="sm"
                    iconName="Eye"
                    className="bg-background/90 backdrop-blur-sm hover:bg-background">

                      Ver
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-primary text-sm font-body-medium">
                        {product?.category}
                      </span>
                      <span className="text-text-secondary text-sm">•</span>
                      <span className="text-text-secondary text-sm">
                        {product?.dimensions}
                      </span>
                    </div>
                    <h3 className={`font-heading font-heading-bold text-card-foreground mb-2 ${
                  index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`
                  }>
                      {product?.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {product?.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`font-heading font-heading-bold text-primary ${
                  index === 0 ? 'text-2xl' : 'text-xl'}`
                  }>
                      {formatPrice(product?.price)}
                    </div>
                    {product?.originalPrice &&
                  <div className="text-text-secondary text-sm line-through">
                        {formatPrice(product?.originalPrice)}
                      </div>
                  }
                  </div>

                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={16} className="text-accent fill-current" />
                    <span className="text-text-secondary text-sm">4.9</span>
                  </div>
                </div>

                {/* Artist Info */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                  <div className="w-8 h-8 bg-gradient-cta rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-heading-bold">C</span>
                  </div>
                  <div>
                    <div className="text-card-foreground text-sm font-body-medium">
                      {product?.artist}
                    </div>
                    <div className="text-text-secondary text-xs">
                      Artista Oficial
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* View All Button */}
      <div className="text-center mt-8">
        <Link to="/gallery">
          <Button
            variant="outline"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">

            Ver Toda a Coleção
          </Button>
        </Link>
      </div>
    </div>);

};

export default FeaturedProducts;