//get stored value from todolist and copy it to new array

let toDoList = []; // [ 1:{ text: 'aksdjasd', done: true }]
if (localStorage.getItem('toDoList') != null) {
    toDoList = JSON.parse(localStorage.getItem('toDoList'));
    toDoList.forEach(function (item, index) {
        displayList(item, index);
    })
}

// Remove todo
function removeTask() {
    const spans = document.querySelectorAll('.close');
    const closeIdx = Array.from(spans).indexOf(this);
    toDoList.splice(closeIdx, 1);
    this.parentElement.remove();
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
};

function toggleTask() {
    const checkboxes = document.querySelectorAll('.listItem');
    let doneTask = $(this).is(':checked');
    let listIndex = Array.from(checkboxes).indexOf(this);;
    let listItem = toDoList[listIndex];
    listItem.done = doneTask;
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

//add to-do list item and store it in web browser
function newToDo() {
    const list = document.createElement("li");
    const input = document.getElementById("input").value;

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.id = "checkbox";
    checkbox.className = 'listItem';
    checkbox.addEventListener("click", toggleTask);

    const label = document.createElement('label');
    label.className = "textlabel";
    label.appendChild(document.createTextNode(input));
    list.appendChild(checkbox);
    list.appendChild(label);

    if (input === '') {
    alert("Write what you want to do!");
    } else {
    document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();
    });
    document.getElementById("ul").appendChild(list);
    }
    document.getElementById("input").value = "";

    const span = document.createElement("span");
    const text = document.createTextNode("\u00D7");
    span.className = "close";
    span.addEventListener("click", removeTask);
    span.appendChild(text);
    list.appendChild(span);
    toDoList.push({ text: input, done: false });
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    list.setAttribute('data-index', toDoList.length - 1);
}
// TODO: Create a function that will change the done status of the todolist;

//display stored list when refreshed
function displayList(input, index) {
    var list = document.createElement("li");
    list.setAttribute('data-index', index);
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "todolist_" + index;
    checkbox.id = index;
    checkbox.className = 'listItem';
    checkbox.addEventListener("click", toggleTask);

    var label = document.createElement('label');
    label.className = "textlabel";
    label.appendChild(document.createTextNode(input.text));

    if (input.done === true) {
    checkbox.checked = "true";
    }

    list.appendChild(checkbox);
    list.appendChild(label);

    if (input === '') {
    alert("Write what you want to do!");
    } else {
    document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();
    });
    document.getElementById("ul").appendChild(list);
    }

    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.addEventListener("click", removeTask);
    span.appendChild(text);
    list.appendChild(span);
}


//Show or hide todo popup when todo button is clicked
const toDoBtn = document.querySelector(".todo-button");
const toDoPopup = document.querySelector(".todo-popup");

function toggleToDo() {
    toDoBtn.classList.toggle("active");
    if(toDoPopup.style. opacity == 0){
        toDoPopup.classList.toggle("hide")
        setTimeout(function() {toDoPopup.style.opacity = 1}, 0);
    } else{
        toDoPopup.style.opacity = 0;
        setTimeout(function() {toDoPopup.classList.toggle("hide")}, 150);
    }
}

toDoBtn.addEventListener("click", toggleToDo);
