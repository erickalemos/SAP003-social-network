import Button from '../components/button.js';
import Input from '../components/inputs.js';

function buttonRegister() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  const name = document.querySelector('.js-name-input').value;
  console.log(email);
  console.log(name);
  console.log(password);

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function () {
    // Handle Errors here.
    // let errorCode = error.code;
    // let errorMessage = error.message;
    // ...
  });
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('oioioioi')
      // User is signed in.
      // let displayName = user.displayName;
      // let email = user.email;
      // let emailVerified = user.emailVerified;
      // let photoURL = user.photoURL;
      // let isAnonymous = user.isAnonymous;
      // let uid = user.uid;
      // let providerData = user.providerData;
      // ...
    } else {
      console.log('Mano do céu no registro')
      // User is signed out.
      // ...
    }
  });
}


function Register() {
  const template = `
  <h1>Login </h1>
        <form>
          ${Input({ class: 'js-email-input', placeholder: 'e-mail', type: 'email' })}
          ${Input({ class: 'js-password-input', placeholder: 'senha', type: 'password' })}
          ${Input({ class: 'js-name-input', placeholder: 'Nome', type: 'text' })}<br>
          ${Button({ id: 'cadastrar', title: 'Cadastrar', onClick: buttonRegister })}
        </form>
`;
  return template;
}

export default Register;


