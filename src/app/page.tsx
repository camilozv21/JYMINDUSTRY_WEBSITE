"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Sparkles, 
  Brain, 
  Menu, 
  X, 
  ChevronRight, 
  Mail, 
  ArrowRight,
  MessageSquare,
  BarChart,
  Clock,
  Target,
  Users,
  Smartphone,
  Building,
  Utensils,
  Briefcase,
  Cpu,
  Layers,
  Zap,
  CheckCircle,
  Globe
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
          <Link href="/">
            <img 
              src="https://df50lbm4qcrt6.cloudfront.net/JYM_INDUSTRY/jym_website_logo-removebg.png" 
              alt="J&M Industry Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>

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

      {/* Value Proposition Section */}
      <section className="py-24 bg-neutral-900 text-white px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:flex justify-between items-start gap-12"
          >
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                No creamos "chatbots". <br />
                <span className="text-neutral-400">Construimos sistemas conversacionales inteligentes.</span>
              </h2>
            </div>
            <div className="md:w-1/2 space-y-6 text-lg text-neutral-300">
              <p>
                En JYM Industry transformamos la atención al cliente en una máquina de ventas 24/7.
                Diseñamos e implementamos sistemas de automatización con IA entrenados con la 
                data real de tu negocio, integrados directamente a tus canales de comunicación.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Reducción de costos operativos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Aumento en velocidad de respuesta</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Atención personalizada, no genérica</span>
                </li>
              </ul>
            </div>
          </motion.div>
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

      {/* Process Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Nuestro Proceso</h2>
            <p className="text-neutral-600 text-lg">
              De la auditoría a un sistema operativo en tiempo record. 
              Implementamos en 48 horas como estándar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep 
              number="01" 
              title="Auditoría Estratégica" 
              description="Analizamos tu operación y base de conocimiento para estructurar un sistema RAG personalizado."
              icon={<Target className="w-6 h-6" />}
            />
            <ProcessStep 
              number="02" 
              title="Arquitectura" 
              description="Diseñamos la solución: reducción de tiempos, automatización de ventas y filtrado inteligente."
              icon={<Cpu className="w-6 h-6" />}
            />
            <ProcessStep 
              number="03" 
              title="Implementación" 
              description="Entrega del sistema funcional, integrado y listo para operar en menos de 48 horas."
              icon={<Zap className="w-6 h-6" />}
            />
            <ProcessStep 
              number="04" 
              title="Optimización" 
              description="Soporte 24/7 y ajustes estratégicos continuos basados en métricas reales."
              icon={<BarChart className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* Target Industries Section */}
      <section className="py-24 px-6 md:px-12 bg-neutral-50 border-y border-neutral-200">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Impulsamos Tu Industria</h2>
            <p className="text-neutral-600 text-lg max-w-2xl">
              Desarrollamos soluciones para empresas que gestionan alto volumen de clientes y necesitan automatizar sin perder calidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <IndustryCard icon={<Smartphone className="w-8 h-8" />} title="E-commerce" />
            <IndustryCard icon={<Building className="w-8 h-8" />} title="Inmobiliarias" />
            <IndustryCard icon={<Users className="w-8 h-8" />} title="Clínicas" />
            <IndustryCard icon={<Utensils className="w-8 h-8" />} title="Restaurantes" />
            <IndustryCard icon={<Briefcase className="w-8 h-8" />} title="Servicios" />
          </div>
          
          <div className="mt-12 text-center">
            <p className="inline-flex items-center text-neutral-500 font-medium">
              <MessageSquare className="w-5 h-5 mr-2" />
              Si recibes mensajes todos los días, podemos optimizarlos.
            </p>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-24 px-6 md:px-12 bg-neutral-900 text-white overflow-hidden relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-green-400 font-semibold tracking-wide uppercase text-sm mb-4 block">Caso de Éxito</span>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">TDCOM</h2>
                  <p className="text-neutral-400 text-xl leading-relaxed mb-8">
                    Implementamos un sistema conversacional inteligente que transformó su atención al cliente, logrando una eficiencia operativa sin precedentes.
                  </p>
                  
                  <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700 inline-block">
                    <div className="text-5xl font-bold text-white mb-2">40%</div>
                    <div className="text-neutral-400">Reducción en tiempos de respuesta</div>
                  </div>
               </motion.div>
            </div>
            <div className="w-full md:w-1/2 relative">
               <div className="aspect-video bg-neutral-800 rounded-2xl border border-neutral-700 p-8 flex flex-col justify-center items-center shadow-2xl">
                  <div className="w-full space-y-4">
                    {/* Mock chat bubbles */}
                    <div className="bg-neutral-700/50 p-4 rounded-2xl rounded-tl-none self-start w-3/4 animate-pulse">
                      <div className="h-2 w-1/2 bg-neutral-600 rounded mb-2"></div>
                      <div className="h-2 w-3/4 bg-neutral-600 rounded"></div>
                    </div>
                    <div className="bg-green-600/20 p-4 rounded-2xl rounded-tr-none self-end w-3/4 ml-auto border border-green-500/30">
                      <div className="h-2 w-2/3 bg-green-500/40 rounded mb-2"></div>
                      <div className="h-2 w-full bg-green-500/40 rounded"></div>
                    </div>
                  </div>
                  <p className="mt-8 text-sm text-neutral-500 font-mono">Automatización estratégica, no respuestas genéricas.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / About Section */}
      <section id="about" className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/2 sticky top-24">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Tecnología Invisible, <br /> Resultados Visibles.</h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed">
                En <strong className="text-neutral-900">JYM Industry</strong>, creemos que la mejor tecnología es la que no se nota. 
                Nuestros sistemas RAG (Retrieval-Augmented Generation) permiten que la IA responda con precisión basada en TU conocimiento, no en generalidades.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                 <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                    <Globe className="w-6 h-6 mb-2 text-neutral-900" />
                    <h4 className="font-bold mb-1">Multicanal</h4>
                    <p className="text-sm text-neutral-500">WhatsApp, Instagram, Messenger unificados.</p>
                 </div>
                 <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                    <Layers className="w-6 h-6 mb-2 text-neutral-900" />
                    <h4 className="font-bold mb-1">Integración CRM</h4>
                    <p className="text-sm text-neutral-500">Conectamos con tus sistemas internos reales.</p>
                 </div>
                 <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                    <Sparkles className="w-6 h-6 mb-2 text-neutral-900" />
                    <h4 className="font-bold mb-1">ElevenLabs</h4>
                    <p className="text-sm text-neutral-500">Voces hiperrealistas con control emocional.</p>
                 </div>
                 <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                    <Brain className="w-6 h-6 mb-2 text-neutral-900" />
                    <h4 className="font-bold mb-1">Análisis de Tono</h4>
                    <p className="text-sm text-neutral-500">Detección y manejo inteligente de usuarios.</p>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-linear-to-br from-neutral-100 to-white rounded-2xl overflow-hidden relative flex items-center justify-center border border-neutral-100 p-8"
            >
              {/* Abstract visuals representing AI logic */}
              <div className="absolute inset-0 flex items-center justify-center text-neutral-200">
                <Brain className="w-32 h-32 md:w-48 md:h-48 opacity-10" />
              </div>
              
              <div className="relative z-10 w-full max-w-sm space-y-4">
                 <div className="bg-white p-4 rounded-xl shadow-lg border border-neutral-100 flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-neutral-900">Entrenado con tu Data</div>
                      <div className="text-xs text-neutral-500">Base de conocimiento propia</div>
                    </div>
                 </div>
                 
                 <div className="bg-white p-4 rounded-xl shadow-lg border border-neutral-100 flex items-center gap-4 ml-8">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-neutral-900">48h Deployment</div>
                      <div className="text-xs text-neutral-500">Implementación rápida</div>
                    </div>
                 </div>

                 <div className="bg-white p-4 rounded-xl shadow-lg border border-neutral-100 flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-neutral-900">Agentes Autónomos</div>
                      <div className="text-xs text-neutral-500">Ejecutan tareas complejas</div>
                    </div>
                 </div>
              </div>
            </motion.div>
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
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} J&M Industry. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-neutral-900 transition-colors">Privacidad</Link>
              <Link href="/terms-and-conditions" className="hover:text-neutral-900 transition-colors">Términos</Link>
            </div>
          </div>
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

function ProcessStep({ number, title, description, icon }: { number: string, title: string, description: string, icon: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative p-6 pt-12 border-t border-neutral-200"
    >
      <div className="absolute top-0 left-0 -translate-y-1/2 bg-white pr-4">
         <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm">
            {number}
         </div>
      </div>
      <div className="mb-4 text-neutral-900">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function IndustryCard({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-6 bg-white border border-neutral-100 rounded-xl flex flex-col items-center justify-center text-center hover:shadow-lg hover:border-neutral-200 transition-all gap-4 group cursor-default"
    >
      <div className="text-neutral-400 group-hover:text-neutral-900 transition-colors">
        {icon}
      </div>
      <span className="font-semibold text-neutral-800">{title}</span>
    </motion.div>
  );
}
