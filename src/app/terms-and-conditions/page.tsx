
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white pb-20">
      <nav className="border-b border-neutral-100 py-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-neutral-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <Link href="/" className="relative">
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-40 h-24 flex justify-end items-center">
              <img 
                src="https://df50lbm4qcrt6.cloudfront.net/JYM_INDUSTRY/JyMlogo_no_bvackground-removebg-preview.png" 
                alt="J&M Industry Logo" 
                className="h-full w-auto object-contain max-w-none"
              />
            </div>
            <div className="w-20 h-10"></div>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 max-w-4xl py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Términos y Condiciones</h1>
        
        <div className="prose prose-neutral prose-lg max-w-none">
          <p className="text-neutral-600 mb-8 text-xl leading-relaxed">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">1. Aceptación de los Términos</h2>
            <p className="mb-4 text-neutral-600">
              Al acceder y utilizar el sitio web y los servicios de J&M Industry ("la Empresa"), usted acepta estar sujeto a estos Términos y Condiciones y a todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a este sitio.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">2. Servicios de Automatización e IA</h2>
            <p className="mb-4 text-neutral-600">
              Proporcionamos servicios de consultoría, desarrollo e implementación de soluciones de automatización e inteligencia artificial. Nos esforzamos por garantizar que nuestros servicios sean precisos y útiles, pero no garantizamos resultados específicos, ya que estos pueden variar según la implementación y el contexto del cliente.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">3. Propiedad Intelectual</h2>
            <p className="mb-4 text-neutral-600">
              El contenido, las características y la funcionalidad de nuestro sitio web y servicios (incluidos, entre otros, toda la información, software, texto, pantallas, imágenes, video y audio) son propiedad de J&M Industry y están protegidos por derechos de autor, marcas comerciales y otras leyes de propiedad intelectual.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">4. Limitación de Responsabilidad</h2>
            <p className="mb-4 text-neutral-600">
              En ningún caso J&M Industry, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluidos, entre otros, la pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de su acceso o uso o la imposibilidad de acceder o usar el servicio.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">5. Modificaciones</h2>
            <p className="mb-4 text-neutral-600">
              Nos reservamos el derecho, a nuestra entera discreción, de modificar o reemplazar estos Términos en cualquier momento. Es su responsabilidad revisar estos Términos periódicamente. El uso continuado de nuestros servicios después de cualquier cambio constituye la aceptación de los nuevos Términos.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">6. Ley Aplicable</h2>
            <p className="mb-4 text-neutral-600">
              Estos Términos se regirán e interpretarán de acuerdo con las leyes vigentes en la jurisdicción donde opera J&M Industry, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">7. Contacto</h2>
            <p className="mb-4 text-neutral-600">
              Si tiene alguna pregunta sobre estos Términos, por favor contáctenos a través de los canales proporcionados en nuestro sitio web.
            </p>
          </section>
        </div>
      </main>
      
      <footer className="border-t border-neutral-100 py-12 bg-neutral-50">
        <div className="container mx-auto px-6 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} J&M Industry. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
