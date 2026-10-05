import { useState } from "react";

import PageIntro from "../components/PageIntro";
import { Check, Correo, Telefono, Ubicacion } from "../components/Iconos";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  function alEnviar(evento) {
    // Todavía no hay backend: esto evita que la página se recargue
    evento.preventDefault();
    setEnviado(true);
  }

  const campos = [
    { id: "nombre", label: "Nombre", type: "text", placeholder: "Tu nombre" },
    { id: "email", label: "Correo", type: "email", placeholder: "vos@correo.com" },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        titulo={
          <>
            Contanos cómo
            <br />
            <span className="italic text-arcilla-600">tomás el café</span>
          </>
        }
        bajada="Respondemos en menos de 24 horas hábiles. Si dudás entre dos cafés, escribí y te decimos cuál elegir — aunque no sea el que nos conviene."
      />

      <section className="bg-crema-100 py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-20">
            {/* ---------- Formulario ---------- */}
            <div>
              {enviado ? (
                <div className="flex flex-col items-start rounded-2xl border border-verde-500/25 bg-verde-500/8 p-10">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-verde-500 text-crema-50">
                    <Check size={24} />
                  </span>
                  <h2 className="mt-6 font-display text-2xl tracking-tight text-espresso-800">
                    Mensaje enviado
                  </h2>
                  <p className="mt-2 max-w-sm text-[0.9375rem] text-espresso-300">
                    Gracias por escribir. Te contestamos a la brevedad — en este
                    proyecto el formulario es una maqueta, así que nada llegó a
                    ningún servidor todavía.
                  </p>
                  <button
                    type="button"
                    onClick={() => setEnviado(false)}
                    className="boton-base mt-7 border border-espresso-800/20 px-5 py-2.5 text-[0.875rem] text-espresso-800 hover:border-espresso-800/40"
                  >
                    Escribir otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={alEnviar} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {campos.map((campo) => (
                      <div key={campo.id}>
                        <label
                          htmlFor={campo.id}
                          className="block text-[0.8125rem] font-medium text-espresso-800"
                        >
                          {campo.label}
                        </label>
                        <input
                          id={campo.id}
                          name={campo.id}
                          type={campo.type}
                          required
                          placeholder={campo.placeholder}
                          className="mt-2 w-full rounded-xl border border-espresso-800/12 bg-crema-50 px-4 py-3.5 text-[0.9375rem] text-espresso-800 transition-colors duration-300 placeholder:text-espresso-300/60 focus:border-arcilla-500 focus:outline-none"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-[0.8125rem] font-medium text-espresso-800"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      required
                      placeholder="¿Cómo preparás el café? ¿Molienda? ¿Buscás algo con acidez o suave?"
                      className="mt-2 w-full resize-y rounded-xl border border-espresso-800/12 bg-crema-50 px-4 py-3.5 text-[0.9375rem] text-espresso-800 transition-colors duration-300 placeholder:text-espresso-300/60 focus:border-arcilla-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="boton-base bg-espresso-800 text-crema-50 hover:bg-espresso-700 hover:shadow-medio"
                  >
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>

            {/* ---------- Datos ---------- */}
            <aside className="space-y-8 lg:border-l lg:border-espresso-800/8 lg:pl-10">
              {[
                {
                  icono: Correo,
                  titulo: "Correo",
                  valor: "hola@origen.cafe",
                  href: "mailto:hola@origen.cafe",
                },
                {
                  icono: Telefono,
                  titulo: "Teléfono",
                  valor: "+51 999 888 777",
                  href: "tel:+51999888777",
                },
                {
                  icono: Ubicacion,
                  titulo: "Taller",
                  valor: "Av. Arequipa 1234, Lima",
                },
              ].map(({ icono: Icono, titulo, valor, href }) => (
                <div key={titulo}>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-crema-200 text-espresso-700">
                    <Icono size={18} />
                  </span>
                  <p className="mt-4 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-espresso-300">
                    {titulo}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="subrayado mt-1.5 inline-block font-display text-[1.0625rem] text-espresso-800"
                    >
                      {valor}
                    </a>
                  ) : (
                    <p className="mt-1.5 font-display text-[1.0625rem] text-espresso-800">
                      {valor}
                    </p>
                  )}
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}