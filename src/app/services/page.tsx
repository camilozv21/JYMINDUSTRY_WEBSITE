"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Database, 
  Globe, 
  Shield, 
  Zap, 
  MessageSquare, 
  Check, 
  X,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const techStack = [
    { name: "Next.js 16", icon: <Globe className="w-6 h-6" />, desc: "Frontend ultrarrápido y SEO-friendly." },
    { name: "Nest.js", icon: <Cpu className="w-6 h-6" />, desc: "Backend robusto para procesamiento de datos." },
    { name: "OpenAI GPT-5", icon: <MessageSquare className="w-6 h-6" />, desc: "El motor de razonamiento más avanzado." },
    { name: "PGvector", icon: <Database className="w-6 h-6" />, desc: "Memoria vectorial para contexto infinito." },
    { name: "LangChain", icon: <Shield className="w-6 h-6" />, desc: "Orquestación compleja de agentes." },
  ];

  const comparisonData = [
    { feature: "Entendimiento", chatbot: "Palabras clave rígidas", agent: "Comprensión semántica profunda" },
    { feature: "Memoria", chatbot: "Limitada a la sesión", agent: "Recuerdo de contexto histórico" },
    { feature: "Acción", chatbot: "Solo responde texto", agent: "Ejecuta tareas (API, DB, Web)" },
    { feature: "Aprendizaje", chatbot: "Estático", agent: "Mejora con RAG (Data propia)" },
  ];

  const faqs = [
    { q: "¿Cuánto tiempo toma la implementación?", a: "Nuestro estándar es de 48 horas para agentes de atención al cliente básicos, y de 1 a 2 semanas para integraciones complejas con ERPs o CRMs." },
    { q: "¿Necesito conocimientos técnicos?", a: "No. Nosotros nos encargamos de toda la infraestructura, entrenamiento y mantenimiento. Tú solo recibes los reportes y resultados." },
    { q: "¿Es seguro para mis datos?", a: "Absolutamente. Utilizamos encriptación de grado bancario y contratos de confidencialidad estrictos. Tus datos nunca se usan para entrenar modelos públicos." },
    { q: "¿Puedo integrarlo a WhatsApp?", a: "Sí, es nuestra especialidad. También a Instagram, Facebook Messenger, Telegram, Slack y correo electrónico." },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 pt-24">
      
      {/* Header */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Ingeniería de <span className="text-neutral-500">Automatización</span>
          </motion.h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            No vendemos software enlatado. Construimos infraestructura de inteligencia artificial a la medida de tus flujos operativos.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 md:px-12 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Stack Tecnológico</h2>
            <p className="text-neutral-600">Utilizamos las herramientas más avanzadas del mercado para garantizar velocidad, escalabilidad y precisión.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-neutral-900 mb-4 bg-neutral-100 w-12 h-12 flex items-center justify-center rounded-lg">
                  {tech.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
                <p className="text-sm text-neutral-500">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot vs Agent Comparison */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Chatbots vs. Agentes AI</h2>
            <p className="text-lg text-neutral-600">La diferencia entre responder preguntas y resolver problemas.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200">
            <div className="grid grid-cols-3 bg-neutral-900 text-white p-4 font-bold text-sm md:text-base">
              <div className="col-span-1">Capacidad</div>
              <div className="col-span-1 text-center opacity-70">Chatbot Tradicional</div>
              <div className="col-span-1 text-center text-green-400">Agente JYM</div>
            </div>
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 p-4 border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors items-center">
                <div className="col-span-1 font-medium">{row.feature}</div>
                <div className="col-span-1 text-center text-neutral-500 flex justify-center gap-2 items-center">
                   <X className="w-4 h-4 text-red-300" />
                   <span className="hidden md:inline">{row.chatbot}</span>
                </div>
                <div className="col-span-1 text-center font-semibold text-neutral-900 flex justify-center gap-2 items-center">
                   <Check className="w-4 h-4 text-green-500" />
                   <span className="hidden md:inline">{row.agent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Services */}
      <section className="px-6 md:px-12 py-20 bg-neutral-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 border-b border-neutral-800 pb-6">Catálogos de Automatización</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-400">01. Customer Service Autopilot</h3>
              <p className="text-neutral-400 leading-relaxed">
                Conectamos tu base de conocimiento (PDFs, Notion, Webs) a un cerebro central. 
                El agente atiende tickets, clasifica urgencias, y escala a humanos solo cuando es estrictamente necesario, 
                reduciendo la carga laboral en un 80%.
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Integración WhatsApp Business API</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Respuestas en &lt; 2 segundos</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Tono de voz personalizado de marca</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-400">02. Lead Gen & Qualification</h3>
              <p className="text-neutral-400 leading-relaxed">
                No dejes que los leads se enfríen. Nuestro agente interactúa proactivamente con visitantes, 
                hace las preguntas de calificación (BANT), y agenda reuniones directamente en tu Calendly 
                solo con prospectos calificados.
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Sincronización con CRM (HubSpot/Salesforce)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Seguimiento automático a largo plazo</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Detección de intención de compra</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-neutral-500" /> : <ChevronDown className="w-5 h-5 text-neutral-500" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-neutral-50 px-6 pb-6 text-neutral-600"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
