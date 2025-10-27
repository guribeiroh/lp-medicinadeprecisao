import { motion } from "motion/react";
import { Mic2 } from "lucide-react";
import { useState } from "react";

export function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<number | null>(null);

  const speakers = [
    {
      name: "Arthur Melo",
      image: "/palestrantes/Arthur Melo.png",
      title: "CEO | Empreendedor",
      specialty: "Estrategista de Negócios",
      gender: "m",
      bio: "Empreendedor e estrategista de negócios na área médica. CEO do Grupo CONAES Brasil, maior ecossistema educacional médico do país com mais de 28 mil alunos, e fundador do Grupo AID, que oferece soluções completas para médicos em contabilidade, marketing, gestão e tecnologia.\n\nReconhecido por sua comunicação prática e provocativa, Arthur ajuda médicos a construírem negócios sólidos, previsíveis e lucrativos sem perder o propósito de cuidar de pessoas."
    },
    {
      name: "Dr. João Cristofolo",
      image: "/palestrantes/João Cristofolo.png",
      title: "Médico | Fundador",
      specialty: "Medicina Endocanabinoide",
      gender: "m",
      bio: "Médico, palestrante, fundador do Grupo CONAES Brasil e professor da Pós-Graduação em Medicina Endocanabinoide do CONAES Brasil. Integra neurociência e medicina para oferecer tratamentos personalizados, democratizando o acesso a terapias que promovem equilíbrio emocional e físico com ética e dedicação."
    },
    {
      name: "Dr. Jimmy Fardin",
      image: "/palestrantes/Jimmy Fardin.png",
      title: "Médico | Coordenador",
      specialty: "Medicina Endocanabinoide",
      gender: "m",
      bio: "Referência nacional em Medicina Endocanabinoide e coordenador da Pós-graduação em Medicina Endocanabinoide do CONAES Brasil, além de liderar o Núcleo de Cannabis do grupo.\n\nMédico com formação em Ortopedia e Traumatologia, se tornou um dos principais nomes do país no uso terapêutico da Cannabis, aplicando o tratamento em casos de dor crônica, inflamações e medicina esportiva.\n\nCom mais de 500 palestras realizadas, é membro da SBEC e fundador da AMBCANN, além de possuir formação em prescrição canabinoide pela UNIFESP e pela Cannabis Academy. Sua trajetória une ciência, prática e propósito, sendo presença constante nos maiores eventos do setor no Brasil e no exterior."
    },
    {
      name: "Dra. Katia Ishi",
      image: "/palestrantes/Katia.png",
      title: "Médica | Especialista",
      specialty: "Medicina de Precisão",
      gender: "f",
      bio: "Especialista em Medicina de Precisão, dedicada a aplicar as mais modernas técnicas e conhecimentos para proporcionar tratamentos personalizados e eficazes aos pacientes."
    },
    {
      name: "Josimar Foganholi",
      image: "/palestrantes/Josimar.png",
      title: "Psicólogo | MEV",
      specialty: "Desenvolvimento Comportamental",
      gender: "m",
      bio: "Psicólogo responsável pelo MEV, onde conduz o desenvolvimento emocional e comportamental dos mentorados, ajudando médicos a desbloquearem crenças e acelerarem seus resultados com clareza e propósito.\n\nFormado pela UNILAGO, é especialista em Terapia Cognitivo-Comportamental (TCC) e abordagens da terceira onda, com foco em autoconhecimento e performance.\n\nCom sólida experiência clínica e uma comunicação acessível, Josimar se destaca por unir ciência, sensibilidade e resultado em cada processo de transformação."
    },
    {
      name: "Derek Gombradi",
      image: "/palestrantes/Derik.png",
      title: "Especialista | Consultor",
      specialty: "Gestão Empresarial",
      gender: "m",
      bio: "Especialista em gestão e desenvolvimento empresarial. Bacharel em Optometria, está há 17 anos à frente da Ótica Lagoa da Prata, negócio familiar com mais de 39 anos de atuação.\n\nSob sua liderança, a empresa alcançou crescimento de 1800% no faturamento, resultado de uma gestão eficiente e do fortalecimento da equipe.\n\nAtua como diretor da ACE/CDL de Lagoa da Prata e consultor cadastrado do SEBRAE, apoiando empresários na construção de equipes sólidas, produtivas e alinhadas ao propósito de suas empresas."
    },
    {
      name: "Lucas Gasparini",
      image: "/palestrantes/Lugas Gasparini.png",
      title: "Sócio | Diretor Comercial",
      specialty: "Unikka Pharma",
      gender: "m",
      bio: "Sócio e Diretor Comercial da Unikka Pharma, empresário com ampla experiência na construção e expansão de negócios na área da saúde.\n\nEspecialista em estratégias de crescimento, posicionamento de marca e desenvolvimento de equipes de alta performance. Ao longo da carreira, tem se destacado por impulsionar o faturamento de grandes empresas, liderando projetos inovadores e sustentáveis que unem visão estratégica, relacionamento sólido com parceiros e foco em resultados."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1219] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#2563eb]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#3b82f6]/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563eb]/10 text-[#3b82f6] rounded-full border border-[#2563eb]/20 backdrop-blur-sm">
              <Mic2 className="w-4 h-4" />
              <span className="text-sm font-medium">Palestrantes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight px-4">
              QUEM VAI COMPARTILHAR CONHECIMENTO
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
              Especialistas renomados que estão transformando a medicina de precisão
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mx-auto">
            {speakers.slice(0, 4).map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative w-full"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-br from-[#2563eb]/30 via-[#3b82f6]/30 to-[#2563eb]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                
                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl h-full flex flex-col">
                  {/* Image */}
                  <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] aspect-[3/4]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/20 to-[#3b82f6]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0f1a]/80 to-transparent pointer-events-none" />
                  </div>
                  
                  {/* Info Container */}
                  <div className="p-6 flex-1 flex flex-col">

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                      {speaker.name}
                    </h3>
                    
                    <div className="w-12 h-1 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] rounded-full mb-3" />
                    
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                      {speaker.title}
                    </p>
                    
                    <p className="text-sm text-gray-300 mt-auto mb-4">
                      {speaker.specialty}
                    </p>

                    {/* Ver Bio Button - Personalizado */}
                    <button
                      onClick={() => setSelectedSpeaker(index)}
                      className="w-full py-3 px-4 bg-gradient-to-r from-[#2563eb]/20 to-[#3b82f6]/20 hover:from-[#2563eb]/30 hover:to-[#3b82f6]/30 border border-[#2563eb]/30 hover:border-[#2563eb]/50 rounded-xl transition-all group/btn flex items-center justify-center gap-2"
                    >
                      <span className="text-sm font-semibold text-white">
                        Conheça melhor {speaker.gender === 'f' ? 'a' : 'o'} {speaker.name.split(' ')[speaker.name.startsWith('Dra.') || speaker.name.startsWith('Dr.') ? 1 : 0]}
                      </span>
                      <svg className="w-4 h-4 text-[#3b82f6] group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                  </div>

                  {/* Decorative icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Mic2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Segunda linha - 3 cards centralizados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mt-6 md:mt-8">
            {speakers.slice(4, 7).map((speaker, idx) => {
              const index = idx + 4;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative w-full"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-[#2563eb]/30 via-[#3b82f6]/30 to-[#2563eb]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  
                  <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl h-full flex flex-col">
                    {/* Image */}
                    <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] aspect-[3/4]">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/20 to-[#3b82f6]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0f1a]/80 to-transparent pointer-events-none" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col min-h-[140px]">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                        {speaker.name}
                      </h3>
                      
                      <div className="w-12 h-1 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] rounded-full mb-3" />
                      
                      <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                        {speaker.title}
                      </p>
                      
                      <p className="text-sm text-gray-300 mt-auto mb-4">
                        {speaker.specialty}
                      </p>

                      {/* Ver Bio Button - Personalizado */}
                      <button
                        onClick={() => setSelectedSpeaker(index)}
                        className="w-full py-3 px-4 bg-gradient-to-r from-[#2563eb]/20 to-[#3b82f6]/20 hover:from-[#2563eb]/30 hover:to-[#3b82f6]/30 border border-[#2563eb]/30 hover:border-[#2563eb]/50 rounded-xl transition-all group/btn flex items-center justify-center gap-2"
                      >
                        <span className="text-sm font-semibold text-white">
                          Conheça melhor {speaker.gender === 'f' ? 'a' : 'o'} {speaker.name.split(' ')[speaker.name.startsWith('Dra.') || speaker.name.startsWith('Dr.') ? 1 : 0]}
                        </span>
                        <svg className="w-4 h-4 text-[#3b82f6] group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                  </div>

                  {/* Decorative icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Mic2 className="w-4 h-4 text-white" />
                  </div>
                </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Melhorado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 md:mt-16"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/20 to-[#3b82f6]/20 blur-2xl" />
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl rounded-2xl p-8 md:p-10 border border-white/10 max-w-4xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Aprenda Diretamente com os Melhores
                </h3>
                <p className="text-gray-300 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                  Conheça em primeira mão as estratégias, técnicas e insights que estão revolucionando a medicina de precisão no Brasil
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="#register"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:shadow-xl hover:shadow-[#2563eb]/30 rounded-xl transition-all text-white font-bold text-lg"
                  >
                    <span>Garantir Minha Vaga</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <p className="text-sm text-gray-400">
                    <span className="text-[#fbbf24] font-semibold">Vagas Limitadas</span> • Inscrições Abertas
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {selectedSpeaker !== null && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSpeaker(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] rounded-2xl md:rounded-3xl p-8 md:p-12 max-w-3xl w-full border border-white/20 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <span className="text-white text-2xl leading-none">&times;</span>
            </button>

            {/* Speaker Image */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-gradient-to-br from-[#2563eb]/20 to-[#3b82f6]/20 flex-shrink-0 mx-auto md:mx-0">
                <img 
                  src={speakers[selectedSpeaker].image} 
                  alt={speakers[selectedSpeaker].name}
                  className="w-full h-full object-contain p-6"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {speakers[selectedSpeaker].name}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] rounded-full mb-4 mx-auto md:mx-0" />
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                  {speakers[selectedSpeaker].title}
                </p>
                <p className="text-base text-[#3b82f6] font-medium">
                  {speakers[selectedSpeaker].specialty}
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-[#2563eb] to-[#3b82f6] rounded-full flex-shrink-0 mt-1" />
                <h4 className="text-lg font-semibold text-white">Sobre</h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg whitespace-pre-line text-justify">
                {speakers[selectedSpeaker].bio}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

