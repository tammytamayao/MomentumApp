setInterval(setGreeting, 3600000);
homePage();

function validateEmail(string) {
    // The regular expression used by [type="email"]
    let regex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;

    // Test the string against the regular expression
    return regex.test(string);
}

function getGreeting() {
    let today = new Date()
    let curHr = today.getHours()
    let time = null;

    if (curHr < 12) {
        time = "Good morning";
    } else if (curHr < 18) {
        time = "Good afternoon";
    } else {
        time = "Good evening";
    }
    return time
}

function homePage() {
    const formSuccess = localStorage.getItem('formSuccess')

    if (formSuccess) {
        setGreeting();
        document.querySelector(".container").classList.add("hide");
        document.querySelector(".main-container").style.opacity = 1;
        document.querySelector(".main-container").classList.remove("hide");
    } else if (typeof localStorage.formName !== 'undefined' && typeof localStorage.formEmail === 'undefined') {
        document.getElementById("email-section").style.opacity = 1;
        document.getElementById("email-section").classList.remove("hide");
        document.getElementById('nickname').innerHTML = localStorage.formName;
     } else if (typeof localStorage.formName !== 'undefined' && typeof localStorage.formEmail !== 'undefined') {
        document.getElementById("password-section").style.opacity = 1;
        document.getElementById("password-section").classList.remove("hide");
     } else {
        document.getElementById("name-section").classList.remove("hide");
    } 
}

document.addEventListener(('DOMContentLoaded'), () => {
    // console.log("Ready");

    let name = document.getElementById('name');
    let nameError = document.getElementById('name-error');

    name.addEventListener('keypress', (e) => {
        // console.log('keypress',e.key);

        if (e.key === 'Enter') {
            let name = document.getElementById(e.target.id);
            console.log(e.target.id);

            let inputName = name.value;
            if (inputName.length <= 0) {
                // console.log('please enter name');
                nameError.innerHTML = 'please enter name';
                return;
            }

            document.getElementById('name-section').style.opacity = 0;
            setTimeout(function() {document.getElementById('name-section').classList.add("hide")}, 500);

            document.getElementById('nickname').innerHTML = inputName;
            document.getElementById("email-section").classList.remove("hide");
            setTimeout(function() {document.getElementById("email-section").style.opacity = 1}, 1000);
            localStorage.setItem('formName', inputName); // set item to local storage    
        }
        nameError.innerHTML = '';
    }, false);

    let email = document.getElementById('email');
    let emailError = document.getElementById('email-error');

    email.addEventListener('keypress', (e) => {
        // console.log('keypress',e.key);

        if (e.key === 'Enter') {
            let email = document.getElementById(e.target.id);
            console.log(e.target.id);

            let inputEmail = email.value;
            if (inputEmail.length <= 0) {
                // console.log('please enter email');
                emailError.innerHTML = 'please enter email';
                return;
            }
            console.log(validateEmail(inputEmail));
            if (!validateEmail(inputEmail)) {
                emailError.innerHTML = 'invalid email';
                return;
            }

            document.getElementById('email-section').style.opacity = 0;
            setTimeout(function() {document.getElementById('email-section').classList.add('hide')}, 500);
            
            document.getElementById('password-section').classList.remove('hide');
            setTimeout(function() {document.getElementById('password-section').style.opacity = 1}, 1000);

            localStorage.setItem('formEmail', inputEmail); // set item to local storage    
        }
        emailError.innerHTML = '';
    }, false);

    let password = document.getElementById('password');
    let passwordError = document.getElementById('password-error');

    password.addEventListener('keypress', (e) => {
        // console.log('keypress',e.key);

        if (e.key === 'Enter') {
            let password = document.getElementById(e.target.id);
            console.log(e.target.id);

            let inputPassword = password.value;
            if (inputPassword.length <= 0) {
                // console.log('please enter password');
                passwordError.innerHTML = 'please enter password';
                return;
            }
            console.log(inputPassword.length)

            if (inputPassword.length < 6) {
                console.log('please enter password');
                passwordError.innerHTML = 'please enter atleast 6 characters long';
                return;
            }

            localStorage.setItem('formSuccess', true); // set item to local storage    
            setGreeting();
            
            document.querySelector(".container").style.opacity = 0;
            setTimeout(function() {document.querySelector(".container").classList.add("hide")}, 500);

            document.querySelector(".main-container").classList.remove("hide");
            setTimeout(function() {document.querySelector(".main-container").style.opacity = 1}, 1000);
        }
        passwordError.innerHTML = '';
    }, false);
}, false);

function setGreeting() {
    const userName = localStorage.getItem('formName');
    document.getElementById('greeting').innerHTML = getGreeting() + ', ' + userName + '.';
}
