import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CommissionHero from './components/CommissionHero';
import CommissionProcess from './components/CommissionProcess';
import CommissionExamples from './components/CommissionExamples';
import PricingGuide from './components/PricingGuide';
import CommissionForm from './components/CommissionForm';
import TestimonialsSection from './components/TestimonialsSection';

const CommissionsPage = () => {
  return (
    <>
      <Helmet>
        <title>Comissões Personalizadas - Choki For You Official</title>
        <meta 
          name="description" 
          content="Solicite sua obra de arte personalizada. Processo transparente, preços justos e qualidade excepcional. Transforme suas ideias em arte única com a Choki." 
        />
        <meta name="keywords" content="comissão arte, obra personalizada, pintura sob encomenda, retrato personalizado, arte brasileira" />
        <meta property="og:title" content="Comissões Personalizadas - Choki For You Official" />
        <meta property="og:description" content="Transforme suas ideias em obras de arte únicas. Processo colaborativo e transparente." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/commissions" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <CommissionHero />
          <CommissionProcess />
          <CommissionExamples />
          <PricingGuide />
          <TestimonialsSection />
          <CommissionForm />
        </main>

        {/* Footer */}
        <footer className="bg-purple-dark text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-heading font-bold mb-4">
                  Choki For You Official
                </h3>
                <p className="text-purple-100 text-sm leading-relaxed">
                  Criando arte personalizada que conecta corações e transforma espaços. 
                  Cada obra é uma história única contada através das cores.
                </p>
              </div>
              
              <div>
                <h4 className="font-heading font-semibold mb-4">Contato</h4>
                <div className="space-y-2 text-sm text-purple-100">
                  <p>WhatsApp: (11) 99999-9999</p>
                  <p>E-mail: contato@chokiforyou.com</p>
                  <p>São Paulo, SP - Brasil</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-heading font-semibold mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-purple-100 hover:text-white transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-purple-100 hover:text-white transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-purple-100 hover:text-white transition-colors">
                    Pinterest
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-purple-medium mt-8 pt-8 text-center">
              <p className="text-purple-100 text-sm">
                © {new Date()?.getFullYear()} Choki For You Official. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CommissionsPage;