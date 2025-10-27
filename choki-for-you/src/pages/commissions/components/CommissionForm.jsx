import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CommissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    size: '',
    technique: '',
    timeline: '',
    budget: '',
    description: '',
    references: '',
    additionalServices: [],
    agreedToTerms: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const projectTypes = [
    { value: 'portrait', label: 'Retrato (Pessoa/Pet)' },
    { value: 'landscape', label: 'Paisagem' },
    { value: 'abstract', label: 'Arte Abstrata' },
    { value: 'still-life', label: 'Natureza Morta' },
    { value: 'custom', label: 'Projeto Personalizado' }
  ];

  const sizeOptions = [
    { value: 'small', label: 'Pequeno (30x40 cm) - R$ 1.200+' },
    { value: 'medium', label: 'Médio (50x70 cm) - R$ 2.500+' },
    { value: 'large', label: 'Grande (80x100 cm) - R$ 4.200+' },
    { value: 'custom', label: 'Tamanho Personalizado' }
  ];

  const techniqueOptions = [
    { value: 'oil', label: 'Óleo sobre Tela' },
    { value: 'acrylic', label: 'Acrílico sobre Tela' },
    { value: 'mixed', label: 'Técnica Mista' },
    { value: 'watercolor', label: 'Aquarela' },
    { value: 'discuss', label: 'Discutir com Artista' }
  ];

  const timelineOptions = [
    { value: 'flexible', label: 'Flexível (4-6 semanas)' },
    { value: 'standard', label: 'Padrão (2-4 semanas)' },
    { value: 'urgent', label: 'Urgente (1-2 semanas) +30%' }
  ];

  const budgetOptions = [
    { value: '1000-2000', label: 'R$ 1.000 - R$ 2.000' },
    { value: '2000-3500', label: 'R$ 2.000 - R$ 3.500' },
    { value: '3500-5000', label: 'R$ 3.500 - R$ 5.000' },
    { value: '5000+', label: 'R$ 5.000+' },
    { value: 'discuss', label: 'Prefiro Discutir' }
  ];

  const additionalServiceOptions = [
    { value: 'frame', label: 'Moldura Personalizada (+R$ 200-600)' },
    { value: 'timelapse', label: 'Vídeo Time-lapse (+R$ 150)' },
    { value: 'consultation', label: 'Consultoria de Instalação (+R$ 200)' },
    { value: 'express', label: 'Entrega Expressa (+30%)' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceChange = (service, checked) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: checked
        ? [...prev?.additionalServices, service]
        : prev?.additionalServices?.filter(s => s !== service)
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                Informações de Contato
              </h3>
              <p className="text-text-secondary">
                Vamos começar com suas informações básicas
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Nome Completo"
                type="text"
                placeholder="Seu nome completo"
                value={formData?.name}
                onChange={(e) => handleInputChange('name', e?.target?.value)}
                required
              />
              <Input
                label="E-mail"
                type="email"
                placeholder="seu@email.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                required
              />
            </div>
            <Input
              label="Telefone (WhatsApp)"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              description="Preferível WhatsApp para comunicação rápida"
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                Detalhes do Projeto
              </h3>
              <p className="text-text-secondary">
                Conte-nos sobre sua visão artística
              </p>
            </div>
            <Select
              label="Tipo de Projeto"
              options={projectTypes}
              value={formData?.projectType}
              onChange={(value) => handleInputChange('projectType', value)}
              placeholder="Selecione o tipo de obra"
              required
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Select
                label="Tamanho da Obra"
                options={sizeOptions}
                value={formData?.size}
                onChange={(value) => handleInputChange('size', value)}
                placeholder="Escolha o tamanho"
                required
              />
              <Select
                label="Técnica Preferida"
                options={techniqueOptions}
                value={formData?.technique}
                onChange={(value) => handleInputChange('technique', value)}
                placeholder="Selecione a técnica"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Select
                label="Prazo Desejado"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => handleInputChange('timeline', value)}
                placeholder="Quando precisa ficar pronto?"
                required
              />
              <Select
                label="Orçamento Estimado"
                options={budgetOptions}
                value={formData?.budget}
                onChange={(value) => handleInputChange('budget', value)}
                placeholder="Qual seu orçamento?"
                required
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                Descrição e Referências
              </h3>
              <p className="text-text-secondary">
                Detalhe sua visão para criarmos algo único
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Descrição Detalhada do Projeto *
                </label>
                <textarea
                  className="w-full h-32 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Descreva sua visão: cores preferidas, estilo, elementos importantes, atmosfera desejada..."
                  value={formData?.description}
                  onChange={(e) => handleInputChange('description', e?.target?.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Referências e Inspirações
                </label>
                <textarea
                  className="w-full h-24 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Links de imagens, artistas que admira, estilos de referência..."
                  value={formData?.references}
                  onChange={(e) => handleInputChange('references', e?.target?.value)}
                />
                <p className="text-sm text-text-secondary mt-2">
                  Você também poderá enviar fotos por WhatsApp após o envio
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-4">
                  Serviços Adicionais
                </label>
                <div className="space-y-3">
                  {additionalServiceOptions?.map((service) => (
                    <Checkbox
                      key={service?.value}
                      label={service?.label}
                      checked={formData?.additionalServices?.includes(service?.value)}
                      onChange={(e) => handleServiceChange(service?.value, e?.target?.checked)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                Revisão e Confirmação
              </h3>
              <p className="text-text-secondary">
                Revise suas informações antes de enviar
              </p>
            </div>
            <div className="bg-muted rounded-xl p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-text-secondary">Nome:</span>
                  <p className="font-medium text-text-primary">{formData?.name}</p>
                </div>
                <div>
                  <span className="text-sm text-text-secondary">E-mail:</span>
                  <p className="font-medium text-text-primary">{formData?.email}</p>
                </div>
                <div>
                  <span className="text-sm text-text-secondary">Tipo:</span>
                  <p className="font-medium text-text-primary">
                    {projectTypes?.find(t => t?.value === formData?.projectType)?.label}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-text-secondary">Tamanho:</span>
                  <p className="font-medium text-text-primary">
                    {sizeOptions?.find(s => s?.value === formData?.size)?.label}
                  </p>
                </div>
              </div>
              
              <div>
                <span className="text-sm text-text-secondary">Descrição:</span>
                <p className="font-medium text-text-primary mt-1">{formData?.description}</p>
              </div>
            </div>
            <Checkbox
              label="Concordo com os termos de serviço e política de privacidade"
              checked={formData?.agreedToTerms}
              onChange={(e) => handleInputChange('agreedToTerms', e?.target?.checked)}
              required
            />
            <div className="bg-gradient-to-r from-purple-light to-purple-medium rounded-xl p-6">
              <h4 className="font-heading font-semibold text-purple-dark mb-2">
                Próximos Passos:
              </h4>
              <ul className="text-sm text-purple-dark/80 space-y-1">
                <li>• Análise da sua solicitação em até 24 horas</li>
                <li>• Proposta detalhada com cronograma e valores</li>
                <li>• Reunião de alinhamento (presencial ou online)</li>
                <li>• Início do projeto após aprovação</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gradient-purple mb-4">
            Solicitar Comissão
          </h2>
          <p className="text-lg text-text-secondary">
            Preencha o formulário abaixo para iniciarmos sua obra personalizada
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {Array.from({ length: totalSteps }, (_, index) => (
              <div
                key={index + 1}
                className={`flex items-center ${index < totalSteps - 1 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    currentStep > index + 1
                      ? 'bg-success text-white'
                      : currentStep === index + 1
                      ? 'bg-primary text-white' :'bg-muted text-text-secondary'
                  }`}
                >
                  {currentStep > index + 1 ? (
                    <Icon name="Check" size={16} />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < totalSteps - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 rounded transition-all duration-300 ${
                      currentStep > index + 1 ? 'bg-success' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-text-secondary">
            <span>Contato</span>
            <span>Projeto</span>
            <span>Detalhes</span>
            <span>Revisão</span>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-purple border border-border">
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Anterior
            </Button>

            {currentStep < totalSteps ? (
              <Button
                type="button"
                variant="default"
                onClick={nextStep}
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-primary hover:bg-primary/90"
              >
                Próximo
              </Button>
            ) : (
              <Button
                type="submit"
                variant="default"
                disabled={!formData?.agreedToTerms}
                iconName="Send"
                iconPosition="left"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Enviar Solicitação
              </Button>
            )}
          </div>
        </form>

        {/* Contact Alternative */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">
            Prefere conversar diretamente? Entre em contato:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
              className="border-success text-success hover:bg-success hover:text-white"
            >
              WhatsApp: (11) 99999-9999
            </Button>
            <Button
              variant="outline"
              iconName="Mail"
              iconPosition="left"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              contato@chokiforyou.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommissionForm;