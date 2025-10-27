import React from 'react';
import Icon from '../../../components/AppIcon';

const ViewToggle = ({ currentView, onViewChange }) => {
  const viewOptions = [
    { value: 'grid', icon: 'Grid3X3', label: 'Grade' },
    { value: 'list', icon: 'List', label: 'Lista' },
    { value: 'masonry', icon: 'LayoutGrid', label: 'Mosaico' }
  ];

  return (
    <div className="flex items-center bg-muted rounded-lg p-1">
      {viewOptions?.map((option) => (
        <button
          key={option?.value}
          onClick={() => onViewChange(option?.value)}
          className={`
            flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200
            ${currentView === option?.value 
              ? 'bg-background text-primary shadow-subtle' 
              : 'text-text-secondary hover:text-text-primary hover:bg-background/50'
            }
          `}
          title={option?.label}
        >
          <Icon 
            name={option?.icon} 
            size={16} 
            className={currentView === option?.value ? 'text-primary' : 'text-current'}
          />
          <span className="hidden sm:inline font-body-medium text-sm">
            {option?.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ViewToggle;