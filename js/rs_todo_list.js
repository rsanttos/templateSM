var divTasksToDo = document.getElementById("tasks_to_do");
var divTasksDoing = document.getElementById("tasks_doing");
var divTasksDone = document.getElementById("tasks_done");

var classSubCard = "card-body";

function addTask(){
    var newDiv = document.createElement("div"); 
    newDiv.class = classSubCard;
    divTasksToDo.append(newDiv);
}

function moveTaskToDoing(){
    
}

function moveTaskToDone(){
    
}
