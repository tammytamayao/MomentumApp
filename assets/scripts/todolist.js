
const todolist = [];

// Create new to-do item when clicking "+" button and append close button
function newToDo() {
    var list = document.createElement("li");
    var input = document.getElementById("input").value;

    var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.name = "checkbox";
      checkbox.value = "value";
      checkbox.id = "checkbox";
      
    var label = document.createElement('label');
      label.className="textlabel";
      label.appendChild(document.createTextNode(input));
      list.appendChild(checkbox);
      list.appendChild(label);

    // ----------------------------------------
    if (input === '') {
        alert("Write what you want to do!");
    } else {
    // When Enter key is pressed, newToDo function will run
      document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();
      });
      document.getElementById("ul").appendChild(list); // append li to the html //
      todolist.push(input); // push list
      localStorage.setItem('todo', todolist); // set item to local storage
    }
    // ----------------------------------------

    document.getElementById("input").value = "";
  
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    list.appendChild(span);
        
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}

function displayList () {
    // display localstorage items
}
  
  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }