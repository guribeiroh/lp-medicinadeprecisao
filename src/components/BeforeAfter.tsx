"use client"
import { motion } from "motion/react"
import { TrendingUp, X, Check, ArrowRight, Zap } from "lucide-react"
import Image from "next/image"

export function BeforeAfter() {
  const chartData = [
    { month: "Junho", value: 8, label: "R$ 8 mil" },
    { month: "Julho", value: 15, label: "R$ 15 mil" },
    { month: "Agosto", value: 22, label: "R$ 22 mil", isStart: true },
    { month: "Setembro", value: 68, label: "R$ 68 mil" },
    { month: "Outubro", value: 100, label: "R$ 100 mil (Meta)", isMeta: true }
  ]
  
  const maxValue = 100
  const before = {
    title: "ANTES",
    subtitle: "Consultório sem direção",
    items: [
      "Agenda desorganizada e imprevisível",
      "Sem protocolos definidos",
      "Dependência total de plantões",
      "Sobrecarga e sem tempo livre"
    ]
  }

  const after = {
    title: "DEPOIS",
    subtitle: "Com Medicina de Precisão",
    items: [
      "Agenda estratégica e previsível",
      "Protocolos exclusivos implementados",
      "Consultório como principal fonte de renda"
    ]
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#0d1219] to-[#0a0f1a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#f59e0b]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#2563eb]/10 to-transparent rounded-full blur-3xl" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f59e0b]/10 text-[#fbbf24] rounded-full border border-[#f59e0b]/20 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Resultado Real</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
              A TRANSFORMAÇÃO É REAL
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Veja o que aconteceu com uma clínica que aplicou o método em 2 meses{" "}
              <span className="text-[#f59e0b] font-semibold">Medicina de Precisão</span>
            </p>
          </motion.div>

          {/* Removed Comparison Text Block */}
          
          {/* Before/After Cards */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 relative">
            {/* ANTES */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group h-full md:flex-1"
            >
              
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-red-500/20 h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/20 text-red-400 rounded-full border border-red-500/30 mb-3">
                    <X className="w-4 h-4" />
                    <span className="text-sm font-semibold">{before.title}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{before.subtitle}</h3>
                </div>
                <p className="text-lg md:text-xl font-bold text-[#f59e0b] mb-4">De R$ 15 mil/mês</p>
                
                <div className="md:flex md:items-start md:gap-6">
                  <Image src="/Antes.png" alt={before.title} width={120} height={120} quality={75} loading="lazy" className="max-w-[120px] mx-auto rounded-lg mb-6 md:mb-0 md:flex-shrink-0" />
                  <div className="space-y-3 md:flex-grow">
                    {before.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* DEPOIS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group h-full md:flex-1"
            >
              
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#10b981]/20 h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#10b981]/20 text-[#10b981] rounded-full border border-[#10b981]/30 mb-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-semibold">{after.title}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{after.subtitle}</h3>
                </div>
                <p className="text-lg md:text-xl font-bold text-[#10b981] mb-4">Para R$ 67 mil/mês</p>
                
                <div className="md:flex md:items-start md:gap-6">
                  <Image src="/Depois.png" alt={after.title} width={120} height={120} quality={75} loading="lazy" className="max-w-[120px] mx-auto rounded-lg mb-6 md:mb-0 md:flex-shrink-0" />
                  <div className="space-y-3 md:flex-grow">
                    {after.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Evolution Chart */}
          {/* Removed by user request */}

          {/* Stats */}
          {/* Removed by user request */}

          <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto mt-4 text-center">
            Esse era o cenário de um consultório numa cidade do interior de Minas Gerais, com menos de 80 mil habitantes.
          </p>
        </div>
      </div>
    </section>
  )
}

