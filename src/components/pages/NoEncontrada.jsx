import { Link, useRouteError } from "react-router";

import { Flecha } from "../components/Iconos";

/*
  Se usa para dos casos:
  - ruta "*" → URL inexistente
  - errorElement → error del router (import fallido, etc.)
*/

export default function NoEncontrada() {
  const error = useRouteError();

  return (
    <section className="grain relative flex min-h-[70vh] items-center overflow-hidden bg-crema-100">
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-arcilla-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative py-20 text-center">
        <p className="eyebrow">Error {error ? 500 : 404}</p>

        <h1 className="mt-5 text-display text-espresso-800">
          {error ? "Algo se rompió" : "Perdiste el hilo"}
        </h1>

        <p className="mx-auto mt-5 max-w-md text-[1.0625rem] leading-relaxed text-espresso-300">
          {error
            ? "Hubo un problema al cargar esta página. Probá de nuevo o volvé al inicio."
            : "La página que buscás no existe o cambió de dirección. Volvé al inicio y seguí desde ahí."}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="boton-base bg-espresso-800 text-crema-50 hover:bg-espresso-700 hover:shadow-medio"
          >
            Volver al inicio
            <Flecha size={17} />
          </Link>

          <Link
            to="/productos"
            className="boton-base border border-espresso-800/20 text-espresso-800 hover:border-espresso-800/45 hover:bg-espresso-800/4"
          >
            Ver el catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}