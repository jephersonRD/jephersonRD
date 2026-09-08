import { motion } from 'motion/react'
import { Code2, Server, Wrench, Gamepad2 } from 'lucide-react'
import { Navbar } from './Navbar'
import { HeroBadge } from './HeroBadge'
import { BottomLeftCard } from './BottomLeftCard'
import { BottomRightCorner } from './BottomRightCorner'
import fondo from '../assets/image/fondo.jpeg'

const SKILLS = [
  { icon: Code2, label: 'Frontend' },
  { icon: Server, label: 'Backend' },
  { icon: Wrench, label: 'Herramientas' },
  { icon: Gamepad2, label: 'Game Dev' },
]

export function Hero() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">
        <img
          src={fondo}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        <div className="relative z-10 w-full h-full flex flex-col items-center">
          <Navbar />

          <div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl">
            <HeroBadge />

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-white mb-2 tracking-tight leading-[1.05]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              jephMD
            </motion.h1>

            <motion.div
              className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer">
                    <skill.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm font-normal text-white/80">
                    {skill.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <BottomLeftCard />
          <BottomRightCorner />
        </div>
      </section>
    </div>
  )
}
