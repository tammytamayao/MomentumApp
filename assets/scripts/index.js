document.addEventListener(('DOMContentLoaded'), () => {
    console.log("Ready");

    let name = document.getElementById('name');
    let nameError = document.getElementById('name-error');

    name.addEventListener('keypress', (e) => {
        // console.log('keypress',e.key);

        if (e.key === 'Enter') {
            console.log(name.value);

            let inputName = name.value;
            if (inputName.length <= 0){
                // console.log('please enter name');
                nameError.innerHTML = 'please enter name';
                return;
            } 
            let emailSection = document.getElementById("email-section");
                emailSection.classList.remove("hide");
        } 
        nameError.innerHTML = '';
    }, false);
}, false);

