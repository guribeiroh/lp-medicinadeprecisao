"use client"

import { motion } from "motion/react"
import { CheckCircle, Calendar, MapPin, Clock, Users, Phone, Download } from "lucide-react"
import { Button } from "../../components/ui/button"

export default function ThankYouPage() {
  const eventDetails = {
    name: "Medicina de Precisão",
    date: "20 e 21 de Novembro de 2025",
    time: "8h às 18h",
    location: "Av. Sagitário, 138 - Loja 72 1° andar",
    neighborhood: "Alphaville Conde II, Barueri - SP",
    cep: "06473-073",
    whatsappSupport: "5537999744337", // +55 37 9997-4337
  }

  const addToCalendar = () => {
    // Formato Google Calendar
    const startDate = "20251120T080000"
    const endDate = "20251121T180000"
    const title = encodeURIComponent("Medicina de Precisão - Imersão")
    const details = encodeURIComponent("Evento Medicina de Precisão - Transforme sua carreira médica")
    const location = encodeURIComponent("Av. Sagitário, 138 - Alphaville Conde II, Barueri - SP")
    
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}&sf=true&output=xml`
    
    window.open(googleCalendarUrl, '_blank')
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Acabei de confirmar meu ingresso para o Medicina de Precisão e preciso de suporte.")
    window.open(`https://wa.me/${eventDetails.whatsappSupport}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1a] via-[#0d1219] to-[#0a0f1a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#2563eb]/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#10b981]/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center shadow-2xl">
                <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={2} />
              </div>
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-6 md:mb-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Ingresso Confirmado!
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-2">
              Parabéns! Você garantiu sua vaga no
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent">
              Medicina de Precisão
            </p>
          </motion.div>

          {/* Action Buttons - Moved to top for visibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8"
          >
            {/* Add to Calendar */}
            <Button
              onClick={addToCalendar}
              className="group relative h-12 md:h-14 px-5 md:px-6 bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#0ea5e9] hover:from-[#1d4ed8] hover:via-[#2563eb] hover:to-[#0284c7] text-white font-semibold rounded-full shadow-xl shadow-[#2563eb]/30 transition-all duration-300 hover:shadow-[#2563eb]/50 hover:scale-105 border-0"
            >
              <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform" />
              Adicionar à Agenda
              <Download className="w-3.5 h-3.5 md:w-4 md:h-4 ml-2" />
            </Button>

            {/* WhatsApp Support */}
            <Button
              onClick={openWhatsApp}
              className="group relative h-12 md:h-14 px-5 md:px-6 bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-semibold rounded-full shadow-xl shadow-[#10b981]/30 transition-all duration-300 hover:shadow-[#10b981]/50 hover:scale-105 border-0"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Suporte WhatsApp
            </Button>
          </motion.div>

          {/* Event Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 md:mb-8"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#10b981]/20 via-[#2563eb]/20 to-[#3b82f6]/20 rounded-3xl blur-2xl opacity-50" />
              
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 border border-white/10 shadow-2xl">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
                  Detalhes do Evento
                </h2>

                <div className="space-y-4 md:space-y-5">
                  {/* Date */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl blur-lg opacity-40" />
                        <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg">
                          <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mb-1">Data</p>
                      <p className="text-base md:text-lg text-white font-semibold">{eventDetails.date}</p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl blur-lg opacity-40" />
                        <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg">
                          <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mb-1">Horário</p>
                      <p className="text-base md:text-lg text-white font-semibold">{eventDetails.time}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl blur-lg opacity-40" />
                        <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg">
                          <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mb-1">Local</p>
                      <p className="text-base md:text-lg text-white font-semibold">{eventDetails.location}</p>
                      <p className="text-sm md:text-base text-gray-300">{eventDetails.neighborhood}</p>
                      <p className="text-xs md:text-sm text-gray-400 font-mono">CEP: {eventDetails.cep}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3 text-[#10b981]">
                      <Users className="w-4 h-4 md:w-5 md:h-5" />
                      <p className="text-sm md:text-base font-semibold">
                        Evento exclusivo para 50 médicos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Important Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
          >
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">📋 Informações Importantes</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2 flex-shrink-0" />
                <span>Você receberá um e-mail com a confirmação e mais detalhes em breve</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2 flex-shrink-0" />
                <span>Chegue com 30 minutos de antecedência para o credenciamento</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2 flex-shrink-0" />
                <span>Traga um documento com foto para apresentação</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2 flex-shrink-0" />
                <span>Estacionamento disponível no local</span>
              </li>
            </ul>
          </motion.div>

          {/* Footer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-sm md:text-base">
              Nos vemos em breve! 🚀
            </p>
            <p className="text-[#3b82f6] font-semibold mt-2">
              Equipe Medicina de Precisão
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

