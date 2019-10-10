import Button from '../components/button.js';
import Input from '../components/inputs.js';

function buttonRegister() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function () {
    // Handle Errors here.
    // let errorCode = error.code;
    // let errorMessage = error.message;
    // ...
  });
}
// firebase.auth().onAuthStateChanged(firebaseUser =>{
//   if(firebaseUser){
//   console.log(firebaseUser);
//   }else{
//   console.log('not logged in')
//   }
 
//   });

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


