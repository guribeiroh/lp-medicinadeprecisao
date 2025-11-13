"use client"

import { motion } from "motion/react"
import { Users, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import { useURLParams } from "@/hooks/useURLParams"

export function VacancyProgress() {
  const { getURLWithParams } = useURLParams()
  const [percentage, setPercentage] = useState(28)

  useEffect(() => {
    // Data de início (13 de outubro de 2025)
    const startDate = new Date('2025-10-13')
    // Data limite com poucos ingressos restantes (16 de novembro de 2025)
    const endDate = new Date('2025-11-16')
    // Data de esgotamento (17 de novembro de 2025)
    const soldOutDate = new Date('2025-11-17')
    // Data atual
    const today = new Date()

    // Zera as horas para comparação apenas de dias
    startDate.setHours(0, 0, 0, 0)
    endDate.setHours(0, 0, 0, 0)
    soldOutDate.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)

    // Se já passou do dia 17 de novembro, marca como esgotado (100%)
    if (today >= soldOutDate) {
      setPercentage(100)
      return
    }

    // Se chegou no dia 16 de novembro, mantém em 90% (5 ingressos restantes)
    if (today >= endDate) {
      setPercentage(90)
      return
    }

    // Se ainda não chegou no dia de início, mantém em 28% (14 ingressos preenchidos)
    if (today < startDate) {
      setPercentage(28)
      return
    }

    // Calcula o total de dias entre início e fim
    const totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

    // Calcula quantos dias se passaram desde o início
    const daysPassed = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

    // Calcula a porcentagem (de 28% a 90%)
    const progressRange = 90 - 28 // 62% de variação
    const dailyIncrease = progressRange / totalDays
    const currentPercentage = 28 + (dailyIncrease * daysPassed)

    setPercentage(Math.min(Math.round(currentPercentage), 90))
  }, [])

  const vacanciesFilled = Math.round((percentage / 100) * 50)
  const vacanciesRemaining = 50 - vacanciesFilled

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-[#0a0f1a] via-[#1a1f2e] to-[#0a0f1a] border-b border-[#2563eb]/20 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            {/* Info Text */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#f59e0b] to-[#ea580c] rounded-full">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs sm:text-sm font-bold text-white">
                  {percentage === 100 ? 'Ingressos Esgotados!' : `${percentage}% dos ingressos preenchidos`}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-400">
                  {percentage === 100 ? (
                    <span className="text-red-400 font-semibold">Todas as vagas foram preenchidas</span>
                  ) : (
                    <>Restam apenas <span className="text-[#f59e0b] font-semibold">{vacanciesRemaining} ingressos</span></>
                  )}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="flex-1 w-full sm:w-auto">
              <div className="relative h-3 sm:h-4 bg-white/5 rounded-full overflow-hidden border border-white/10">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-30" 
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(255,255,255,0.03) 10px,
                      rgba(255,255,255,0.03) 20px
                    )`
                  }}
                />
                
                {/* Progress fill */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#f59e0b] via-[#fb923c] to-[#ea580c] rounded-full shadow-lg shadow-[#f59e0b]/50"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </motion.div>

                {/* Percentage text inside bar */}
                {percentage >= 20 && (
                  <div className="absolute inset-0 flex items-center justify-end pr-3">
                    <span className="text-[10px] sm:text-xs font-bold text-white drop-shadow-lg">
                      {percentage}%
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            {percentage === 100 ? (
              <div className="hidden sm:block flex-shrink-0">
                <motion.button
                  disabled
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-gray-300 text-xs sm:text-sm font-semibold rounded-full shadow-lg cursor-not-allowed opacity-60"
                >
                  <Users className="w-4 h-4" />
                  ESGOTADO
                </motion.button>
              </div>
            ) : (
              <a
                href={getURLWithParams("https://form.spotform.com.br/medicina-de-precisao")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block flex-shrink-0"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg shadow-[#2563eb]/30 transition-all"
                >
                  <Users className="w-4 h-4" />
                  GARANTIR SUA VAGA
                </motion.button>
              </a>
            )}
          </div>

          {/* Mobile CTA */}
          {percentage === 100 ? (
            <div className="sm:hidden block mt-3 w-full">
              <motion.button
                disabled
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-600 text-gray-300 text-sm font-semibold rounded-full shadow-lg cursor-not-allowed opacity-60"
              >
                <Users className="w-4 h-4" />
                ESGOTADO
              </motion.button>
            </div>
          ) : (
            <a
              href={getURLWithParams("https://form.spotform.com.br/medicina-de-precisao")}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden block mt-3 w-full"
            >
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white text-sm font-semibold rounded-full shadow-lg"
              >
                <Users className="w-4 h-4" />
                GARANTIR SUA VAGA
              </motion.button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

