import {db,auth} from "./firebase.js"

import {

collection,
addDoc,
getDocs

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

let table=document.getElementById("table")
let logs=document.getElementById("logs")

window.login=function(){

document.getElementById("login").style.display="none"
document.getElementById("panel").style.display="block"

}

window.addPlayer=function(){

let row=table.insertRow()

row.innerHTML=`

<td contenteditable="true">player</td>
<td contenteditable="true">0</td>
<td contenteditable="true">0</td>

`

log("player added")

}

window.save=async function(){

let rows=[...table.rows]

for(let i=1;i<rows.length;i++){

let cells=rows[i].cells

await addDoc(collection(db,"players"),{

player:cells[0].innerText,
kills:cells[1].innerText,
wins:cells[2].innerText

})

}

log("data saved")

}

function log(text){

logs.innerHTML+=text+"<br>"

}
