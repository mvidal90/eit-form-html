
const disableSubmitButton = () => {
    const tycElem = document.getElementById("tyc")
    const btnElem = document.getElementById("submit-button")
    if (!tycElem.checked) {
        btnElem.disabled = true
    } else {
        btnElem.disabled = false
    }
}

document.getElementById("tyc").addEventListener("change", disableSubmitButton)

const validateStgLength = (string) => string.length >= 2;

const validateEmail = (email) => {
    const regexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    return regexp.test(email);
}

const validateInt = (number) => number && parseInt(number) >= 0;

const validatePassword = (pass) => {
    const regexp = new RegExp(/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])\S{8,64}/)
    return regexp.test(pass);
}

const cleanError = (id) => {
    document.getElementById(id).className =  null
    document.getElementById(`${id}-error`).className = "helper"
    document.getElementById(`${id}-error`).innerText = ""
}

const setError = (id, helpertext) => {
    document.getElementById(id).className =  "input-error"
    document.getElementById(`${id}-error`).className = "helper-error"
    document.getElementById(`${id}-error`).innerText = helpertext
}

const handleSubmit = (event) => {
    event.preventDefault()
    const values = {};
    let isValid = true;

    const names = document.getElementById("names").value;
    const lastnames = document.getElementById("lastnames").value;
    const birthdate = document.getElementById("birthdate").value;
    const email = document.getElementById("email").value;
    const child = document.getElementById("child").value;
    const pass = document.getElementById("pass").value;
    const tyc = document.getElementById("tyc").checked;

    if (validateStgLength(names)) {
        values.names = names;
        cleanError("names")
    } else {
        isValid = false
        setError("names", "El nombre debe tener al menos 2 caracteres.")
    }
    if (validateStgLength(lastnames)) {
        values.lastnames = lastnames;
        cleanError("lastnames")
    } else {
        isValid = false
        setError("lastnames", "El apellido debe tener al menos 2 caracteres.")
    }
    if (birthdate) {
        values.birthdate = birthdate;
        cleanError("birthdate")
    } else {
        isValid = false
        setError("birthdate", "La fecha de nacimiento es obligatoria.")
    }
    if (validateEmail(email)) {
        values.email = email;
        cleanError("email")
    } else {
        isValid = false
        setError("email", "El email no tiene el formato correcto.")
    }
    if (validateInt(child)) {
        values.child = child;
        cleanError("child")
    } else {
        isValid = false
        setError("child", "El campoo es obligatorio.")
    }
    if (validatePassword(pass)) {
        values.pass = pass;
        cleanError("pass")
    } else {
        isValid = false
        setError("pass", "La contraseña debe contener al menos 8 caracteres, con al menos una mayúscula, una minúscula y un número.")
    }
    
    if (isValid && tyc) {
        values.tyc = tyc;
        console.log(values)
    }
}
