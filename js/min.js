const fullName = document.querySelector('.fullName'); //recuperation du champ input fullname
//recuperation des valeurs des champs de formulaire
const dateOfBirth = document.querySelector('.dateOfBirth');
//pour les balises select
const gender = document.querySelector('select[name="gender"]');
const task1 = document.querySelector('.task1');
const task2 = document.querySelector('.task2');
const task3 = document.querySelector('.task3');
//recuperer les boutons
const result = document.querySelector('.result');
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');
//validation rules fullName (controle de saisie)
function validateFullName(fullName){
    // check if full name est vide
    if(!fullName){
        return "FullName is required";
    }
    // check the length of the full name
    if (fullName.length < 3 || fullName.length > 20) {
        return "FullName must be between 3 and 20 characters long.";
    }
    // check the format of the full name.
    if (!/^[a-zA-Z]+$/.test(fullName)) {
       return "FullName must contain only letters and spaces.";
    }
    // if the fullName passes all of the validation rules,return null
    return null
}
function validateDate(date) {
    //check if the date is required.
    if (!date) {
        return "date is required";
    }
    // check the format of the date.
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return "date must be in the format yyyy-mm-dd";
}

//
const today = new Date();
const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
const maxDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
if(date < minDate || date > maxDate){
    return "date must be between today and one year from today"
}
return null;
}
function validateGender(gender){
    if (!gender){
        return "gender is required";
    }
    const validGenders = ["Male","Female"];
    if (!validGenders.includes(gender)){
        return "gender must be a valid value";
    }
    return null;
}
function validateMarksText(text){
    // check if the text is required.
    if (!text){
        return"Marks text is required"
    }
    // check the format of the text
    if (!/^[0-9]+(\.[0-9])?$/.test(text)){
        return "Marks text must be a number or a pourcentage. "
    }

    // check the range of the text.
    const minMarks = 0 ;
    const maxMarks = 20 ;
    if (text < minMarks || text > maxMarks) {
        return "marks text must be between 0 and 100"
    }
    // check the dicimal places of the text
    if (text.includes(".") && text.split(".").length - 1 > 2) {
        return "marks text must have at most two decimal places."
    }
    // if the text passes all the validation rules , return null
    return null;
}

// afficher les valeurs des champs
submit.addEventListener('click', (event)=>{
 if (validateFullName(fullName.value) !== null) {
 alert(validateFullName(fullName.value))
 return;
 }
 if (validateDate(dateOfBirth.value) !== null){
     alert(validateDate(dateOfBirth.value))
     return;
 }
 if (validateGender(gender.value) !== null){
     alert(validateGender(gender.value))
     return;
 }
 if (validateMarksText(task1.value)!==null){
    alert(validateMarksText(task1.value))
    return;
 }
 if (validateMarksText(task2.value)!==null){
    alert(validateMarksText(task2.value))
    return;
}
if (validateMarksText(task3.value)!==null){
    alert(validateMarksText(task3.value))
    return;}
    // calculer le resultat
