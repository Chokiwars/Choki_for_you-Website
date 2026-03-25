import React from "react";
import Icon from "./AppIcon";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    error.__ErrorBoundary = true;
    window.__COMPONENT_ERROR__?.(error, errorInfo);
  }

  render() {
    if (this.state?.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 relative overflow-hidden">

          {/* Glow Background */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="relative z-10 text-center p-8 max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">

            {/* Icon */}
            <div className="flex justify-center items-center mb-4">
              <div className="bg-white/20 p-4 rounded-full">
                <Icon name="AlertTriangle" size={32} color="#fff" />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-3xl font-bold text-white">
                Oops... algo deu errado
              </h1>
              <p className="text-white/80 text-base leading-relaxed">
                Ocorreu um erro inesperado enquanto processávamos sua solicitação.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center items-center mt-6">
              <button
                onClick={() => {
                  window.location.href = "/homepage";
                }}
                className="bg-white text-purple-800 hover:bg-white/90 font-medium py-2 px-5 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-lg hover:scale-105"
              >
                <Icon name="ArrowLeft" size={18} />
                Voltar pra Home
              </button>
            </div>

            {/* Signature */}
            <p className="mt-6 text-xs text-white/60">
              ✦ Choki_for_you ✦
            </p>
          </div>
        </div>
      );
    }

    return this.props?.children;
  }
}

export default ErrorBoundary;