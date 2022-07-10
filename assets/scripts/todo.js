//get stored value from todolist and copy it to new array

let toDoList = []; // [ 1:{ text: 'aksdjasd', done: true }]
if (localStorage.getItem('toDoList') != null) {
    toDoList = JSON.parse(localStorage.getItem('toDoList'));
    toDoList.forEach(function (item, index) {
        displayList(item, index);
    })
}

// Remove todo
// $('.close').click(function (e) {
//   var spans = document.querySelectorAll('.close');
//   toDoList.splice(Array.from(spans).indexOf(e.target), 1);
//   localStorage.setItem('toDoList', JSON.stringify(toDoList));
// });

// Delete todo
// NEED TO FIX - MAY DI NABUBURA SA LOCAL STORAGE
$('.todo-list').on('click', '.close', function () {
    console.log('getting close');
    let listIndex = $(this).data('index');
    let taskList = JSON.parse(localStorage.getItem('toDoList'))
    taskList.splice(listIndex, 1);
    console.log(taskList);
    localStorage.setItem('toDoList', JSON.stringify(taskList));
})


// Done task on checkbox
$('.todo-list').on('change', '.listItem', function () {
    let doneTask = $(this).is(':checked');
    let listIndex = $(this).closest('li').data('index');
    let taskList = JSON.parse(localStorage.getItem('toDoList'));
    let listItem = taskList[listIndex];
    listItem.done = doneTask;
    console.log(taskList);
    localStorage.setItem('toDoList', JSON.stringify(taskList));
})

//add to-do list item and store it in web browser
function newToDo() {
    var list = document.createElement("li");
    var input = document.getElementById("input").value;

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    // checkbox.value = "value";
    checkbox.id = "checkbox";
    checkbox.className = 'listItem';

    var label = document.createElement('label');
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

    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    list.appendChild(span);
    toDoList.push({ text: input, done: false });
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    // console.log(toDoList.length);
    list.setAttribute('data-index', toDoList.length - 1);

    for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
    }
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
    span.appendChild(text);
    list.appendChild(span);

    for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
    }
}

//Click close button to hide element
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    }
}

//Show/hide todo popup when todo button is clicked
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