var li = ""
function delete_info(event){
    event.target.parentElement.remove()

}

var btn = document.getElementById("btn_add")
btn.onclick = function(){
    var input= document.getElementById("info").value
    li += `
    <li>
    <span>${input}</span>
    <button id="btn_delete " onclick=" delete_info(event)">delete</button>
    </li>

    `
    document.querySelector("ul").innerHTML=li
}

