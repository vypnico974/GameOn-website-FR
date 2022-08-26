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
/* Les messages d'erreur dans une constante */
const messagesError = {
  lastNameError: 'Veuillez entrer 2 caractères ou plus pour le champ du nom.',
  firstNameError: 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.',
  emailError: 'Veuillez entrer une adresse e-mail valide.',
  birthdateError: 'Vous devez entrer votre date de naissance.',
  quantityError: 'Veuillez entrer un nombre de tournoi.',
  locationError: 'Veuillez choisir un tournoi.',
  useError: "Vous devez vérifier que vous acceptez les termes et conditions.",
};


/*  évèvement par le click d'ouverture et de fermeture de la modale  */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
/* lancement de la modale formulaire   */
function launchModal() {
  modalbg.style.display = "block";
}
/* fermeture de la modal formulaire   */
function closeModal() {
  /* la modale passe en display:none pour disparaitre */
  modalbg.style.display = "none";
}


/* fonction pour vérifier tous les champs du formulaire */
function validateInputs() {
  validateFirst(); 
  validateLast(); 
  validateEmail();
  validateBirthdate();
  validateQuantity();
  validateLocation();
  validateConditions();
}

// vérification du prénom 
function validateFirst() {
  const firstLength = first.value.length;
  /* expressions régulières(regex) 
  /^ pour début   $/ pour fin  
  [A-zÀ-ú-] les lettres minuscule et majuscule avec accent possible et
   ainsi que tiret sont autorisés
   {2,} minimun 2 autorisés               */
  const regex = /^[A-zÀ-ú'-]{2,}$/;
  if (regex.test(first.value) === false) {
    // affichage du message d'erreur pour le prénom 
    document.querySelector('.first-error').innerText =
    messagesError.firstNameError;
    return false;
  }
  /* pas de message d'erreur qui s'affichage  */
  document.querySelector('.first-error').innerText = '';
  return true;
}

// vérification du nom 
function validateLast() {
  const firstLength = last.value.length; 
  /* expressions régulières(regex)  /^ pour début   $/ pour fin   
  [A-zÀ-ú- '] les lettres minuscule et majuscule avec accent possible et
   ainsi que tiret apostrophe espace sont autorisés
   {2,} minimun 2 autorisés */               
  const regex = /^[A-zÀ-ú-' ]{2,}$/;
  if (regex.test(last.value) === false) {
    /* affichage du message d'erreur pour le nom */
    document.querySelector('.last-error').innerText =
    messagesError.firstNameError;
    return false;
  }
  /* pas de message d'erreur qui s'affichage  */
  document.querySelector('.last-error').innerText = '';
  return true;
}

/*  vérification format email   */
function validateEmail() {
  /* caractère alphanumerique (sans accent) avant et après le "@" et le point  */
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  if (regex.test(email.value) === false) {
    /* affichage du message d'erreur pour email */
    document.querySelector('.email-error').innerText = messagesError.emailError;
    return false;
  }
  /* pas de message d'erreur qui s'affichage  */
  document.querySelector('.email-error').innerText = '';
  return true;
}

/* Vérification date de naissance */
function validateBirthdate() {
  /* AAAA-MM-JJ  */
  const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
  if (regex.test(birthdate.value) === false) {
    /* affichage du message d'erreur pour date de naissance */
    document.querySelector('.birthdate-error').innerText =
    messagesError.birthdateError;
    return false;
  }
  /* pas de message d'erreur qui s'affichage  */
  document.querySelector('.birthdate-error').innerText = '';
  return true;
}

// Checks if the user has selected a valid quantity
function validateQuantity() {
  /* 0 à 99 */
  const regex = /^[0-9]{1,2}$/;
  if (regex.test(quantity.value) === false) {
    /* affichage du message d'erreur pour tournoi */
    document.querySelector('.quantity-error').innerText =
      messagesError.quantityError;
    return false;
  }
  /* pas de message d'erreur qui s'affichage  */
  document.querySelector('.quantity-error').innerText = '';
  return true;
}

/* vérification qu'une location est sélectionnée */
function validateLocation() {
  for (let radio of radios) {
    if (radio.checked === true) {
      /* pas d'affichage du message d'erreur location*/
      document.querySelector('.location-error').innerText = '';
      return true;
    }
  }
  /* affichage du message d'erreur location*/
  document.querySelector('.location-error').innerText =
    messagesError.locationError;
  return false;
}

// Vérification Conditions d'utilisation
function validateConditions() {
  if (conditionsGenerales.checked === true) {
     /* pas d'affichage du message d'erreur conditions d'utilisation*/
    document.querySelector('.use-error').innerText = '';
    return true;
  }
  /* affichage du message d'erreur conditions d'utilisation*/
  document.querySelector('.use-error').innerText = messagesError.useError;
  return false;
}

// évènement du submit formulaire et vérifications saisies du formulaire
form.addEventListener('submit', (e) => { 
    e.preventDefault();  /* ne pas recharger la modale avec le click submit */
    validateInputs();
   
  });


