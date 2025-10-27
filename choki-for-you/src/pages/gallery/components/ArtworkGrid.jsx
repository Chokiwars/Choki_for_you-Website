import React from 'react';
import ArtworkCard from './ArtworkCard';

const ArtworkGrid = ({ 
  artworks, 
  viewMode, 
  onFavorite, 
  onQuickView, 
  favorites = [],
  loading = false 
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)]?.map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="aspect-square bg-muted rounded-lg mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
              <div className="h-4 bg-muted rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (artworks?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <svg
            viewBox="0 0 24 24"
            className="w-12 h-12 text-text-secondary"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-heading-semibold text-text-primary mb-2">
          Nenhuma obra encontrada
        </h3>
        <p className="text-text-secondary max-w-md">
          Não encontramos obras que correspondam aos seus filtros. Tente ajustar os critérios de busca ou limpar os filtros.
        </p>
      </div>
    );
  }

  const getGridClasses = () => {
    switch (viewMode) {
      case 'list':
        return 'grid grid-cols-1 gap-4';
      case 'masonry':
        return 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6';
      default: // grid
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
    }
  };

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {artworks?.map((artwork) => (
          <div key={artwork?.id} className="bg-card rounded-lg overflow-hidden shadow-subtle hover:shadow-purple transition-all duration-300 flex flex-col sm:flex-row">
            <div className="w-full sm:w-48 h-48 sm:h-32 flex-shrink-0">
              <img
                src={artwork?.image}
                alt={artwork?.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-heading-semibold text-text-primary text-lg mb-1">
                  {artwork?.title}
                </h3>
                <p className="text-text-secondary text-sm mb-2">
                  {artwork?.medium} • {artwork?.year} • {artwork?.dimensions}
                </p>
                <p className="text-text-secondary text-sm line-clamp-2">
                  {artwork?.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-lg font-heading font-heading-bold text-primary">
                  R$ {artwork?.price?.toLocaleString('pt-BR')}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onFavorite(artwork?.id)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={`w-5 h-5 ${favorites?.includes(artwork?.id) ? 'text-destructive fill-current' : 'text-text-secondary'}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m19 14 1.5-1.5c.8-.8.8-2.1 0-2.8L12 1.2 3.5 9.7c-.8.8-.8 2.1 0 2.8L5 14" />
                      <path d="m5 14 7 7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => onQuickView(artwork)}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={getGridClasses()}>
      {artworks?.map((artwork) => (
        <div key={artwork?.id} className={viewMode === 'masonry' ? 'break-inside-avoid' : ''}>
          <ArtworkCard
            artwork={artwork}
            onFavorite={onFavorite}
            onQuickView={onQuickView}
            isFavorited={favorites?.includes(artwork?.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ArtworkGrid;