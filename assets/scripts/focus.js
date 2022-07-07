/* focus */

/*
const focus = document.getElementById("focus");

element.onkeydown = enterFocus;

function enterFocus(){
    const focusQuestion = document.getElementsByClassName("myFocus");
    focusQuestion.style.visibility = "hidden";
    const myMainFocus = document.getElementsByClassName("mainFocus");
    myMainFocus.style.visibility = "visible";
}

const copyFocus = document.getElementById("getFocus");

element.onkeydown = getFocus;

function getFocus(){
    var inputFocus = document.getElementById("focus").value;
    alert(inputFocus);
}
*/

/*
const focus = document.getElementById("focus");

focus.addEventListener("keyup", function(event){
    if(event.code === "Enter")
    {
        const focusQuestion = document.getElementsByClassName("myFocus");
        focusQuestion.classList.add("hide");
        const myMainFocus = document.getElementsByClassName("mainFocus");
        myMainFocus.style.visibility = "visible";
    }
})

const getFocus = document.getElementById("getFocus");

getFocus.addEventListener("keyup", function(event){
    if(event.code === "Enter")
    {
        var inputFocus = document.getElementById("focus").value;
        alert(inputFocus);
    }
})
*/

const focus = document.getElementById("focus");

focus.addEventListener("keypress", function (e){
    if(e.key === "Enter") {
        let focus = document.getElementById("focus");
        let inputFocus = focus.value;
        if (inputFocus.length <= 0){
            focusError.innerHTML = "please enter focus";
            return;
        }
    
        document.getElementById('myFocus').classList.remove('hide');
    }
})

const focus = document.getElementById("focus");

focus.addEventListener("keypress", function (e){
    if(e.key === "Enter") {
        let focus = document.getElementById("focus");
        let inputFocus = focus.value;
        if (inputFocus.length <= 0){
            focusError.innerHTML = "please enter focus";
            return;
        }
    
        alert(inputFocus);
    }
})

//checkbox

checkbox = document.getElementById("focusCheck");

checkbox.addEventListener("change", e => {

    if(e.target.checked){

    }
})


//show focusInput

const focusInput = document.getElementById("focus");
const focusOutput = document.getElementById("textFocusOutput");

function getFocusOutput() {
    focusOutput.innerHTML = focusInput.value;
}

focusInput.addEventListener("keypress", function (e){
    if(e.key === "Enter") {
        getFocusOutput;
    }
})




/*
if (e.key === 'Enter') {
    let password = document.getElementById(e.target.id);
    console.log(e.target.id);
    let inputPassword = password.value;
    if (inputPassword.length <= 0){
        // console.log('please enter password');
        passwordError.innerHTML = 'please enter password';
        return;
    }
    console.log(inputPassword.length)
    if (inputPassword.length < 6){
        console.log('please enter password');
        passwordError.innerHTML = 'please enter atleast 6 characters long';
        return;
    }
    document.getElementById('password-section').style.display = 'none';
    document.getElementById('greeting-section').classList.remove('hide');
    let inputName = document.getElementById('name').value;
    document.getElementById('greeting').innerHTML = getGreeting() + ', ' + inputName;
}
*/