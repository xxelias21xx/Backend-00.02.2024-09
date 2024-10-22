function calculator(num1, operador, num2) {
    switch (operador) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : 'Error: División por 0';
      case '%':
        return num1 % num2;
      default:
        return 'El parámetro no es reconocido';
    }
  }
  console.log(calculator(2, '+', 2)); 
  console.log(calculator(2, '?', 2));
  