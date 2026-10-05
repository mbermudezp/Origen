import { Link } from "react-router";

import { enlaces } from "./Menu";
import { Correo, FlechaDiagonal, Grano, Instagram, Telefono } from "./Iconos";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso-800 text-crema-200/70">
      {/* Halo cálido para que el fondo oscuro no se vea plano */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-arcilla-500/12 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative">
        {/* ---------- Arriba ---------- */}
        <div className="grid gap-12 border-b border-crema-200/10 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16 lg:py-20">
          {/* Marca */}
          <div className="max-w-sm">
            <Link to="/" className="group inline-flex items-center gap-3">
              <Grano
                size={32}
                className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[18deg]"
              />
              <span className="font-display text-2xl tracking-[-0.03em] text-crema-100">
                Origen
              </span>
            </Link>

            <p className="mt-5 text-[0.9375rem] leading-relaxed text-crema-200/55">
              Compramos directo a quien cultiva, tostamos en lotes chicos y te
              reaches el café cuando todavía tiene memoria de la cosecha.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-crema-200/15 text-crema-200/70 transition-all duration-400 hover:-translate-y-0.5 hover:border-arcilla-400/50 hover:text-arcilla-400"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:hola@origen.cafe"
                aria-label="Escribir por correo"
                className="grid h-10 w-10 place-items-center rounded-full border border-crema-200/15 text-crema-200/70 transition-all duration-400 hover:-translate-y-0.5 hover:border-arcilla-400/50 hover:text-arcilla-400"
              >
                <Correo size={18} />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <nav aria-label="Navegación del pie">
            <h3 className="font-sans text-[0.625rem] font-medium uppercase tracking-[0.24em] text-arcilla-400">
              Explorar
            </h3>
            <ul className="mt-5 space-y-3">
              {enlaces.map((enlace) => (
                <li key={enlace.to}>
                  <Link
                    to={enlace.to}
                    className="group inline-flex items-center gap-1.5 text-[0.9375rem] text-crema-200/70 transition-colors hover:text-crema-100"
                  >
                    {enlace.label}
                    <FlechaDiagonal
                      size={13}
                      className="-translate-x-1 opacity-0 transition-all duration-400 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="font-sans text-[0.625rem] font-medium uppercase tracking-[0.24em] text-arcilla-400">
              Contacto
            </h3>
            <ul className="mt-5 space-y-3.5 text-[0.9375rem]">
              <li>
                <a
                  href="mailto:hola@origen.cafe"
                  className="group flex items-center gap-2.5 text-crema-200/70 transition-colors hover:text-crema-100"
                >
                  <Correo
                    size={16}
                    className="shrink-0 text-crema-200/40 transition-colors group-hover:text-arcilla-400"
                  />
                  hola@origen.cafe
                </a>
              </li>
              <li>
                <a
                  href="tel:+51999888777"
                  className="group flex items-center gap-2.5 text-crema-200/70 transition-colors hover:text-crema-100"
                >
                  <Telefono
                    size={16}
                    className="shrink-0 text-crema-200/40 transition-colors group-hover:text-arcilla-400"
                  />
                  +51 999 888 777
                </a>
              </li>
            </ul>

            <p className="mt-6 flex items-center gap-2 text-[0.8125rem] text-crema-200/40">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-verde-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-verde-500" />
              </span>
              Tostando esta semana
            </p>
          </div>
        </div>

        {/* ---------- Abajo ---------- */}
        <div className="flex flex-col items-center justify-between gap-3 py-7 text-[0.75rem] text-crema-200/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Origen · Todos los derechos reservados</p>
          <p className="text-crema-200/30">
            Comercio justo · Tostado semanal
          </p>
        </div>
      </div>
    </footer>
  );
}