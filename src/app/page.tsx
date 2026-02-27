"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Sparkles, 
  Brain, 
  Menu, 
  X, 
  ChevronRight, 
  Mail, 
  ArrowRight 
} from "lucide-react";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, easeOut: true } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md border-b border-neutral-100 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter">
            J&M<span className="text-neutral-400">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            <a href="#services" className="hover:text-neutral-500 transition-colors">Servicios</a>
            <a href="#about" className="hover:text-neutral-500 transition-colors">Nosotros</a>
            <a href="#contact" className="px-5 py-2.5 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition-colors">
              Contactar
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-neutral-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-2xl font-medium">
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contactar</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 border border-neutral-200 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>Innovación en IA</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
              Automatizando <br /> el Futuro de <br /> Tu Negocio.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              J&M Industry transforma operaciones complejas en sistemas autónomos eficientes. 
              Impulsa tu crecimiento con soluciones de Inteligencia Artificial a medida.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 pt-4">
              <a href="#contact" className="group inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white rounded-full font-medium transition-transform hover:scale-105">
                Empezar Ahora
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border border-neutral-200 rounded-full font-medium hover:bg-neutral-50 transition-colors">
                Ver Soluciones
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Abstract Decorative Element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 -z-10 opacity-5 pointer-events-none select-none">
           <svg width="800" height="800" viewBox="0 0 100 100" className="w-[200] h-[200]">
             <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
             <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
             <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
           </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-neutral-50 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Nuestras Soluciones</h2>
            <p className="text-neutral-600 max-w-xl text-lg">Tecnología de punta aplicada a problemas reales. Simplificamos lo complejo.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Bot className="w-8 h-8" />}
              title="Chatbots Inteligentes"
              description="Atención al cliente 24/7 con procesamiento de lenguaje natural que entiende y resuelve, no solo responde."
            />
            <ServiceCard 
              icon={<Sparkles className="w-8 h-8" />}
              title="Generación de Contenido"
              description="Sistemas automatizados para crear textos, imágenes y reportes de alta calidad a escala."
            />
            <ServiceCard 
              icon={<Brain className="w-8 h-8" />}
              title="Agentes Virtuales"
              description="Asistentes autónomos capaces de ejecutar tareas complejas, agendar citas y gestionar flujos de trabajo."
            />
          </div>
        </div>
      </section>

      {/* Philosophy / About Section */}
      <section id="about" className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-neutral-100 rounded-2xl overflow-hidden relative flex items-center justify-center p-8"
            >
              {/* Abstract visuals representing AI logic */}
              <div className="absolute inset-0 flex items-center justify-center text-neutral-200">
                <Brain className="w-32 h-32 md:w-48 md:h-48" strokeWidth={0.5} />
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Menos Fricción, <br />Más Resultados.</h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              En <strong className="text-neutral-900">J&M Industry</strong>, creemos que la tecnología debe ser invisible y potente. 
              No implementamos IA solo por tendencia, sino para eliminar cuellos de botella reales en tu operación.
              Nuestro enfoque minimalista se centra en la claridad, la velocidad y el retorno de inversión.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-4xl font-bold mb-2">98%</h4>
                <p className="text-sm text-neutral-500 uppercase tracking-wide">Precisión</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold mb-2">24/7</h4>
                <p className="text-sm text-neutral-500 uppercase tracking-wide">Disponibilidad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-neutral-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
          >
            ¿Listo para automatizar?
          </motion.h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-xl mx-auto">
            Hablemos sobre cómo podemos optimizar tu empresa hoy mismo. Agenda una consulta gratuita.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="mailto:jymindustry@jymindustry.com" className="w-full md:w-auto px-8 py-4 bg-white text-neutral-900 rounded-full font-medium hover:bg-neutral-100 transition-colors flex items-center justify-center text-base">
              <Mail className="mr-2 w-5 h-5" /> jymindustry@jymindustry.com
            </a>
            <button className="w-full md:w-auto px-8 py-4 border border-neutral-700 rounded-full font-medium hover:bg-neutral-800 transition-colors text-base">
              Agendar Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-neutral-100 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg font-bold tracking-tighter">
            J&M Industry, LLC
          </div>
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} J&M Industry. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors">Twitter</a>
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors">LinkedIn</a>
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="p-8 border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-colors bg-white group h-full flex flex-col"
    >
      <div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 text-neutral-900 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-600 leading-relaxed text-sm md:text-base grow">{description}</p>
      
      <div className="mt-6 pt-6 border-t border-neutral-100 flex items-center text-sm font-medium text-neutral-900">
        <span className="group-hover:mr-2 transition-all">Saber más</span>
        <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}
