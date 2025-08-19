import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-slate-600">
        <div>
          <h3 className="font-semibold text-slate-900">Lic. Gustavo Amestoy</h3>
          <p className="mt-3 leading-relaxed">Espacio terapéutico profesional y cercano para acompañarte en ansiedad, depresión, estrés laboral y procesos de duelo.</p>
          <a href="https://wa.me/5491139002247?text=Hola%20Gustavo%2C%20quiero%20agendar%20una%20consulta" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium shadow hover:bg-blue-700 transition-colors">Agendar consulta</a>
        </div>

        <div className="lg:pl-12 xl:pl-16">
          <h4 className="font-semibold text-slate-900">Navegación</h4>
          <ul className="mt-3 grid gap-2">
            <li><a href="#inicio" className="hover:text-blue-600">Inicio</a></li>
            <li><a href="#sobre-mi" className="hover:text-blue-600">Sobre mí</a></li>
            <li><a href="#servicios" className="hover:text-blue-600">Servicios</a></li>
            <li><a href="#testimonios" className="hover:text-blue-600">Testimonios</a></li>
            <li><a href="#contacto" className="hover:text-blue-600">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Contacto</h4>
          <ul className="mt-3 grid gap-2">
            <li className="flex items-start gap-2"><PhoneIcon className="w-5 h-5 text-blue-600" /><a href="tel:+5491139002247" className="hover:text-blue-600">+54 9 11 3900-2247</a></li>
            <li className="flex items-start gap-2"><EnvelopeIcon className="w-5 h-5 text-blue-600" /><a href="mailto:contacto@gustavo.com" className="hover:text-blue-600">contacto@gustavo.com</a></li>
            <li className="flex items-start gap-2"><MapPinIcon className="w-5 h-5 text-blue-600" /><span>Buenos Aires, Argentina</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Información</h4>
          <ul className="mt-3 grid gap-2">
            <li><a href="#" className="hover:text-blue-600">Aviso legal</a></li>
            <li><a href="#" className="hover:text-blue-600">Política de privacidad</a></li>
            <li><a href="#" className="hover:text-blue-600">Términos y condiciones</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Lic. Gustavo Amestoy. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-600">Instagram</a>
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}



