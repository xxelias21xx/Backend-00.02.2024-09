function encontrarIndices(cadena, caracter) {
    // Encontrar el primer índice
    const primerIndice = cadena.indexOf(caracter);
  
    // Si el caracter no se encuentra, devolver -1 para ambos índices
    if (primerIndice === -1) {
      return console.log("indice no econtrado");
    }
  
    // Encontrar el último índice utilizando lastIndexOf
    const ultimoIndice = cadena.lastIndexOf(caracter);
  
    return [primerIndice, ultimoIndice];
  }

const palabra ="hello";
const caracter = "i";
const indices = encontrarIndices(palabra, caracter);
console.log(indices); // Output: [3, 3]