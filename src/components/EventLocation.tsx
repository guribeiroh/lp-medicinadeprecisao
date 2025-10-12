import { motion } from "motion/react"
import { MapPin, Navigation, Building, ExternalLink } from "lucide-react"

export function EventLocation() {
  const address = {
    street: "Av. Sagitário, 138 - Loja 72 1° andar",
    neighborhood: "Alphaville Conde II",
    city: "Barueri - SP",
    cep: "06473-073",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Sagitário,+138+-+Alphaville+Conde+II,+Barueri+-+SP",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0977540168817!2d-46.85594532377471!3d-23.508637178789154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03c0e3b07d4f%3A0x7e6e24d5e2b3f8e!2sAv.%20Sagit%C3%A1rio%2C%20138%20-%20Alphaville%20Conde%20II%2C%20Barueri%20-%20SP%2C%2006473-073!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a0f1a] to-[#0d1219] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#f59e0b]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#2563eb]/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f59e0b]/10 text-[#fbbf24] rounded-full border border-[#f59e0b]/20 backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Localização</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight px-4">
              ONDE ACONTECE
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
              Um espaço premium no coração de <span className="text-[#f59e0b] font-semibold">Alphaville</span>
            </p>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f59e0b]/20 via-[#2563eb]/20 to-[#3b82f6]/20 rounded-2xl md:rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-white/10 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                {/* Left Side - Address Info */}
                <div className="space-y-6 md:space-y-8">
                  {/* Main Address */}
                  <div className="flex gap-4 md:gap-5">
                    <div className="flex-shrink-0">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] rounded-xl blur-xl opacity-40" />
                        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] rounded-xl flex items-center justify-center shadow-lg">
                          <Building className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm md:text-base text-gray-400 mb-2 uppercase tracking-wider font-medium">
                        Endereço do Evento
                      </h3>
                      <div className="space-y-1.5">
                        <p className="text-lg md:text-xl lg:text-2xl text-white font-bold leading-tight">
                          {address.street}
                        </p>
                        <p className="text-base md:text-lg text-gray-300">
                          {address.neighborhood}
                        </p>
                        <p className="text-base md:text-lg text-gray-300">
                          {address.city}
                        </p>
                        <p className="text-sm md:text-base text-gray-400 font-mono">
                          CEP: {address.cep}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <div className="bg-[#0d1219] px-4">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#fbbf24]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#10b981] flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-gray-300">Estacionamento no local</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#10b981] flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-gray-300">Fácil acesso</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#10b981] flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-gray-300">Ambiente climatizado</span>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="pt-4">
                    <a
                      href={address.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#ea580c] hover:to-[#f59e0b] text-white text-sm md:text-base font-semibold rounded-full shadow-xl shadow-[#f59e0b]/30 transition-all duration-300 hover:shadow-[#f59e0b]/50 hover:scale-105 w-full sm:w-auto"
                    >
                      <Navigation className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-45 transition-transform duration-300" />
                      <span>Ver no Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Side - Map */}
                <div className="relative lg:order-last order-first">
                  <div className="relative h-[300px] md:h-[400px] lg:h-full lg:min-h-[450px] rounded-xl md:rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                    <iframe
                      src={address.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                      title="Localização do Evento - Medicina de Precisão"
                    />
                    {/* Overlay gradient for style */}
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-xl md:rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

