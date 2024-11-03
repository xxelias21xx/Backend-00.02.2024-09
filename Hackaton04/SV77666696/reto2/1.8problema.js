const findLargestNums = (matriz) =>
    matriz.map(arr => Math.max(...arr));
  
  console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); 
  