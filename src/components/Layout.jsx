import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

/*
  Layout envuelve a TODAS las páginas con el Header y el Footer.
  Antes cada página los repetía en su propio JSX (y se olvidaba uno).
*/

export default function Layout() {
  const location = useLocation();

  /* Al cambiar de ruta, volver arriba */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="flex min-h-dvh flex-col">
      {/* Salto al contenido: accesibilidad para teclado y lector de pantalla */}
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-200 focus:rounded-full focus:bg-espresso-800 focus:px-5 focus:py-3 focus:text-sm focus:text-crema-50"
      >
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido" className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}