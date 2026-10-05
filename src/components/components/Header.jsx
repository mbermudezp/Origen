import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

import { MenuDesktop, MenuMovil } from "./Menu";
import { Carrito, Cerrar, Grano, MenuHamburguesa } from "./Iconos";
import { useCarrito } from "../context/CarritoContext";

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolleado, setScrolleado] = useState(false);
  const location = useLocation();

  const { cantidad, total } = useCarrito();

  /* Fondo más sólido apenas se scrollea: separa la barra del contenido */
  useEffect(() => {
    function alScrollear() {
      setScrolleado(window.scrollY > 12);
    }

    alScrollear();
    window.addEventListener("scroll", alScrollear, { passive: true });
    return () => window.removeEventListener("scroll", alScrollear);
  }, []);

  /* Al navegar, cerrar el menú */
  useEffect(() => {
    setMenuAbierto(false);
  }, [location.pathname]);

  /* Bloquear el scroll del fondo y permitir cerrar con Esc */
  useEffect(() => {
    if (!menuAbierto) return;

    document.body.style.overflow = "hidden";

    function alPulsarTecla(evento) {
      if (evento.key === "Escape") setMenuAbierto(false);
    }

    window.addEventListener("keydown", alPulsarTecla);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", alPulsarTecla);
    };
  }, [menuAbierto]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolleado
            ? "border-b border-espresso-800/8 bg-crema-100/85 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-crema-100/50 backdrop-blur-sm"
        }`}
      >
        <div className="container-x">
          <div
            className={`flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolleado ? "h-16 lg:h-[4.25rem]" : "h-20 lg:h-24"
            }`}
          >
            {/* ---------- Marca ---------- */}
            <Link
              to="/"
              className="group flex items-center gap-3"
              aria-label="Origen, ir al inicio"
            >
              <Grano
                size={30}
                className="shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[18deg]"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[1.375rem] tracking-[-0.03em] text-espresso-800">
                  Origen
                </span>
                <span className="mt-1 hidden text-[0.5625rem] font-medium uppercase tracking-[0.32em] text-espresso-300 sm:block">
                  Café de especialidad
                </span>
              </span>
            </Link>

            {/* ---------- Navegación escritorio ---------- */}
            <div className="flex-1 lg:flex lg:justify-center">
              <MenuDesktop />
            </div>

            {/* ---------- Acciones ---------- */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* Carrito: link a /carrito con contador */}
              <Link
                to="/carrito"
                className="group relative flex items-center gap-2.5 rounded-full py-2 pl-2.5 pr-3 transition-colors duration-300 hover:bg-espresso-800/5"
                aria-label={`Carrito, ${cantidad} ${
                  cantidad === 1 ? "producto" : "productos"
                }`}
              >
                <span className="relative grid h-9 w-9 place-items-center rounded-full bg-espresso-800 text-crema-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5">
                  <Carrito size={18} />

                  {/* El badge se anima cada vez que la cantidad cambia */}
                  {cantidad > 0 && (
                    <span
                      key={cantidad}
                      className="an-pop absolute -right-1 -top-1 grid h-[1.375rem] min-w-[1.375rem] place-items-center rounded-full bg-arcilla-500 px-1 font-sans text-[0.625rem] font-semibold tabular-nums text-espresso-900 ring-2 ring-crema-100"
                    >
                      {cantidad}
                    </span>
                  )}
                </span>

                {/* El total se ve en escritorio, se oculta en móvil */}
                <span className="hidden min-w-[4.5rem] text-left sm:block">
                  <span className="block text-[0.5625rem] font-medium uppercase tracking-[0.18em] text-espresso-300">
                    Total
                  </span>
                  <span className="block font-display text-[0.9375rem] tabular-nums text-espresso-800">
                    ${total.toFixed(2)}
                  </span>
                </span>
              </Link>

              {/* Botón de menú, solo en móvil/tablet */}
              <button
                type="button"
                onClick={() => setMenuAbierto(true)}
                className="grid h-11 w-11 place-items-center rounded-full text-espresso-800 transition-colors duration-300 hover:bg-espresso-800/5 lg:hidden"
                aria-label="Abrir menú"
                aria-expanded={menuAbierto}
                aria-controls="menu-movil"
              >
                <MenuHamburguesa size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Drawer móvil ---------- */}
      <div
        className={`fixed inset-0 z-100 lg:hidden ${
          menuAbierto ? "" : "pointer-events-none"
        }`}
        aria-hidden={!menuAbierto}
      >
        {/* Fondo oscurecido */}
        <div
          onClick={() => setMenuAbierto(false)}
          className={`absolute inset-0 bg-espresso-900/45 backdrop-blur-sm transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuAbierto ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel lateral */}
        <div
          id="menu-movil"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className={`absolute inset-y-0 right-0 flex w-[min(23rem,88vw)] flex-col bg-crema-50 shadow-alto transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuAbierto ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-espresso-800/8 px-6 py-5">
            <span className="font-display text-lg tracking-tight text-espresso-800">
              Navegación
            </span>
            <button
              type="button"
              onClick={() => setMenuAbierto(false)}
              className="grid h-10 w-10 place-items-center rounded-full text-espresso-800 transition-colors duration-300 hover:bg-espresso-800/5"
              aria-label="Cerrar menú"
            >
              <Cerrar size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-2">
            <MenuMovil onNavegar={() => setMenuAbierto(false)} />
          </div>

          {/* Cierre del panel con un detalle visual */}
          <div className="border-t border-espresso-800/8 px-6 py-5">
            <div className="flex items-center justify-between rounded-2xl bg-crema-200/70 px-4 py-3.5">
              <span className="text-sm text-espresso-400">Tu carrito</span>
              <span className="font-display text-lg tabular-nums text-espresso-800">
                {cantidad} {cantidad === 1 ? "ítem" : "ítems"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}