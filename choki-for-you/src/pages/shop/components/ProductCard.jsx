import React, { useState } from 'react';

import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onAddToCart, onAddToWishlist, isInWishlist }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })?.format(price);
  };

  const handleAddToCart = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    onAddToCart(product);
  };

  const handleWishlistToggle = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    onAddToWishlist(product);
  };

  return (
    <div className="group relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-purple transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product?.image}
          alt={product?.imageAlt}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon name="Image" size={48} className="text-muted-foreground animate-pulse" />
          </div>
        )}

        {/* Product badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product?.isNew && (
            <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-body-medium rounded-full">
              Novo
            </span>
          )}
          {product?.isOriginal && (
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-body-medium rounded-full">
              Original
            </span>
          )}
          {product?.isLimitedEdition && (
            <span className="px-2 py-1 bg-purple-deep text-white text-xs font-body-medium rounded-full">
              Edição Limitada
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isInWishlist
              ? 'bg-destructive text-destructive-foreground'
              : 'bg-background/80 text-text-primary hover:bg-background'
          }`}
        >
          <Icon 
            name={isInWishlist ? "Heart" : "Heart"} 
            size={16} 
            className={isInWishlist ? "fill-current" : ""} 
          />
        </button>

        {/* Quick actions overlay */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            <Button
              variant="default"
              size="sm"
              iconName="Eye"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90"
            >
              Ver Detalhes
            </Button>
            {product?.type !== 'original' && (
              <Button
                variant="outline"
                size="sm"
                iconName="ShoppingCart"
                iconPosition="left"
                onClick={handleAddToCart}
                className="bg-background hover:bg-muted"
              >
                Adicionar
              </Button>
            )}
          </div>
        </div>
      </div>
      {/* Product info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-heading font-heading-semibold text-card-foreground text-lg mb-1 line-clamp-1">
              {product?.title}
            </h3>
            <p className="text-text-secondary text-sm mb-2">
              {product?.category} • {product?.dimensions}
            </p>
          </div>
          <div className="text-right">
            <div className="font-heading font-heading-bold text-primary text-lg">
              {formatPrice(product?.price)}
            </div>
            {product?.originalPrice && product?.originalPrice > product?.price && (
              <div className="text-text-secondary text-sm line-through">
                {formatPrice(product?.originalPrice)}
              </div>
            )}
          </div>
        </div>

        {/* Product description */}
        <p className="text-text-secondary text-sm mb-3 line-clamp-2">
          {product?.description}
        </p>

        {/* Product features */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product?.features?.slice(0, 3)?.map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Stock status */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${
              product?.stock > 10 ? 'bg-success' : 
              product?.stock > 0 ? 'bg-warning' : 'bg-destructive'
            }`} />
            <span className="text-sm text-text-secondary">
              {product?.stock > 10 ? 'Em estoque' : 
               product?.stock > 0 ? `Apenas ${product?.stock} restantes` : 'Esgotado'}
            </span>
          </div>
          {product?.rating && (
            <div className="flex items-center gap-1">
              <Icon name="Star" size={14} className="text-accent fill-current" />
              <span className="text-sm text-text-secondary">{product?.rating}</span>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          {product?.type === 'original' ? (
            <Button
              variant="default"
              fullWidth
              iconName="Palette"
              iconPosition="left"
              className="bg-gradient-cta hover:opacity-90"
            >
              Solicitar Informações
            </Button>
          ) : (
            <>
              <Button
                variant="outline"
                className="flex-1"
                iconName="ShoppingCart"
                iconPosition="left"
                onClick={handleAddToCart}
                disabled={product?.stock === 0}
              >
                Carrinho
              </Button>
              <Button
                variant="default"
                className="flex-1 bg-gradient-cta hover:opacity-90"
                disabled={product?.stock === 0}
              >
                Comprar
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;