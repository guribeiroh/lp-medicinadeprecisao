import { motion } from "motion/react";
import { Award, Instagram, Star } from "lucide-react";

export function Founders() {
  const founders = [
    { 
      initial: 'A', 
      name: 'Arthur Melo e Marques',
      image: '/dr-arthur.jpg',
      title: 'CEO | Engenheiro',
      description: 'Fundador do Grupo AID e CEO do Grupo CONAES Brasil de Educação Médica. Pioneiro na integração entre engenharia e medicina, lidera a revolução da educação médica no país através de soluções inovadoras que equipam profissionais de saúde com competência, ética e humanidade.',
      instagram: 'https://www.instagram.com/arthurmelo__'
    },
    { 
      initial: 'J', 
      name: 'Dr. João Paulo Cristofolo',
      image: '/dr-joao.jpg',
      title: 'Médico | Fundador do Conaes Brasil',
      description: 'Médico, palestrante, fundador do Grupo CONAES Brasil e professor da Pós-Graduação em Medicina Endocanabinoide do CONAES Brasil. Integra neurociência e medicina para oferecer tratamentos personalizados, democratizando o acesso a terapias que promovem equilíbrio emocional e físico com ética e dedicação.',
      instagram: 'https://www.instagram.com/doutorjoao'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#0d1219] to-[#0a0f1a] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#2563eb]/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563eb]/10 text-[#3b82f6] rounded-full border border-[#2563eb]/20 backdrop-blur-sm">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Liderança</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight px-4">
              SOBRE OS FUNDADORES
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
              Idealizado por quem vive e respira a medicina real
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                
                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl">
                  {/* Avatar */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
                      <div className="relative">
                        <div className="w-36 h-36 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500 ring-4 ring-white/10">
                          {founder.image ? (
                            <img 
                              src={founder.image} 
                              alt={founder.name}
                              className="w-full h-full object-cover object-top"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1f2e]/80 to-[#0f1419]/80 backdrop-blur-sm">
                              <div className="text-center">
                                <svg className="w-14 h-14 text-white/30 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="text-xs text-white/20 font-medium">Foto</span>
                              </div>
                            </div>
                          )}
                        </div>
                        {/* Star badge */}
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-full flex items-center justify-center shadow-xl border-4 border-[#0a0f1a]">
                          <Star className="w-5 h-5 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{founder.name}</h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] rounded-full mx-auto mb-4" />
                    <p className="text-sm text-gray-400 uppercase tracking-wider">{founder.title}</p>
                  </div>

                  {/* Description */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-white/[0.01] rounded-xl blur-sm" />
                    <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
                      {founder.description ? (
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                          {founder.description}
                        </p>
                      ) : (
                        <p className="text-gray-400 italic">
                          [Informações sobre o {founder.name} serão adicionadas aqui]
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Social Link */}
                  <div className="flex justify-center">
                    <a 
                      href={founder.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:shadow-lg hover:shadow-[#2563eb]/30 rounded-xl transition-all text-white font-medium"
                    >
                      <Instagram className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm">Instagram</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
