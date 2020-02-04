import Login from './pages/login.js';
import Register from './pages/register.js';
import Home from './pages/home.js';

// function init() {
//   document.querySelector('main').innerHTML = Login();
// }
// window.addEventListener('load', init);

function locationHashChanged() {
  switch (location.hash) {
    case '#register':
  firebase.auth().onAuthStateChanged(function (user) {
    user ? window.location='#home': document.querySelector('main').innerHTML = Register();
  });
  break;
  case '#home':
  firebase.auth().onAuthStateChanged(function (user) {
    user ? document.querySelector('main').innerHTML = Home() : window.location='#login';
  });
  break;
  case'#login':
    firebase.auth().onAuthStateChanged(function (user) {
      user ? window.location='#home' : document.querySelector('main').innerHTML = Login();
    });
    break;
    case'#profile':
    firebase.auth().onAuthStateChanged(function (user) {
      user ? document.querySelector('main').innerHTML = Profile() : window.location='#login';
    });
    break;
    default:
      firebase.auth().onAuthStateChanged(function (user) {
        user ? document.querySelector('main').innerHTML = Home() : window.location='#login';
      });
  }
}
window.addEventListener('hashchange', locationHashChanged, false);
window.addEventListener('load', locationHashChanged, false);
