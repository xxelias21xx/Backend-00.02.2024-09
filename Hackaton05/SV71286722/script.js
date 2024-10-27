class Branch {

    serviceStations = ["triage","repair station","test station","delivery station"]
    replacements = {"pantallas":10, "puertos":7, "botones":20}
    receivedCellphones = []
    repairedCellphones = []
    deliveredCellphones = []

    constructor(city, district, contact){
        this.city = city
        this.district = district
        this.contact = contact
        this.support = new TechnicalService(district)
    }

    open(){
        this.workTime = true
    }

    close(){
        this.workTime = false
    }

    /* nextStation(){
        indexStation = stations.indexOf(this.station)
        nextIndexStation = (indexStation + 1) % stations.length
        return this.station = stations[nextIndexStation]
    } */

    checkCellphone(osiptel = checatuIMEI ,cellphone){
        if(!osiptel.checkIMEI(cellphone.IMEI)){
            this.receivedCellphones.push(cellphone)
        }else{
            console.log("IMEI no válido")
        }
    }

    checkStock(replacementName){
        return this.replacements[replacementName]
    }

}


class Cellphone {

    admission = { "reported":"rechazar", "free":"recibir"}

    constructor(serialNumber, IMEI, brand, model, branch){
        this.serialNumber = serialNumber
        this.IMEI = IMEI
        this.brand = brand
        this.model = model
        this.station = branch.serviceStations[0]
    }

    admissionAction(other){
        return this.action = this.admission[(other.checkIMEI(this.IMEI)) ? "reported" : "free"]   
    }

    technicianReport(technician){
        if(this.action == "recibir"){
            this.assignTechnician(technician)
            technician.createReport(this)
        }else{
            return "Celular Reportado, Rechazar"
        }
    }
    
    checkStation(branch){
        this.station = branch.serviceStations
    }    

    checkTechnician(){
        console.log(this.technician)
    }

}

class Technician{

    brands = ["general"]
    skills = ["revisión"]
    cellphones = []

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

    addCellphone(cellphone){
        if(this.cellphones.length <= 5 ){
            this.cellphones.push(cellphone)
            cellphone.technician = this
        }else{
            return "No se pueden asignar más celulares al técnico"
        }
    }

    createReport(cellphone){
        if(cellphone.action == "recibir"){
            this.addCellphone(cellphone)
            cellphone.report = ""
        }else{
            return "Celular Reportado, Rechazar"
        }
    }
    
    addReplacement(cellphone, replacement){
        cellphone.replacements.push(replacement)
    }    

    move2nextStation(cellphone, branch){
        
        cellphone.station = {}     
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

    qualifiedTechnician(cellphone){
        let qualifiedTechnicians = this.technicians.filter(technician => (technician.brands.includes(cellphone.brand)))
        let names = qualifiedTechnicians.map(technician => technician.name)
        return names
    }

    assignTechnician(cellphone, technician){
        this.technicians[technician].addCellphone(cellphone)
    }

}

class Osiptel{

    reportedIMEI = []

    checkIMEI(cellphone){
        return this.reportedIMEI.includes(cellphone.IMEI)
    }

    reportIMEI(cellphone){
        this.reportedIMEI.push(cellphone.IMEI)
    }

    removeIMEI(cellphone){
        this.reportedIMEI = this.reportedIMEI.filter(register => register !== cellphone.IMEI)
    }
}

const checatuIMEI = new Osiptel()
const JesusMaria = new Branch("Lima", "Jesus Maria", "123456789")
JesusMaria.support.newTechnician("Roberto",["Iphone","Samsung"],["Pantallas","Altavoces"])
JesusMaria.support.newTechnician("Rober",["Iphone"],["Pantallas","Altavoces"])
JesusMaria.support.newTechnician("Roto",["Samsung"],["Pantallas","Altavoces"])
console.log(JesusMaria.support.technicians[0].brands)
const cellphone1 = new Cellphone("123","123","Samsung","A50",JesusMaria)
console.log(JesusMaria.support.qualifiedTechnician(cellphone1))
JesusMaria.support.assignTechnician(cellphone1, 0)