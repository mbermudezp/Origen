import { Link, useParams } from "react-router";

import { useCarrito } from "../context/CarritoContext";
import { Check, Flecha, Mas } from "../components/Iconos";
import { productos } from "../../data/productos";

export default function ProductoDetalle() {
  // El :id de la URL llega como texto, hay que convertirlo a número
  const { id } = useParams();
  const producto = productos.find((p) => p.id === Number(id));

  const { agregar, estaEnCarrito } = useCarrito();

  if (!producto) {
    return (
      <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-display text-espresso-800">
          Ese café no existe
        </h1>
        <p className="mt-4 max-w-sm text-espresso-300">
          Puede que el lote se haya agotado o que el link tenga un error.
        </p>
        <Link
          to="/productos"
          className="boton-base mt-8 bg-espresso-800 text-crema-50 hover:bg-espresso-700"
        >
          <Flecha size={17} className="rotate-180" />
          Volver al catálogo
        </Link>
      </section>
    );
  }

  const enCarrito = estaEnCarrito(producto.id);

  return (
    <>
      {/* ---------- Migas de pan ---------- */}
      <nav
        aria-label="Ruta de navegación"
        className="border-b border-espresso-800/8 bg-crema-100"
      >
        <div className="container-x py-5">
          <ol className="flex items-center gap-2 text-[0.8125rem] text-espresso-300">
            <li>
              <Link to="/" className="transition-colors hover:text-espresso-800">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true" className="text-espresso-800/25">
              /
            </li>
            <li>
              <Link
                to="/productos"
                className="transition-colors hover:text-espresso-800"
              >
                Cafés
              </Link>
            </li>
            <li aria-hidden="true" className="text-espresso-800/25">
              /
            </li>
            <li className="font-medium text-espresso-800" aria-current="page">
              {producto.nombre}
            </li>
          </ol>
        </div>
      </nav>

      {/* ---------- Detalle ---------- */}
      <section className="grain relative overflow-hidden bg-crema-100">
        <div
          className="pointer-events-none absolute -left-32 top-10 h-[26rem] w-[26rem] rounded-full bg-arcilla-200/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-x relative py-14 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Imagen */}
            <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-crema-200 to-crema-400 shadow-alto">
              <span className="grain absolute inset-0" />

              <div className="grid aspect-square place-items-center p-10">
                <svg
                  viewBox="0 0 140 140"
                  className="h-44 w-44 text-espresso-800/60 sm:h-56 sm:w-56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M32 58h68v30a24 24 0 0 1-24 24H56a24 24 0 0 1-24-24V58Z" />
                  <path d="M100 65h10a13 13 0 0 1 0 26h-10" />
                  <path d="M52 48c0-6 5-6 5-12M66 48c0-6 5-6 5-12M80 48c0-6 5-6 5-12" />
                  <path d="M24 122h84" />
                </svg>
              </div>

              <span className="absolute left-5 top-5 rounded-full bg-crema-50/85 px-3.5 py-1.5 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-espresso-700 backdrop-blur-sm">
                {producto.origen}
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <p className="eyebrow">Café de especialidad · 250 g</p>

              <h1 className="mt-4 text-display text-espresso-800">
                {producto.nombre}
              </h1>

              <p className="mt-5 text-[1.0625rem] leading-relaxed text-espresso-300">
                {producto.descripcion}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-espresso-800/10 py-6 text-[0.875rem]">
                <div>
                  <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-espresso-300">
                    Origen
                  </dt>
                  <dd className="mt-1.5 font-display text-lg text-espresso-800">
                    {producto.origen}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-espresso-300">
                    Peso
                  </dt>
                  <dd className="mt-1.5 font-display text-lg text-espresso-800">
                    250 g
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="font-display text-[2rem] tabular-nums leading-none text-espresso-800">
                  ${producto.precio.toFixed(2)}
                </span>

                <button
                  type="button"
                  onClick={() => agregar(producto)}
                  className={`boton-base ${
                    enCarrito
                      ? "bg-verde-500 text-crema-50 hover:bg-verde-600"
                      : "bg-espresso-800 text-crema-50 hover:bg-espresso-700 hover:shadow-medio"
                  }`}
                >
                  {enCarrito ? <Check size={17} /> : <Mas size={17} />}
                  {enCarrito ? "En el carrito" : "Agregar al carrito"}
                </button>
              </div>

              <Link
                to="/productos"
                className="group mt-8 inline-flex w-fit items-center gap-2 text-[0.9375rem] font-medium text-espresso-400 transition-colors hover:text-espresso-800"
              >
                <Flecha
                  size={16}
                  className="transition-transform duration-400 group-hover:-translate-x-1"
                />
                Volver al catálogo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}