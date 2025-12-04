const apiKey = "437347debbfcbe7d1d65cfd7e0dc54ac"; // API Key de OpenWeatherMap

// Obtener ciudad desde la URL (?city=Nombre)
const params = new URLSearchParams(window.location.search);
const ciudad = params.get("city") || "Quilpué";

// Actualizar título
document.getElementById("titulo").textContent = `${ciudad} – Detalle del Clima`;

// Endpoint clima actual
const urlActual = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

// Endpoint pronóstico 5 días (cada 3 horas)
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

// Clima actual
fetch(urlActual)
  .then(res => res.json())
  .then(data => {
    document.getElementById("temp").textContent = `${data.main.temp}°C`;
    document.getElementById("estado").textContent = data.weather[0].description;
    document.getElementById("humedad").textContent = `Humedad: ${data.main.humidity}%`;
    document.getElementById("viento").textContent = `Viento: ${data.wind.speed} km/h`;

    // Aplicar color dinámico al contenedor principal del clima actual
    const descripcion = data.weather[0].description.toLowerCase();
    const detalleCard = document.getElementById("detalle-card"); // asegúrate de tener un div con id="detalle-card"

    if (descripcion.includes("claro")) {
      detalleCard.classList.add("card-clear");
    } else if (descripcion.includes("nube")) {
      detalleCard.classList.add("card-cloudy");
    } else if (descripcion.includes("lluvia")) {
      detalleCard.classList.add("card-rainy");
    } else if (descripcion.includes("tormenta")) {
      detalleCard.classList.add("card-storm");
    }
  })
  .catch(err => console.error("Error clima actual:", err));

// Pronóstico semanal (simplificado: 1 por día)
fetch(urlForecast)
  .then(res => res.json())
  .then(data => {
    const pronosticoContainer = document.getElementById("pronostico");

    // Agrupar por día (tomamos la primera entrada de cada día)
    const dias = {};
    data.list.forEach(item => {
      const fecha = new Date(item.dt_txt);
      const dia = fecha.toLocaleDateString("es-ES", { weekday: "long" });
      if (!dias[dia]) {
        dias[dia] = item;
      }
    });

    Object.keys(dias).forEach(dia => {
      const info = dias[dia];
      const descripcion = info.weather[0].description.toLowerCase();

      // Determinar clase de color según clima
      const cardColor = descripcion.includes("claro") ? "card-clear"
                     : descripcion.includes("nube") ? "card-cloudy"
                     : descripcion.includes("lluvia") ? "card-rainy"
                     : descripcion.includes("tormenta") ? "card-storm"
                     : "";

      const card = document.createElement("div");
      card.className = "col-sm-6 col-md-4 mb-3";

      card.innerHTML = `
        <div class="card text-center ${cardColor}">
          <div class="card-body">
            <h5 class="card-title">${dia}</h5>
            <p>
              <img src="https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png" alt="icono clima">
            </p>
            <p>${info.main.temp}°C – ${info.weather[0].description}</p>
          </div>
        </div>
      `;

      pronosticoContainer.appendChild(card);
    });
  })
  .catch(err => console.error("Error pronóstico:", err));