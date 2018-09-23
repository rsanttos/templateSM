var divTasksToDo = document.getElementById("tasks_to_do");
var divTasksDoing = document.getElementById("tasks_doing");
var divTasksDone = document.getElementById("tasks_done");

var inputTaskTitle = document.getElementById("task_title");

var classSubCard = "row card-body";
var classStartTask = "btn btn-sm btn-primary";
var classFinishTask = "btn btn-sm btn-danger";

function addTask(){
    var valueInput = inputTaskTitle.value;
    if(valueInput != ""){
        var newDiv = document.createElement("div"); 
        newDiv.className = classSubCard;
        
        var newSubDiv1 = document.createElement("div"); 
        newSubDiv1.className = "col-lg-6";
        newSubDiv1.innerHTML += valueInput;
        var newSubDiv2 = document.createElement("div"); 
        newSubDiv2.className = "col-lg-6";
        
        var btn = document.createElement("button");
        btn.innerHTML = "Iniciar";
        btn.className = classStartTask;
        newSubDiv2.append(btn);
        
        btn.addEventListener ("click", function() {
          moveTaskToDoing(newDiv, btn);
        });
        
        newDiv.append(newSubDiv1);
        newDiv.append(newSubDiv2);
        
        divTasksToDo.append(newDiv);
        valueInput = "";
        inputTaskTitle.value = valueInput;
    }
}

function moveTaskToDoing(divTask, btnIniciar){
    divTask.removeChild(btnIniciar.parentNode);
    divTasksToDo.removeChild(divTask);
    
    var btnDiv = document.createElement("button");
    btnDiv.innerHTML = "Finalizar";
    btnDiv.className = classFinishTask;
    divTask.append(btnDiv);

    btnDiv.addEventListener ("click", function() {
      moveTaskToDone(divTask, btnDiv);
    });
    
    divTasksDoing.append(divTask);
}

function moveTaskToDone(divTask, btnFinalizar){
    divTask.removeChild(btnFinalizar);
    divTasksDoing.removeChild(divTask);
    divTasksDone.append(divTask);
}
