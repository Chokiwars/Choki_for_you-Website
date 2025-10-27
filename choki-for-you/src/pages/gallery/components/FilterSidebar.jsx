import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters, isOpen, onClose }) => {
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'paintings', label: 'Pinturas', count: 45 },
    { id: 'drawings', label: 'Desenhos', count: 32 },
    { id: 'digital', label: 'Arte Digital', count: 28 },
    { id: 'mixed', label: 'Técnica Mista', count: 19 },
    { id: 'sculptures', label: 'Esculturas', count: 12 }
  ];

  const mediums = [
    { id: 'oil', label: 'Óleo sobre Tela', count: 25 },
    { id: 'acrylic', label: 'Acrílica', count: 38 },
    { id: 'watercolor', label: 'Aquarela', count: 22 },
    { id: 'charcoal', label: 'Carvão', count: 15 },
    { id: 'digital', label: 'Digital', count: 28 }
  ];

  const sizes = [
    { id: 'small', label: 'Pequeno (até 30cm)', count: 42 },
    { id: 'medium', label: 'Médio (30-60cm)', count: 35 },
    { id: 'large', label: 'Grande (60-100cm)', count: 18 },
    { id: 'xlarge', label: 'Extra Grande (+100cm)', count: 8 }
  ];

  const colors = [
    { id: 'purple', label: 'Roxo', color: '#8A2BE2', count: 34 },
    { id: 'blue', label: 'Azul', color: '#3B82F6', count: 28 },
    { id: 'red', label: 'Vermelho', color: '#EF4444', count: 22 },
    { id: 'green', label: 'Verde', color: '#10B981', count: 19 },
    { id: 'yellow', label: 'Amarelo', color: '#F59E0B', count: 15 },
    { id: 'black', label: 'Preto', color: '#1F2937', count: 31 }
  ];

  const availability = [
    { id: 'available', label: 'Disponível', count: 89 },
    { id: 'reserved', label: 'Reservado', count: 12 },
    { id: 'prints', label: 'Apenas Prints', count: 25 }
  ];

  const handlePriceRangeChange = (field, value) => {
    const newRange = { ...priceRange, [field]: value };
    setPriceRange(newRange);
    onFilterChange('priceRange', newRange);
  };

  const handleSearchChange = (e) => {
    const value = e?.target?.value;
    setSearchTerm(value);
    onFilterChange('search', value);
  };

  const FilterSection = ({ title, children, defaultOpen = true }) => {
    const [isExpanded, setIsExpanded] = useState(defaultOpen);

    return (
      <div className="border-b border-border pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full mb-4 text-left"
        >
          <h3 className="font-heading font-heading-semibold text-text-primary">
            {title}
          </h3>
          <Icon 
            name={isExpanded ? "ChevronUp" : "ChevronDown"} 
            size={16} 
            className="text-text-secondary"
          />
        </button>
        {isExpanded && children}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-full lg:h-auto w-80 bg-background border-r border-border z-50 lg:z-auto
        transform transition-transform duration-300 lg:transform-none overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-xl font-heading font-heading-bold text-text-primary">
              Filtros
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Search */}
          <FilterSection title="Buscar Obras">
            <Input
              type="search"
              placeholder="Buscar por título, descrição..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="mb-4"
            />
          </FilterSection>

          {/* Categories */}
          <FilterSection title="Categorias">
            <div className="space-y-3">
              {categories?.map((category) => (
                <div key={category?.id} className="flex items-center justify-between">
                  <Checkbox
                    label={category?.label}
                    checked={filters?.categories?.includes(category?.id)}
                    onChange={(e) => {
                      const newCategories = e?.target?.checked
                        ? [...(filters?.categories || []), category?.id]
                        : (filters?.categories || [])?.filter(id => id !== category?.id);
                      onFilterChange('categories', newCategories);
                    }}
                  />
                  <span className="text-sm text-text-secondary">
                    {category?.count}
                  </span>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Price Range */}
          <FilterSection title="Faixa de Preço">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  type="number"
                  placeholder="Mín. R$"
                  value={priceRange?.min}
                  onChange={(e) => handlePriceRangeChange('min', e?.target?.value)}
                />
                <Input
                  type="number"
                  placeholder="Máx. R$"
                  value={priceRange?.max}
                  onChange={(e) => handlePriceRangeChange('max', e?.target?.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {['500', '1000', '2500', '5000']?.map((price) => (
                  <button
                    key={price}
                    onClick={() => handlePriceRangeChange('max', price)}
                    className="px-3 py-1 text-sm bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
                  >
                    até R$ {price}
                  </button>
                ))}
              </div>
            </div>
          </FilterSection>

          {/* Medium */}
          <FilterSection title="Técnica">
            <div className="space-y-3">
              {mediums?.map((medium) => (
                <div key={medium?.id} className="flex items-center justify-between">
                  <Checkbox
                    label={medium?.label}
                    checked={filters?.mediums?.includes(medium?.id)}
                    onChange={(e) => {
                      const newMediums = e?.target?.checked
                        ? [...(filters?.mediums || []), medium?.id]
                        : (filters?.mediums || [])?.filter(id => id !== medium?.id);
                      onFilterChange('mediums', newMediums);
                    }}
                  />
                  <span className="text-sm text-text-secondary">
                    {medium?.count}
                  </span>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Size */}
          <FilterSection title="Tamanho">
            <div className="space-y-3">
              {sizes?.map((size) => (
                <div key={size?.id} className="flex items-center justify-between">
                  <Checkbox
                    label={size?.label}
                    checked={filters?.sizes?.includes(size?.id)}
                    onChange={(e) => {
                      const newSizes = e?.target?.checked
                        ? [...(filters?.sizes || []), size?.id]
                        : (filters?.sizes || [])?.filter(id => id !== size?.id);
                      onFilterChange('sizes', newSizes);
                    }}
                  />
                  <span className="text-sm text-text-secondary">
                    {size?.count}
                  </span>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Colors */}
          <FilterSection title="Paleta de Cores">
            <div className="grid grid-cols-3 gap-3">
              {colors?.map((color) => (
                <button
                  key={color?.id}
                  onClick={() => {
                    const newColors = filters?.colors?.includes(color?.id)
                      ? (filters?.colors || [])?.filter(id => id !== color?.id)
                      : [...(filters?.colors || []), color?.id];
                    onFilterChange('colors', newColors);
                  }}
                  className={`
                    flex flex-col items-center p-3 rounded-lg border-2 transition-all duration-300
                    ${filters?.colors?.includes(color?.id) 
                      ? 'border-primary bg-primary/10' :'border-border hover:border-primary/50'
                    }
                  `}
                >
                  <div 
                    className="w-6 h-6 rounded-full mb-2 border border-border"
                    style={{ backgroundColor: color?.color }}
                  />
                  <span className="text-xs text-text-secondary text-center">
                    {color?.label}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {color?.count}
                  </span>
                </button>
              ))}
            </div>
          </FilterSection>

          {/* Availability */}
          <FilterSection title="Disponibilidade">
            <div className="space-y-3">
              {availability?.map((item) => (
                <div key={item?.id} className="flex items-center justify-between">
                  <Checkbox
                    label={item?.label}
                    checked={filters?.availability?.includes(item?.id)}
                    onChange={(e) => {
                      const newAvailability = e?.target?.checked
                        ? [...(filters?.availability || []), item?.id]
                        : (filters?.availability || [])?.filter(id => id !== item?.id);
                      onFilterChange('availability', newAvailability);
                    }}
                  />
                  <span className="text-sm text-text-secondary">
                    {item?.count}
                  </span>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Clear Filters */}
          <div className="pt-6 border-t border-border">
            <Button
              variant="outline"
              fullWidth
              iconName="RotateCcw"
              iconPosition="left"
              onClick={onClearFilters}
            >
              Limpar Filtros
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;