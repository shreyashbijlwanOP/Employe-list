let dataInStorage = JSON.parse(localStorage.getItem("emp"))
console.log(dataInStorage)
let  dept = JSON.parse(localStorage.getItem("dept")) 

dept.forEach((item)=>{
    let option = document.createElement("option")
    option.value = item;
    option.textContent = item
    document.getElementById("dept").append(option)
})
GetTable();
function GetTable() {
    let table = document.getElementById('table').getElementsByTagName('tbody')[0];

    dataInStorage.forEach((item, index) => {
        let newRow = table.insertRow(table.length)
        newRow.insertCell(0).textContent = index + 1
        newRow.insertCell(1).textContent = item.em_Name;
        newRow.insertCell(2).textContent = item.em_mobile;
        newRow.insertCell(3).textContent = item.em_mail;
        newRow.insertCell(4).textContent = item.dept;
        newRow.insertCell(5).innerHTML = `<button class ="btn btn-primary ms-2 edit" ><i class="fa-solid fa-pen-to-square"></i></button> 
             <button class="btn btn-danger delete"><i class="fa-solid fa-trash"></i></button>`;

    })
}

// dept
// : 
// "HR"
// em_Name
// : 
// "behol@mailinator.com"
// em_mail
// : 
// "mezudoluf@mailinator.com"
// em_mobile
// : 
// "+1 (863) 877-7414"


// toggleer

document.querySelector(".btn-close").addEventListener('click', (event) => {
    document.querySelector(".edit-form").classList.add("d-none")
})
let index;

// edit Button 
document.querySelectorAll(".edit").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".edit-form").classList.remove("d-none")

        let row = item.parentElement.parentElement
        index = +row.cells[0].textContent - 1

        console.log(index)
        let form = document.forms[0]
        let empDetails = { ...dataInStorage[index] }
        console.log(empDetails)
        form[0].value = empDetails.em_Name
        form[1].value = empDetails.em_mail
        form[2].value = empDetails.em_mobile
        form[3].value = empDetails.dept

        // empDetails.em_Name = form[0].value
        // empDetails.em_mail = form[1].value
        // empDetails.em_mobile = form[2].value
        // empDetails.dept = form[3].value
        // console.log(empDetails)
        // allEmplloy.push(empDetails)


    })
    document


})


function onEdit() {
    let form = document.forms[0]
    let empDetails = {}
    empDetails.em_Name = form[0].value
    empDetails.em_mail = form[1].value
    empDetails.em_mobile = form[2].value
    empDetails.dept = form[3].value
    console.log(empDetails)
    dataInStorage.splice(index, 1, empDetails)
    console.log(dataInStorage)
    localStorage.setItem("emp", JSON.stringify(dataInStorage))
    document.querySelector(".edit-form").classList.add("d-none")
    alert("change done sucessFully")
    window.location.reload()
}

// delete 
document.querySelectorAll('.delete').forEach((item) => {

    item.addEventListener('click', () => {
        let result = confirm("are you sure to delete")
        if (result) {
            let row = item.parentElement.parentElement
            index = +row.cells[0].textContent - 1
            console.log(index)
            dataInStorage.splice(index, 1)
            
            localStorage.setItem("emp", JSON.stringify(dataInStorage))
            document.querySelector(".edit-form").classList.add("d-none")
            alert("change done sucessFully")
            window.location.reload()


        }
        else {
            window.location.reload()
        }
    })

})
let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    let rows = table.rows
    rows = Array.from(rows)

function search(event)
{
    let search = event.target.value
    
    let filterArray = rows.filter((item)=>{
        return item.innerHTML.toLowerCase().includes(search.toLowerCase())
    })

    console.log(filterArray)
    table.innerHTML = ""
    filterArray.forEach((item)=>{
       
        table.append(item)
        
        
    })
}
// for checking only 
let str = 'sadasd'


