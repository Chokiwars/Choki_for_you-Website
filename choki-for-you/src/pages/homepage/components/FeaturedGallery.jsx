import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

// Importando imagens locais
import AkiraOnFire from '../../../assets/artworks/Akira_on_fire.jpeg';
import SombraAkiraChoi from '../../../assets/artworks/Sombra_Akira_choi.jpeg';
import AnyDtiys from '../../../assets/artworks/Any_dtiys.jpeg';
import SombraAkiraShakan from '../../../assets/artworks/Sombra_Akira_shakan.jpeg';
import AkiraOnWater from '../../../assets/artworks/AkiraOnWater.jpeg';
import Flowers from '../../../assets/artworks/Flowers_goretober.jpeg';
// import  from '../../../assets/artworks/';
// import  from '../../../assets/artworks/';
// import  from '../../../assets/artworks/';
// import  from '../../../assets/artworks/';
// import  from '../../../assets/artworks/';

const FeaturedGallery = () => {
  const [hoveredArtwork, setHoveredArtwork] = useState(null);

  const featuredArtworks = [
  {
    id: 1,
    title: "Metamorfose Roxa",
    category: "Abstrato",
    image: AkiraOnWater,
    alt: "Abstract purple butterfly transformation painting with flowing organic shapes and gradient colors",
    price: "R$ 1.800,00",
    status: "available",
    dimensions: "60x80cm"
  },
  {
    id: 2,
    title: "Jardim Secreto",
    category: "Natureza",
    image: AkiraOnFire,
    alt: "Purple flower garden painting with lavender blooms and mystical lighting effects",
    price: "R$ 2.200,00",
    status: "available",
    dimensions: "50x70cm"
  },
  {
    id: 3,
    title: "Cosmos Infinito",
    category: "Espacial",
    image: AnyDtiys,
    alt: "Deep space nebula painting with purple and pink cosmic clouds and distant stars",
    price: "R$ 3.500,00",
    status: "sold",
    dimensions: "80x100cm"
  },
  {
    id: 4,
    title: "Reflexões Urbanas",
    category: "Urbano",
    image: SombraAkiraChoi,
    alt: "Urban cityscape painting with purple neon lights reflecting on wet streets at night",
    price: "R$ 2.800,00",
    status: "available",
    dimensions: "70x90cm"
  },
  {
    id: 5,
    title: "Alma Feminina",
    category: "Retrato",
    image: Flowers,
    alt: "Portrait painting of woman with flowing purple hair and ethereal expression in soft lighting",
    price: "R$ 4.200,00",
    status: "available",
    dimensions: "60x80cm"
  },
  {
    id: 6,
    title: "Ondas de Emoção",
    category: "Abstrato",
    image: SombraAkiraShakan,
    alt: "Abstract wave painting with purple and gold flowing patterns representing emotional movement",
    price: "R$ 1.950,00",
    status: "available",
    dimensions: "55x75cm"
  }];


  const categories = ["Todos", "Abstrato", "Natureza", "Espacial", "Urbano", "Retrato"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredArtworks = selectedCategory === "Todos" ?
  featuredArtworks :
  featuredArtworks?.filter((artwork) => artwork?.category === selectedCategory);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-light rounded-full px-4 py-2 text-purple-deep mb-6">
            <Icon name="Image" size={16} />
            <span className="text-sm font-body font-body-medium">Galeria em Destaque</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-heading-bold text-text-primary mb-6">
            Obras que Tocam
            <span className="block text-gradient-purple">a Alma</span>
          </h2>
          
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto leading-relaxed">
            Cada pincelada conta uma história. Explore nossa coleção de obras originais, 
            onde cores roxas dançam com emoções e criam conexões únicas com cada observador.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) =>
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-body font-body-medium transition-all duration-300 ${
            selectedCategory === category ?
            'bg-primary text-primary-foreground shadow-purple' :
            'bg-muted text-text-secondary hover:bg-purple-light hover:text-primary'}`
            }>

              {category}
            </button>
          )}
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredArtworks?.map((artwork) =>
          <div
            key={artwork?.id}
            className="group relative bg-card rounded-2xl overflow-hidden shadow-subtle hover:shadow-purple transition-all duration-500 transform hover:-translate-y-2"
            onMouseEnter={() => setHoveredArtwork(artwork?.id)}
            onMouseLeave={() => setHoveredArtwork(null)}>

              {/* Artwork Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                src={artwork?.image}
                alt={artwork?.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                
                {/* Status Badge */}
                {artwork?.status === 'sold' &&
              <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-body font-body-medium">
                    Vendida
                  </div>
              }
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-purple-dark/80 via-transparent to-transparent transition-opacity duration-300 ${
              hoveredArtwork === artwork?.id ? 'opacity-100' : 'opacity-0'}`
              }>
                  <div className="absolute bottom-4 left-4 right-4 space-y-3">
                    <div className="flex items-center space-x-2 text-white">
                      <Icon name="Ruler" size={16} />
                      <span className="text-sm font-body">{artwork?.dimensions}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                      variant="default"
                      size="sm"
                      iconName="Eye"
                      iconPosition="left"
                      className="bg-white text-purple-deep hover:bg-white/90 flex-1">

                        Ver
                      </Button>
                      
                      {artwork?.status === 'available' &&
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ShoppingCart"
                      iconPosition="left"
                      className="border-white text-white hover:bg-white hover:text-purple-deep flex-1">

                          Comprar
                        </Button>
                    }
                    </div>
                  </div>
                </div>
              </div>

              {/* Artwork Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-sm text-primary font-body font-body-medium">
                      {artwork?.category}
                    </span>
                    <h3 className="text-xl font-heading font-heading-bold text-text-primary">
                      {artwork?.title}
                    </h3>
                  </div>
                  
                  <button className="p-2 rounded-full hover:bg-muted transition-colors">
                    <Icon name="Heart" size={20} className="text-text-secondary hover:text-destructive" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-heading font-heading-bold text-primary">
                    {artwork?.price}
                  </span>
                  
                  <div className={`px-3 py-1 rounded-full text-sm font-body font-body-medium ${
                artwork?.status === 'available' ? 'bg-success/10 text-success' : 'bg-muted text-text-secondary'}`
                }>
                    {artwork?.status === 'available' ? 'Disponível' : 'Vendida'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/gallery">
            <Button
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-gradient-cta hover:opacity-90 shadow-purple">

              Ver Toda a Galeria
            </Button>
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedGallery;