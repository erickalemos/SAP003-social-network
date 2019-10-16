import Button from '../components/button.js';

const postsCollection = firebase.firestore().collection('posts')

function buttonLogout() {  
  firebase.auth().signOut().then(function () {
    window.location = '#login';

  }).catch(function (error) {

  });
}
 function savePost(){
  const text = document.querySelector('.postText').value;
  const user = firebase.auth().currentUser;
  const post = {
      text: text,
       user_id: user.displayName,
       likes:0,
       comments:[]
  }
  console.log(user_id);
  firebase.firestore().collection('posts').add(post).then(res => {
    app.loadPosts()
  
      });
      document.querySelector('.postText').value=''
};
//função adiciona um post
function addPost(post){
  const postList = document.querySelector('.post');
  const postTemplate = `
  <li class = 'cardPost' id='${post.id}'>
      <div class='post-top-bar'> 
        <span class="user-post">${post.id} </span>
        <span class="text-muted">colocar data e hora</span>
      </div>
      <div class='forum-bar'>
      ${post.data().user_id}:
      ${post.data().text} 
      </div>
      <div class='post-bottom-bar'>
      
      <button type="button" class= "button">👍</button>
       ${post.data().likes} 

       <button type="button" class= "button">✏️</button>
        <button type="button" class= "button">❌</button>
         
      </div>
  </li>`

  postList.innerHTML+=postTemplate;
}
//printa todos os posts
function loadPosts(){
  
  //document.getElementById("posts").innerHTML = "Carregando..."
  postsCollection.get().then(snap=>{
      document.querySelector('.post').innerHTML = ''
      snap.forEach(post=>{
          addPost(post)
      })
  })
}

function Home() {
  loadPosts()
  const template = `
    <h1>LaboraTrocas</h1>
    <navbar></navbar>
    <p>Esse é um exemplo 🛍 🤝 🛍</p>
    ${Button({ id: 'sair', title: 'sair', onClick: buttonLogout })}<br>
    <form='' id='postForm'>
    <textarea id='postText' class='postText'rows='4' cols='30'>
    </textarea>
    </form>
    <ul class='post'>
    </ul>
    ${Button({ class: 'salvar', title: 'salvar', onClick: savePost })}   
     
  `;
  
  return template;
}
window.app = {
  loadPosts: loadPosts,
}

export default Home;

