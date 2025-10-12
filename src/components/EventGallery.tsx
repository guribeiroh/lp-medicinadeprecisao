import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function EventGallery() {
  const galleryImages = [
    {
      label: "Evento Anterior",
      description: "Momentos de networking e aprendizado"
    },
    {
      label: "Espaço Premium",
      description: "Ambiente moderno e confortável"
    },
    {
      label: "Experiência Completa",
      description: "Coffee breaks e confraternização"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0f1a] to-[#0d1219] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#2563eb]/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563eb]/10 text-[#3b82f6] rounded-full border border-[#2563eb]/20 backdrop-blur-sm mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">Galeria</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              CONFIRA O EVENTO
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Uma experiência única de aprendizado e networking
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Gradient border on hover - padrão Testimonials */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                
                <div className="relative">
                  <div className="aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all group-hover:shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity" />
                          <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-white/80 group-hover:text-white transition-colors">{item.label}</p>
                          <p className="text-xs text-white/50 group-hover:text-white/60 transition-colors">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="text-white mb-1 transition-colors">{item.label}</h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{item.description}</p>
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
