import Button from '../components/button.js';
import Input from '../components/inputs.js';
import ButtonGoogle from './google.js';


function buttonLogin() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (erro){
    //  Handle Errors here.
      //var errorCode = error.code;
      //var errorMessage = error.message;
   });
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      window.location = '#home';
//       var user = firebase.auth().currentUser;
//       var name, email, photoUrl, uid, emailVerified;

// if (user != null) {
//   name = user.displayName;
//   email = user.email;
  
// }
    } else {
      //console.log('Mano do céu no login, no login!');
    }
  });
}


function Login() {
  const template = `
  <h1>Login </h1>
  <form>
  ${Input({ class: 'js-email-input', placeholder: 'e-mail', type: 'email' })}
  ${Input({ class: 'js-password-input', placeholder: 'senha', type: 'password' })} <br>  
  ${Button({ id: 'logar', title: 'Logar', onClick: buttonLogin })}
  ${Button({ id: 'google', title: 'Google', onClick: ButtonGoogle })}
  </form><br> 
  <a href = '#register'> Cadastre-se </a>
`;
  return template;
}

export default Login;
