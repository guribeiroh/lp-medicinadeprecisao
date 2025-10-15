"use client"
import { Button } from "./ui/button"
import { motion } from "motion/react"
import { 
  Sparkles, 
  ArrowRight, 
  Building2, 
  Heart, 
  Microscope, 
  TrendingUp, 
  Rocket, 
  Brain 
} from "lucide-react"

interface WhatIsProps {
  onCTAClick: () => void
}

export function WhatIs({ onCTAClick }: WhatIsProps) {
  const benefits = [
    {
      title: "Estruturar seu consultório com visão de empresa",
      description: "Transformar atendimento em experiência e fidelização",
      icon: Building2,
    },
    {
      title: "Criar protocolos de emagrecimento e vitalidade",
      description: "Resultados clínicos que destacam sua conduta e aumentam o valor percebido",
      icon: Heart,
    },
    {
      title: "Dominar novos protocolos clínicos",
      description: "Laser, tecnologias avançadas e uso preciso da cannabis medicinal",
      icon: Microscope,
    },
    {
      title: "Precificar e comunicar seu valor",
      description: "Conquistar reconhecimento e faturamento previsível com segurança",
      icon: TrendingUp,
    },
    {
      title: "Escalar seu consultório",
      description: "Sem depender de plantões ou planos de saúde",
      icon: Rocket,
    },
    {
      title: "Desenvolver mentalidade de crescimento",
      description: "Gestão e liberdade, sendo dono da própria carreira",
      icon: Brain,
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#2563eb]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#3b82f6]/5 to-transparent rounded-full blur-3xl" />

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
              <span className="text-sm font-medium">Sobre o Evento</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight px-4">
              O QUE É O MEDICINA DE PRECISÃO
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
              O evento que une <span className="text-[#3b82f6] font-semibold">excelência clínica</span>,
              <span className="text-[#0ea5e9] font-semibold">gestão inteligente</span> e
              <span className="text-[#f59e0b] font-semibold"> liberdade profissional</span>.
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 md:mb-16"
          >
            <p className="text-base md:text-lg lg:text-xl text-center text-gray-300 leading-relaxed max-w-5xl mx-auto px-4">
              Durante <span className="text-white font-semibold">dois dias de imersão presencial</span>, você vai
              receber um mapa real e preciso para aplicar imediatamente no seu consultório e crescer com estrutura,
              previsibilidade e propósito. Tudo isso{" "}
              <span className="text-[#3b82f6] font-semibold">sem abandonar o que ama</span>, sem depender de plantões e
              sem viver no improviso.
            </p>
          </motion.div>

          {/* Main Benefits Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 md:mb-16"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2563eb]/20 via-[#3b82f6]/20 to-[#0ea5e9]/20 rounded-2xl md:rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-white/10 shadow-2xl">
                {/* Title Section */}
                <div className="mb-8 md:mb-12 text-center">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2563eb]/20 to-[#3b82f6]/20 rounded-full border border-[#2563eb]/30 backdrop-blur-sm mb-6">
                    <Sparkles className="w-4 h-4 text-[#3b82f6]" />
                    <span className="text-sm font-medium text-[#3b82f6]">O Que Você Vai Aprender</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                    <span className="text-white">No </span>
                    <span className="bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent">
                      Medicina de Precisão
                    </span>
                    <span className="text-white">, você vai aprender,</span>
                    <br className="hidden sm:block" />
                    <span className="text-white"> na prática, como:</span>
                  </h3>
                  
                  {/* Decorative line */}
                  <div className="flex items-center justify-center gap-3 mt-6">
                    <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#2563eb]/50 rounded-full" />
                    <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#2563eb] to-[#3b82f6]" />
                    <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#2563eb]/50 rounded-full" />
                  </div>
                </div>

                {/* Benefits Grid - Quadrantes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="group relative h-full"
                      >
                        {/* Hover gradient border */}
                        <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />

                        <div className="relative flex flex-col h-full p-5 md:p-7 bg-white/[0.05] backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl">
                          {/* Icon */}
                          <div className="mb-4 md:mb-5">
                            <div className="relative inline-block">
                              <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
                              <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 flex flex-col">
                            <h4 className="text-lg md:text-xl text-white font-bold mb-2.5 md:mb-3 leading-tight group-hover:text-[#3b82f6] transition-colors">
                              {benefit.title}
                            </h4>
                            <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center px-4"
          >
            <a 
              href="https://form.spotform.com.br/medicina-de-precisao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="group h-12 md:h-14 px-6 md:px-8 w-full sm:w-auto bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#0ea5e9] hover:from-[#1d4ed8] hover:via-[#2563eb] hover:to-[#0284c7] text-white text-sm md:text-base font-semibold rounded-full shadow-2xl shadow-[#2563eb]/20 transition-all duration-300 hover:shadow-[#2563eb]/40 hover:scale-[1.02]"
              >
                <span className="flex items-center justify-center gap-2">
                  QUERO PARTICIPAR DO EVENTO
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
