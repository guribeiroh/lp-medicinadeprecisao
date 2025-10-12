import { motion } from "motion/react"
import { AlertTriangle } from "lucide-react"

export function PainPoints() {
  const problems = [
    "Plantões intermináveis",
    "Consultórios desorganizados",
    "Faturamento sem crescimento",
    "A sensação de que você trabalha muito, mas colhe pouco",
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a0f1a] via-[#0d1219] to-[#0a0f1a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-full border border-red-500/20 backdrop-blur-sm">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">A Realidade</span>
            </div>

            <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Na emergência e no plantão você é{" "}
                <span className="text-white font-semibold">rápido, preciso e confiante.</span>
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Mas, quando o assunto é o seu consultório… surge a dúvida, a sobrecarga e o medo de estagnar.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Você estudou por anos para dominar a medicina, mas{" "}
                <span className="text-white font-semibold">ninguém te ensinou a dominar a empresa</span> que existe por
                trás do seu jaleco.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl blur-2xl" />
            <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-white/5">
              <div className="flex items-start gap-3 md:gap-5 mb-6 md:mb-8">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20">
                  <AlertTriangle className="w-6 h-6 md:w-7 md:h-7 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">O resultado?</h3>
                  <p className="text-sm md:text-base text-gray-400">Um ciclo que precisa ser quebrado</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />

                    <div className="relative flex items-center gap-2.5 md:gap-3 p-4 md:p-5 bg-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" />
                      <span className="text-sm md:text-base text-gray-300 group-hover:text-gray-200 font-medium transition-colors">
                        {problem}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 md:mt-16"
          >
            <div className="inline-block px-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/10 to-[#3b82f6]/10 blur-3xl" />
                <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white px-4 md:px-8 py-3 md:py-4 leading-tight">
                  O <span className="gradient-text">Medicina de Precisão</span> nasceu para mudar esse cenário, com{" "}
                  <span className="text-[#3b82f6]">método, clareza e direção.</span>
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
