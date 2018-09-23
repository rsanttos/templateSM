var divTasksToDo = document.getElementById("tasks_to_do");
var divTasksDoing = document.getElementById("tasks_doing");
var divTasksDone = document.getElementById("tasks_done");

var inputTaskTitle = document.getElementById("task_title");

var classSubCard = "card-body";

function addTask(){
    var valueInput = inputTaskTitle.value;
    if(valueInput != ""){
        var newDiv = document.createElement("div"); 
        newDiv.className = classSubCard;
        newDiv.innerHTML += valueInput;
        divTasksToDo.append(newDiv);
        valueInput = "";
        inputTaskTitle.value = valueInput;
    }
}

function moveTaskToDoing(){
    
}

function moveTaskToDone(){
    
}
