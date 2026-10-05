import { NavLink } from "react-router";
import { FlechaDiagonal } from "./Iconos";

/*
  Las rutas viven en un solo lugar. Si mañana agregás "/blog", lo
  cambiás acá y aparece en el menú de escritorio y en el móvil.
*/

export const enlaces = [
  { to: "/", label: "Inicio", descripcion: "Volver al comienzo" },
  { to: "/productos", label: "Cafés", descripcion: "Catálogo completo" },
  { to: "/contacto", label: "Contacto", descripcion: "Hablá con nosotros" },
];

/* Variante "desktop": línea horizontal, discreta, con subrayado animado */
export function MenuDesktop() {
  return (
    <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegación principal">
      {enlaces.map((enlace) => (
        <NavLink
          key={enlace.to}
          to={enlace.to}
          end={enlace.to === "/"}
          className={({ isActive }) =>
            `subrayado text-[0.9375rem] transition-colors duration-300 ${
              isActive
                ? "text-espresso-800"
                : "text-espresso-300 hover:text-espresso-800"
            }`
          }
        >
          {({ isActive }) => (
            <span data-activo={isActive}>{enlace.label}</span>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

/* Variante "móvil": vertical, con número y descripción. Más legible en pantalla chica */
export function MenuMovil({ onNavegar }) {
  return (
    <nav className="flex flex-col" aria-label="Navegación principal">
      {enlaces.map((enlace, i) => (
        <NavLink
          key={enlace.to}
          to={enlace.to}
          end={enlace.to === "/"}
          onClick={onNavegar}
          className={({ isActive }) =>
            `group flex items-start gap-4 border-b border-espresso-800/8 py-6 transition-colors ${
              isActive ? "text-espresso-800" : "text-espresso-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span
                className={`mt-1.5 font-display text-xs tabular-nums transition-colors ${
                  isActive ? "text-arcilla-600" : "text-espresso-800/25"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="flex-1">
                <span className="block font-display text-2xl tracking-tight">
                  {enlace.label}
                </span>
                <span className="mt-0.5 block text-sm text-espresso-800/45">
                  {enlace.descripcion}
                </span>
              </span>

              <FlechaDiagonal
                size={18}
                className={`mt-2 -translate-x-1 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 ${
                  isActive ? "translate-x-0 text-arcilla-600 opacity-100" : ""
                }`}
              />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}