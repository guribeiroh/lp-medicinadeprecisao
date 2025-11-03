import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Silas",
      quote: "Descobri que liberdade na medicina não é trabalhar menos, é trabalhar com direção. E com direção aumentei o meu faturamento, e programando a expansão para um instituto.",
      rating: 5,
      image: "/Dr. Silas.jpg"
    },
    {
      name: "Dra. Daniely",
      quote: "Tripliquei o meu faturamento, abandonei todos os plantões e hoje foco na expansão do consultório.",
      rating: 5,
      image: "/Dr. Dani.png"
    },
    {
      name: "Dr. Filipi",
      quote: "Ajustei diversas etapas dentro do consultório, focando em ter um maior LTV com os meus pacientes. E hoje já estou programando a expansão de consultório para Clínica.",
      rating: 5,
      image: "/Dr; Filipi.png"
    },
    {
      name: "Dra. Camila Callegari",
      quote: "Estou conseguindo organizar a agenda, abrindo novos horários no consultório e reduzindo alguns plantões para ter mais disponibilidade por aqui. A demanda aumentou muito!",
      rating: 5,
      image: "/Camila.png"
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationFrameId: number;
    let scrollAmount = 0;

    const animateScroll = () => {
      scrollAmount += 0.5; // Adjust scroll speed here
      if (scrollAmount >= scrollElement.scrollWidth / 2) {
        scrollAmount = 0; // Reset scroll position to create infinite loop
      }
      scrollElement.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#0a0f1a] relative overflow-hidden">
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

          <div 
            className="flex overflow-x-scroll gap-6 md:gap-8 pb-4"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none' /* IE and Edge */ }}
            ref={scrollRef}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group relative flex-none w-[300px] sm:w-[350px]"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f59e0b]/30 via-[#2563eb]/30 to-[#3b82f6]/30 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                
                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all group-hover:shadow-2xl h-full flex flex-col">
                  {/* Profile Image */}
                  <div className="flex items-start mb-6">
                    <div className="relative w-16 h-16 md:w-20 md:h-20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        quality={75}
                        loading="lazy"
                        sizes="80px"
                        className="w-full h-full object-cover rounded-xl border-2 border-[#f59e0b]/30 group-hover:border-[#f59e0b]/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="flex-1 mb-6">
                    <p className="text-lg text-gray-200 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>

                  {/* Stars & Name */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i}
                          className="w-5 h-5 text-[#fbbf24] fill-[#fbbf24]" 
                        />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-[#3b82f6]">{testimonial.name}</p>
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
