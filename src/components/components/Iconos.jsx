const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Icono({ children, size = 24, className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...base}
      {...props}
    >
      {children}
    </svg>
  );
}

/* ---------- Marca / logo ---------- */

export function Grano({ size = 32, className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      <circle cx="16" cy="16" r="15" className="fill-arcilla-500" />
      {/* Grano de café visto de perfil, con la costura central */}
      <path
        d="M16 5.5c4.7 0 8.5 4.7 8.5 10.5S20.7 26.5 16 26.5 7.5 21.8 7.5 16 11.3 5.5 16 5.5Z"
        className="fill-espresso-800"
      />
      <path
        d="M16 6.5c-2.6 3-2.6 16 0 19M16 6.5c2.6 3 2.6 16 0 19"
        className="stroke-arcilla-400"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------- Navegación ---------- */

export function MenuHamburguesa({ size = 24, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </Icono>
  );
}

export function Cerrar({ size = 24, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Icono>
  );
}

export function Flecha({ size = 18, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </Icono>
  );
}

export function FlechaDiagonal({ size = 16, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <path d="M7 17L17 7M8.5 7H17v8.5" />
    </Icono>
  );
}

/* ---------- Carrito ---------- */

export function Carrito({ size = 22, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <path d="M2.5 3h2.2l2.4 11.4a1.8 1.8 0 0 0 1.8 1.4h8.3a1.8 1.8 0 0 0 1.8-1.4L21 7H6" />
      <circle cx="9.5" cy="20" r="1.4" />
      <circle cx="17.5" cy="20" r="1.4" />
    </Icono>
  );
}

export function Mas({ size = 18, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <path d="M12 5.5v13M5.5 12h13" />
    </Icono>
  );
}

export function Resta({ size = 18, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <path d="M5.5 12h13" />
    </Icono>
  );
}

/* ---------- Propiedades de la tienda ---------- */

export function Hoja({ size = 24, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <path d="M4.5 19.5c0-8 5-14 15-14 0 10-5.5 14-11 14-2.2 0-4-1-4 0Z" />
      <path d="M4.5 19.5C7 15 10 12 14.5 10" />
    </Icono>
  );
}

export function Fuego({ size = 24, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <path d="M12 2.5s5.5 4.2 5.5 9a5.5 5.5 0 0 1-11 0c0-2 1-3.4 2-4.3.3 1.4 1.2 2 2 2 0-2.6.4-4.4 1.5-6.7Z" />
      <path d="M12 21a2.8 2.8 0 0 1-2.8-2.8c0-1.6 2.8-4.2 2.8-4.2s2.8 2.6 2.8 4.2A2.8 2.8 0 0 1 12 21Z" />
    </Icono>
  );
}

export function Camion({ size = 24, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <path d="M2.5 6.5h11v10h-11z" />
      <path d="M13.5 10h4l4 3.2v3.3h-8z" />
      <circle cx="7" cy="18.5" r="1.8" />
      <circle cx="17.5" cy="18.5" r="1.8" />
    </Icono>
  );
}

export function Reloj({ size = 24, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.2l3.2 2" />
    </Icono>
  );
}

/* ---Social / contacto --- */

export function Correo({ size = 20, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Icono>
  );
}

export function Telefono({ size = 20, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <path d="M8.5 3.5H5A1.5 1.5 0 0 0 3.5 5c0 8.6 6.9 15.5 15.5 15.5a1.5 1.5 0 0 0 1.5-1.5v-3.5l-4-1.5-2 2a13 13 0 0 1-5-5l2-2-1.5-4Z" />
    </Icono>
  );
}

export function Ubicacion({ size = 20, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <path d="M12 21.5s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </Icono>
  );
}

export function Instagram({ size = 20, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7v-.5" />
    </Icono>
  );
}

export function Comilla({ size = 28, className = "" }) {
  return (
    <Icono size={size} className={className} strokeWidth={1.2}>
      <path d="M9.5 6.5C6.5 8 5 10.5 5 14v3.5h4.5V11H7.7c.2-1.6 1-2.9 2.4-3.9l-.6-.6ZM18.5 6.5C15.5 8 14 10.5 14 14v3.5h4.5V11h-1.8c.2-1.6 1-2.9 2.4-3.9l-.6-.6Z" />
    </Icono>
  );
}

export function Check({ size = 18, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Icono>
  );
}

export function Buscar({ size = 20, className = "" }) {
  return (
    <Icono size={size} className={className}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </Icono>
  );
}

export function Vacio({ size = 56, className = "" }) {
  return (
    <Icono size={size} className={className} strokeWidth={1}>
      <path d="M4.5 5.5h15l-1.2 14a2 2 0 0 1-2 1.8H7.7a2 2 0 0 1-2-1.8L4.5 5.5Z" />
      <path d="M8.5 9V6.8a3.5 3.5 0 0 1 7 0V9" />
    </Icono>
  );
}