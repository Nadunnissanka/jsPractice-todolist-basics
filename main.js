//create an array
const toDoList = [];

//add event listner for button
document.querySelector("#add").addEventListener("click", function(){
    var item = document.querySelector("#itemName").value;
    //selecting the list
    var list = document.querySelector("#list");

    //create li element
    var liElement = document.createElement("li");
    liElement.innerHTML = item;
    //delete from to do list
    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("m-1");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = function() { 
        var deleteBtnPerant = deleteBtn.parentElement;
        deleteBtnPerant.classList.add("d-none");
    };
    //done recorde from to do list
    var doneBtn = document.createElement("button");
    doneBtn.classList.add("m-1");
    doneBtn.innerHTML = "Done";
    doneBtn.onclick = function(){
        var doneBtnPerant = doneBtn.parentElement;
        doneBtnPerant.classList.add("line-through");
    };

    //append
    list.appendChild(liElement);
    liElement.appendChild(doneBtn);
    liElement.appendChild(deleteBtn);
});