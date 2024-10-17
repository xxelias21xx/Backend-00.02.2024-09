// 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
let salario, aumento, nuevoSalario;
salario = prompt("Ingrese el salario del trabajador");
salario = Number(salario);
if (salario > 2000) {
    aumento = salario * 0.05;
} else {
    aumento = salario * 0.1
}
nuevoSalario = salario + aumento;
console.log("El aumento es de $", aumento,", por lo tanto, el nuevo sueldo es de $", nuevoSalario,".");