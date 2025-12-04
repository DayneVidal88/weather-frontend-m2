// Lista de ciudades que quieres mostrar
const ciudades = ["Santiago", "Valparaíso", "Quilpué", "Buenos Aires", "Madrid", "Londres", "París", "Roma", "Nueva York", "Tokio", "Sydney"];

const apiKey = "437347debbfcbe7d1d65cfd7e0dc54ac"; // API Key de OpenWeatherMap
const container = document.getElementById("ciudades-container");

document.addEventListener("DOMContentLoaded", () => {
  ciudades.forEach(ciudad => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        // Obtener descripción del clima
          const descripcion = data.weather[0].description.toLowerCase();

          // Determinar clase de color según clima
          const cardColor = descripcion.includes("claro") ? "card-clear"
                        : descripcion.includes("nube") ? "card-cloudy"
                        : descripcion.includes("lluvia") ? "card-rainy"
                        : descripcion.includes("tormenta") ? "card-storm"
                        : "";

          // Crear card con clase de color aplicada al div.card
          const card = document.createElement("article");
          card.className = "col-md-4 col-sm-6 mb-3";

          card.innerHTML = `
            <div class="card shadow text-center ${cardColor}">
              <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">
                  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icono clima">
                </p>
                <p class="card-text">${data.main.temp}°C – ${data.weather[0].description}</p>
                <a href="detalle.html?city=${data.name}" class="btn btn-primary">Ver detalle</a>
              </div>
            </div>
          `;

          container.appendChild(card);

      })
      .catch(err => {
        console.error("Error al obtener datos:", err);
      });
  });
});