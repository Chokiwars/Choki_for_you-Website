import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const inquiryTypes = [
    { value: 'purchase', label: 'Compra de Obra Existente' },
    { value: 'commission', label: 'Encomenda Personalizada' },
    { value: 'collaboration', label: 'Colaboração Profissional' },
    { value: 'exhibition', label: 'Proposta de Exposição' },
    { value: 'press', label: 'Imprensa e Mídia' },
    { value: 'studio-visit', label: 'Visita ao Ateliê' },
    { value: 'general', label: 'Consulta Geral' }
  ];

  const budgetRanges = [
    { value: 'under-1000', label: 'Até R$ 1.000' },
    { value: '1000-5000', label: 'R$ 1.000 - R$ 5.000' },
    { value: '5000-15000', label: 'R$ 5.000 - R$ 15.000' },
    { value: '15000-50000', label: 'R$ 15.000 - R$ 50.000' },
    { value: 'above-50000', label: 'Acima de R$ 50.000' },
    { value: 'flexible', label: 'Flexível / A Discutir' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgente (até 2 semanas)' },
    { value: '1-month', label: '1 mês' },
    { value: '2-3-months', label: '2-3 meses' },
    { value: '3-6-months', label: '3-6 meses' },
    { value: 'flexible', label: 'Flexível' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-12 text-center shadow-purple">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-success rounded-full mb-8">
              <Icon name="CheckCircle" size={40} className="text-white" />
            </div>
            
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              Mensagem Enviada com Sucesso!
            </h2>
            
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Obrigada pelo seu interesse! Recebi sua mensagem e entrarei em contato em até 24 horas. 
              Enquanto isso, sinta-se à vontade para explorar meu portfólio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="ArrowLeft"
                iconPosition="left"
                onClick={() => setSubmitStatus(null)}
                className="bg-gradient-cta"
              >
                Enviar Nova Mensagem
              </Button>
              
              <Button
                variant="outline"
                iconName="Image"
                iconPosition="left"
                onClick={() => window.location.href = '/gallery'}
              >
                Ver Galeria
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Formulário de Contato
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Preencha o formulário abaixo com o máximo de detalhes possível. 
            Isso me ajudará a entender melhor sua necessidade e oferecer a melhor solução.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-purple">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nome Completo"
                type="text"
                name="name"
                value={formData?.name}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                required
              />

              <Input
                label="Email"
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleInputChange}
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Telefone (Opcional)"
                type="tel"
                name="phone"
                value={formData?.phone}
                onChange={handleInputChange}
                placeholder="(11) 99999-9999"
              />

              <Select
                label="Tipo de Consulta"
                options={inquiryTypes}
                value={formData?.inquiryType}
                onChange={(value) => handleSelectChange('inquiryType', value)}
                placeholder="Selecione o tipo de consulta"
                required
              />
            </div>

            {/* Project Details */}
            <Input
              label="Assunto"
              type="text"
              name="subject"
              value={formData?.subject}
              onChange={handleInputChange}
              placeholder="Resumo do que você precisa"
              required
            />

            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-primary">
                Mensagem Detalhada *
              </label>
              <textarea
                name="message"
                value={formData?.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Descreva detalhadamente seu projeto, suas expectativas, inspirações, dimensões desejadas, cores preferidas, ou qualquer outra informação relevante..."
                required
              />
              <p className="text-sm text-text-secondary">
                Quanto mais detalhes você fornecer, melhor poderei atender suas necessidades.
              </p>
            </div>

            {/* Budget and Timeline */}
            {(formData?.inquiryType === 'commission' || formData?.inquiryType === 'purchase') && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Orçamento Estimado"
                  options={budgetRanges}
                  value={formData?.budget}
                  onChange={(value) => handleSelectChange('budget', value)}
                  placeholder="Selecione sua faixa de orçamento"
                  description="Isso me ajuda a sugerir opções adequadas"
                />

                <Select
                  label="Prazo Desejado"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) => handleSelectChange('timeline', value)}
                  placeholder="Quando você precisa?"
                  description="Prazos flexíveis permitem melhor planejamento"
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                className="bg-gradient-cta hover:opacity-90 shadow-purple"
              >
                {isSubmitting ? 'Enviando Mensagem...' : 'Enviar Mensagem'}
              </Button>

              <p className="text-sm text-text-secondary text-center mt-4">
                Ao enviar este formulário, você concorda em receber comunicações sobre seu projeto. 
                Seus dados são tratados com total confidencialidade.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;