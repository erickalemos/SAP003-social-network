import Button from '../components/button.js';
import Input from '../components/inputs.js';
import Register from '../pages/register.js';
import ButtonGoogle from '../pages/google.js';


function buttonLogin() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  console.log(email);
  console.log(password);
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function () {
    //  Handle Errors here.
    //  var errorCode = error.code;
    //  var errorMessage = error.message;
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
      console.log('Mano do céu no login')
      // User is signed out.
      // ...
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
  <a href = '#register.js'> Cadastre-se </a>
`;
  return template;
}


function locationHashChanged() {
  if (location.hash === '#register.js') {
    document.querySelector('main').innerHTML= Register();
  }
}

window.onhashchange = locationHashChanged;

export default Login;


// function enviarLogin(){
//  const email = document.querySelector('.js-email-input').value;
//  const password = document.querySelector('.js-password-input').value;

//  }
// logar.addEventListener('onclick', e => {
//  firebase.auth().signInWithEmailAndPassword(email, password).catch(function() {});
//     const email = document.querySelector('.js-email-input');
//     const password = document.querySelector('.js-password-input');
//     const auth = firebase.auth();

//    const promise = auth.signInWithEmailAndPassword(email, password);
//     promise.catch(e => console.log(e.message));
//    }
//     )

//    cadastrar.addEventListener('click', event =>{
//     const email = document.querySelector('.js-email-input');
//     const password = document.querySelector('.js-password-input');
//     const auth = firebase.auth();

//     const promise = auth.createUserWithEmailAndPassword(email,pass);
//     promise.catch(event => console.log(e.message));

//    }
//    )
//    firebase.auth().onAuthStateChanged(firebaseUser =>{
//        if(firebaseUser){
//            console.log(firebaseUser);
//         }else{
//             console.log('not logged in')
//         }

//    });
