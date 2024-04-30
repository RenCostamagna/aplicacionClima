let api_key = "7448086536abaa96599e369fa9b176fb"
let urlBase = "https://api.openweathermap.org/data/3.0/weather"
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(response){
    console.log(response)
    const divDatosClima = document.getElementById("datosClima")
    divDatosClima.innerHTML = " "

    const ciudadNombre = response.name
    const temperatura = response.main.temp
    const descripcion = response.weather[0].description

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${temperatura - difKelvin}C`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = descripcion

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
} 