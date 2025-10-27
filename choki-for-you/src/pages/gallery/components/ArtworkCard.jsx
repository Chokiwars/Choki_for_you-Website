import React, { useState } from 'react';

import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ArtworkCard = ({ artwork, onFavorite, onQuickView, isFavorited = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })?.format(price);
  };

  const handleFavoriteClick = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    onFavorite(artwork?.id);
  };

  const handleQuickViewClick = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    onQuickView(artwork);
  };

  return (
    <div 
      className="group relative bg-card rounded-lg overflow-hidden shadow-subtle hover:shadow-purple transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={artwork?.image}
          alt={artwork?.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay Actions */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center space-x-3 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            variant="secondary"
            size="sm"
            iconName="Eye"
            onClick={handleQuickViewClick}
            className="bg-white/90 hover:bg-white text-text-primary"
          >
            Visualizar
          </Button>
          <Button
            variant="secondary"
            size="sm"
            iconName="ShoppingCart"
            className="bg-white/90 hover:bg-white text-text-primary"
          >
            Comprar
          </Button>
        </div>

        {/* Status Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {artwork?.isNew && (
            <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-body-medium rounded-full">
              Novo
            </span>
          )}
          {artwork?.isLimited && (
            <span className="px-2 py-1 bg-warning text-warning-foreground text-xs font-body-medium rounded-full">
              Edição Limitada
            </span>
          )}
          {artwork?.status === 'sold' && (
            <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-body-medium rounded-full">
              Vendido
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full transition-all duration-300 transform hover:scale-110"
        >
          <Icon 
            name={isFavorited ? "Heart" : "Heart"} 
            size={16} 
            className={isFavorited ? "text-destructive fill-current" : "text-text-secondary"} 
          />
        </button>
      </div>
      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-heading-semibold text-text-primary text-lg truncate">
              {artwork?.title}
            </h3>
            <p className="text-text-secondary text-sm font-body">
              {artwork?.medium} • {artwork?.year}
            </p>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-3 line-clamp-2">
          {artwork?.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-text-secondary">
            <span>{artwork?.dimensions}</span>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={12}
                className={i < artwork?.rating ? "text-accent fill-current" : "text-border"}
              />
            ))}
            <span className="text-xs text-text-secondary ml-1">({artwork?.reviews})</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-heading font-heading-bold text-primary">
              {formatPrice(artwork?.price)}
            </span>
            {artwork?.originalPrice && artwork?.originalPrice > artwork?.price && (
              <span className="text-sm text-text-secondary line-through">
                {formatPrice(artwork?.originalPrice)}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            {artwork?.availablePrints && (
              <span className="text-xs text-text-secondary bg-muted px-2 py-1 rounded-full">
                Prints disponíveis
              </span>
            )}
            <div className={`w-3 h-3 rounded-full ${
              artwork?.status === 'available' ? 'bg-success' :
              artwork?.status === 'reserved' ? 'bg-warning' : 'bg-destructive'
            }`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;