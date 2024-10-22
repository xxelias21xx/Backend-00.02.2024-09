const filterList = (arr) => arr.filter(item => typeof item === 'number');

console.log(filterList([1, 2, 3, "x", "y", 10])); 

