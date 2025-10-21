import { motion } from "motion/react"
import { Sparkles } from "lucide-react"

export function Supporters() {
  const supporters = [
    {
      name: "Greenbook",
      logo: "/logo (2).jpg",
      alt: "Greenbook - Apoiador"
    },
    {
      name: "Agência AID",
      logo: "/logo (3).jpg",
      alt: "Agência AID - Marketing Médico - Apoiador"
    },
    {
      name: "CONAES",
      logo: "/logo (4).jpg",
      alt: "CONAES - Grupo CONAES Brasil - Apoiador"
    },
    {
      name: "UNIKKA PHARMA",
      logo: "/Logo Unikka branco.png",
      alt: "UNIKKA PHARMA - Apoiador"
    },
    {
      name: "ALMA LAB",
      logo: "/ALMA LAB.png",
      alt: "ALMA LAB - Apoiador"
    },
    {
      name: "MEV",
      logo: "/MEV.png",
      alt: "MEV - Apoiador"
    }
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#0d1219] to-[#0a0f1a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#f59e0b]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f59e0b]/10 text-[#fbbf24] rounded-full border border-[#f59e0b]/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Apoiadores</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Quem Está Conosco
            </h2>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              Empresas que acreditam na transformação da medicina
            </p>
          </motion.div>

          {/* Supporters Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {supporters.map((supporter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl h-full flex items-center justify-center aspect-square">
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    <img
                      src={supporter.logo}
                      alt={supporter.alt}
                      className={`w-full h-full object-contain ${supporter.name === "ALMA LAB" ? "bg-black" : ""} filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Optional: Add a call-to-action or additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 md:mt-16 text-center"
          >
            <p className="text-sm md:text-base text-gray-400">
              Juntos, <span className="text-[#f59e0b] font-semibold">elevando a medicina brasileira</span> a um novo patamar
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

