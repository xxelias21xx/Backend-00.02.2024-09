function calculadora(numero1,operacion,numero2) {
    let respuesta=0;

  switch (operacion) {
    case "x":
        respuesta=numero1*numero2;
        break;
    case "+":
        respuesta=numero1+numero2;
        break;
    case "-":
        respuesta=numero1-numero2;
        break;
    case "/":
        respuesta=numero1/numero2;
    default:
        break;
  }
  return respuesta;
    
}
let prueba=calculadora(5,"+",2);
console.log(prueba)