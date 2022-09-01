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
const generalCondition = document.getElementById("checkbox1");
const nextEven = document.getElementById("checkbox2");
const btnSubmit = document.querySelector(".btn-submit");
const btnSignUp = document.querySelector(".btn-signup");
const confirm = document.getElementById("confirm");
/* Les messages d'erreurs dans une constante */
const messagesError = {
  lastNameError: 'Veuillez entrer 2 caractères ou plus pour le champ du nom.',
  firstNameError: 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.',
  emailError: 'Veuillez entrer une adresse e-mail valide.',
  birthdateError: 'Vous devez entrer votre date de naissance.',
  quantityError: 'Veuillez entrer un nombre de tournoi.',
  locationError: 'Veuillez choisir un tournoi.',
  useError: "Vous devez vérifier que vous acceptez les termes et conditions.",
};
/* la localisation des tournois dans une liste */
const tournament = ["New York","San Francisco", "Seattle","Chicago","Boston","Portland"];
/*  objet contenant toutes données saisies dans le formulaire validité ou erreur */
let responses = {
  isValid: false,
  data: {
    firstName: "",
    lastName: "",
    email: "",
    birthdate: "",
    quantity: "",
    location: "",
    cgu: "non coché",
    next: nextEven.value
  }   
}

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

/* vérification du prénom */
function validateFirst() {
  /* expressions régulières(regex) /^ pour début   $/ pour fin 
  [A-zÀ-ú-] les lettres minuscule et majuscule avec accent,tiret et apostrophe sont possible 
  {2,} minimun 2 autorisés    */
  const regex = /^[A-zÀ-ú-']{2,}$/;
  if (!regex.test(first.value)) {
    document.querySelector(".first-error").innerText =
    messagesError.firstNameError;
    formData[0].setAttribute('data-error-visible', 'true'); /* bordure rouge  */
    return false;
  }
  /* pas de message d'erreur qui s'affichage  */
  document.querySelector(".first-error").innerText = '';
  formData[0].removeAttribute('data-error-visible'); /* pas de bordure rouge */
  return true;
}

/* vérification du nom */
function validateLast() {
  /* supprime n’importe quel symbole d’espacement, autorise les noms à particule   */
  const space = last.value.replace(/\s+/g, '') 
  /* expressions régulières(regex) /^ pour début   $/ pour fin 
  [A-zÀ-ú-] les lettres minuscule et majuscule avec accent,tiret et apostrophe sont possible 
  {2,} minimun 2 autorisés */             
  const regex = /^[A-zÀ-ú-']{2,}$/;
  if (!regex.test(space)) {
    /* affichage du message d'erreur pour le nom */
    document.querySelector(".last-error").innerText =
    messagesError.lastNameError;
    formData[1].setAttribute('data-error-visible', 'true'); /* bordure rouge  */
    return false;
  }
  /* pas de message d'erreur qui s'affichage  */
  document.querySelector(".last-error").innerText = '';
  formData[1].removeAttribute('data-error-visible'); /* pas de bordure rouge  */
  return true;
}

/*  vérification format email   */
function validateEmail() {
  /* caractère alphanumerique (sans accent) avant et après le "@" et le point  */
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  if (!regex.test(email.value)) {
    /* affichage du message d'erreur pour email */
    document.querySelector('.email-error').innerText = messagesError.emailError;
    formData[2].setAttribute('data-error-visible', 'true'); /* bordure rouge  */
    return false;
  }
  /* pas de message d'erreur qui s'affichage  */
  document.querySelector('.email-error').innerText = '';
  formData[2].removeAttribute('data-error-visible'); /* pas de bordure rouge  */
  return true;
}

/* Vérification date de naissance */
function validateBirthdate() {
  const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/; /* AAAA-MM-JJ  */ 
  /*date saisie doit être inférieur à la date jour et au format AAAA-MM-JJ*/
  if ((new Date(birthdate.value)) > (new Date()) ||
      (!regex.test(birthdate.value))
      ){
     /* affichage du message d'erreur pour date de naissance */
     document.querySelector('.birthdate-error').innerText =
     messagesError.birthdateError;
     formData[3].setAttribute('data-error-visible', 'true'); /* bordure rouge  */
     return false;   
  }
  else{
    /* pas de message d'erreur qui s'affichage  */
    document.querySelector('.birthdate-error').innerText = '';
    formData[3].removeAttribute('data-error-visible'); /* pas de bordure rouge  */
    return true;    
  }
}

/* Vérification date de naissance */
function validateQuantity() {  
  const regex = /^[0-9]{1,2}$/; /* 0 à 99 */
  if (!regex.test(quantity.value)) {
    /* affichage du message d'erreur pour tournoi */
    document.querySelector('.quantity-error').innerText =
    messagesError.quantityError;
    formData[4].setAttribute('data-error-visible', 'true'); /* bordure rouge  */
    return false;
  }
  /* pas de message d'erreur qui s'affichage  */
  document.querySelector('.quantity-error').innerText = '';
  formData[4].removeAttribute('data-error-visible'); /* pas de bordure rouge  */
  return true;
}

/* vérification qu'une case localisation est sélectionnée */
function validateLocation() {
  let i = 0;
  for (let radio of radios) {    
    if (radio.checked) {
      /* pas d'affichage du message d'erreur location*/
      document.querySelector('.location-error').innerText = '';
      responses.data.location = tournament[i]; /* le lieu du tournoi */
      return true;
    }
    i++;
  }
  /* affichage du message d'erreur location*/
  document.querySelector('.location-error').innerText =
    messagesError.locationError;
    return false;
}

/* Vérification Conditions d'utilisation */
function validateConditions() {
  if (generalCondition.checked) {
     /* pas d'affichage du message d'erreur conditions d'utilisation*/
    document.querySelector('.use-error').innerText = '';
    responses.data.cgu = "coché";
    return true;
  }
  /* affichage du message d'erreur conditions d'utilisation*/
    document.querySelector('.use-error').innerText = messagesError.useError;
    responses.data.cgu = "non coché";
    return false;
}

/* case prochaine évenement pour récupérer coché ou non coché */
function checkEvent() {
  (nextEven.checked) ? responses.data.next = "coché" : responses.data.next = "non coché";
}

/* vérification que les saisies du formulaires sont validées */
function validateForm() {
  const formData = document.querySelectorAll('.formData');
  const textLabel = document.querySelector('.text-label');
  const confirm = document.getElementById("confirm");
  /*  donnnées saisie inséréess dans l'objet du formulaire  */
  responses.data.firstName = first.value;
  responses.data.lastName = last.value;
  responses.data.email = email.value;
  responses.data.birthdate = birthdate.value;
  responses.data.quantity = quantity.value;
  checkEvent();

  console.log(responses); /* phase développement contrôle des étapes   */

  if (
    validateFirst() &&
    validateLast() &&
    validateEmail() &&
    validateQuantity() &&
    validateLocation() &&
    validateConditions() &&
    validateBirthdate() === true
  ) {
    responses.isValid = true;
     /****   masquer le formulaire de saisies */
    /* pour tous les classes formData du formulaire, rajout de classe hide*/
    for (const forms of formData) {
      forms.classList.add("hide");
    }
    textLabel.classList.add("hide"); 
    /***  affichage à la place d'un message de confirmation d'envoi ****** */
    btnSubmit.value = "Fermer"; /* renomme le bouton */
    confirm.classList.remove("hide") ;   
    btnSubmit.addEventListener('click', (e) => {
      const formData = document.querySelectorAll('.formData');
      const textLabel = document.querySelector('.text-label');
      const confirm = document.getElementById("confirm");
      closeModal();
      document.getElementById("reserve").reset();
      for (const forms of formData) {
        forms.classList.remove('hide'); /* pour afficher les div du formulaire  */
      }
      textLabel.classList.remove('hide');     
      btnSubmit.value = "C'est parti";
      confirm.classList.add("hide") ;
      /*  pour réinitialiser les variables après confirmation de la réservation */
      location.reload(); 
    });
  }
  console.log(responses);  /* phase développement contrôle des étapes   */
}

/* évènement du submit formulaire et vérifications saisies du formulaire */
form.addEventListener('submit', (e) => { 
    e.preventDefault();  /* ne pas recharger la modale avec le click submit */
    validateInputs();
    validateForm();   
});





