import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ShoppingCart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })?.format(price);
  };

  const subtotal = cartItems?.reduce((sum, item) => sum + (item?.price * item?.quantity), 0);
  const shipping = subtotal > 200 ? 0 : 25;
  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  const handlePromoCode = () => {
    if (promoCode?.toLowerCase() === 'choki10') {
      setIsPromoApplied(true);
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      onRemoveItem(itemId);
    } else {
      onUpdateQuantity(itemId, newQuantity);
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          onClick={onClose}
        />
      )}
      {/* Cart Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-50
        transform transition-transform duration-300 overflow-hidden flex flex-col
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Icon name="ShoppingCart" size={20} className="text-primary" />
            <h2 className="font-heading font-heading-bold text-lg text-card-foreground">
              Carrinho ({cartItems?.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto">
          {cartItems?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <Icon name="ShoppingCart" size={32} className="text-muted-foreground" />
              </div>
              <h3 className="font-heading font-heading-semibold text-card-foreground mb-2">
                Seu carrinho está vazio
              </h3>
              <p className="text-text-secondary mb-4">
                Adicione algumas obras de arte incríveis!
              </p>
              <Button
                variant="default"
                iconName="Palette"
                iconPosition="left"
                onClick={onClose}
                className="bg-gradient-cta hover:opacity-90"
              >
                Explorar Galeria
              </Button>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {/* Cart Items */}
              {cartItems?.map((item) => (
                <div key={item?.id} className="flex gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={item?.image}
                      alt={item?.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-body font-body-medium text-card-foreground text-sm mb-1 truncate">
                      {item?.title}
                    </h4>
                    <p className="text-text-secondary text-xs mb-2">
                      {item?.category} • {item?.dimensions}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item?.id, item?.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Icon name="Minus" size={12} />
                        </button>
                        <span className="text-sm font-body-medium w-8 text-center">
                          {item?.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item?.id, item?.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Icon name="Plus" size={12} />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-body font-body-semibold text-primary text-sm">
                          {formatPrice(item?.price * item?.quantity)}
                        </div>
                        <button
                          onClick={() => onRemoveItem(item?.id)}
                          className="text-destructive hover:text-destructive/80 text-xs transition-colors"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Promo Code */}
              <div className="border-t border-border pt-4">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Código promocional"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e?.target?.value)}
                    className="flex-1"
                    disabled={isPromoApplied}
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePromoCode}
                    disabled={isPromoApplied || !promoCode}
                  >
                    {isPromoApplied ? 'Aplicado' : 'Aplicar'}
                  </Button>
                </div>
                {isPromoApplied && (
                  <p className="text-success text-sm mt-2 flex items-center gap-1">
                    <Icon name="Check" size={14} />
                    Desconto de 10% aplicado!
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer - Order Summary */}
        {cartItems?.length > 0 && (
          <div className="border-t border-border p-4 space-y-4">
            {/* Order Summary */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Subtotal</span>
                <span className="text-card-foreground">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Frete</span>
                <span className="text-card-foreground">
                  {shipping === 0 ? 'Grátis' : formatPrice(shipping)}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-success">Desconto</span>
                  <span className="text-success">-{formatPrice(discount)}</span>
                </div>
              )}
              <div className="flex justify-between font-heading font-heading-bold text-lg border-t border-border pt-2">
                <span className="text-card-foreground">Total</span>
                <span className="text-primary">{formatPrice(total)}</span>
              </div>
            </div>

            {/* Free Shipping Notice */}
            {shipping > 0 && (
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                <p className="text-accent text-sm flex items-center gap-2">
                  <Icon name="Truck" size={16} />
                  Frete grátis em compras acima de R$ 200,00
                </p>
              </div>
            )}

            {/* Checkout Button */}
            <Button
              variant="default"
              fullWidth
              iconName="CreditCard"
              iconPosition="left"
              className="bg-gradient-cta hover:opacity-90 shadow-purple"
            >
              Finalizar Compra
            </Button>

            {/* Continue Shopping */}
            <Button
              variant="ghost"
              fullWidth
              onClick={onClose}
              className="text-text-secondary hover:text-primary"
            >
              Continuar Comprando
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;