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
    if (!/^[a-zA-Z]+$/.test (fullName)) {
       return "FullName must contain only letters and spaces.";
    }
    // if the fullName passes all of the validation rules,return null
    return null
}
function validateDate (date){
    //check if the date is required.
    if(!date){
        return "date is required";
    }
    // check the format of the date.
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date))
    return "date must be in the format yyyy-mm-dd";

//
const today = new Date();
const minDate = new Date(today.getYear(),today.getMonth(),today.getDate());
const maxDate = new Date(today.getYear()+1,today.getMonth(),today.getDate());
if(date < minDate || date > maxDate){
    return "date must be between today"
}
return null;}
