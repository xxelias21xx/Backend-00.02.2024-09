const sumOfCubes = (...numeros) =>
    numeros.reduce((acc, num) => acc + Math.pow(num, 3), 0);
  
  console.log(sumOfCubes(1, 5, 9)); 

  