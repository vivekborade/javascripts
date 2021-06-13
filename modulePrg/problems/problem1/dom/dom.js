import  {addMountain, deleteMountain, getMountains} from "../list/list.js";

function generateTable(data) {

    // Generate Header
    table.innerHTML = "";
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }

    let th = document.createElement("th");
    let text = document.createTextNode('Edit Action');
    th.appendChild(text);
    row.appendChild(th);

    th = document.createElement("th");
    text = document.createTextNode('Delete Action');
    th.appendChild(text);
    row.appendChild(th);

    //Generate Table Data
    for (let element of mountains) {
        generateRow(element,table);
    }

}

function generateRow(element)
{
    
    let row = table.insertRow();
    let keys = Object.keys(element);
    for(let i=0;i<keys.length;i++)
    {
        let td = document.createElement("td");
        let text = document.createTextNode(element[keys[i]]);
        td.appendChild(text);
        row.appendChild(td);
        if(i===keys.length-1)
        {
            let td1 = document.createElement("td");
            let btEdit = document.createElement("button");
            btEdit.innerHTML = 'EDIT';
            btEdit.addEventListener('click',function(){
               
            })
            td1.appendChild(btEdit);
            row.appendChild(td1);
            
            let td2 = document.createElement("td");
            let btDelete = document.createElement("button");
            btDelete.addEventListener('click',function(){
                deleteMountain(element['id']);
                btDelete.dispatchEvent(new CustomEvent("onReload", {
                    bubbles: true,
                    id:element['id']
                }))
               
            })
            btDelete.innerHTML = 'DELETE';
            td2.appendChild(btDelete);
            row.appendChild(td2);    
        }
    }
}

function addMountains()
{
    console.log(" Add Mountain ,,,,");
    let name = document.getElementById("name").value;
    let place = document.getElementById("place").value;
    let height = document.getElementById("height").value;
    addMountain({name:name,height:height,place:place});
    generateRow(mountains[mountains.length-1])
    resetInputBox()
}

function resetInputBox()
{
    let name = document.getElementById("name");
    let place = document.getElementById("place");
    let height = document.getElementById("height");
    name.value = "";
    place.value = "";
    height.value = "";
}

function loadTable()
{
    let data = Object.keys(mountains[0]);
    
    //console.log(table);
    generateTable(data); // then the head 
}


// Variable Declarations

let mountains = getMountains();
let table = document.querySelector("table");    

//Listener 
document.getElementById("add")
  .addEventListener("click",function(){
  console.log("Add Button Clicked ...");  
  addMountains()
})

document.addEventListener('onReload', (x) =>
{
    //alert('nested')
    //console.log(x);
    loadTable()
}
);


loadTable();