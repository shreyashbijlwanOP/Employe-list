// let obj = {
//     employeeName : "shreyash",
//     employeeId : "S24",
//     mobileNumber: "7895672794",
//     email: "shreyash.bijlwanmail@gmail.com",
//     dept:"CSE"
// }
let empDetails = {}
let allEmplloy = JSON.parse(localStorage.getItem("emp"))


let dept = JSON.parse(localStorage.getItem("dept")) 



dept.forEach((item)=>{
    let option = document.createElement("option")
    option.value = item;
    option.textContent = item
    document.getElementById("dept").append(option)
})

let form = document.forms[0]
function OnSubmitForm()
{
    empDetails.em_Name = form[0].value
    empDetails.em_mail = form[1].value
    empDetails.em_mobile = form[2].value
    empDetails.dept = form[3].value
    console.log(empDetails)
    allEmplloy.push(empDetails)
    empDetails ={}
    console.log(allEmplloy)
    let data = JSON.stringify(allEmplloy)
    localStorage.setItem("emp",data)
    console.log(localStorage)

alert("data has be stored Sucessfully")
form[0].value =""
form[1].value =""
form[2].value =""
form[3].value =""
}

let dataInStorage = JSON.parse(localStorage.getItem("emp"))
console.log(dataInStorage)