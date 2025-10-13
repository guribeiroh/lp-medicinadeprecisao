import { motion } from "motion/react";
import { Calendar, MapPin, Users, Coffee, Wine, Sparkles, Star, Clock, Building2, Award } from "lucide-react";

export function Experience() {
  const experienceItems = [
    {
      icon: Users,
      title: "Networking Exclusivo",
      description: "Conecte-se com 50 médicos seletos de diferentes especialidades"
    },
    {
      icon: Award,
      title: "Certificado de Participação",
      description: "Certificado oficial de 20 horas de conteúdo técnico e prático"
    },
    {
      icon: Clock,
      title: "+20h de Conteúdo",
      description: "Dois dias completos de aprendizado prático e aplicável"
    },
    {
      icon: Coffee,
      title: "Coffee Breaks Premium",
      description: "Manhã e tarde para recarregar e fazer conexões valiosas"
    },
    {
      icon: Wine,
      title: "Coquetel Exclusivo",
      description: "Noite do dia 20 para celebrar e criar parcerias"
    },
    {
      icon: Star,
      title: "Material Exclusivo",
      description: "Apostilas, templates e ferramentas para implementar"
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#2563eb]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#3b82f6]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563eb]/10 text-[#3b82f6] rounded-full border border-[#2563eb]/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Experiência Premium</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight px-4">
              EXPERIÊNCIA & AMBIENTE
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
              Dois dias de imersão em Alphaville, com propósito em cada detalhe
            </p>
          </motion.div>

          {/* Venue Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16"
          >
            <div className="group relative">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl text-center h-full">
                <div className="relative inline-block mb-4 md:mb-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity" />
                  <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">2 Dias Completos</h4>
                  <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors">20 e 21 de Novembro de 2025</p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl text-center h-full">
                <div className="relative inline-block mb-4 md:mb-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity" />
                  <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">Alphaville Premium</h4>
                  <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors">Alpha Square Mall, Alphaville/SP</p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl text-center h-full">
                <div className="relative inline-block mb-4 md:mb-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity" />
                  <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">50 Ingressos Exclusivos</h4>
                  <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors">Apenas médicos seletos</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 md:mb-16"
          >
            <div className="text-center mb-8 md:mb-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 px-4">
                O que está incluído na sua experiência
              </h3>
              <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
                Cada detalhe foi pensado para entregar conforto, aprendizado e propósito
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
              {/* Wrapper para centralizar o último item quando ímpar */}
              {experienceItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.05) }}
                    className={`group relative ${index === experienceItems.length - 1 && experienceItems.length % 2 !== 0 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full' : ''}`}
                  >
                    {/* Gradient border on hover - padrão Testimonials */}
                    <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                    
                    <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 md:p-7 border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl h-full flex flex-col">
                      {/* Icon */}
                      <div className="relative inline-block mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity" />
                        <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-base md:text-lg font-bold text-white mb-2 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/10 to-[#3b82f6]/10 rounded-2xl md:rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed text-center italic">
                Você não vai apenas assistir a um evento — <span className="text-[#3b82f6] font-semibold not-italic">vai viver uma imersão</span> que vai reacender o motivo pelo qual escolheu ser médico. Um espaço moderno, confortável e instagramável, preparado para receber apenas <span className="text-[#f59e0b] font-semibold not-italic">50 médicos seletos</span>, como você.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
