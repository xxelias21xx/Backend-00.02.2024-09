function suma_cuadrados(n){
   
    let suma=0;
    for (let i = 0; i <= n; i++) {
         suma=suma + Math.pow(i,2);
         
        
        
    }
    return suma;
  



}


console.log(suma_cuadrados(3));