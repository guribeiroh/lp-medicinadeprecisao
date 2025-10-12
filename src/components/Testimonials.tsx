import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Descobri que liberdade na medicina não é trabalhar menos, é trabalhar com direção.",
      rating: 5
    },
    {
      quote: "Tripliquei meu faturamento e voltei a amar atender.",
      rating: 5
    },
    {
      quote: "Parei de sobreviver e comecei a crescer.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#2563eb]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#3b82f6]/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f59e0b]/10 text-[#fbbf24] rounded-full border border-[#f59e0b]/20 backdrop-blur-sm">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Depoimentos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight px-4">
              A TRANSFORMAÇÃO REAL
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-3 md:mb-4 px-4">
              O que acontece quando o médico decide ser preciso na própria vida?
            </p>
            <p className="text-sm md:text-base text-gray-500 px-4">
              Depoimentos reais de médicos que passaram por essa virada
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                
                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity" />
                    <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Quote className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="flex-1 mb-6">
                    <p className="text-lg text-gray-200 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i}
                        className="w-5 h-5 text-[#fbbf24] fill-[#fbbf24]" 
                      />
                    ))}
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
