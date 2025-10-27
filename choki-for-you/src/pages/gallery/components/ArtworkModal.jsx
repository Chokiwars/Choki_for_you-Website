import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ArtworkModal = ({ artwork, isOpen, onClose, onAddToCart, onFavorite, isFavorited }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !artwork) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })?.format(price);
  };

  const images = artwork?.gallery || [artwork?.image];

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? images?.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === images?.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...artwork,
      quantity
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="flex-1 relative bg-muted">
          <div className="relative h-64 lg:h-full">
            <Image
              src={images?.[selectedImageIndex]}
              alt={`${artwork?.title} - Imagem ${selectedImageIndex + 1}`}
              className={`w-full h-full object-contain transition-transform duration-300 cursor-zoom-in ${
                isZoomed ? 'scale-150' : 'scale-100'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />

            {/* Image Navigation */}
            {images?.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </>
            )}

            {/* Image Counter */}
            {images?.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
                {selectedImageIndex + 1} / {images?.length}
              </div>
            )}

            {/* Zoom Indicator */}
            <div className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full">
              <Icon name={isZoomed ? "ZoomOut" : "ZoomIn"} size={16} />
            </div>
          </div>

          {/* Thumbnail Gallery */}
          {images?.length > 1 && (
            <div className="absolute bottom-4 left-4 right-4 lg:hidden">
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {images?.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-primary' :'border-transparent'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${artwork?.title} - Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-96 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-2xl font-heading font-heading-bold text-text-primary">
              Detalhes da Obra
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Title and Basic Info */}
            <div>
              <h1 className="text-2xl font-heading font-heading-bold text-text-primary mb-2">
                {artwork?.title}
              </h1>
              <div className="flex items-center space-x-4 text-text-secondary">
                <span>{artwork?.medium}</span>
                <span>•</span>
                <span>{artwork?.year}</span>
                <span>•</span>
                <span>{artwork?.dimensions}</span>
              </div>
            </div>

            {/* Status Badges */}
            <div className="flex flex-wrap gap-2">
              {artwork?.isNew && (
                <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-body-medium rounded-full">
                  Novo
                </span>
              )}
              {artwork?.isLimited && (
                <span className="px-3 py-1 bg-warning text-warning-foreground text-sm font-body-medium rounded-full">
                  Edição Limitada
                </span>
              )}
              <span className={`px-3 py-1 text-sm font-body-medium rounded-full ${
                artwork?.status === 'available' ?'bg-success text-success-foreground' 
                  : artwork?.status === 'reserved' ?'bg-warning text-warning-foreground' :'bg-destructive text-destructive-foreground'
              }`}>
                {artwork?.status === 'available' ? 'Disponível' :
                 artwork?.status === 'reserved' ? 'Reservado' : 'Vendido'}
              </span>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-heading font-heading-semibold text-text-primary mb-2">
                Descrição
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {artwork?.description}
              </p>
            </div>

            {/* Technical Details */}
            <div>
              <h3 className="font-heading font-heading-semibold text-text-primary mb-3">
                Detalhes Técnicos
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-secondary">Técnica:</span>
                  <p className="font-body-medium text-text-primary">{artwork?.medium}</p>
                </div>
                <div>
                  <span className="text-text-secondary">Dimensões:</span>
                  <p className="font-body-medium text-text-primary">{artwork?.dimensions}</p>
                </div>
                <div>
                  <span className="text-text-secondary">Ano:</span>
                  <p className="font-body-medium text-text-primary">{artwork?.year}</p>
                </div>
                <div>
                  <span className="text-text-secondary">Assinatura:</span>
                  <p className="font-body-medium text-text-primary">
                    {artwork?.signed ? 'Assinado' : 'Não assinado'}
                  </p>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className={i < artwork?.rating ? "text-accent fill-current" : "text-border"}
                    />
                  ))}
                </div>
                <span className="text-sm text-text-secondary">
                  ({artwork?.reviews} avaliações)
                </span>
              </div>
            </div>

            {/* Price and Actions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-heading font-heading-bold text-primary">
                    {formatPrice(artwork?.price)}
                  </div>
                  {artwork?.originalPrice && artwork?.originalPrice > artwork?.price && (
                    <div className="text-sm text-text-secondary line-through">
                      {formatPrice(artwork?.originalPrice)}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => onFavorite(artwork?.id)}
                  className="p-3 hover:bg-muted rounded-lg transition-colors"
                >
                  <Icon 
                    name="Heart" 
                    size={24} 
                    className={isFavorited ? "text-destructive fill-current" : "text-text-secondary"} 
                  />
                </button>
              </div>

              {artwork?.status === 'available' && (
                <div className="space-y-3">
                  {/* Quantity Selector */}
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-body-medium text-text-primary">
                      Quantidade:
                    </span>
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Icon name="Minus" size={16} />
                      </button>
                      <span className="px-4 py-2 text-center min-w-[3rem]">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Icon name="Plus" size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button
                      variant="default"
                      fullWidth
                      iconName="ShoppingCart"
                      iconPosition="left"
                      onClick={handleAddToCart}
                      className="bg-gradient-cta hover:opacity-90"
                    >
                      Adicionar ao Carrinho
                    </Button>
                    <Button
                      variant="outline"
                      fullWidth
                      iconName="CreditCard"
                      iconPosition="left"
                    >
                      Comprar Agora
                    </Button>
                  </div>
                </div>
              )}

              {artwork?.availablePrints && (
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Copy" size={16} className="text-primary" />
                    <span className="font-body-medium text-text-primary">
                      Prints Disponíveis
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">
                    Esta obra também está disponível em formato de print de alta qualidade.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Eye"
                    iconPosition="left"
                  >
                    Ver Opções de Print
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Thumbnail Gallery for Desktop */}
          {images?.length > 1 && (
            <div className="hidden lg:block p-6 border-t border-border">
              <div className="grid grid-cols-4 gap-2">
                {images?.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-primary' :'border-transparent hover:border-border'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${artwork?.title} - Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtworkModal;