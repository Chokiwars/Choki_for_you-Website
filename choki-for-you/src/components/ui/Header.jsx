import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Gallery', path: '/gallery', icon: 'Image' },
    { name: 'Shop', path: '/shop', icon: 'ShoppingBag' },
    { name: 'Commissions', path: '/commissions', icon: 'Palette' },
    { name: 'About Artist', path: '/about-artist', icon: 'User' },
    { name: 'Contact', path: '/contact', icon: 'Mail' }
  ];

  const primaryNavItems = navigationItems?.slice(0, 4);
  const secondaryNavItems = navigationItems?.slice(4);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    if (path === '/homepage') {
      return location?.pathname === '/' || location?.pathname === '/homepage';
    }
    return location?.pathname === path;
  };

  const Logo = () => (
    <Link to="/homepage" className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center shadow-purple group-hover:shadow-purple-hover transition-all duration-300">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-purple-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-heading font-heading-bold text-gradient-purple">
          Choki
        </span>
        <span className="text-xs font-body text-text-secondary -mt-1">
          For You Official
        </span>
      </div>
    </Link>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-purple border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNavItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-4 py-2 rounded-lg text-sm font-body font-body-medium transition-all duration-300 flex items-center space-x-2 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-purple'
                    : 'text-text-primary hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {secondaryNavItems?.length > 0 && (
              <div className="relative group">
                <button className="px-4 py-2 rounded-lg text-sm font-body font-body-medium text-text-primary hover:bg-muted hover:text-primary transition-all duration-300 flex items-center space-x-2">
                  <Icon name="MoreHorizontal" size={16} />
                  <span>More</span>
                </button>
                
                <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-purple opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {secondaryNavItems?.map((item) => (
                      <Link
                        key={item?.path}
                        to={item?.path}
                        className={`flex items-center space-x-3 px-4 py-2 text-sm font-body transition-colors ${
                          isActivePath(item?.path)
                            ? 'bg-primary text-primary-foreground'
                            : 'text-popover-foreground hover:bg-muted'
                        }`}
                      >
                        <Icon name={item?.icon} size={16} />
                        <span>{item?.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Search"
              iconPosition="left"
              className="text-text-primary border-border hover:border-primary"
            >
              Search Art
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Palette"
              iconPosition="left"
              className="bg-gradient-cta hover:opacity-90 shadow-purple"
            >
              Commission Art
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-muted transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-16 bg-background border-b border-border shadow-purple transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible translate-y-0' :'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              onClick={closeMobileMenu}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-body font-body-medium transition-all duration-300 ${
                isActivePath(item?.path)
                  ? 'bg-primary text-primary-foreground shadow-purple'
                  : 'text-text-primary hover:bg-muted hover:text-primary'
              }`}
            >
              <Icon name={item?.icon} size={20} />
              <span>{item?.name}</span>
            </Link>
          ))}
          
          <div className="pt-4 border-t border-border space-y-3">
            <Button
              variant="outline"
              fullWidth
              iconName="Search"
              iconPosition="left"
              className="justify-start"
            >
              Search Art
            </Button>
            <Button
              variant="default"
              fullWidth
              iconName="Palette"
              iconPosition="left"
              className="justify-start bg-gradient-cta hover:opacity-90 shadow-purple"
            >
              Commission Art
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-16 bg-background/80 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
};

export default Header;