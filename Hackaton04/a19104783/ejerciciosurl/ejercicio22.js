function capitalizeLastLetters(str) {
    return str.split(' ')
              .map(word => {
                return word.slice(0, -1) + word.slice(-1).toUpperCase();
              })
              .join(' ');
  }

  const frase = "esto es una prueba";
  const resultado = capitalizeLastLetters(frase);
  console.log(resultado);