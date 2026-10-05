import { Link } from "react-router";

import PageIntro from "../components/PageIntro";
import { useCarrito } from "../context/CarritoContext";
import { Carrito as IconoCarrito, Flecha, Mas } from "../components/Iconos";

export default function Carrito() {
  const { items, restar, vaciar, total, cantidad } = useCarrito();

  if (cantidad === 0) {
    return (
      <>
        <PageIntro
          eyebrow="Tu selección"
          titulo="Carrito vacío"
          bajada="Todavía no agregaste nada. Mirá el catálogo y decime cuál te pinta."
        />

        <section className="bg-crema-100 py-20">
          <div className="container-x">
            <div className="flex flex-col items-center rounded-2xl border border-dashed border-espresso-800/15 px-6 py-20 text-center">
              <IconoCarrito size={44} className="text-espresso-800/20" />
              <p className="mt-5 font-display text-xl text-espresso-800">
                Tu carrito está vacío
              </p>
              <p className="mt-2 max-w-xs text-[0.9375rem] text-espresso-300">
                Empezá por el café de Etiopía: floral, ácido y el que más le
                gusta a quien empieza.
              </p>
              <Link
                to="/productos"
                className="boton-base mt-7 bg-espresso-800 text-crema-50 hover:bg-espresso-700"
              >
                Ver los cafés
                <Flecha size={17} />
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageIntro
        eyebrow="Tu selección"
        titulo="Tu carrito"
        bajada={`${cantidad} ${
          cantidad === 1 ? "producto listo" : "productos listos"
        } para calcular el envío.`}
      />

      <section className="bg-crema-100 py-14 lg:py-20">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-start">
            {/* ---------- Lista ---------- */}
            <ul className="divide-y divide-espresso-800/8 overflow-hidden rounded-2xl bg-crema-50 ring-1 ring-espresso-800/6">
              {items.map((item, i) => (
                <li
                  key={`${item.id}-${i}`}
                  className="flex items-center gap-5 p-5 transition-colors hover:bg-crema-200/40 sm:p-6"
                >
                  {/* Miniaturas */}
                  <div className="relative hidden h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-crema-200 to-crema-400 sm:grid">
                    <span className="grain absolute inset-0" />
                    <svg
                      viewBox="0 0 64 64"
                      className="h-9 w-9 text-espresso-800/45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M13 24h32v12a10 10 0 0 1-10 10H23a10 10 0 0 1-10-10V24Z" />
                      <path d="M45 27h4.5a5.5 5.5 0 0 1 0 11H45" />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-espresso-300">
                      {item.origen}
                    </p>
                    <h3 className="mt-1 font-display text-lg tracking-tight text-espresso-800">
                      {item.nombre}
                    </h3>
                    <p className="mt-0.5 text-[0.8125rem] text-espresso-300">
                      250 g · tostado semanal
                    </p>
                  </div>

                  <span className="font-display text-lg tabular-nums text-espresso-800">
                    ${item.precio.toFixed(2)}
                  </span>

                  <button
                    type="button"
                    onClick={() => restar(item.id)}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-espresso-800/15 text-espresso-400 transition-all duration-300 hover:border-espresso-800/40 hover:text-espresso-800"
                    aria-label={`Quitar ${item.nombre} del carrito`}
                  >
                    <Mas size={16} className="rotate-45" />
                  </button>
                </li>
              ))}
            </ul>

            {/* ---------- Resumen ---------- */}
            <aside className="sticky top-28 rounded-2xl bg-espresso-800 p-7 text-crema-200/70 shadow-alto">
              <h2 className="font-display text-xl tracking-tight text-crema-100">
                Resumen
              </h2>

              <dl className="mt-6 space-y-3.5 text-[0.9375rem]">
                <div className="flex items-center justify-between">
                  <dt>Subtotal</dt>
                  <dd className="tabular-nums text-crema-100">
                    ${total.toFixed(2)}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Envío</dt>
                  <dd className="text-verde-500">Gratis</dd>
                </div>
                <div className="flex items-center justify-between border-t border-crema-200/12 pt-4 text-[1.0625rem]">
                  <dt className="text-crema-100">Total</dt>
                  <dd className="font-display text-2xl tabular-nums text-crema-100">
                    ${total.toFixed(2)}
                  </dd>
                </div>
              </dl>

              <button
                type="button"
                className="boton-base mt-7 w-full bg-arcilla-500 text-espresso-900 hover:bg-arcilla-400"
              >
                Finalizar compra
              </button>

              <button
                type="button"
                onClick={vaciar}
                className="mt-3 w-full py-2 text-[0.8125rem] text-crema-200/45 transition-colors hover:text-crema-100"
              >
                Vaciar carrito
              </button>

              <p className="mt-5 border-t border-crema-200/12 pt-5 text-[0.75rem] leading-relaxed text-crema-200/40">
                Este checkout es una maqueta: todavía no hay pasarela de pago.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}