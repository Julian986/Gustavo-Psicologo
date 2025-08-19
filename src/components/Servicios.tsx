import { AcademicCapIcon, HeartIcon, BriefcaseIcon, CloudIcon } from '@heroicons/react/24/outline'

const servicios = [
  {
    icon: AcademicCapIcon,
    titulo: 'Terapia individual',
    descripcion: 'Sesiones personalizadas enfocadas en tus objetivos y proceso personal.',
  },
  {
    icon: HeartIcon,
    titulo: 'Ansiedad y depresión',
    descripcion: 'Herramientas basadas en evidencia para aliviar síntomas y recuperar bienestar.',
  },
  {
    icon: BriefcaseIcon,
    titulo: 'Estrés laboral',
    descripcion: 'Estrategias para gestionar el estrés y mejorar el equilibrio vida-trabajo.',
  },
  {
    icon: CloudIcon,
    titulo: 'Procesos de duelo',
    descripcion: 'Acompañamiento respetuoso y humano en momentos de pérdida y cambio.',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center">Servicios</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">Te ofrezco un espacio seguro y confidencial para trabajar lo que necesites, con un enfoque humano y profesional.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map(({ icon: Icon, titulo, descripcion }) => (
            <div key={titulo} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{titulo}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{descripcion}</p>
              <a href="#contacto" className="mt-4 inline-block text-blue-600 font-medium hover:underline">Más información</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



