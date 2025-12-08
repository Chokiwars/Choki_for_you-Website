import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { name: 'Galeria', path: '/gallery', icon: 'Image' },
    { name: 'Loja', path: '/shop', icon: 'ShoppingBag' },
    { name: 'Comissões', path: '/commissions', icon: 'Palette' },
    { name: 'Sobre a Artista', path: '/about-artist', icon: 'User' },
    { name: 'Contato', path: '/contact', icon: 'Mail' }
  ];

  const artCategories = [
    'Arte Abstrata',
    'Retratos Roxos',
    'Paisagens Cósmicas',
    'Arte Urbana',
    'Comissões Personalizadas',
    'Prints Limitados'
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/choki_for_you', followers: '12.5K' },
    { name: 'Pinterest', icon: 'Pin', url: 'https://pinterest.com/chokiart', followers: '15.8K' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://cara.app/chokiforyou/all', followers: '3.1K' },
    { name: 'YouTube', icon: 'Youtube', url: 'https://www.youtube.com/@Choki_for_you', followers: '3.1K' },
    { name: 'Github', icon: 'Github', url: 'https://github.com/Chokiwars', followers: '8.2K' },
  ];

  const contactInfo = [
    { icon: 'Mail', text: 'chokiforyou@gmail.com', type: 'email' },
    { icon: 'Phone', text: '+55 (11) 99999-9999', type: 'phone' },
    { icon: 'MapPin', text: 'São Paulo, SP - Brasil', type: 'location' },
    { icon: 'Clock', text: 'Seg-Sex: 10h às 20h', type: 'hours' }
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-dark to-purple-deep text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/homepage" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-purple-electric rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-hover transition-all duration-300">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-heading-bold">
                  Choki
                </span>
                <span className="text-sm text-white/80 -mt-1">
                  For You Official
                </span>
              </div>
            </Link>
            
            <p className="text-white/90 font-body leading-relaxed">
              Criando arte que fala à sua alma. Cada pincelada carrega emoção e 
              cada obra é única, feita especialmente para tocar corações e 
              transformar espaços.
            </p>
            
            <div className="flex items-center space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                  aria-label={`Seguir no ${social?.name}`}
                >
                  <Icon name={social?.icon} size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-heading-bold text-white">
              Navegação
            </h3>
            
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.path}>
                  <Link
                    to={link?.path}
                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 group"
                  >
                    <Icon name={link?.icon} size={16} className="group-hover:scale-110 transition-transform" />
                    <span className="font-body">{link?.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Art Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-heading-bold text-white">
              Categorias de Arte
            </h3>
            
            <ul className="space-y-3">
              {artCategories?.map((category, index) => (
                <li key={index}>
                  <Link
                    to="/gallery"
                    className="text-white/80 hover:text-white transition-colors duration-300 font-body block"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-heading-bold text-white">
              Contato
            </h3>
            
            <ul className="space-y-4">
              {contactInfo?.map((info, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Icon name={info?.icon} size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-white/80 font-body text-sm">
                    {info?.text}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="border-white/30 text-white hover:bg-white hover:text-purple-deep"
                >
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter CTA */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-heading font-heading-bold text-white mb-2">
                Receba Novidades Exclusivas
              </h4>
              <p className="text-white/80 font-body">
                Seja o primeiro a saber sobre novas obras e ofertas especiais
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="default"
                iconName="Mail"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90"
              >
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/70 font-body">
              <span>© {currentYear} Choki For You Official. Todos os direitos reservados.</span>
              <div className="flex items-center space-x-4">
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacidade
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Termos
                </Link>
                <Link to="/cookies" className="hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-white/70 font-body">
              <Icon name="Heart" size={14} className="text-accent" />
              <span>Feito com amor em São Paulo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;