import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ filters, onFiltersChange, onClearFilters, isOpen, onClose }) => {
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    type: true,
    price: true,
    size: false,
    color: false
  });

  const categories = [
    { id: 'paintings', label: 'Pinturas', count: 45 },
    { id: 'prints', label: 'Impressões', count: 128 },
    { id: 'merchandise', label: 'Produtos', count: 32 },
    { id: 'digital', label: 'Arte Digital', count: 67 }
  ];

  const types = [
    { id: 'original', label: 'Obras Originais', count: 23 },
    { id: 'limited', label: 'Edição Limitada', count: 45 },
    { id: 'print', label: 'Impressões', count: 89 },
    { id: 'merchandise', label: 'Produtos', count: 32 }
  ];

  const sizes = [
    { id: 'small', label: 'Pequeno (até 30cm)', count: 67 },
    { id: 'medium', label: 'Médio (30-60cm)', count: 89 },
    { id: 'large', label: 'Grande (60-100cm)', count: 45 },
    { id: 'xlarge', label: 'Extra Grande (+100cm)', count: 23 }
  ];

  const colors = [
    { id: 'purple', label: 'Roxo', color: '#8A2BE2', count: 156 },
    { id: 'blue', label: 'Azul', color: '#4F46E5', count: 89 },
    { id: 'pink', label: 'Rosa', color: '#EC4899', count: 67 },
    { id: 'gold', label: 'Dourado', color: '#F59E0B', count: 45 },
    { id: 'black', label: 'Preto', color: '#1F2937', count: 78 },
    { id: 'white', label: 'Branco', color: '#FFFFFF', count: 92 }
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev?.[section]
    }));
  };

  const handleFilterChange = (type, value, checked) => {
    const currentFilters = filters?.[type] || [];
    const newFilters = checked
      ? [...currentFilters, value]
      : currentFilters?.filter(item => item !== value);
    
    onFiltersChange({
      ...filters,
      [type]: newFilters
    });
  };

  const handlePriceRangeChange = () => {
    onFiltersChange({
      ...filters,
      priceRange: {
        min: priceRange?.min ? parseFloat(priceRange?.min) : null,
        max: priceRange?.max ? parseFloat(priceRange?.max) : null
      }
    });
  };

  const FilterSection = ({ title, items, type, expanded, colorItems = false }) => (
    <div className="border-b border-border pb-4">
      <button
        onClick={() => toggleSection(type)}
        className="flex items-center justify-between w-full py-2 text-left"
      >
        <h3 className="font-heading font-heading-semibold text-card-foreground">
          {title}
        </h3>
        <Icon 
          name={expanded ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="text-text-secondary" 
        />
      </button>
      
      {expanded && (
        <div className="mt-3 space-y-2">
          {items?.map((item) => (
            <div key={item?.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {colorItems && (
                  <div 
                    className="w-4 h-4 rounded-full border border-border"
                    style={{ backgroundColor: item?.color }}
                  />
                )}
                <Checkbox
                  label={item?.label}
                  checked={filters?.[type]?.includes(item?.id) || false}
                  onChange={(e) => handleFilterChange(type, item?.id, e?.target?.checked)}
                />
              </div>
              <span className="text-sm text-text-secondary">({item?.count})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-screen lg:h-auto w-80 lg:w-full
        bg-card border-r lg:border-r-0 border-border z-50 lg:z-auto
        transform transition-transform duration-300 lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border lg:hidden">
          <h2 className="font-heading font-heading-bold text-lg text-card-foreground">
            Filtros
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* Search */}
          <div>
            <Input
              type="search"
              placeholder="Buscar produtos..."
              iconName="Search"
              className="w-full"
            />
          </div>

          {/* Price Range */}
          <div className="border-b border-border pb-4">
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full py-2 text-left"
            >
              <h3 className="font-heading font-heading-semibold text-card-foreground">
                Faixa de Preço
              </h3>
              <Icon 
                name={expandedSections?.price ? "ChevronUp" : "ChevronDown"} 
                size={16} 
                className="text-text-secondary" 
              />
            </button>
            
            {expandedSections?.price && (
              <div className="mt-3 space-y-3">
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="Min R$"
                    value={priceRange?.min}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: e?.target?.value }))}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    placeholder="Max R$"
                    value={priceRange?.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: e?.target?.value }))}
                    className="flex-1"
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={handlePriceRangeChange}
                >
                  Aplicar
                </Button>
              </div>
            )}
          </div>

          {/* Category Filter */}
          <FilterSection
            title="Categoria"
            items={categories}
            type="category"
            expanded={expandedSections?.category}
          />

          {/* Type Filter */}
          <FilterSection
            title="Tipo"
            items={types}
            type="type"
            expanded={expandedSections?.type}
          />

          {/* Size Filter */}
          <FilterSection
            title="Tamanho"
            items={sizes}
            type="size"
            expanded={expandedSections?.size}
          />

          {/* Color Filter */}
          <FilterSection
            title="Cor Predominante"
            items={colors}
            type="color"
            expanded={expandedSections?.color}
            colorItems={true}
          />

          {/* Clear Filters */}
          <div className="pt-4">
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