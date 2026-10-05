/*
  Encabezado reutilizable para las páginas interiores.
  Mantiene el mismo ritmo visual que el Home: eyebrow + título + apoyo.
*/

export default function PageIntro({ eyebrow, titulo, bajada, children }) {
  return (
    <header className="grain relative overflow-hidden border-b border-espresso-800/8 bg-crema-100">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-arcilla-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative py-16 lg:py-24">
        {eyebrow && (
          <p className="eyebrow flex items-center gap-2.5">
            <span className="h-px w-8 bg-arcilla-500" />
            {eyebrow}
          </p>
        )}

        <h1 className="mt-5 max-w-3xl text-display text-espresso-800">
          {titulo}
        </h1>

        {bajada && (
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-espresso-300">
            {bajada}
          </p>
        )}

        {children}
      </div>
    </header>
  );
}