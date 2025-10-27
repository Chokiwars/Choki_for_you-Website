import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0]));

  const faqData = [
    {
      category: "Compras e Encomendas",
      questions: [
        {
          question: "Como posso comprar uma obra existente?",
          answer: `Você pode comprar obras através da nossa galeria online ou visitando o ateliê pessoalmente. 
          \n\nPara compras online: navegue pela galeria, selecione a obra desejada e finalize através do nosso sistema seguro de pagamento.
          \n\nPara visitas presenciais: agende um horário e venha conhecer as obras pessoalmente. Aceitamos pagamento à vista, parcelado no cartão ou PIX com desconto especial.`
        },
        {
          question: "Quanto tempo leva para criar uma obra encomendada?",
          answer: `O prazo varia conforme a complexidade e tamanho da obra:
          \n\n• Obras pequenas (até 40x60cm): 2-4 semanas
          \n• Obras médias (60x80cm a 100x120cm): 4-8 semanas  
          \n• Obras grandes (acima de 120cm): 8-12 semanas
          \n• Projetos especiais: prazo a combinar
          \n\nSempre discutimos prazos durante a consulta inicial e mantemos você atualizado sobre o progresso.`
        },
        {
          question: "Qual é a faixa de preços das obras?",
          answer: `Os preços variam conforme tamanho, técnica e complexidade:
          \n\n• Obras pequenas: R$ 800 - R$ 3.000
          \n• Obras médias: R$ 3.000 - R$ 8.000
          \n• Obras grandes: R$ 8.000 - R$ 25.000
          \n• Projetos especiais: orçamento personalizado
          \n\nTambém oferecemos prints de alta qualidade a partir de R$ 150 e opções de parcelamento para obras originais.`
        }
      ]
    },
    {
      category: "Processo Criativo",
      questions: [
        {
          question: "Como funciona o processo de encomenda personalizada?",
          answer: `O processo é colaborativo e transparente:
          \n\n1. **Consulta inicial**: Conversamos sobre sua visão, estilo preferido e orçamento
          \n2. **Proposta**: Apresento conceitos e esboços iniciais
          \n3. **Aprovação**: Refinamos a ideia até sua total satisfação
          \n4. **Criação**: Inicio o trabalho mantendo você informado do progresso
          \n5. **Entrega**: Apresentação da obra finalizada e entrega
          \n\nVocê participa de cada etapa e pode solicitar ajustes durante o desenvolvimento.`
        },
        {
          question: "Posso acompanhar o progresso da minha encomenda?",
          answer: `Absolutamente! Transparência é fundamental no meu trabalho:
          \n\n• Envio fotos do progresso semanalmente
          \n• Você pode agendar visitas ao ateliê para ver pessoalmente
          \n• Mantenho comunicação constante via WhatsApp ou email
          \n• Compartilho vídeos do processo quando possível
          \n\nSeu envolvimento torna o resultado ainda mais especial e alinhado com suas expectativas.`
        },
        {
          question: "Trabalha com quais técnicas e materiais?",
          answer: `Trabalho com diversas técnicas para atender diferentes gostos:
          \n\n**Técnicas principais:**
          \n• Acrílica sobre tela
          \n• Óleo sobre tela
          \n• Técnica mista
          \n• Aquarela
          \n• Arte digital
          \n\n**Suportes:**
          \n• Telas tradicionais
          \n• Madeira
          \n• Papel especial
          \n• Superfícies alternativas (mediante consulta)
          \n\nTodos os materiais são de alta qualidade para garantir durabilidade e beleza duradoura.`
        }
      ]
    },
    {
      category: "Logística e Entrega",
      questions: [
        {
          question: "Como funciona a entrega das obras?",
          answer: `Oferecemos várias opções de entrega:
          \n\n**São Paulo (capital):**
          \n• Entrega pessoal: R$ 50-150 (dependendo da região)
          \n• Retirada no ateliê: gratuita (mediante agendamento)
          \n\n**Interior de SP e outras capitais:**
          \n• Transportadora especializada: R$ 80-200
          \n• Correios (obras menores): R$ 30-80
          \n\n**Demais localidades:**
          \n• Transportadora: orçamento personalizado
          \n\nTodas as obras são embaladas com proteção profissional e seguro incluso.`
        },
        {
          question: "As obras vêm emolduradas?",
          answer: `Oferecemos opções flexíveis:
          \n\n**Obras em tela:**
          \n• Entregues prontas para pendurar (bordas pintadas)
          \n• Moldura opcional mediante orçamento adicional
          \n\n**Obras em papel:**
          \n• Sempre recomendamos moldura com vidro
          \n• Oferecemos serviço de moldura profissional
          \n• Parcerias com moldurarias de qualidade
          \n\n**Consultoria gratuita:**
          \n• Orientação sobre melhor tipo de moldura
          \n• Sugestões de cores e estilos
          \n• Indicação de moldurarias parceiras`
        }
      ]
    },
    {
      category: "Colaborações e Parcerias",
      questions: [
        {
          question: "Aceita propostas de exposições?",
          answer: `Sim! Estou sempre aberta a oportunidades de exposição:
          \n\n**Tipos de colaboração:**
          \n• Exposições individuais
          \n• Mostras coletivas
          \n• Eventos corporativos
          \n• Feiras de arte
          \n• Projetos culturais
          \n\n**Para propor uma parceria:**
          \n• Envie detalhes do evento/espaço
          \n• Inclua datas, local e público esperado
          \n• Especifique tipo de obras desejadas
          \n\nAnaliso cada proposta cuidadosamente e respondo em até 48 horas.`
        },
        {
          question: "Trabalha com projetos corporativos?",
          answer: `Sim! Tenho experiência em projetos empresariais:
          \n\n**Serviços oferecidos:**
          \n• Obras para decoração de escritórios
          \n• Arte para hotéis e restaurantes
          \n• Projetos para construtoras
          \n• Presentes corporativos personalizados
          \n• Workshops e eventos artísticos
          \n\n**Diferenciais:**
          \n• Orçamentos especiais para múltiplas peças
          \n• Prazos flexíveis para grandes projetos
          \n• Consultoria sobre arte e ambiente
          \n• Certificado de autenticidade incluso`
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, questionIndex) => {
    const itemId = `${categoryIndex}-${questionIndex}`;
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems?.has(itemId)) {
      newOpenItems?.delete(itemId);
    } else {
      newOpenItems?.add(itemId);
    }
    
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre compras, encomendas, 
            processo criativo e colaborações. Não encontrou sua pergunta? Entre em contato!
          </p>
        </div>

        <div className="space-y-8">
          {faqData?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card rounded-2xl shadow-purple border border-border overflow-hidden">
              <div className="bg-gradient-to-r from-purple-light to-purple-medium p-6">
                <h3 className="text-xl font-heading font-semibold text-purple-dark flex items-center">
                  <Icon name="HelpCircle" size={24} className="mr-3" />
                  {category?.category}
                </h3>
              </div>

              <div className="divide-y divide-border">
                {category?.questions?.map((item, questionIndex) => {
                  const itemId = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openItems?.has(itemId);

                  return (
                    <div key={questionIndex}>
                      <button
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                        className="w-full px-6 py-6 text-left hover:bg-muted/50 transition-colors focus:outline-none focus:bg-muted/50"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium text-text-primary pr-4">
                            {item?.question}
                          </h4>
                          <Icon 
                            name={isOpen ? "ChevronUp" : "ChevronDown"} 
                            size={20} 
                            className="text-text-secondary flex-shrink-0 transition-transform duration-200"
                          />
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="prose prose-sm max-w-none">
                            {item?.answer?.split('\n')?.map((paragraph, index) => (
                              <p key={index} className="text-text-secondary leading-relaxed mb-3 last:mb-0">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-light to-purple-medium rounded-2xl p-8">
            <Icon name="MessageCircle" size={32} className="text-purple-deep mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-semibold text-purple-dark mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-purple-dark/80 text-lg mb-6">
              Estou aqui para esclarecer qualquer questão sobre meu trabalho, 
              processo criativo ou como podemos colaborar juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contato@chokiforyou.com.br"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-deep text-white rounded-lg hover:bg-purple-electric transition-colors shadow-purple-hover"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Enviar Email
              </a>
              <a 
                href="https://wa.me/5511999998888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Icon name="MessageSquare" size={20} className="mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;