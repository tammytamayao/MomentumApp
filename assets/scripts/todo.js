//get stored value from todolist and copy it to new array

let toDoList = []; // [ 1:{ text: 'aksdjasd', done: true }]
if (localStorage.getItem('toDoList') != null) {
    toDoList = JSON.parse(localStorage.getItem('toDoList'));
    toDoList.forEach(function (item, index) {
        displayList(item, index);
    })
}

// Delete todo
// NEED TO FIX - MAY DI NABUBURA SA LOCAL STORAGE
// $('.todo-list').on('click', '.close', function () {
//     const toDoList = JSON.parse(localStorage.getItem('toDoList'));
//     console.log('getting close');
//     let listIndex = $(this).closest('li').data('index');
//     listItem = $(this).closest('li')[0];
//     console.log(listItem);
//     toDoList.splice(listIndex, 1);
//     listItem.remove();
//     console.log(listIndex);
//     localStorage.setItem('toDoList', JSON.stringify(toDoList));
// })

// Remove todo
function removeTask() {
    toDoList = JSON.parse(localStorage.getItem('toDoList'));
    const spans = document.querySelectorAll('.close');
    const closeIdx = Array.from(spans).indexOf(this);
    toDoList.splice(closeIdx, 1);
    this.parentElement.remove();
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
};

// Done task on checkbox
// $('.todo-list').on('change', '.listItem', function () {
//     toDoList = JSON.parse(localStorage.getItem('toDoList'));
//     let doneTask = $(this).is(':checked');
//     let listIndex = $(this).closest('li').data('index');
//     let listItem = toDoList[listIndex];
//     console.log(listItem);
//     listItem.done = doneTask;
//     localStorage.setItem('toDoList', JSON.stringify(toDoList));
// })

function toggleTask() {
    toDoList = JSON.parse(localStorage.getItem('toDoList'));
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
    // checkbox.value = "value";
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
    // console.log(toDoList.length);
    list.setAttribute('data-index', toDoList.length - 1);

    // for (i = 0; i < close.length; i++) {
    //     close[i].onclick = function () {
    //         var div = this.parentElement;
    //         div.style.display = "none";
    //     }
    // }
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

    // for (i = 0; i < close.length; i++) {
        // close[i].onclick = function () {
        //     var div = this.parentElement;
        //     div.style.display = "none";
        // }
    // }
}

//Click close button to hide element
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//         let div = this.parentElement;
//         div.style.display;
//     }
// }


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