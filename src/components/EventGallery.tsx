import { motion } from "motion/react";

export function EventGallery() {
  const videoData = {
    label: "Espaço do Evento",
    description: "Conheça onde acontecerá a imersão",
    videoId: "r1kLL13B9DU"
  };

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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="group relative">
              {/* Gradient border on hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              
              <div className="relative">
                <div className="aspect-video bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all group-hover:shadow-2xl">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoData.videoId}`}
                    title={videoData.label}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-xl text-white mb-2 transition-colors">{videoData.label}</h4>
                  <p className="text-base text-gray-400 group-hover:text-gray-300 transition-colors">{videoData.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
