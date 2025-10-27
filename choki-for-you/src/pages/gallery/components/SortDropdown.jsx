import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SortDropdown = ({ currentSort, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    { value: 'newest', label: 'Mais Recentes', icon: 'Calendar' },
    { value: 'oldest', label: 'Mais Antigos', icon: 'CalendarDays' },
    { value: 'price-low', label: 'Menor Preço', icon: 'TrendingDown' },
    { value: 'price-high', label: 'Maior Preço', icon: 'TrendingUp' },
    { value: 'popular', label: 'Mais Populares', icon: 'Heart' },
    { value: 'rating', label: 'Melhor Avaliação', icon: 'Star' },
    { value: 'title-az', label: 'Título A-Z', icon: 'ArrowUp' },
    { value: 'title-za', label: 'Título Z-A', icon: 'ArrowDown' }
  ];

  const currentOption = sortOptions?.find(option => option?.value === currentSort) || sortOptions?.[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef?.current && !dropdownRef?.current?.contains(event?.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSortSelect = (sortValue) => {
    onSortChange(sortValue);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-background border border-border rounded-lg hover:border-primary transition-colors min-w-[200px] justify-between"
      >
        <div className="flex items-center space-x-2">
          <Icon name={currentOption?.icon} size={16} className="text-text-secondary" />
          <span className="font-body-medium text-text-primary">
            {currentOption?.label}
          </span>
        </div>
        <Icon 
          name={isOpen ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="text-text-secondary"
        />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-full bg-popover border border-border rounded-lg shadow-purple z-10">
          <div className="py-2">
            {sortOptions?.map((option) => (
              <button
                key={option?.value}
                onClick={() => handleSortSelect(option?.value)}
                className={`
                  w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-muted transition-colors
                  ${currentSort === option?.value ? 'bg-primary text-primary-foreground' : 'text-popover-foreground'}
                `}
              >
                <Icon 
                  name={option?.icon} 
                  size={16} 
                  className={currentSort === option?.value ? 'text-primary-foreground' : 'text-text-secondary'}
                />
                <span className="font-body">{option?.label}</span>
                {currentSort === option?.value && (
                  <Icon name="Check" size={16} className="ml-auto text-primary-foreground" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;