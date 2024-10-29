function sumOfCubes(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + Math.pow(numero, 3), 0);
  }
  console.log(sumOfCubes(1, 5, 9)); 
  