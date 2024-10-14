//Ejercicio 1
document.getElementById("check-digits").addEventListener("click", () => {

    
    let checkNumber = parseInt(document.getElementById("number2Check").value)

    if (isNaN(checkNumber)){
        return
    }else{
        if((checkNumber>=100 && checkNumber <= 999) || (checkNumber<=-100 && checkNumber >= -999)){
            document.getElementById("three-digits").textContent = `Tiene tres dígitos`
        }else{
            document.getElementById("three-digits").textContent = `No tiene tres dígitos`
        }
    }
    
})

//Ejercicio 2
document.getElementById("check-sign").addEventListener("click", () => {

    
    let checkNumber = parseInt(document.getElementById("numberCheckNegative").value)

    if (isNaN(checkNumber)){
        return
    }else{
        if(checkNumber<0){
            document.getElementById("positive-negative").textContent = `Es negativo`
        }else{
            document.getElementById("positive-negative").textContent = `Es positivo`
        }
    }
    
})

//Ejercicio 3
document.getElementById("check-last-digit").addEventListener("click", () => {

    
    let checkNumber = parseInt(document.getElementById("numberCheckLastDigit").value)

    if (isNaN(checkNumber)){
        return
    }else{
        if(checkNumber%10===4 || checkNumber%10===-4){
            document.getElementById("last-digit-4").textContent = `Termina en 4`
        }else{
            document.getElementById("last-digit-4").textContent = `No termina en 4`
        }
    }
    
})

//Ejercicio 4
document.getElementById("sort-numbers").addEventListener("click", () => {

    
    let arrayNumbers = document.getElementById("numberSort").value
    let sortNumbers = arrayNumbers.split(',').map(num => parseFloat(num))

    let high = sortNumbers[0]
    let medium
    let low

    if(sortNumbers[1]>sortNumbers[0]){
        high = sortNumbers[1]
        if(sortNumbers[1]>sortNumbers[2]){
            if(sortNumbers[0]>sortNumbers[2]){
                medium = sortNumbers[0]
                low = sortNumbers[2]
            }else{
                medium = sortNumbers[2]
                low = sortNumbers[0]
            }
        }else{
            high = sortNumbers[2]
            medium = sortNumbers[1]
            low = sortNumbers[0]
        }
    }else if(sortNumbers[2]>sortNumbers[0]){
        high = sortNumbers[2]
        medium = sortNumbers[0]
        low = sortNumbers[1]
    }else if(sortNumbers[1]>sortNumbers[2]){
        medium = sortNumbers[1]
        low = sortNumbers[2]
    }else{
        medium = sortNumbers[2]
        low = sortNumbers[1]
    }

    document.getElementById("sorted").textContent = `Ordenados de menor a mayor: ${low}, ${medium}, ${high}`
})

//Ejercicio 5
document.getElementById("compute-discount").addEventListener("click", () => {

    
    let shoesNumber = parseInt(document.getElementById("shoesNumber").value)

    const shoePrice = 80
    let discount

    if (isNaN(shoesNumber)){
        return
    }else{

        if(shoesNumber > 30){
            discount = 0.4
        }else if(shoesNumber > 20){
            discount = 0.2
        }else if(shoesNumber > 10){
            discount = 0.1
        }else{
            discount = 0
        }

        let totalPrice = shoesNumber * shoePrice
        let totalDiscount = totalPrice*(1-discount)

        document.getElementById("total-shoe-price").textContent = `Total: ${totalPrice}`
        document.getElementById("shoe-discount").textContent = `Descuento: ${totalPrice*discount}`
        document.getElementById("final-price").textContent = `Precio Final: ${totalDiscount}`
    }
    
})

//Ejercicio 6
document.getElementById("compute-income").addEventListener("click", () => {

    
    let workHours = parseInt(document.getElementById("workHours").value)
    let overtime

    if (isNaN(workHours)){
        return
    }else{

        if(workHours <= 40){
            overtime = 0
        }else{
            overtime = workHours - 40
        }

        let totalIncome = (workHours-overtime)*20 + overtime*25

        document.getElementById("total-income").textContent = `Sueldo Total: ${totalIncome}`
        document.getElementById("overtime").textContent = `Horas Extra: ${overtime}`
        document.getElementById("overtime-income").textContent = `Pago Horas Extra: ${overtime*25}`
    }
    
})

//Ejercicio 7
document.getElementById("icecream-discount").addEventListener("click", () => {

    
    let totalOrder = parseInt(document.getElementById("total-icecream-purchase").value)
    let membership = document.getElementById("membership").value

    let discount

    if (isNaN(totalOrder)){
        return
    }else{
        switch(membership){
            case "A":
                discount = 0.1
                break
            case "B":
                discount = 0.15
                break
            case "C":
                discount = 0.2
                break
            default:
                discount = 0 
        }

        let total = totalOrder * (1-discount)

        document.getElementById("total-icecream").textContent = `Total con descuento: ${total}`
    }
    
})

//Ejercicio 8
document.getElementById("check-grades").addEventListener("click", () => {

    
    let arrayGrades = document.getElementById("grades").value
    let grades = arrayGrades.split(',').map(num => parseFloat(num))

    let totalGrades = grades.reduce((last, current) => last + current)

    let averageGrade = totalGrades/(grades.length)

    let approved = (averageGrade>11.5) ? "Aprobado" : "Desaprobado"

    document.getElementById("average-grade").textContent = `Nota promedio: ${averageGrade}`
    document.getElementById("approved").textContent = `${approved}`

})

//Ejercicio 9
document.getElementById("compute-salary").addEventListener("click", () => {

    
    let currentIncome = parseFloat(document.getElementById("current-income").value)

    let rise = (currentIncome>2000) ? 0.05 : 0.1

    let newSalary = currentIncome * (1+rise)

    document.getElementById("pay-rise").textContent = `Aumento: ${currentIncome*rise}`
    document.getElementById("new-salary").textContent = `Nuevo Sueldo: ${newSalary}`

})

//Ejercicio 9
document.getElementById("compute-salary").addEventListener("click", () => {

    
    let currentIncome = parseFloat(document.getElementById("current-income").value)

    let rise = (currentIncome>2000) ? 0.05 : 0.1

    let newSalary = currentIncome * (1+rise)

    document.getElementById("pay-rise").textContent = `Aumento: ${currentIncome*rise}`
    document.getElementById("new-salary").textContent = `Nuevo Sueldo: ${newSalary}`

})

//Ejercicio 10
document.getElementById("check-odd-even").addEventListener("click", () => {

    
    let checkNumber = parseInt(document.getElementById("number-odd-even").value)

    let oddOrEven = (checkNumber % 2 === 0) ? "Par" : "Impar"

    document.getElementById("odd-even").textContent = `${oddOrEven}`

})