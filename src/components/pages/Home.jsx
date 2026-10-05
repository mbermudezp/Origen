import { Link } from "react-router";

import ProductCard from "../components/ProductCard";
import {
  Camion,
  Comilla,
  Flecha,
  Fuego,
  Grano,
  Hoja,
  Reloj,
} from "../components/Iconos";
import { productos } from "../../data/productos";

/* Los datos viven fuera del componente: la vista solo los muestra */
const destacados = productos.slice(0, 3);

const propiedades = [
  {
    icono: Hoja,
    titulo: "Origen directo",
    texto: "Compramos en finca a caféteros de Colombia, Perú y Etiopía.",
  },
  {
    icono: Fuego,
    titulo: "Tostado semanal",
    texto: "Lotes de 12 kilos, tostados cada martes. Nunca reposan meses.",
  },
  {
    icono: Camion,
    titulo: "Envío en 48 h",
    texto: "Empacamos con válvula desgasificadora y sale el mismo día.",
  },
  {
    icono: Reloj,
    titulo: "Fresco, no nuevo",
    texto: "Lo importante no es la fecha, es que te rinda bien al seventh mes.",
  },
];

const pasos = [
  {
    numero: "01",
    titulo: "Recolecta",
    texto:
      "Solo compramos izinza en cosecha plena. El café maduro demais tiene más azúcar y menos acidez.",
  },
  {
    numero: "02",
    titulo: "Tueste",
    texto:
      "Perfiles cortos y medias development. Buscamos que el cuerpo sea limpio y la taza legible.",
  },
  {
    numero: "03",
    titulo: "Reposo",
    texto:
      "Cinco días de reposo antes de envasar. Es cuando los gases se asientan y aparecen los aromas.",
  },
];

export default function Home() {
  return (
    <>
      {/* ==========================================================
          HERO
          ========================================================== */}
      <section className="grain relative overflow-hidden bg-crema-100">
        {/* Halos de luz cálida en el fondo */}
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-arcilla-200/45 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-56 -right-32 h-[38rem] w-[38rem] rounded-full bg-arcilla-300/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-x relative">
          <div className="grid items-center gap-16 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-28 lg:pt-20">
            {/* ---------- Texto ---------- */}
            <div className="cascada">
              <p className="eyebrow flex items-center gap-2.5">
                <span className="h-px w-8 bg-arcilla-500" />
                Tostado artesanal
              </p>

              <h1 className="mt-6 text-hero text-espresso-800">
                Del productor
                <br />
                <span className="italic text-arcilla-600">a tu taza</span>
              </h1>

              <p className="mt-7 max-w-lg text-[1.0625rem] leading-relaxed text-espresso-300 sm:text-lg">
                Compramos en finca, tostamos en lotes de doce kilos y te mandamos
                el café cinco días después del tueste. Sin intermediarios ni
                meses de almacén.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/productos"
                  className="boton-base bg-espresso-800 text-crema-50 hover:bg-espresso-700 hover:shadow-medio"
                >
                  Ver el catálogo
                  <Flecha size={17} />
                </Link>

                <Link
                  to="/contacto"
                  className="boton-base border border-espresso-800/20 text-espresso-800 hover:border-espresso-800/45 hover:bg-espresso-800/4"
                >
                  Cómo trabajamos
                </Link>
              </div>

              {/* Cifras de credibilidad */}
              <dl className="mt-12 flex max-w-md items-center gap-8 border-t border-espresso-800/10 pt-7">
                {[
                  { valor: "11", unidad: "fincas" },
                  { valor: "4", unidad: "orígenes" },
                  { valor: "48 h", unidad: "de envío" },
                ].map((dato) => (
                  <div key={dato.unidad}>
                    <dt className="font-display text-[1.75rem] leading-none tracking-tight text-espresso-800">
                      {dato.valor}
                    </dt>
                    <dd className="mt-1.5 text-[0.75rem] uppercase tracking-[0.14em] text-espresso-300">
                      {dato.unidad}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* ---------- Composición visual ---------- */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Tarjeta principal */}
              <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-crema-200 to-crema-400 p-8 shadow-alto">
                <span className="grain absolute inset-0" />

                <div className="relative flex aspect-[4/5] flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-crema-50/80 px-3.5 py-1.5 text-[0.625rem] font-medium uppercase tracking-[0.18em] text-espresso-700 backdrop-blur-sm">
                      Lote 042
                    </span>
                    <Grano size={26} className="text-espresso-800/30" />
                  </div>

                  {/* Ilustración: taza con vapor */}
                  <div className="grid place-items-center">
                    <svg
                      viewBox="0 0 140 140"
                      className="an-flotar h-40 w-40 text-espresso-800/70 sm:h-48 sm:w-48"
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

                  <div>
                    <p className="font-display text-[1.375rem] leading-tight tracking-tight text-espresso-800">
                      Yirgacheffe
                    </p>
                    <p className="mt-1 text-[0.8125rem] text-espresso-400">
                      Etiopía · Lavado
                    </p>
                  </div>
                </div>
              </div>

              {/* Tarjeta flotante: nota de cata */}
              <div className="an-flotar absolute -bottom-5 -left-4 w-52 rounded-2xl bg-crema-50/95 p-5 shadow-medio backdrop-blur-md sm:-left-8">
                <p className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-espresso-300">
                  Notas de cata
                </p>
                <p className="mt-2.5 font-display text-[0.9375rem] leading-snug text-espresso-800">
                  Jazmín, durazno blanco y miel de azahar.
                </p>
              </div>

              {/* Sello circular */}
              <div className="absolute -right-4 -top-4 grid h-24 w-24 place-items-center rounded-full bg-espresso-800 shadow-medio sm:-right-6">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full animate-[girar-lento_18s_linear_infinite]"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="circular"
                      d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0"
                      fill="none"
                    />
                  </defs>
                  <text className="fill-arcilla-400 text-[9.5px] uppercase tracking-[0.3em]">
                    <textPath href="#circular">
                      Tueste semanal · Comercio justo ·
                    </textPath>
                  </text>
                </svg>
                <Grano size={26} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          PROPIEDADES
          ========================================================== */}
      <section className="border-y border-espresso-800/8 bg-crema-50">
        <div className="container-x">
          <ul className="grid divide-espresso-800/8 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
            {propiedades.map(({ icono: Icono, titulo, texto }) => (
              <li key={titulo} className="group flex gap-4 py-9 sm:px-7 lg:flex-col lg:gap-4 lg:py-11 first:lg:pl-0">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-crema-200 text-espresso-700 transition-colors duration-500 group-hover:bg-arcilla-200">
                  <Icono size={20} />
                </span>
                <div>
                  <h3 className="font-sans text-[0.9375rem] font-medium text-espresso-800">
                    {titulo}
                  </h3>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-espresso-300">
                    {texto}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==========================================================
          DESTACADOS
          ========================================================== */}
      <section className="relative overflow-hidden bg-crema-100 py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow flex items-center gap-2.5">
                <span className="h-px w-8 bg-arcilla-500" />
                La selección
              </p>
              <h2 className="mt-5 text-display text-espresso-800">
                Tres cafes para
                <br />
                <span className="italic text-arcilla-600">empezar bien</span>
              </h2>
            </div>

            <Link
              to="/productos"
              className="group inline-flex shrink-0 items-center gap-2 text-[0.9375rem] font-medium text-espresso-800"
            >
              <span className="subrayado">Ver los seis</span>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-espresso-800/15 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-espresso-800 group-hover:bg-espresso-800 group-hover:text-crema-50">
                <Flecha size={15} />
              </span>
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destacados.map((producto, i) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                indice={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          PROCESO
          ========================================================== */}
      <section className="grain relative overflow-hidden bg-espresso-800 py-24 text-crema-200/70 lg:py-32">
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[30rem] w-[30rem] rounded-full bg-arcilla-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-x relative">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-2.5 text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-arcilla-400">
                <span className="h-px w-8 bg-arcilla-400/60" />
                Del grano a la taza
              </p>
              <h2 className="mt-5 text-display text-crema-100">
                Tres pasos,
                <br />
                <span className="italic text-arcilla-400">nada de misterio</span>
              </h2>
              <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-crema-200/55">
                La diferencia entre un café bueno y uno memorable casi nunca está
                en la marca. Está en tres decisiones que se pueden explicar.
              </p>
            </div>

            <ol className="divide-y divide-crema-200/10 border-y border-crema-200/10">
              {pasos.map((paso) => (
                <li
                  key={paso.numero}
                  className="group grid gap-3 py-8 sm:grid-cols-[auto_1fr] sm:gap-8"
                >
                  <span className="font-display text-sm tracking-[0.2em] text-arcilla-400">
                    {paso.numero}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.375rem] tracking-tight text-crema-100">
                      {paso.titulo}
                    </h3>
                    <p className="mt-2 max-w-lg text-[0.9375rem] leading-relaxed text-crema-200/55">
                      {paso.texto}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ==========================================================
          TESTIMONIO
          ========================================================== */}
      <section className="bg-crema-50 py-24 lg:py-32">
        <div className="container-x">
          <figure className="mx-auto max-w-3xl text-center">
            <Comilla size={34} className="mx-auto text-arcilla-300" />
            <blockquote className="mt-7 font-display text-[1.5rem] leading-[1.35] tracking-tight text-espresso-800 sm:text-[2rem] sm:leading-[1.3]">
              “Es la primera vez que un café me recuerda de lugar. Sé en qué
              finca lo cosecharon y eso lo cambia todo.”
            </blockquote>
            <figcaption className="mt-8 text-[0.8125rem] text-espresso-300">
              <span className="font-medium text-espresso-800">Mariana-flop.</span>
              <span className="mx-2 text-espresso-800/20">—</span>
              Clienta desde marzo
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ==========================================================
          CIERRE
          ========================================================== */}
      <section className="border-t border-espresso-800/8 bg-crema-100">
        <div className="container-x">
          <div className="flex flex-col items-center gap-8 py-20 text-center lg:flex-row lg:justify-between lg:py-24 lg:text-left">
            <div className="max-w-xl">
              <h2 className="text-display text-espresso-800">
                ¿Hablamos de tu
                <span className="italic text-arcilla-600"> café?</span>
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-espresso-300">
                Contanos cómo tomás el café y te decimos cuál de los seis te va a gustar
                más. Si no hay match, te lo decimos.
              </p>
            </div>

            <Link
              to="/contacto"
              className="boton-base shrink-0 bg-espresso-800 text-crema-50 hover:bg-espresso-700 hover:shadow-medio"
            >
              Escribinos
              <Flecha size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}