let ciudades = [];
let mayorPoblacion = 0;
let ciudadConMayorPoblacion = "";

for (let i = 1; i <= 11; i++) {
    let nombreCiudad = prompt("Introduce el nombre de la ciudad " + i + ":");
    let poblacionCiudad = parseInt(prompt("Introduce la población de " + nombreCiudad + ":"));

    ciudades.push({ nombre: nombreCiudad, poblacion: poblacionCiudad });

    if (poblacionCiudad > mayorPoblacion) {
        mayorPoblacion = poblacionCiudad;
        ciudadConMayorPoblacion = nombreCiudad;
    }
}

console.log("La ciudad con mayor población es: " + ciudadConMayorPoblacion + " con una población de " + mayorPoblacion + " personas.");
