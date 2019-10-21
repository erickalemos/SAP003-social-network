import Button from '../components/button.js';
import Input from '../components/inputs.js';

const postsCollection = firebase.firestore().collection('posts')


function buttonLogout() {  
  
  firebase.auth().signOut().then(function () {
    window.location = '#login';

  }).catch(function (error) {

  });
}
 function savePost(){

  const text = document.querySelector('.postText').value;
  const uid = firebase.auth().currentUser.uid;
  
  const post = {
      text:text,
      name: firebase.auth().currentUser.displayName,
      likes:0,
      uid: uid, 
      comments:[]
  }
  
  firebase.firestore().collection('posts').add(post).then(res => {
    app.loadPosts()
  
      });
      document.querySelector('.postText').value=''
};

//função adiciona um post
function addPost(post){
   const postList = document.querySelector('.post');
  
  const postTemplate = `
  <li class = 'cardPost' >${post.data().uid}
      <div class='post-top-bar'> 
        <span class="user-post">👩‍💻${post.data().name}:</span>
        <span class="text-muted"></span>
      </div>
      <div class='forum-bar'>
       ${post.data().text} 
      </div>
      <div class='post-bottom-bar'>
       ${Button({ class: 'button', title: '👍' })}
      ${post.data().likes} 
      ${Button({ class: 'button', title: '💬'})}
      ${Button({ dataId: post.id, class: 'button', title: '✏️', onClick: editPost })} 
      ${Button({ dataId: post.id, class: 'button', title: '❌', onClick: deletePost })}    
            
      </div> 
  </li>`
 
  postList.innerHTML+=postTemplate;
}

//printa todos os posts
function loadPosts(){
  
  postsCollection.get().then(snap=>{
      document.querySelector('.post').innerHTML = ''
      snap.forEach(post=>{
          addPost(post)
      })
  })
}

function deletePost(event){
  const id = event.target.dataset.id;
  postsCollection = firebase.firestore().collection('posts').doc(id).delete()
    .then(function () {
       app.loadPosts()
    })
  document.querySelector(`li[data-id='${id}']`).remove();
  }
  
  function editPost(event){
    const id = event.target.dataset.id;

  
    let atualizar = firebase.firestore().collection('posts').doc(id).update({text:'paloma'})
    .then(function(){
      app;loadPosts()
    })
    
   
   
    console.log(atualizar)
               
  }

   //document.querySelector(post.data().uid).setAttribute(text,"")
  
function Home() {
  app.loadPosts()
  const template = `
    <h1>LaboraTrocas</h1>
    <p>Bem-Vinda</p>
    ${Button({ id: 'sair', title: 'sair', onClick: buttonLogout })}<br>
    <form='' id='postForm'>
    <textarea id='postText' class='postText'rows='4' cols='30'>
    </textarea>
    ${Button({ class: 'salvar', title: 'salvar', onClick: savePost })}   
    </form>
    <ul class='post'>
    </ul>
        
  `;
  
  return template;
}
window.app = {
  loadPosts: loadPosts,
}

export default Home;
