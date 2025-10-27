import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProductCard from './components/ProductCard';
import FilterSidebar from './components/FilterSidebar';
import ShoppingCart from './components/ShoppingCart';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: [],
    type: [],
    size: [],
    color: [],
    priceRange: { min: null, max: null }
  });
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Mock products data
  const products = [
  {
    id: 1,
    title: 'Abstração Violeta',
    image: "https://images.unsplash.com/photo-1724661046620-7245d9c2eaba",
    imageAlt: 'Abstract purple painting with flowing organic shapes and violet gradients',
    price: 1200,
    originalPrice: 1500,
    category: 'Pintura',
    type: 'original',
    dimensions: '60x80cm',
    description: 'Uma obra única que explora as nuances do violeta em formas abstratas fluidas.',
    features: ['Tinta acrílica', 'Tela premium', 'Assinado'],
    stock: 1,
    rating: 4.9,
    isNew: true,
    isOriginal: true
  },
  {
    id: 2,
    title: 'Impressão - Cosmos Roxo',
    image: "https://images.unsplash.com/photo-1587056929981-d5ccb42e1cb6",
    imageAlt: 'Cosmic purple space artwork with nebula patterns and starlight effects',
    price: 150,
    category: 'Impressão',
    type: 'print',
    dimensions: '30x40cm',
    description: 'Impressão de alta qualidade em papel fotográfico premium.',
    features: ['Papel premium', 'Cores vibrantes', 'Resistente'],
    stock: 25,
    rating: 4.8,
    isLimitedEdition: true
  },
  {
    id: 3,
    title: 'Camiseta Universo Choki',
    image: "https://images.unsplash.com/photo-1714628402329-4fdbd0bd4e44",
    imageAlt: 'Black t-shirt with purple cosmic design featuring artistic universe patterns',
    price: 89,
    category: 'Produto',
    type: 'merchandise',
    dimensions: 'P-GG',
    description: 'Camiseta 100% algodão com estampa exclusiva do universo Choki.',
    features: ['100% algodão', 'Estampa exclusiva', 'Confortável'],
    stock: 50,
    rating: 4.7,
    isNew: true
  },
  {
    id: 4,
    title: 'Série Galáxia - Original',
    image: "https://images.unsplash.com/photo-1602503798957-4191fc05a46c",
    imageAlt: 'Original galaxy painting with deep purple space and cosmic swirls',
    price: 2800,
    category: 'Pintura',
    type: 'original',
    dimensions: '100x120cm',
    description: 'Obra original da série Galáxia, explorando o cosmos em tons roxos.',
    features: ['Obra única', 'Certificado', 'Moldura inclusa'],
    stock: 1,
    rating: 5.0,
    isOriginal: true
  },
  {
    id: 5,
    title: 'Poster Minimalista',
    image: "https://images.unsplash.com/photo-1730472528744-399397ac0b76",
    imageAlt: 'Minimalist purple geometric poster with clean lines and modern design',
    price: 45,
    category: 'Impressão',
    type: 'print',
    dimensions: '21x30cm',
    description: 'Design minimalista perfeito para decoração moderna.',
    features: ['Design exclusivo', 'Papel reciclado', 'Sustentável'],
    stock: 100,
    rating: 4.6
  },
  {
    id: 6,
    title: 'Caneca Artística',
    image: "https://images.unsplash.com/photo-1602265303802-e77eb64d0e2b",
    imageAlt: 'White ceramic mug with purple artistic design and Choki branding',
    price: 35,
    category: 'Produto',
    type: 'merchandise',
    dimensions: '350ml',
    description: 'Caneca de porcelana com arte exclusiva Choki.',
    features: ['Porcelana premium', 'Microondas seguro', 'Arte exclusiva'],
    stock: 75,
    rating: 4.5
  },
  {
    id: 7,
    title: 'Edição Limitada - Sonhos',
    image: "https://images.unsplash.com/photo-1626847853868-4060578150db",
    imageAlt: 'Limited edition purple dreams artwork with ethereal flowing patterns',
    price: 380,
    category: 'Impressão',
    type: 'limited',
    dimensions: '50x70cm',
    description: 'Edição limitada numerada, apenas 30 unidades disponíveis.',
    features: ['Numerada', 'Certificado', 'Papel especial'],
    stock: 8,
    rating: 4.9,
    isLimitedEdition: true
  },
  {
    id: 8,
    title: 'Arte Digital - Nebulosa',
    image: "https://images.unsplash.com/photo-1551950902-ac804a7b5866",
    imageAlt: 'Digital nebula artwork with purple cosmic clouds and stellar formations',
    price: 25,
    category: 'Digital',
    type: 'digital',
    dimensions: 'Download',
    description: 'Arte digital em alta resolução para download imediato.',
    features: ['Alta resolução', 'Download imediato', 'Uso comercial'],
    stock: 999,
    rating: 4.4
  }];


  const sortOptions = [
  { value: 'featured', label: 'Em Destaque' },
  { value: 'price-low', label: 'Menor Preço' },
  { value: 'price-high', label: 'Maior Preço' },
  { value: 'newest', label: 'Mais Recentes' },
  { value: 'rating', label: 'Melhor Avaliação' }];


  // Filter and sort products
  const filteredProducts = products?.filter((product) => {
    if (selectedCategory !== 'all') {
      const categoryMap = {
        'originals': 'original',
        'prints': 'print',
        'limited': 'limited',
        'merchandise': 'merchandise',
        'digital': 'digital'
      };
      if (product?.type !== categoryMap?.[selectedCategory]) return false;
    }

    // Apply other filters
    if (filters?.category?.length > 0 && !filters?.category?.includes(product?.category?.toLowerCase())) return false;
    if (filters?.type?.length > 0 && !filters?.type?.includes(product?.type)) return false;

    // Price range filter
    if (filters?.priceRange?.min !== null && product?.price < filters?.priceRange?.min) return false;
    if (filters?.priceRange?.max !== null && product?.price > filters?.priceRange?.max) return false;

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts]?.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a?.price - b?.price;
      case 'price-high':
        return b?.price - a?.price;
      case 'newest':
        return b?.isNew - a?.isNew;
      case 'rating':
        return (b?.rating || 0) - (a?.rating || 0);
      default:
        return 0;
    }
  });

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev?.find((item) => item?.id === product?.id);
      if (existingItem) {
        return prev?.map((item) =>
        item?.id === product?.id ?
        { ...item, quantity: item?.quantity + 1 } :
        item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleAddToWishlist = (product) => {
    setWishlistItems((prev) => {
      const isInWishlist = prev?.some((item) => item?.id === product?.id);
      if (isInWishlist) {
        return prev?.filter((item) => item?.id !== product?.id);
      }
      return [...prev, product];
    });
  };

  const handleUpdateCartQuantity = (itemId, newQuantity) => {
    setCartItems((prev) =>
    prev?.map((item) =>
    item?.id === itemId ? { ...item, quantity: newQuantity } : item
    )
    );
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prev) => prev?.filter((item) => item?.id !== itemId));
  };

  const handleClearFilters = () => {
    setFilters({
      category: [],
      type: [],
      size: [],
      color: [],
      priceRange: { min: null, max: null }
    });
    setSelectedCategory('all');
  };

  return (
    <>
      <Helmet>
        <title>Loja - Choki For You Official</title>
        <meta name="description" content="Explore nossa coleção completa de obras originais, impressões de alta qualidade e produtos exclusivos. Compre arte autêntica com segurança e receba em casa." />
        <meta name="keywords" content="loja de arte, obras originais, impressões, produtos artísticos, Choki, arte roxa, comprar arte" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-br from-purple-light via-background to-purple-medium/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="font-heading font-heading-bold text-4xl md:text-5xl lg:text-6xl text-gradient-purple mb-6">
                Loja Oficial Choki
              </h1>
              <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto mb-8">
                Descubra obras originais, impressões de alta qualidade e produtos exclusivos. 
                Cada peça carrega a essência única do universo artístico Choki.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="font-heading font-heading-bold text-2xl text-primary">234</div>
                  <div className="text-text-secondary text-sm">Produtos</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-heading-bold text-2xl text-primary">23</div>
                  <div className="text-text-secondary text-sm">Originais</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-heading-bold text-2xl text-primary">4.9</div>
                  <div className="text-text-secondary text-sm flex items-center gap-1">
                    <Icon name="Star" size={14} className="text-accent fill-current" />
                    Avaliação
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-heading-bold text-2xl text-primary">1.2k+</div>
                  <div className="text-text-secondary text-sm">Clientes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Featured Products */}
          <FeaturedProducts
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist} />


          {/* Product Categories */}
          <ProductCategories
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory} />


          {/* Main Shop Content */}
          <div className="flex gap-8">
            {/* Filter Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <FilterSidebar
                filters={filters}
                onFiltersChange={setFilters}
                onClearFilters={handleClearFilters}
                isOpen={false}
                onClose={() => {}} />

            </div>

            {/* Products Section */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 p-4 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors">

                    <Icon name="Filter" size={16} />
                    <span className="text-sm font-body-medium">Filtros</span>
                  </button>
                  
                  <div className="text-text-secondary text-sm">
                    {sortedProducts?.length} produtos encontrados
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e?.target?.value)}
                    className="px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary">

                    {sortOptions?.map((option) =>
                    <option key={option?.value} value={option?.value}>
                        {option?.label}
                      </option>
                    )}
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded transition-colors ${
                      viewMode === 'grid' ? 'bg-background text-primary shadow-sm' : 'text-text-secondary hover:text-primary'}`
                      }>

                      <Icon name="Grid3X3" size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded transition-colors ${
                      viewMode === 'list' ? 'bg-background text-primary shadow-sm' : 'text-text-secondary hover:text-primary'}`
                      }>

                      <Icon name="List" size={16} />
                    </button>
                  </div>

                  {/* Cart Button */}
                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="relative p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">

                    <Icon name="ShoppingCart" size={20} />
                    {cartItems?.length > 0 &&
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                        {cartItems?.reduce((sum, item) => sum + item?.quantity, 0)}
                      </span>
                    }
                  </button>
                </div>
              </div>

              {/* Products Grid */}
              {sortedProducts?.length > 0 ?
              <div className={`grid gap-6 ${
              viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`
              }>
                  {sortedProducts?.map((product) =>
                <ProductCard
                  key={product?.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                  isInWishlist={wishlistItems?.some((item) => item?.id === product?.id)} />

                )}
                </div> :

              <div className="text-center py-16">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="Search" size={48} className="text-muted-foreground" />
                  </div>
                  <h3 className="font-heading font-heading-semibold text-xl text-card-foreground mb-2">
                    Nenhum produto encontrado
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Tente ajustar os filtros ou explorar outras categorias
                  </p>
                  <Button
                  variant="outline"
                  onClick={handleClearFilters}
                  iconName="RotateCcw"
                  iconPosition="left">

                    Limpar Filtros
                  </Button>
                </div>
              }

              {/* Load More Button */}
              {sortedProducts?.length > 0 &&
              <div className="text-center mt-12">
                  <Button
                  variant="outline"
                  size="lg"
                  iconName="Plus"
                  iconPosition="left"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">

                    Carregar Mais Produtos
                  </Button>
                </div>
              }
            </div>
          </div>
        </div>

        {/* Mobile Filter Sidebar */}
        <FilterSidebar
          filters={filters}
          onFiltersChange={setFilters}
          onClearFilters={handleClearFilters}
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)} />


        {/* Shopping Cart */}
        <ShoppingCart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateCartQuantity}
          onRemoveItem={handleRemoveFromCart} />


        {/* Newsletter Section */}
        <section className="bg-gradient-to-br from-primary/5 to-purple-medium/10 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-heading-bold text-3xl text-card-foreground mb-4">
              Fique por Dentro das Novidades
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Receba em primeira mão informações sobre novas obras, promoções exclusivas e eventos especiais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />

              <Button
                variant="default"
                iconName="Mail"
                iconPosition="left"
                className="bg-gradient-cta hover:opacity-90 shadow-purple">

                Inscrever-se
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>);

};

export default Shop;