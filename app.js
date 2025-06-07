function addTodo(){
    const input = 
    document.getElementById("Todo-input");
    const todotext=input.value.trim();
    if (todotext==="")
        return;

    const li = document.createElement("li");
    li.textContent = todotext;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    const deletebtn = document.createElement("button")
    deletebtn.textContent = 'X' ;
    deletebtn.onclick = function (e) {
        e.stopPropagation();
        li.remove();

    };
    li.appendChild(deletebtn);

    document.getElementById("todo-list").appendChild(li);
    input.value = "";


};