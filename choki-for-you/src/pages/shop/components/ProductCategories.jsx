import React from 'react';
import Icon from '../../../components/AppIcon';

const ProductCategories = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    {
      id: 'all',
      name: 'Todos os Produtos',
      icon: 'Grid3X3',
      count: 234,
      description: 'Toda a coleção disponível'
    },
    {
      id: 'originals',
      name: 'Obras Originais',
      icon: 'Palette',
      count: 23,
      description: 'Peças únicas e exclusivas'
    },
    {
      id: 'prints',
      name: 'Impressões',
      icon: 'Image',
      count: 128,
      description: 'Reproduções de alta qualidade'
    },
    {
      id: 'limited',
      name: 'Edição Limitada',
      icon: 'Star',
      count: 45,
      description: 'Tiragem limitada numerada'
    },
    {
      id: 'merchandise',
      name: 'Produtos',
      icon: 'ShoppingBag',
      count: 32,
      description: 'Itens com arte aplicada'
    },
    {
      id: 'digital',
      name: 'Arte Digital',
      icon: 'Monitor',
      count: 67,
      description: 'Downloads instantâneos'
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-heading font-heading-bold text-2xl text-card-foreground mb-2">
            Categorias
          </h2>
          <p className="text-text-secondary">
            Explore nossa coleção organizada por tipo de produto
          </p>
        </div>
      </div>
      {/* Desktop Categories Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => onCategoryChange(category?.id)}
            className={`group relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${
              selectedCategory === category?.id
                ? 'border-primary bg-primary/5 shadow-purple'
                : 'border-border bg-card hover:border-primary/50 hover:shadow-subtle'
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                selectedCategory === category?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground'
              }`}>
                <Icon name={category?.icon} size={24} />
              </div>
              
              <div>
                <h3 className={`font-heading font-heading-semibold text-sm mb-1 ${
                  selectedCategory === category?.id ? 'text-primary' : 'text-card-foreground'
                }`}>
                  {category?.name}
                </h3>
                <p className="text-text-secondary text-xs mb-2">
                  {category?.description}
                </p>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-body-medium ${
                  selectedCategory === category?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {category?.count} itens
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
      {/* Mobile Categories Horizontal Scroll */}
      <div className="md:hidden">
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => onCategoryChange(category?.id)}
              className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-300 ${
                selectedCategory === category?.id
                  ? 'border-primary bg-primary/5 text-primary' :'border-border bg-card text-card-foreground hover:border-primary/50'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                selectedCategory === category?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}>
                <Icon name={category?.icon} size={16} />
              </div>
              
              <div className="text-left">
                <div className="font-body font-body-medium text-sm">
                  {category?.name}
                </div>
                <div className="text-text-secondary text-xs">
                  {category?.count} itens
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Category Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-purple-light to-purple-medium/20 rounded-lg p-4 text-center">
          <div className="font-heading font-heading-bold text-2xl text-primary mb-1">
            234
          </div>
          <div className="text-text-secondary text-sm">
            Total de Produtos
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg p-4 text-center">
          <div className="font-heading font-heading-bold text-2xl text-accent mb-1">
            23
          </div>
          <div className="text-text-secondary text-sm">
            Obras Originais
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-success/20 to-success/10 rounded-lg p-4 text-center">
          <div className="font-heading font-heading-bold text-2xl text-success mb-1">
            45
          </div>
          <div className="text-text-secondary text-sm">
            Edições Limitadas
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg p-4 text-center">
          <div className="font-heading font-heading-bold text-2xl text-primary mb-1">
            4.9
          </div>
          <div className="text-text-secondary text-sm flex items-center justify-center gap-1">
            <Icon name="Star" size={14} className="text-accent fill-current" />
            Avaliação Média
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;