class Client{
    constructor(name, contact){
        this.name = name
        this.contact = contact
    }

}
class Branch{

    serviceStations = ["triage","repair station","test station","delivery station"]
    arrTickets = []

    constructor(city, district, contact){
        this.city = city
        this.district = district
        this.contact = contact
    }

    addTicket(ticket){
        this.arrTickets.push(ticket)
    }
    
    removeTicket(ticket){
        this.arrTickets = this.arrTickets.filter(e => e!==ticket)
    }

}


class Cellphone {

    replacements = []

    constructor(serialNumber, IMEI, brand, model){
        this.serialNumber = serialNumber
        this.IMEI = IMEI
        this.brand = brand
        this.model = model
    }

    addReplacement(replacement){
        this.replacements.push(replacement)
        return `Se añadió ${replacement}`
    }

    removeReplacement(replacement){
        this.replacements = this.replacements.filter(part => part !== replacement)
        return `Se quitó ${replacement}`
    }

    repair(){
        this.state = "repaired"
    }

    reject(){
        this.state = "rejected"
    }

    getIMEI(){
        return this.IMEI
    }

    getInfo(){
        return `${this.brand}, ${this.model}, ${this.serialNumber}`
    }

}

class Technician{

    brands = ["General"]
    skills = ["Revisión"]

    constructor(name, brands, skills){
        this.name = name
        brands.map(brand => this.brands.push(brand))
        skills.map(skill => this.skills.push(skill))
    }

    addBrands(brands){
        brands.map(brand => this.brands.push(brand))
    }

    addSkills(skills){
        skills.map(skill => this.skills.push(skill))
    }   

}

class TechnicalService{

    constructor(branch){
        this.technicians = []
        this.branch = branch
    }

    newTechnician(name,brand,skills){
        let tech = new Technician(name, brand, skills)
        this.technicians.push(tech)
    }

}

class Osiptel{

    reportedIMEI = ["123","321"]

    checkIMEI(IMEI){
        return this.reportedIMEI.includes(IMEI) //Si el IMEI está dentro de los datos, devuelve true
    }

    reportIMEI(IMEI){
        this.reportedIMEI.push(IMEI)
    }

    removeIMEI(IMEI){
        this.reportedIMEI = this.reportedIMEI.filter(register => register !== IMEI)
    }
}

class Ticket{
    
    constructor(cellphone, client, technician){
        this.cellphone = cellphone
        this.client = client
        this.technician = technician
    }
    
}

City = "Lima"
District = "Jesus Maria"
Contact = "99123445"

$("#branch").text(District)
$("#city").text(City)
branch = new Branch(City, District, Contact)
checatuIMEI = new Osiptel()
service = new TechnicalService()
service.newTechnician("Carlos",["Iphone","Samsung"],["Veloz","Hábil"])
service.newTechnician("Jaime",["Iphone","Huawei"],["Perspicaz"])
service.newTechnician("Armando",["Xiaomi","Samsung"],["Paciente"])

if(localStorage.getItem("tickets")){
    loadLocalStorage()
    console.log(branch.arrTickets)
}

updateSelect()
updateTable()

function newTicket(){
    
    let clientName = $("#clientName").val()
    let clientContact = $("#clientContact").val()
    let client = new Client(clientName,clientContact)
    let IMEI = $("#IMEI").val()
    let SN = $("#serialNumber").val()
    let brand = $("#selectBrand").val()
    let model = $("#inputModel").val()
    let cellphone = new Cellphone(SN, IMEI, brand, model)
    let technician = $("#selectTechnician").val()
    let tech = service.technicians.find(t => {
        return t.name == technician
    })
    if(!checatuIMEI.checkIMEI(IMEI) && (IMEI+SN+model+clientName+clientContact)) {
        branch.addTicket(new Ticket(cellphone,client,tech))
        console.log(branch.arrTickets)
        saveLocalStorage(branch.arrTickets)
    }
}

function updateSelect(){
    let brand = $("#selectBrand").val()
    let select = $("#selectTechnician")
    select.empty()
    let listTechnicians = service.technicians.filter(tech => tech.brands.includes(brand))
    listTechnicians.forEach(tech => {
        optionText = `${tech.name} | ${tech.skills}`
        optionValue = `${tech.name}`
        let option = new Option(optionText,optionValue)
        select.append(option)
    })
}

function updateTable(){
    let table = $("#table")
    table.empty()
    branch.arrTickets.forEach(ticket => {
        dataSN = ticket.cellphone.serialNumber
        dataModel = ticket.cellphone.brand +" "+ ticket.cellphone.model
        dataClient = ticket.client.name
        table.append(`<tr><td>${dataSN}</td><td>${dataModel}</td><td>${dataClient}</tr></td>`)
    })

}

function saveLocalStorage(tickets){
    localStorage.setItem("tickets",JSON.stringify(tickets))
}

function loadLocalStorage(){
    let tickets = JSON.parse(localStorage.getItem("tickets"))
    
    tickets.forEach(ticket => {
        let cellphone = new Cellphone(
            ticket.cellphone.serialNumber,
            ticket.cellphone.IMEI,
            ticket.cellphone.brand,
            ticket.cellphone.model
        )
        let client = new Client(
            ticket.client.name,
            ticket.client.contact
        )
        let technician = new Technician(
            ticket.technician.name,
            ticket.technician.brands,
            ticket.technician.skills
        )
        branch.arrTickets.push(new Ticket(cellphone,client,technician))
    })
}



