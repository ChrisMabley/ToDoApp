var list = [];
var xhttp = new XMLHttpRequest();
document.getElementById("addlist").addEventListener('submit',addToDo)
function addToDo(event){
    event.preventDefault();
    var item = document.getElementById("input").value;
    var data = {
        text: item
    }
    var xhttptwo = new XMLHttpRequest();
    xhttptwo.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var toDos = JSON.parse(this.responseText);
            showList(); 
        }
        else if(this.readyState == 4){
            console.log(this.responseText)
        }
    };
    xhttptwo.open("POST", "https://cse204.work/todos", true);
    xhttptwo.setRequestHeader("content-type", "application/json");
    xhttptwo.setRequestHeader("x-api-key", "a86792-0aff99-34671d-e60309-fc5b77");
    xhttptwo.send(JSON.stringify(data));
};
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        list = JSON.parse(this.responseText);
        console.log(list);
        showList();
    }
};
xhttp.open("GET", "https://cse204.work/todos", true);
xhttp.setRequestHeader("x-api-key", "a86792-0aff99-34671d-e60309-fc5b77");
xhttp.send();

function showList(){
    event.preventDefault();
    var check = document.createElement("button");
    check.setAttribute("class", "checkbutton");
    check.innerHTML = ("Check");
    var close = document.createElement("button")
    close.setAttribute("class", "closebutton")
    close.innerHTML = ("Close");
    for(let a = list.length-1; a >=0; a--){
        var value = document.createElement("div");
        document.getElementById("todolist").appendChild(value);
        check.setAttribute("id", a)
        check.setAttribute("onclick","Check(this)");
        close.setAttribute("id", a)
        close.setAttribute("onclick","delete(this)");
        value.innerHTML += " " + list[a].text + " ";
        value.appendChild(check);
        value.appendChild(close);
    }
    
}
