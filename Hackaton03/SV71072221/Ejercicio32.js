// 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. 
let nombreProvincia, ciudad, nombreCiudad, ciudadMayorPoblacion;
let poblacion = 0, mayorPoblacion = 0, i, j;
for (let i = 1; i <= 3; i++) {
    nombreProvincia = prompt("Ingrese el nombre de la provincia"+ i+":");
    for (let j = 1; j <= 11; j++) {
        nombreCiudad = prompt("Ingrese el nombre de la ciudad "+ j+ " de la provincia "+ nombreProvincia+ ":");
        poblacion = prompt("Ingrese la poblacion de la ciudad ", nombreCiudad, ":");
        if (poblacion > mayorPoblacion) {
            mayorPoblacion = poblacion;
            ciudadMayorPoblacion = nombreCiudad;
        };
    };
};
console.log("La ciudad con mayor poblacion es: ",ciudadMayorPoblacion," con una poblacion de ",mayorPoblacion);