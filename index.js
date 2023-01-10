const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');




form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();

    if(nameValue === '') {
        setError(name, 'name is required');
    } else {
        setSuccess(name);
    }

        if(surnameValue === '') {
        setError(surname, 'name is required');
    } else {
        setSuccess(surname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }


        let popup = document.getElementById('popup');

     if(name.value === '' || surname.value === '' || email.value === ''){
popup.classList.remove("open-popup");
     }
     else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');}
     else{
        popup.classList.add("open-popup");
     }

    }
 function closePopup(){
       popup.classList.remove("open-popup");
 }
// const popUp = () => {
//         let popup = document.getElementById('popup');

//     function openPopup(){
//      var name = document.getElementById('name');
//      var surname = document.getElementById('surname');
//     var email = document.getElementById('email');

//      if(name.value === '' || surname.value === '' || email.value === ''){
// popup.classList.remove("open-popup");
//      }
//      else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');}
//      else{
//         popup.classList.add("open-popup");
//      }

//     }
//      function closePopup(){
//         popup.classList.remove("open-popup");
//     }
// }
