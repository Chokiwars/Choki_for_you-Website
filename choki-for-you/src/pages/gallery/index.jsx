import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FilterSidebar from './components/FilterSidebar';
import SortDropdown from './components/SortDropdown';
import ViewToggle from './components/ViewToggle';
import ArtworkGrid from './components/ArtworkGrid';
import ArtworkModal from './components/ArtworkModal';

const Gallery = () => {
  const [filters, setFilters] = useState({
    categories: [],
    mediums: [],
    sizes: [],
    colors: [],
    availability: [],
    priceRange: { min: '', max: '' },
    search: ''
  });

  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const artworksPerPage = 12;

  // Mock artwork data
  const mockArtworks = [
  {
    id: 1,
    title: "Sonhos Violetas",
    image: "https://images.unsplash.com/photo-1533158388470-9a56699990c6",
    imageAlt: "Pintura abstrata com tons de roxo e violeta representando sonhos etéreos",
    medium: "Óleo sobre Tela",
    year: 2024,
    dimensions: "80x60 cm",
    price: 2500,
    originalPrice: 3000,
    description: `Uma exploração visual dos sonhos através de camadas translúcidas de roxo e violeta.\nEsta obra captura a essência etérea dos momentos entre o sono e a vigília, onde a realidade se dissolve em possibilidades infinitas.`,
    status: "available",
    isNew: true,
    isLimited: false,
    availablePrints: true,
    signed: true,
    rating: 5,
    reviews: 12,
    gallery: [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1710726981978-4730b7d3cc5b",
    "https://images.unsplash.com/photo-1689850969146-43cd8e188bbf"]

  },
  {
    id: 2,
    title: "Reflexões Urbanas",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop",
    imageAlt: "Pintura contemporânea mostrando reflexos de luzes urbanas em superfícies molhadas",
    medium: "Acrílica",
    year: 2024,
    dimensions: "100x70 cm",
    price: 3200,
    description: `Captura a beleza melancólica da vida urbana através de reflexos e luzes.\nAs texturas e cores se misturam para criar uma narrativa visual sobre a solidão e conexão nas grandes cidades.`,
    status: "available",
    isNew: false,
    isLimited: true,
    availablePrints: true,
    signed: true,
    rating: 4,
    reviews: 8
  },
  {
    id: 3,
    title: "Harmonia Natural",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=800&fit=crop",
    imageAlt: "Aquarela delicada representando elementos naturais em tons suaves e orgânicos",
    medium: "Aquarela",
    year: 2023,
    dimensions: "50x40 cm",
    price: 1800,
    description: `Uma celebração da natureza através de formas orgânicas e cores suaves.\nCada pincelada busca capturar a essência vital que conecta todos os seres vivos.`,
    status: "reserved",
    isNew: false,
    isLimited: false,
    availablePrints: true,
    signed: true,
    rating: 5,
    reviews: 15
  },
  {
    id: 4,
    title: "Geometria Emocional",
    image: "https://images.unsplash.com/photo-1554020125-343189bba70d",
    imageAlt: "Composição geométrica abstrata com formas angulares em tons de azul e roxo",
    medium: "Técnica Mista",
    year: 2024,
    dimensions: "90x90 cm",
    price: 2800,
    description: `Formas geométricas que expressam estados emocionais complexos.\nA intersecção entre razão e sentimento materializada através de linhas precisas e cores vibrantes.`,
    status: "available",
    isNew: true,
    isLimited: false,
    availablePrints: false,
    signed: true,
    rating: 4,
    reviews: 6
  },
  {
    id: 5,
    title: "Memórias Fragmentadas",
    image: "https://images.unsplash.com/photo-1710435796137-645262ec42d2",
    imageAlt: "Colagem artística com fragmentos de imagens e texturas representando memórias",
    medium: "Colagem Digital",
    year: 2023,
    dimensions: "60x80 cm",
    price: 2200,
    description: `Uma exploração visual da natureza fragmentária da memória humana.\nCamadas de imagens e texturas se sobrepõem criando narrativas não-lineares sobre o tempo e a lembrança.`,
    status: "available",
    isNew: false,
    isLimited: true,
    availablePrints: true,
    signed: false,
    rating: 5,
    reviews: 10
  },
  {
    id: 6,
    title: "Energia Cósmica",
    image: "https://images.unsplash.com/photo-1572015305583-8482e539e7a0",
    imageAlt: "Pintura abstrata com movimentos circulares representando energia cósmica em tons de roxo",
    medium: "Óleo sobre Tela",
    year: 2024,
    dimensions: "120x80 cm",
    price: 4500,
    description: `Movimentos circulares que evocam a dança cósmica da energia universal.\nUma meditação visual sobre as forças invisíveis que conectam todos os elementos do universo.`,
    status: "available",
    isNew: true,
    isLimited: false,
    availablePrints: true,
    signed: true,
    rating: 5,
    reviews: 18
  },
  {
    id: 7,
    title: "Silêncio Dourado",
    image: "https://images.unsplash.com/photo-1703593191751-9f77b98bdcd7",
    imageAlt: "Pintura minimalista com tons dourados representando momentos de silêncio contemplativo",
    medium: "Folha de Ouro",
    year: 2023,
    dimensions: "70x50 cm",
    price: 3800,
    originalPrice: 4200,
    description: `O valor do silêncio materializado através da pureza do ouro.\nUma obra que convida à contemplação e ao encontro com a paz interior.`,
    status: "sold",
    isNew: false,
    isLimited: true,
    availablePrints: true,
    signed: true,
    rating: 5,
    reviews: 22
  },
  {
    id: 8,
    title: "Ritmos da Cidade",
    image: "https://images.unsplash.com/photo-1711299204012-cf23cb03544b",
    imageAlt: "Representação dinâmica dos ritmos urbanos através de linhas e cores vibrantes",
    medium: "Acrílica",
    year: 2024,
    dimensions: "85x65 cm",
    price: 2900,
    description: `O pulsar constante da vida urbana traduzido em ritmos visuais.\nCores e formas que capturam a energia frenética e a beleza caótica das metrópoles modernas.`,
    status: "available",
    isNew: false,
    isLimited: false,
    availablePrints: true,
    signed: true,
    rating: 4,
    reviews: 9
  }];


  // Filter and sort artworks
  const filteredAndSortedArtworks = useMemo(() => {
    let filtered = [...mockArtworks];

    // Apply filters
    if (filters?.search) {
      const searchLower = filters?.search?.toLowerCase();
      filtered = filtered?.filter((artwork) =>
      artwork?.title?.toLowerCase()?.includes(searchLower) ||
      artwork?.description?.toLowerCase()?.includes(searchLower) ||
      artwork?.medium?.toLowerCase()?.includes(searchLower)
      );
    }

    if (filters?.categories?.length > 0) {
      filtered = filtered?.filter((artwork) => {
        const category = artwork?.medium?.toLowerCase()?.includes('óleo') ? 'paintings' :
        artwork?.medium?.toLowerCase()?.includes('aquarela') ? 'paintings' :
        artwork?.medium?.toLowerCase()?.includes('acrílica') ? 'paintings' :
        artwork?.medium?.toLowerCase()?.includes('digital') ? 'digital' :
        artwork?.medium?.toLowerCase()?.includes('colagem') ? 'digital' :
        artwork?.medium?.toLowerCase()?.includes('mista') ? 'mixed' : 'paintings';
        return filters?.categories?.includes(category);
      });
    }

    if (filters?.mediums?.length > 0) {
      filtered = filtered?.filter((artwork) => {
        const medium = artwork?.medium?.toLowerCase()?.includes('óleo') ? 'oil' :
        artwork?.medium?.toLowerCase()?.includes('acrílica') ? 'acrylic' :
        artwork?.medium?.toLowerCase()?.includes('aquarela') ? 'watercolor' :
        artwork?.medium?.toLowerCase()?.includes('digital') ? 'digital' :
        artwork?.medium?.toLowerCase()?.includes('colagem') ? 'digital' : 'oil';
        return filters?.mediums?.includes(medium);
      });
    }

    if (filters?.sizes?.length > 0) {
      filtered = filtered?.filter((artwork) => {
        const dimensions = artwork?.dimensions?.toLowerCase();
        const hasSmall = dimensions?.includes('50') || dimensions?.includes('40') || dimensions?.includes('30');
        const hasMedium = dimensions?.includes('60') || dimensions?.includes('70') || dimensions?.includes('80');
        const hasLarge = dimensions?.includes('90') || dimensions?.includes('100');
        const hasXLarge = dimensions?.includes('120');

        return filters?.sizes?.some((size) => {
          if (size === 'small' && hasSmall) return true;
          if (size === 'medium' && hasMedium) return true;
          if (size === 'large' && hasLarge) return true;
          if (size === 'xlarge' && hasXLarge) return true;
          return false;
        });
      });
    }

    if (filters?.availability?.length > 0) {
      filtered = filtered?.filter((artwork) =>
      filters?.availability?.includes(artwork?.status) ||
      filters?.availability?.includes('prints') && artwork?.availablePrints
      );
    }

    if (filters?.priceRange?.min || filters?.priceRange?.max) {
      filtered = filtered?.filter((artwork) => {
        const price = artwork?.price;
        const min = filters?.priceRange?.min ? parseFloat(filters?.priceRange?.min) : 0;
        const max = filters?.priceRange?.max ? parseFloat(filters?.priceRange?.max) : Infinity;
        return price >= min && price <= max;
      });
    }

    // Apply sorting
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b?.year - a?.year || b?.id - a?.id;
        case 'oldest':
          return a?.year - b?.year || a?.id - b?.id;
        case 'price-low':
          return a?.price - b?.price;
        case 'price-high':
          return b?.price - a?.price;
        case 'popular':
          return b?.reviews - a?.reviews;
        case 'rating':
          return b?.rating - a?.rating;
        case 'title-az':
          return a?.title?.localeCompare(b?.title);
        case 'title-za':
          return b?.title?.localeCompare(a?.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedArtworks?.length / artworksPerPage);
  const paginatedArtworks = filteredAndSortedArtworks?.slice(
    (currentPage - 1) * artworksPerPage,
    currentPage * artworksPerPage
  );

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value
    }));
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      mediums: [],
      sizes: [],
      colors: [],
      availability: [],
      priceRange: { min: '', max: '' },
      search: ''
    });
    setCurrentPage(1);
  };

  const handleFavorite = (artworkId) => {
    setFavorites((prev) =>
    prev?.includes(artworkId) ?
    prev?.filter((id) => id !== artworkId) :
    [...prev, artworkId]
    );
  };

  const handleQuickView = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleAddToCart = (artwork) => {
    console.log('Adicionado ao carrinho:', artwork);
    // Implement cart functionality
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [filters, sortBy]);

  const activeFiltersCount = Object.values(filters)?.reduce((count, filter) => {
    if (Array.isArray(filter)) return count + filter?.length;
    if (typeof filter === 'object' && filter?.min || filter?.max) return count + 1;
    if (typeof filter === 'string' && filter) return count + 1;
    return count;
  }, 0);

  return (
    <>
      <Helmet>
        <title>Galeria de Arte - Choki For You Official</title>
        <meta name="description" content="Explore nossa coleção completa de obras de arte originais, pinturas, desenhos e arte digital. Filtre por técnica, tamanho, preço e encontre a peça perfeita para você." />
        <meta name="keywords" content="galeria arte, pinturas originais, arte contemporânea, obras de arte, comprar arte, arte brasileira" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="purple-gradient-bg py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl lg:text-5xl font-heading font-heading-bold text-white mb-4">
                Galeria de Arte
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Explore nossa coleção completa de obras originais, cada peça criada com paixão e dedicação para tocar sua alma
              </p>
            </div>
          </section>

          {/* Gallery Content */}
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Filter Sidebar */}
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                  isOpen={isFilterOpen}
                  onClose={() => setIsFilterOpen(false)} />


                {/* Main Content */}
                <div className="flex-1">
                  {/* Toolbar */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="outline"
                        iconName="Filter"
                        iconPosition="left"
                        onClick={() => setIsFilterOpen(true)}
                        className="lg:hidden">

                        Filtros
                        {activeFiltersCount > 0 &&
                        <span className="ml-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                            {activeFiltersCount}
                          </span>
                        }
                      </Button>
                      
                      <div className="text-text-secondary">
                        <span className="font-body-medium">
                          {filteredAndSortedArtworks?.length}
                        </span>
                        <span className="ml-1">
                          {filteredAndSortedArtworks?.length === 1 ? 'obra encontrada' : 'obras encontradas'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <ViewToggle
                        currentView={viewMode}
                        onViewChange={setViewMode} />

                      <SortDropdown
                        currentSort={sortBy}
                        onSortChange={setSortBy} />

                    </div>
                  </div>

                  {/* Active Filters */}
                  {activeFiltersCount > 0 &&
                  <div className="flex flex-wrap items-center gap-2 mb-6 p-4 bg-muted rounded-lg">
                      <span className="text-sm font-body-medium text-text-primary">
                        Filtros ativos:
                      </span>
                      {filters?.search &&
                    <span className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                          Busca: "{filters?.search}"
                          <button
                        onClick={() => handleFilterChange('search', '')}
                        className="ml-2 hover:bg-primary-foreground/20 rounded-full p-1">

                            <Icon name="X" size={12} />
                          </button>
                        </span>
                    }
                      {activeFiltersCount > (filters?.search ? 1 : 0) &&
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="X"
                      iconPosition="left"
                      onClick={handleClearFilters}
                      className="text-text-secondary hover:text-text-primary">

                          Limpar todos
                        </Button>
                    }
                    </div>
                  }

                  {/* Artwork Grid */}
                  <ArtworkGrid
                    artworks={paginatedArtworks}
                    viewMode={viewMode}
                    onFavorite={handleFavorite}
                    onQuickView={handleQuickView}
                    favorites={favorites}
                    loading={loading} />


                  {/* Pagination */}
                  {totalPages > 1 &&
                  <div className="flex items-center justify-center space-x-2 mt-12">
                      <Button
                      variant="outline"
                      iconName="ChevronLeft"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)} />

                      
                      <div className="flex items-center space-x-1">
                        {[...Array(totalPages)]?.map((_, index) => {
                        const page = index + 1;
                        const isCurrentPage = page === currentPage;
                        const showPage = page === 1 || page === totalPages ||
                        page >= currentPage - 1 && page <= currentPage + 1;

                        if (!showPage) {
                          if (page === currentPage - 2 || page === currentPage + 2) {
                            return <span key={page} className="px-2 text-text-secondary">...</span>;
                          }
                          return null;
                        }

                        return (
                          <Button
                            key={page}
                            variant={isCurrentPage ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(page)}
                            className={isCurrentPage ? "bg-primary text-primary-foreground" : ""}>

                              {page}
                            </Button>);

                      })}
                      </div>

                      <Button
                      variant="outline"
                      iconName="ChevronRight"
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)} />

                    </div>
                  }
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Artwork Modal */}
        <ArtworkModal
          artwork={selectedArtwork}
          isOpen={!!selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          onAddToCart={handleAddToCart}
          onFavorite={handleFavorite}
          isFavorited={selectedArtwork ? favorites?.includes(selectedArtwork?.id) : false} />


        {/* Footer */}
        <footer className="bg-text-primary text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center">
                    <Icon name="Palette" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-heading-bold">
                      Choki For You Official
                    </h3>
                    <p className="text-white/70 text-sm">Arte que toca a alma</p>
                  </div>
                </div>
                <p className="text-white/80 mb-4 max-w-md">
                  Cada obra é criada com paixão e dedicação, buscando estabelecer uma conexão única entre a arte e quem a contempla.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    <Icon name="Instagram" size={20} />
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    <Icon name="Facebook" size={20} />
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    <Icon name="Twitter" size={20} />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-heading font-heading-semibold mb-4">Navegação</h4>
                <ul className="space-y-2 text-white/80">
                  <li><a href="/gallery" className="hover:text-white transition-colors">Galeria</a></li>
                  <li><a href="/shop" className="hover:text-white transition-colors">Loja</a></li>
                  <li><a href="/commissions" className="hover:text-white transition-colors">Encomendas</a></li>
                  <li><a href="/about-artist" className="hover:text-white transition-colors">Sobre</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-heading font-heading-semibold mb-4">Contato</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} />
                    <span>contato@chokiforyou.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} />
                    <span>+55 11 99999-9999</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} />
                    <span>São Paulo, Brasil</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
              <p>&copy; {new Date()?.getFullYear()} Choki For You Official. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>);

};

export default Gallery;