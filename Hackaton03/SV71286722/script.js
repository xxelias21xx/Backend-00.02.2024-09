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

//Ejercicio 11
document.getElementById("check-high").addEventListener("click", () => {

    
    let arrayNumbers = document.getElementById("highNumber").value
    let numbers = arrayNumbers.split(',').map(num => parseFloat(num))

    let high = numbers.reduce((last,current) => (last>current) ? last: current)

    document.getElementById("high-number").textContent = `Mayor: ${high}`

})

//Ejercicio 12
document.getElementById("check-high2").addEventListener("click", () => {

    
    let arrayNumbers = document.getElementById("highNumber2").value
    let numbers = arrayNumbers.split(',').map(num => parseFloat(num))

    let high = numbers.reduce((last,current) => (last>current) ? last: current)

    document.getElementById("high-number2").textContent = `Mayor: ${high}`

})

//Ejercicio 13
document.getElementById("check-letter").addEventListener("click", () => {

    
    let letter = document.getElementById("letter").value.toLowerCase()
    let vowels = ["a","e","i","o","u"]

    let letterCheck = (vowels.includes(letter)) ? "Vocal" : "Consonante"

    document.getElementById("vowel-consonant").textContent = `${letterCheck}`

})

//Ejercicio 14
document.getElementById("check-prime").addEventListener("click", () => {

    
    let number = parseInt(document.getElementById("prime-number").value.toLowerCase())

    let isPrime = true
    if(number===1) isPrime = false

    if(number === 2 || number ===3){
        isPrime = true
    }else{
        for(let i = 2;i < number^(1/2); i++){
            if(number % i ===0){
                isPrime = false
            }
        }
    }

    let printPrime = isPrime ? "es primo" : "no es primo"
    document.getElementById("is-prime").textContent = `El número ${number} ${printPrime}`

})

//Ejercicio 15
document.getElementById("transform-units").addEventListener("click", () => {

    let centimeters = parseFloat(document.getElementById("centimeters").value)
    let pounds = parseFloat(document.getElementById("pounds").value)

    let inches
    let kilograms

    if(isNaN(centimeters) && isNaN(pounds)){
        return
    }else{
        inches = centimeters / 2.54
        kilograms = pounds * 0.453592
    }

    document.getElementById("inches").textContent = `Pulgadas: ${inches}`
    document.getElementById("kilograms").textContent = `Kilogramos: ${kilograms}`

})

//Ejercicio 16
document.getElementById("get-day").addEventListener("click", () => {

    let dayNumber = parseInt(document.getElementById("dayNumber").value)
    const days = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]

    let day

    if(isNaN(dayNumber)){
        return
    }else{

        
        dayNumber = (dayNumber % 7 === 0) ? 6 : (dayNumber % 7)-1
        day = days[dayNumber]
    }

    document.getElementById("week-day").textContent = `Día: ${day}`

})

//Ejercicio 17
document.getElementById("get-next-hour").addEventListener("click", () => {

    let currentHour = document.getElementById("current-hour").value
    let hourMinuteSeconds = currentHour.split(":").map(num => parseInt(num))

    hourMinuteSeconds[2]++

    if(hourMinuteSeconds[2] === 60){
        hourMinuteSeconds[2] = 0
        hourMinuteSeconds[1]++
    }

    if(hourMinuteSeconds[1] === 60){
        hourMinuteSeconds[1] = 0
        hourMinuteSeconds[0]++
    }

    if(hourMinuteSeconds[0] === 24) hourMinuteSeconds[0]=0

    document.getElementById("next-hour").textContent = `${hourMinuteSeconds[0]}:${hourMinuteSeconds[1]}:${hourMinuteSeconds[2]}`

})

//Ejercicio 18
document.getElementById("calculate-CD").addEventListener("click", () => {

    let cds = parseInt(document.getElementById("numberCDs").value)
    let price


    if(isNaN(cds)){
        return
    }else{
        price = (cds<10) ? 10 : (cds < 100) ? 8 : (cds < 500) ? 7 : 6
    }

    let totalPrice = cds * price
    let profit = totalPrice * 0.0825

    document.getElementById("total-sell-CD").textContent = `Precio Total para el cliente: ${totalPrice}`
    document.getElementById("seller-profit").textContent = `Ganancia para el vendedor: ${profit}`

})

//Ejercicio 19
document.getElementById("employee-payment-btn").addEventListener("click", () => {

    let employeeID = parseInt(document.getElementById("employee-id").value)
    let employeeDays = parseInt(document.getElementById("employee-days").value)

    const salary = [56, 64 , 80, 48]

    if(isNaN(employeeID) && isNaN(employeeDays)){
        return
    }else{
        if(employeeDays>6) employeeDays=6
    }

    let totalPayment = employeeDays * salary[employeeID-1]

    document.getElementById("employee-payment").textContent = `El total a pagar es: ${totalPayment}`

})

//Ejercicio 20

//Ejercicio 21
document.getElementById("calculate-factorial").addEventListener("click", () => {

    let number = parseInt(document.getElementById("number-for-factorial").value)
    let factorial = 1

    if(isNaN(number)){
        return
    }else{
        if(number !== 0){
            for(let i = 1; i <= number; i++){
                factorial *= i
            }
        }
    }

    document.getElementById("factorial").textContent = `El factorial de ${number} es ${factorial}`

})

//Ejercicio 22
document.getElementById("calculate-n-sum").addEventListener("click", () => {

    let nNumber = parseInt(document.getElementById("n-first").value)
    let sum = 0

    if(isNaN(nNumber)){
        return
    }else{
        for(let i = 1; i <= nNumber; i++){
            sum += i
        }
    }

    document.getElementById("n-sum").textContent = `La suma de los ${nNumber} primeros números es ${sum}`

})

//Ejercicio 23
document.getElementById("calculate-n-odd-sum").addEventListener("click", () => {

    let nNumber = parseInt(document.getElementById("n-first-odd").value)
    let sum = 0

    if(isNaN(nNumber)){
        return
    }else{
        for(let i = 0; i <= nNumber; i++){
            if(i % 2 !== 0) sum+=i
        }
    }

    document.getElementById("n-odd-sum").textContent = `La suma de impares es ${sum}`

})

//Ejercicio 24
document.getElementById("calculate-even-sum").addEventListener("click", () => {

    let nNumber = 1000
    let sum = 0

    if(isNaN(nNumber)){
        return
    }else{
        for(let i = 0; i <= nNumber; i++){
            if(i % 2 === 0) sum+=i
        }
    }

    document.getElementById("1000-even-sum").textContent = `La suma de pares es ${sum}`

})

//Ejercicio 25
document.getElementById("calculate-factorial2").addEventListener("click", () => {

    let factorial = n => (n===0) ? 1 : n*factorial(n-1)

    let number = parseInt(document.getElementById("number-for-factorial2").value)
    let fac

    if(isNaN(number)){
        return
    }else{
        fac = factorial(number)
    }

    document.getElementById("factorial2").textContent = `El factorial de ${number} es ${fac}`

})

//Ejercicio 26
document.getElementById("calculate-division").addEventListener("click", () => {

    let dividend = parseInt(document.getElementById("dividend").value)
    let divider = parseInt(document.getElementById("divider").value)

    let quotient = 0
    let remainder = dividend

    if(divider === 0){
        return
    }else{
        while(remainder >= divider){
            remainder = remainder-divider
            quotient++
        }
    }

    document.getElementById("quotient").textContent = `Cociente: ${quotient}`
    document.getElementById("remainder").textContent = `Resto: ${remainder}`

})

//Ejercicio 27
document.getElementById("calculate-average-27").addEventListener("click", () => {

    let nArray = [], number = 0

    while(number >= 0){
        nArray.push(number)
        number = parseInt(prompt("Ingresar un número"))
    }

    let sum = nArray.reduce((last,current) => last+current)
    let average = sum/(nArray.length-1)
    document.getElementById("average-27").textContent = `Media: ${average}`

})

//Ejercicio 28
document.getElementById("calculate-sum-do").addEventListener("click", () => {

    let sum = 0
    let i = 0

    do{
        sum += i
        i++
    }while(i <= 100)

    document.getElementById("do-100").textContent = `Suma: ${sum}`

})

//Ejercicio 29
document.getElementById("calculate-sum-while").addEventListener("click", () => {

    let sum = 0
    let i = 0

    while(i <= 100){
        sum += i
        i++
    }

    document.getElementById("while-100").textContent = `Suma: ${sum}`

})

//Ejercicio 30
document.getElementById("calculate-sum-for").addEventListener("click", () => {

    let sum = 0
    
    for(let i = 0; i <= 100; i++) sum+=i

    document.getElementById("for-100").textContent = `Suma: ${sum}`

})