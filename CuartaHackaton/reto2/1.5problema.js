const filtrarStrings = (array) => array.filter(item => typeof item === 'string');

console.log(filtrarStrings([1, "hola", 3, "mundo", true])); 
