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
  modalbg.style.display = "block";}
/* fermeture de la modal formulaire   */
function closeModal() {
  modalbg.style.display = "none";
}


