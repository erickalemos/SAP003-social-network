import Button from '../components/button.js';
import Input from '../components/inputs.js';


function buttonRegister() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  const name = document.querySelector('.js-name-input').value;
  console.log(email);

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (erro) {
 
    let errorCode = error.code;
    let errorMessage = error.message;

    if (email.length < 6) {
      alert('Por favor, entre com um endereço de e-mail válido');
      return;
    }
    if (password.length < 6) {
      alert('Por favor, digite uma senha com mais de 4 digitos');
      return;
    } 
  });
 
  firebase.auth().onAuthStateChanged(function (user) {
    user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    })
    if (user != null) {
      name = name;
      email = user.email;
      senha = user.senha;      
      window.location = '#home';
   
    }else{
      console.log('Mano do céu no register')
  }
})
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


