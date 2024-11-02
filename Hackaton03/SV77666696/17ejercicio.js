let horas = parseInt(prompt("Introduce la hora (formato 24 horas):"));
let minutos = parseInt(prompt("Introduce los minutos:"));
let segundos = parseInt(prompt("Introduce los segundos:"));

segundos++;

if (segundos === 60) {
    segundos = 0;
    minutos++;
}

if (minutos === 60) {
    minutos = 0;
    horas++;
}

if (horas === 24) {
    horas = 0;
}

console.log("La hora dentro de un segundo será: " + horas.toString().padStart(2, '0') + ":" + minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0'));
