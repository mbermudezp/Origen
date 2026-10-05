import { Link } from "react-router";

import { Mas } from "./Iconos";
import { useCarrito } from "../context/CarritoContext";

/* Cada producto tiene un degradado propio: da identidad sin depender de fotos */
const tonos = [
  "from-[#e8ddd0] to-[#d4c4b0]",
  "from-[#e6d8c8] to-[#cdb9a4]",
  "from-[#ead9cd] to-[#d8bfb0]",
  "from-[#e4dcd0] to-[#c9bda9]",
  "from-[#e9dcc9] to-[#d5c1a3]",
  "from-[#e5dad4] to-[#c8b8ad]",
];

export default function ProductCard({ producto, indice = 0, compacto = false }) {
  const { agregar, estaEnCarrito } = useCarrito();
  const enCarrito = estaEnCarrito(producto.id);
  const tono = tonos[indice % tonos.length];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-crema-50 ring-1 ring-espresso-800/6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-medio hover:ring-espresso-800/10">
      {/* ---------- Imagen ---------- */}
      <Link
        to={`/productos/${producto.id}`}
        className={`relative block overflow-hidden bg-gradient-to-br ${tono} ${
          compacto ? "h-40" : "h-56"
        }`}
        aria-label={`Ver ${producto.nombre}`}
      >
        {/* Grano de papel sobre el degradado */}
        <span className="grain absolute inset-0" />

        {/* Ilustración de taza */}
        <span className="absolute inset-0 grid place-items-center">
          <svg
            viewBox="0 0 64 64"
            className="h-14 w-14 -translate-y-1 text-espresso-800/45 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:text-espresso-800/70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M13 24h32v12a10 10 0 0 1-10 10H23a10 10 0 0 1-10-10V24Z" />
            <path d="M45 27h4.5a5.5 5.5 0 0 1 0 11H45" />
            <path d="M22 20c0-2.5 2-2.5 2-5M30 20c0-2.5 2-2.5 2-5M38 20c0-2.5 2-2.5 2-5" />
          </svg>
        </span>

        {/* Etiqueta de origen */}
        <span className="absolute left-4 top-4 rounded-full bg-crema-50/85 px-3 py-1.5 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-espresso-700 backdrop-blur-sm">
          {producto.origen}
        </span>

        {/* Marca de "agregado" */}
        {enCarrito && (
          <span className="absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-full bg-verde-500 text-crema-50 shadow-suave">
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m5 12.5 4.5 4.5L19 7.5" />
            </svg>
            <span className="sr-only">En el carrito</span>
          </span>
        )}
      </Link>

      {/* ---------- Datos ---------- */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl tracking-tight text-espresso-800">
          <Link to={`/productos/${producto.id}`} className="hover:text-arcilla-700">
            {producto.nombre}
          </Link>
        </h3>

        <p className="mt-1.5 flex-1 text-[0.8125rem] leading-relaxed text-espresso-300">
          {producto.descripcion}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-espresso-800/8 pt-4">
          <span className="font-display text-xl tabular-nums text-espresso-800">
            ${producto.precio.toFixed(2)}
          </span>

          <button
            type="button"
            onClick={() => agregar(producto)}
            className="boton-base bg-espresso-800 px-4 py-2.5 text-[0.8125rem] text-crema-50 hover:bg-espresso-700 hover:shadow-suave"
          >
            <Mas size={15} />
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}