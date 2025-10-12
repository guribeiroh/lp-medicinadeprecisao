import { motion } from "motion/react";
import { Stethoscope } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#0a0f1a] text-white py-16 border-t border-white/10">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center space-y-8">
            {/* Logo/Brand */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <div className="w-8 h-8 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Medicina de Precisão</span>
              </div>
            </div>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="w-2 h-2 bg-[#2563eb] rounded-full" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* Main Text */}
            <div className="space-y-4">
              <p className="text-white/90 text-lg">
                Evento oficial do Ecossistema Médico do Brasil
              </p>
              <p className="text-white/60">
                Todos os direitos reservados © 2025 – Medicina de Precisão
              </p>
            </div>

            {/* Additional Info */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-white/50">
                20 e 21 de Novembro de 2025 • Alpha Square Mall, Barueri/SP
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
