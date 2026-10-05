import { createBrowserRouter } from "react-router";

import Layout from "./components/Layout";
import { CarritoProvider } from "./components/context/CarritoContext";

import Home from "./components/pages/Home";
import Productos from "./components/pages/Productos";
import ProductoDetalle from "./components/pages/ProductoDetalle";
import Carrito from "./components/pages/Carrito";
import Contacto from "./components/pages/Contacto";
import NoEncontrada from "./components/pages/NoEncontrada";

/*
  Todas las rutas comparten Layout (Header + <Outlet/> + Footer).
  El Provider va adentro de la ruta raíz porque el router reemplaza
  el árbol de componentes por completo: no se puede envolver desde main.jsx.
*/

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CarritoProvider>
        <Layout />
      </CarritoProvider>
    ),
    errorElement: <NoEncontrada />,
    children: [
      { index: true, element: <Home /> },
      { path: "productos", element: <Productos /> },
      { path: "productos/:id", element: <ProductoDetalle /> },
      { path: "carrito", element: <Carrito /> },
      { path: "contacto", element: <Contacto /> },
      { path: "*", element: <NoEncontrada /> },
    ],
  },
]);