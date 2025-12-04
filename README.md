# 🌦️ Weather Frontend M2

Aplicación de clima (Frontend) desarrollada como MVP para el **Módulo 2** del Bootcamp.  
El proyecto utiliza **HTML5 semántico**, **Bootstrap 5** para estilos y diseño responsivo además de **CSS**, y **JavaScript básico** para la interacción.  
Se gestiona con **Git/GitHub** y se entrega con un README descriptivo.

---
---

## Colores dinámicos de las cards

Las cards cambian de color automáticamente según la descripción del clima:

| Clima detectado (descripción) | Clase CSS aplicada | Color de fondo | Ejemplo visual |
|-------------------------------|--------------------|----------------|----------------|
| `cielo claro` / `despejado`   | `.card-clear`      | Azul cielo `#87ceeb` | ☀️ Soleado |
| `nubes` / `algo de nubes`     | `.card-cloudy`     | Gris nublado `#b0c4de` | ☁️ Nublado |
| `lluvia` / `llovizna`         | `.card-rainy`      | Azul verdoso `#5f9ea0` | 🌧️ Lluvia |
| `tormenta` / `tormenta eléctrica` | `.card-storm`   | Gris oscuro `#3c3c3c` | ⛈️ Tormenta |

> ⚠️ Nota: se usa `!important` en el CSS para asegurar que los estilos personalizados prevalezcan sobre los de Bootstrap.

## Cómo funciona!

- En **main.js**, al crear cada card de ciudad se asigna la clase de color según la descripción del clima.
- En **detalle.js**, tanto la card principal como las del pronóstico semanal reciben la clase correspondiente.
- Los estilos están definidos en `assets/css/style.css`.

---
---

## Tecnologías utilizadas
- **HTML5 semántico** (header, nav, main, section, article, footer).
- **Bootstrap 5** (grid system, utilidades, componentes: navbar, cards, list-group).
- **CSS personalizado**:
  - Fondo con degradado azul cielo para ambientación climática.
  - Cards redondeadas con efecto hover y sombreado.
  - Iconos de clima centrados y ampliados.
  - Botones redondeados estilo app móvil.
  - Tipografía moderna y responsiva.
  - Separación de estilos generales y específicos por página.
- **JavaScript básico** (DOM, eventos, navegación simple).
- **Git/GitHub** (commits descriptivos, ramas, repositorio público).

---

## Estructura del proyecto

weather-frontend-m2/ │
├── index.html        
### Página Home con listado de ≥10 localidades 
├── detalle.html      
### Página de detalle con pronóstico semanal 
├── js/ │   └── main.js │ detalle.js     
### Interacciones básicas (click en card → detalle) 
├── css/    └── style.css          
### Estilos adicionales (opcional) 
├── README.md         
### Documentación del proyecto

---

## Funcionalidades principales
- **Home**:  
  - Grilla de ≥10 localidades presentadas como cards de Bootstrap.  
  - Cada card muestra icono, temperatura y estado actual.  
  - Botón para navegar al detalle de la localidad.

- **Detalle de localidad**:  
  - Datos ampliados: temperatura, humedad, viento.  
  - Pronóstico semanal mostrado en cards/list-group.  

- **Navegación**:  
  - Navbar con enlaces a Home, Detalle y Acerca de.  
  - Footer con información básica del proyecto.  

- **Responsive design**:  
  - Mobile-first (≤420px).  
  - Desktop (≥1024px).  

---

## Cómo usar
1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/weather-frontend-m2.git

