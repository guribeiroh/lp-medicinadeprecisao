import { motion } from "motion/react"
import { MapPin, Navigation, Building, ExternalLink, Hotel, Car, PersonStanding } from "lucide-react"

export function EventLocation() {
  const address = {
    street: "Casa do Storytelling",
    neighborhood: "Alphaville Conde II",
    city: "Alphaville - SP",
    cep: "06473-073",
    mapUrl: "https://www.google.com/maps/place/Casa+do+Storytelling/@-23.5086372,-46.8559453,17z/data=!4m2!3m1!1s0x0:0xc99e1573dfc77cbf?sa=X&ved=1t:2428&ictx=111",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0977540168817!2d-46.8559453!3d-23.5086372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc99e1573dfc77cbf!2sCasa%20do%20Storytelling!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
  }

  // ✅ Distâncias calculadas com APIs gratuitas (OpenStreetMap + OSRM)
  // Atualizado automaticamente via: node scripts/update-hotel-distances.js
  
  const nearbyHotels = [
    {
      name: "Blue Tree Alphaville",
      address: "Av. Marcos Penteado de Ulhôa Rodrigues, 939",
      distanceDriving: "4 min (3.2 km)",
      distanceWalking: "38 min (3.2 km)",
      category: "4 estrelas",
      amenities: "Café da manhã incluso",
      mapUrl: "https://www.google.com/maps/dir/Blue%20Tree%20Alphaville%20Av.%20Marcos%20Penteado%20de%20Ulh%C3%B4a%20Rodrigues%2C%20939/Casa+do+Storytelling,+Alphaville"
    },
    {
      name: "Radisson Hotel Alphaville",
      address: "Alameda Rio Negro, 1030",
      distanceDriving: "4 min (3.2 km)",
      distanceWalking: "38 min (3.2 km)",
      category: "4 estrelas",
      amenities: "Opção business",
      mapUrl: "https://www.google.com/maps/dir/Radisson%20Hotel%20Alphaville%20Alameda%20Rio%20Negro%2C%201030/Casa+do+Storytelling,+Alphaville"
    },
    {
      name: "Comfort Suites Alphaville",
      address: "Alameda Rio Negro, 333",
      distanceDriving: "4 min (2.9 km)",
      distanceWalking: "35 min (2.9 km)",
      category: "4 estrelas",
      amenities: "Excelente custo-benefício",
      mapUrl: "https://www.google.com/maps/dir/Comfort%20Suites%20Alphaville%20Alameda%20Rio%20Negro%2C%20333/Casa+do+Storytelling,+Alphaville"
    },
    {
      name: "HB Hotels Sequoia Alphaville",
      address: "Alameda Madeira, 292",
      distanceDriving: "4 min (2.7 km)",
      distanceWalking: "32 min (2.7 km)",
      category: "4 estrelas",
      amenities: "Academia e restaurante no local",
      mapUrl: "https://www.google.com/maps/dir/HB%20Hotels%20Sequoia%20Alphaville%20Alameda%20Madeira%2C%20292/Casa+do+Storytelling,+Alphaville"
    }
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1219] relative overflow-hidden">
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
              ONDE IRÁ ACONTECER
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
              Conheça o espaço premium no coração de <span className="text-[#f59e0b] font-semibold">Alphaville</span>
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 md:mb-16 max-w-4xl mx-auto"
          >
            <div className="group relative">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              
              <div className="relative">
                <div className="aspect-video bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all group-hover:shadow-2xl">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/r1kLL13B9DU?controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&vq=hd1080"
                    title="Espaço do Evento"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-xl text-white mb-2">Espaço do Evento</h4>
                  <p className="text-base text-gray-400">Conheça onde acontecerá a imersão</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
                      <span className="text-sm md:text-base text-gray-300">Estacionamento pago no local</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#10b981] flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-gray-300">Fácil acesso</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#10b981] flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-gray-300">Ambiente climatizado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#f59e0b] flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-gray-300">Hotéis próximos disponíveis</span>
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
                  <div className="relative h-[300px] md:h-[400px] lg:h-full lg:min-h-[500px] rounded-xl md:rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-[#0d1219]">
                    <iframe
                      src={address.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0, display: 'block' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full"
                      title="Localização do Evento - Medicina de Precisão"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hotéis Próximos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16"
          >
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f59e0b]/10 text-[#fbbf24] rounded-full border border-[#f59e0b]/20 backdrop-blur-sm mb-4">
                <Hotel className="w-4 h-4" />
                <span className="text-sm font-medium">Hospedagem</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                Hotéis Próximos ao Evento
              </h3>
              <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                Opções de hospedagem perto do local do evento para sua comodidade
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {nearbyHotels.map((hotel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  className="group relative"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  
                  <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-5 md:p-6 border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl h-full flex flex-col">
                    {/* Hotel Icon */}
                    <div className="relative inline-block mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity" />
                      <div className="relative w-12 h-12 bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Hotel className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Hotel Info */}
                    <div className="flex-1 mb-4">
                      <h4 className="text-base md:text-lg font-bold text-white mb-2 leading-tight">
                        {hotel.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-400 mb-3">
                        📍 {hotel.address}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                          <Car className="w-4 h-4 text-[#3b82f6] flex-shrink-0" />
                          <span>{hotel.distanceDriving}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                          <PersonStanding className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                          <span>{hotel.distanceWalking}</span>
                        </div>
                        <p className="text-sm text-[#fbbf24] flex items-center gap-1">
                          ⭐ {hotel.category}
                        </p>
                        <p className="text-xs text-gray-400 pt-1">
                          ☕ {hotel.amenities}
                        </p>
                      </div>
                    </div>

                    {/* View Button */}
                    <a
                      href={hotel.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#f59e0b]/50 rounded-lg text-sm text-gray-300 hover:text-white transition-all group-hover:shadow-lg"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Ver no mapa</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6"
            >
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Car className="w-4 h-4 text-[#3b82f6]" />
                <span>De carro</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <PersonStanding className="w-4 h-4 text-[#10b981]" />
                <span>A pé</span>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6 text-center"
            >
              <p className="text-sm md:text-base text-gray-400">
                💡 <span className="text-gray-300">Dica:</span> Reserve sua hospedagem com antecedência para garantir as melhores tarifas
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

