// 17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
let hora, minuto, seg, nhora, nminuto, nseg;
hora = prompt("Ingrese la hora a evaluar \nHH:");
hora = Number(hora);
minuto = prompt("Ingrese el minuto a evaluar \nMM:");
minuto = Number(minuto);
seg = prompt("Ingrese el segundo a evaluar \nSS:")
seg = Number(seg);
if (hora == 23 && minuto == 59 && seg == 59) {
    nhora = 0;
    nminuto = 0;
    nseg = 0;
} else {
    if (hora != 23 && minuto == 59 && seg == 59) {
        nhora = hora + 1;
        nminuto = 0;
        nseg = 0;
    } else {
        if (hora != 23 && minuto != 59 && seg == 59) {
            nhora = hora;
            nminuto = minuto + 1;
            nseg = 0;
        } else {
            nhora = hora;
            nminuto = minuto;
            nseg = seg + 1;
        }
    }
}
console.log("La hora dentro de un segundo será ", nhora, ":", nminuto, ":", nseg, ".");