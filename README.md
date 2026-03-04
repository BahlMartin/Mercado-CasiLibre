# Clon de MercadoLibre (Mockup en React)

## Descripción del Proyecto
Este proyecto es un clon de la interfaz (mockup) del popular sitio de e-commerce MercadoLibre, desarrollado íntegramente utilizando React. El objetivo principal de la aplicación es recrear la experiencia de navegación, búsqueda, visualización de productos y el flujo del carrito de compras, manteniendo la estética visual característica de la plataforma.

---

## Limitaciones del Proyecto

### Funcionalidades Pendientes
Los siguientes botones y elementos visuales están deshabilitados o no tienen una acción asignada por el momento, ya que su funcionalidad se añadirá en una versión futura:
*   Botón de ubicación (`navbar__location`)
*   Ítem de usuario (`navbar__user-item`)
*   Opciones de usuario (`navbar__user-option`)
*   Textos secundarios de navegación (`navbar__text--secondary`)
*   Botones de **Comprar** (tanto en el detalle del producto como en otras secciones).

### Diseño Responsivo
Existen diferencias funcionales con respecto a la aplicación móvil real de MercadoLibre. Si bien el proyecto implementa un diseño responsivo adaptativo (para navegadores móviles y tablets), **no replica la UI nativa celular de la app de MercadoLibre**, sino que es una adaptación de la experiencia web de escritorio colapsada para funcionar correctamente en resoluciones menores (hasta 360px).

---

## Librerías Usadas
El proyecto utiliza herramientas modernas del ecosistema de React para garantizar modularidad y rendimiento:
*   **React (v19)**: Biblioteca principal para la construcción de interfaces de usuario.
*   **React Router DOM**: Para el enrutamiento de páginas (Home, Search, Product Detail, Cart).
*   **React Icons**: Para la iconografía del sistema.
*   **Vite**: Entorno de desarrollo ultrarrápido y empaquetador moderno (reemplazo de Webpack).

---

## Arquitectura del Proyecto

El proyecto sigue una estructura basada en componentes y separación de responsabilidades:
*   `src/Components/`: Todo bloque de interfaz de usuario reutilizable.
*   `src/Screen/`: Los layouts o vistas completas que agrupan los componentes y se mapean a una ruta (URL).
*   `src/Context/`: Estado global de la aplicación.
*   `src/Hooks/`: Lógica reutilizable abstraída de los componentes.

---

## Funcionalidad de las Pantallas (`Screens`)

1.  **Home (`/`)**: Pantalla principal de aterrizaje. Muestra un carrusel de imágenes destacadas y listas de productos recomendados o en oferta.
2.  **Search (`/search`)**: Pantalla donde el usuario llega tras utilizar la barra de búsqueda. Presenta la cuadrícula de productos filtrados junto con la barra de filtros dinámica (categorías, envíos, precio).
3.  **ProductDetail (`/item/:id`)**: La vista profunda de un producto. Muestra información detallada como la galería de fotos, el panel lateral con el precio, opciones de envío, descripciones y preguntas/opiniones del producto.
4.  **Cart (`/cart`)**: La pantalla del carrito de compras donde se listan los ítems seleccionados, el controlador para modificar cantidades, cálculos de envío y el resumen de la pre-compra.

---

## Funcionalidad de los Contextos (`Context`)

1.  **`ProductContext`**: Se encarga de proveer a toda la aplicación el catálogo global de productos, simulando una base de datos o llamada a una API, y facilitando el acceso a los datos de cualquier ítem en toda la rama de componentes.
2.  **`CarContext`**: Maneja el estado global del "Carrito de Compras". Expone las funciones y estados necesarios para agregar, quitar, modificar cantidades de productos en el carrito y calcular el subtotal global.
3.  **`Chatcontext`**: Encargado de manejar el estado lógico, los mensajes y respuestas automáticas del `Chatbot` del sistema interactivo (por ejemplo, sugiriendo los productos más vendidos).

---

## Funcionalidad de los Hooks Automáticos (`Hooks`)

*   **`useSearchFilters`**: Extrae la lógica compleja de filtrado. Recibe una lista de productos y aplica dinámicamente cruces de filtros (como rango de precios, envío gratis, si llega hoy o categorías específicas) basándose en los parámetros de la URL o el estado interno, devolviendo a la vista respectiva únicamente los productos permitidos.

---

## Componentes Principales

La aplicación está fragmentada modularmente en los siguientes bloques (sin detallar sus subcomponentes internos):
*   **NavBar**: El encabezado global que incluye el logo, la configuración de la dirección, opciones de usuario y sub-menús.
*   **SearchBar**: El componente de la caja de búsqueda localizado en el NavBar para redirigir a resultados.
*   **Carousel & CarouselButton**: Controlan los sliders promocionales principales en el Home.
*   **ProductList**: Una sección general para renderizar filas deslizables (tipo carrusel de base) de múltiples productos recomendados.
*   **ProductCard**: La tarjeta individual básica de un producto utilizada comúnmente en la lista del Home.
*   **SearchResultItem**: Una tarjeta más detallada (normalmente en fila o en una cuadrícula específica) usada exclusivamente en la pantalla de búsquedas.
*   **SearchFilters**: Componentes encargados de renderizar la barra lateral (en desktop) o píldoras (en mobile) que interactúan con el hook de filtros.
*   **ProductDetail**: El componente matriz que se renderiza dentro del Screen homónimo para mostrar la distribución visual técnica del producto (fotos, título, envío).
*   **ProductStars**: Maneja visualmente la reputación del producto.
*   **Cart**: El contenedor de tabla lógico donde se listan los ítems reservados para la compra.
*   **Chatbot**: La ventana emergente amigable que asiste al usuario con opciones simuladas mediante el chat.
*   **Footer**: El pie de página con información legal o enlaces de interés.
*   **UI**: Elementos súper-genéricos como componentes atómicos abstractos reutilizables en cualquier sección (ej: botones genéricos o un renderizador de precios avanzado).
