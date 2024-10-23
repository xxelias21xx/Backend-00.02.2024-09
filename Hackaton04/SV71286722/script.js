//Ejercicio IV.1
let sum = (a,b) => {return a+b}

console.log(`---------------`)
console.log(`--Ejercicio 1--`)
console.log(sum(1,2))
console.log(`---------------`)

//Ejercicio IV.2
const powjs = (a,b) => {return a**b} 

console.log(`--Ejercicio 2--`)
console.log(powjs(2,3))
console.log(`---------------`)

//Ejercicio IV.3
let sumOfCubes = (...args) => {
    let sum = 0
    for(let i of args){
        sum += i**3
    }
    return sum
}

console.log(`--Ejercicio 3--`)
console.log(sumOfCubes(1,5,9))
console.log(`---------------`)

//Ejercico IV.4
const triArea = (a,b) => {return a*b/2}

console.log(`--Ejercicio 4--`)
console.log(triArea(3,2))
console.log(`---------------`)

//Ejercicio IV.5
const calculator = (a,b,c) => {

    switch(b){
        case "+": return a+c
        case "-": return a-c
        case "/": return a/c
        case "x": return a*c
        case "%": return a%c
        default: return "El parámetro no es reconocido"
    }
}

console.log(`--Ejercicio 5--`)
console.log(calculator(4,"%",2))
console.log(`---------------`)

/*

PREGUNTAS:

-  ¿Cómo defines una función?
Para definir una función en JavaScript, puedes utilizar la palabra clave function o en forma de flecha.
-  ¿Hasta cuantos argumentos puedes declarar en una función?
Puedes declarar argumentos infinitos(rest parameters).

*/

//Ejercicio 1
const intro = (name, lastname, age) => {
    name = name.charAt(0).toUpperCase() + name.slice(1)
    lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1)
    age = parseInt(age)
    return `Hola, mi nombre es ${name} ${lastname} y mi edad es ${age}`}

console.log(`--Ejercicio 1--`)
console.log(intro("juan","perez","33"))
console.log(`---------------`)

//Ejercicio 2
sumOfCubes = (...args) => {
    return args.reduce((accum,current) => {return accum + current **3}, 0)
}

console.log(`--Ejercicio 2--`)
console.log(sumOfCubes(2,1,5,9))
console.log(`---------------`)

//Ejercicio 3
const type = (value) => {return typeof value}

console.log(`--Ejercicio 3--`)
console.log(type(true))
console.log(`---------------`)

//Ejercicio 4
sum = (...args) => {
    return args.reduce((accum,current) => {return accum+current})
}

console.log(`--Ejercicio 4--`)
console.log(sum(1,2,4))
console.log(`---------------`)

//Ejercicio 5
const filterString = (...filterList) => {
    return filterList.filter(element => {return (typeof element == "string")})
}

console.log(`--Ejercicio 5--`)
console.log(filterString(1,2,"ASD",3,"3","ER"))
console.log(`---------------`)

//Ejercicio 6
const returnMinMax = (...args) => {
    let min = args[0]
    let max = args[0]
    for(let i of args){
       min = (i < min) ? i : min
       max = (i > max) ? i : max
    }

    return [min,max]
}

console.log(`--Ejercicio 6--`)
console.log(returnMinMax(1,2,8,7,4,2,0))
console.log(`---------------`)

//Ejercicio 7
const formatPhoneNumber = (...numbers) => {
    if((numbers.filter((i) => i>=10)).length !== 0){
        return "Ingrese números válidos"
    }else if(numbers.length > 10){
        return "No más de 10 números"
    }

    let parenthesis = numbers.slice(0,3).join("")
    let threeDigits = numbers.slice(3,6).join("")
    let lastDigits  = numbers.slice(6).join("")
    return `(${parenthesis}) ${threeDigits}-${lastDigits}`
}

console.log(`--Ejercicio 7--`)
console.log(formatPhoneNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 0))
console.log(`---------------`)

//Ejercicio 8
const findLargestNums = (matrix) => {
    return matrix.map(submatrix => Math.max(...submatrix))
}

console.log(`--Ejercicio 8--`)
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))
console.log(`---------------`)

//Ejercicio 9
