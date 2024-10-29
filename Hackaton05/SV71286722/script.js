class Branch{

    serviceStations = ["triage","repair station","test station","delivery station"]

    constructor(city, district, contact){
        this.city = city
        this.district = district
        this.contact = contact
    }

    open(){
        this.workTime = true
    }

    close(){
        this.workTime = false
    }



}


class Cellphone {

    #admission = { "reported":"rechazar", "free":"recibir"}
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

    createReport(){

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

    reportedIMEI = ["123","321"]

    checkIMEI(IMEI){
        return this.reportedIMEI.includes(IMEI)
    }

    reportIMEI(IMEI){
        this.reportedIMEI.push(IMEI)
    }

    removeIMEI(IMEI){
        this.reportedIMEI = this.reportedIMEI.filter(register => register !== IMEI)
    }
}

const Page = function(){

    let District = ""
    let branch
    let checatuIMEI

    let arrCellphones = []

    const setup = () => {
        $("#branch").text(District)
        branch = new Branch(City, District, Contact)
        checatuIMEI = new Osiptel()
        console.log(branch)    
    }

    const register = () => {
        $("#btn-checkIMEI").click(async () => {
            let IMEI = $("#IMEI-number").val()
            if(!checatuIMEI.checkIMEI(IMEI)){
                const { value: formValues } = await Swal.fire({
                    title: "Ingresa los datos del celular",
                    icon: "info",
                    inputPlaceholder: "Selecciona una marca",
                    html: `
                    <label class="col-md-4 control-label" for="serialNumber">Número de Serie</label>  
                    <input id="serialNumber" class="swal2-input">
                    <label class="col-md-4 control-label" for="brand">Marca</label>  
                    <select class="form-control selectpicker show-tick" id="brand" data-style="btn-warning" data-live-search="true" >
                        <option value="-1">Seleccione una opción</option>
                        <option value="iphone">Iphone</option>
                        <option value="samsung">Samsung</option>
                        <option value="xiaomi">Xiaomi</option>
                        <option value="huawei">Huawei</option>
                    </select>  
                    <label class="col-md-4 control-label" for="model">Modelo</label>  
                    <input id="model" class="swal2-input">
                    `,
                    showCloseButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Ingresar",
                    denyButtonText: `Cancelar`,
                    preConfirm: () => {

                        try{
                            let data = {
                                serialNumber:  document.getElementById("serialNumber").value,
                                brand: document.getElementById("brand").value,
                                model:  document.getElementById("model").value,
                                imei: IMEI
                            }
                            if(!data.serialNumber)
                                throw new Error('Tienes que ingresar el número de serie')
                            if(!data.model)
                                throw new Error('Tienes que ingresar el modelo')
                            if(data.brand == "-1")
                                throw new Error('Tienes que seleccionar un elemento de la lista')
                            return data
                        }
                        catch(error){
                            Swal.showValidationMessage(error)
                        }
                    }
                })
                if(formValues){
                    let cellphone = new Cellphone(formValues.serialNumber,formValues.imei,formValues.brand,formValues.model)
                    cellphone.state = "registered"
                    arrCellphones.push(cellphone)
                }
            }else{
                let cellphone = new Cellphone(undefined,IMEI,undefined,undefined)
                cellphone.state = "rejected"
                arrCellphones.push(cellphone)
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Celular Reportado"
                  });
            }

        })
        $("#btn-1").click(async () => {
            
            
        })

        $("#btn-2").click(async () => {
            let cellphone = arrCellphones.find(cellphone => cellphone.IMEI === $("#IMEI-number").val())
            console.log(cellphone.state)
        })

        $("#btn-3").click(async () => {
            let cellphone = arrCellphones.find(cellphone => cellphone.IMEI === $("#IMEI-number").val())
            if(!["rejected","delivered"].includes(cellphone.state)){
                const { value } = await Swal.fire({
                    title: "",
                    input: "select",
                    inputOptions: {
                      Agregar: {
                        screen: "Pantalla",
                        frontCamera: "Cámara Frontal",
                        backCamera: "Cámara Trasera",
                        speaker: "Altavoz"
                      },
                      Quitar: {
                        screen: "Pantalla",
                        frontCamera: "Cámara Frontal",
                        backCamera: "Cámara Trasera",
                        speaker: "Altavoz"
                      }
                    },
                    inputPlaceholder: "Seleccionar un repuesto",
                    showCancelButton: true,
                    inputValidator: (value) => {
                      return new Promise((resolve) => {
                        resolve() });
                    }
                  });
                  if (value) {
                    console.log(value)
                    Swal.fire(`You selected: ${value}`);
                  }
            }else{
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Celular No Válido"
                  });
            }
        })

        $("#btn-4").click(async () => {
            let cellphone = arrCellphones.find(cellphone => cellphone.IMEI === $("#IMEI-number").val())
            console.log(cellphone.state = "delivered")
        })
    }

    return {
        init: function (parameters) {
            console.log(parameters)
            City = parameters.city;
            District = parameters.district;
            Contact = parameters.contact;
            setup()
            register()
        }
    
    }
}()

