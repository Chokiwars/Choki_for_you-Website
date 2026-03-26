import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 relative overflow-hidden p-4">
      
      {/* Glow Background */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
        
        {/* 404 estilizado */}
        <div className="flex justify-center mb-6">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-purple-400 via-purple-200 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            404
          </h1>
        </div>

        {/* Texto */}
        <h2 className="text-2xl font-semibold text-white mb-2">
          Erro ao acessar página
        </h2>

        <p className="text-white/80 mb-8 leading-relaxed">
          Ops! Ocorreu um erro inesperado enquanto processávamos sua solicitação.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            iconName="ArrowLeft"
            iconPosition="left"
            onClick={() => window.history?.back()}
            className="bg-white text-purple-800 hover:bg-white/90 shadow-lg"
          >
            Voltar
          </Button>

          <Button
            variant="outline"
            iconName="Home"
            iconPosition="left"
            onClick={() => navigate('/')}
            className="border-white text-white hover:bg-white hover:text-purple-800"
          >
            Ir para Home
          </Button>
        </div>

        {/* Detalhezinho artístico */}
        <p className="mt-6 text-xs text-white/60">
          ✦ Choki_for_you ✦
        </p>
      </div>
    </div>
  );
};

export default NotFound;