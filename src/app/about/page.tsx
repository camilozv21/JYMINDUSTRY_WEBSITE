"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Rocket, 
  Heart, 
  Lightbulb, 
  ShieldCheck, 
  Globe2 
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    { icon: <Rocket className="w-8 h-8 text-white" />, title: "Innovación Radical", desc: "No seguimos tendencias, las implementamos antes que nadie." },
    { icon: <ShieldCheck className="w-8 h-8 text-white" />, title: "Integridad Total", desc: "Tus datos son sagrados. La transparencia es nuestro pilar." },
    { icon: <Users className="w-8 h-8 text-white" />, title: "Cliente Céntrico", desc: "Construimos soluciones, no problemas. Tu éxito es nuestro KPI." },
    { icon: <Lightbulb className="w-8 h-8 text-white" />, title: "Simplicidad", desc: "Hacemos fácil lo difícil. La complejidad debe ser invisible." },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-24">
      
      {/* Hero */}
      <section className="px-6 md:px-12 py-20 bg-neutral-900 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter"
          >
            Humanizando <br /> la Inteligencia Artificial.
          </motion.h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Somos un equipo de ingenieros, diseñadores y estrategas obsesionados con el futuro del trabajo.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="px-6 md:px-12 py-24">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-neutral-900 border-l-4 border-green-500 pl-4">Nuestra Misión</h2>
            <p className="text-lg text-neutral-600 mb-12">
              Democratizar el acceso a la automatización avanzada para que las empresas puedan
              liberar su potencial humano de tareas repetitivas.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 text-neutral-900 border-l-4 border-blue-500 pl-4">Nuestra Visión</h2>
            <p className="text-lg text-neutral-600">
              Ser el referente global en la implementación ética y eficiente de sistemas autónomos 
              para la industria de servicios.
            </p>
          </div>
          <div className="relative h-96 bg-neutral-100 rounded-3xl overflow-hidden shadow-2xl">
             {/* Decorative Abstract Map */}
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <Globe2 className="w-32 h-32 text-neutral-300 animate-pulse" />
             </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 md:px-12 py-24 bg-neutral-900 text-white">
        <div className="container mx-auto max-w-6xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestros Valores</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            La tecnología cambia, pero nuestros principios permanecen intactos.
          </p>
        </div>

        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 hover:border-green-500/50 transition-colors"
            >
              <div className="bg-neutral-700 w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{val.title}</h3>
              <p className="text-neutral-400 text-center text-sm leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us? */}
      <section className="px-6 md:px-12 py-24 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">¿Por qué JYM Industry?</h2>
          
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div>
               <div className="text-5xl font-bold text-neutral-200 mb-4">01</div>
               <h3 className="font-bold text-lg mb-2">Velocidad</h3>
               <p className="text-neutral-600 text-sm">No meses. Semanas. A veces días. Nuestro framework modular nos permite desplegar soluciones más rápido que la competencia.</p>
            </div>
            <div>
               <div className="text-5xl font-bold text-neutral-200 mb-4">02</div>
               <h3 className="font-bold text-lg mb-2">Calidad</h3>
               <p className="text-neutral-600 text-sm">Código limpio, arquitectura escalable y las mejores prácticas de ingeniería de software.</p>
            </div>
            <div>
               <div className="text-5xl font-bold text-neutral-200 mb-4">03</div>
               <h3 className="font-bold text-lg mb-2">Soporte</h3>
               <p className="text-neutral-600 text-sm">No te dejamos solo. Monitoreamos tus agentes 24/7 para asegurar que siempre estén operando al 100%.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
