import { useState } from "react";

import PageIntro from "../components/PageIntro";
import ProductCard from "../components/ProductCard";
import { Buscar, Vacio } from "../components/Iconos";
import { productos } from "../../data/productos";

export default function Productos() {
  // Estado local: solo esta página lo necesita
  const [busqueda, setBusqueda] = useState("");

  const texto = busqueda.trim().toLowerCase();

  const filtrados = productos.filter((producto) =>
    `${producto.nombre} ${producto.origen} ${producto.descripcion}`
      .toLowerCase()
      .includes(texto),
  );

  return (
    <>
      <PageIntro
        eyebrow="Catálogo"
        titulo={
          <>
            Seis cafés,
            <br />
            <span className="italic text-arcilla-600">seis historias distintas</span>
          </>
        }
        bajada="Todos se tuestan la misma semana. Lo que cambia es el origen, el proceso y lo que terminás escuchando en la taza."
      >
        {/* ---------- Buscador ---------- */}
        <div className="relative mt-10 max-w-sm">
          <Buscar
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-espresso-300"
          />
          <input
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por nombre u origen…"
            aria-label="Buscar cafés"
            className="w-full rounded-full border border-espresso-800/12 bg-crema-50 py-3.5 pl-12 pr-4 text-[0.9375rem] text-espresso-800 placeholder:text-espresso-300/70 transition-colors duration-300 focus:border-arcilla-500 focus:outline-none"
          />
        </div>
      </PageIntro>

      {/* ---------- Grilla ---------- */}
      <section className="bg-crema-100 py-16 lg:py-20">
        <div className="container-x">
          <p className="mb-8 text-[0.8125rem] text-espresso-300">
            {filtrados.length}{" "}
            {filtrados.length === 1 ? "café" : "cafés"}
            {texto && " encontrados"}
          </p>

          {filtrados.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtrados.map((producto) => (
                <ProductCard
                  key={producto.id}
                  producto={producto}
                  indice={productos.indexOf(producto)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center rounded-2xl border border-dashed border-espresso-800/15 px-6 py-20 text-center">
              <Vacio size={44} className="text-espresso-800/20" />
              <p className="mt-5 font-display text-xl text-espresso-800">
                No encontramos ese café
              </p>
              <p className="mt-2 max-w-xs text-[0.9375rem] text-espresso-300">
                Probá con otro origen o limpiá la búsqueda para ver los seis.
              </p>
              <button
                type="button"
                onClick={() => setBusqueda("")}
                className="boton-base mt-6 bg-espresso-800 px-5 py-2.5 text-[0.875rem] text-crema-50 hover:bg-espresso-700"
              >
                Ver todos
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}