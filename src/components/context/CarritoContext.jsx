import { createContext, useContext, useMemo, useState } from "react";

/*
  El carrito vive aquí y no dentro de una página, porque lo necesitan
  varias a la vez: el Header muestra el contador, /productos agrega,
  /carrito muestra la lista. Context permite compartirlo sin pasarlo
  por props a través de todas.
*/

const CarritoContext = createContext(null);

export function CarritoProvider({ children }) {
  const [items, setItems] = useState([]);

  function agregar(producto) {
    // El estado NUNCA se muta: se reemplaza por uno nuevo.
    setItems((actuales) => [...actuales, producto]);
  }

  function restar(id) {
    setItems((actuales) => actuales.filter((item) => item.id !== id));
  }

  function vaciar() {
    setItems([]);
  }

  function estaEnCarrito(id) {
    return items.some((item) => item.id === id);
  }

  const total = items.reduce((suma, item) => suma + item.precio, 0);
  const cantidad = items.length;

  const valor = useMemo(
    () => ({ items, agregar, restar, vaciar, estaEnCarrito, total, cantidad }),
    [items, total, cantidad],
  );

  return <CarritoContext.Provider value={valor}>{children}</CarritoContext.Provider>;
}

export function useCarrito() {
  const contexto = useContext(CarritoContext);

  if (!contexto) {
    throw new Error("useCarrito debe usarse dentro de <CarritoProvider>");
  }

  return contexto;
}