function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* DOM Elements */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
/* variables du formulaire */
const formData = document.querySelectorAll(".formData"); 
const closeBtn = document.querySelectorAll(".close"); 
const form = document.querySelector("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radios = document.querySelectorAll(".checkbox-input[type=radio]");
const conditionsGenerales = document.getElementById("checkbox1");
const btnSubmit = document.querySelector(".btn-submit");
const btnSignUp = document.querySelector(".btn-signup");


/*  évèvement par le click d'ouverture et de fermeture de la modal  */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
/* lancement de la modal formulaire   */
function launchModal() {
  modalbg.style.display = "block";
}
/* fermeture de la modal formulaire   */
function closeModal() {
  modalbg.style.display = "none";
}

/* fonction pour vérifier tous les champs du formulaire */
function validateInputs() {
  validateFirst();
  validateLast();
  validateEmail();
  validateQuantity();
  validateLocation();
  validateConditions();
  validateBirthdate();
}


/* Les messages d'erreur dans une constante */
const messagesError = {
  lastNameError: 'Veuillez entrer 2 caractères ou plus pour le champ du nom.',
  firstNameError: 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.',
  emailError: 'Veuillez entrer une adresse e-mail valide.',
  birthdateError: 'Vous devez entrer votre date de naissance.',
  quantityError: 'Veuillez entrer un nombre de tournoi.',
  locationError: 'Veuillez choisir un tournoi.',
  cguError: "Vous devez vérifier que vous acceptez les termes et conditions.",
};
