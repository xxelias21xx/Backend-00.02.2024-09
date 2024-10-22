String.prototype.remplazar=function vocales(vocal){

    let listavovales=/[aeiou]/gi;

    return this.replace(listavovales,vocal)



}
const cadena = "Hola, mundo!";
const nuevaCadena = cadena.remplazar("e");
console.log(nuevaCadena);