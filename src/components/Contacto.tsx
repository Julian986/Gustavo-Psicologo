export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center">Contacto</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">Completá el formulario y te responderé a la brevedad. También podés escribirme o llamarme directamente.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <form className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-medium text-slate-700">Nombre</label>
            <input type="text" className="mt-1 w-full rounded-md bg-white border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Tu nombre" />

            <label className="block text-sm font-medium text-slate-700 mt-4">Email</label>
            <input type="email" className="mt-1 w-full rounded-md bg-white border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="tu@email.com" />

            <label className="block text-sm font-medium text-slate-700 mt-4">Mensaje</label>
            <textarea rows={5} className="mt-1 w-full rounded-md bg-white border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Contame brevemente en qué puedo ayudarte" />

            <button type="submit" className="mt-5 inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-colors">Agendar consulta</button>
          </form>

          <div className="grid gap-4 content-start">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">Contacto directo</h3>
              <p className="mt-2 text-slate-600">Tel: <a className="text-blue-600 hover:underline" href="tel:+541100000000">+54 11 0000-0000</a></p>
              <p className="text-slate-600">Email: <a className="text-blue-600 hover:underline" href="mailto:contacto@gustavo.com">contacto@gustavo.com</a></p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-0 overflow-hidden shadow-sm">
              <iframe title="Mapa Buenos Aires" className="w-full h-64" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114623.92485087046!2d-58.44807600178453!3d-34.586296621388975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a335334aab4cb1%3A0xaec477210c5aaaac!2sLic%20Gustavo%20Amestoy!5e0!3m2!1ses!2sar!4v1755560836879!5m2!1ses!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



