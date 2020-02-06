import Button from '..//components/button.js';
import savePost from '..//pages/post.js';
import Logo from '../components/logo.js';


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
      <div class='forum-bar' id='txtdiv' data-id='${post.id}'>
       ${post.data().text}
       
       </div>
       <span id='controle' style='display:none'>
       <textarea id='txtarea' class='txtarea' cols='45' rows='3' wrap='ON'>${post.data().text}</textarea>
       <input type='button' onClick='editPost(1)' value='Salvar'>
        </span>
           
      <div class='post-bottom-bar'>
      ${Button({ class: 'button', title: 'like' })}
      ${post.data().likes} 
      ${Button({ class: 'button', title: '💬'})}
      ${Button({ dataId: post.id, class: 'button', title: '✏️', onClick: editPost })} 
      ${Button({ dataId: post.id, class: 'button', title: '❌', onClick: deletePost })}    
      ${Button({ dataId: post.id, class: 'button-hidden', title: 'Save', onClick: saveEdit})}   
      </div> 
  </li>`
  let textpost = post.data().text;
   
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
  
  //edit post 0
  // function editPost(event){
    
    // const id = event.target.dataset.id;
   
    // let atualizar = firebase.firestore().collection('posts').doc(id).update({text:''})
    // .then(function(){
      
    // })
  

    //edit post1
     function editPost(event) {
           
      const id = event.target.dataset.id;
      const postEdit = document.querySelector(`.forum-bar[data-id='${id}']`);
      const saveButton = document.querySelector(`.button-hidden[data-id='${id}']`);
      saveButton.classList.add('show')
      postEdit.setAttribute('contenteditable','true');
      postEdit.focus()
      
     }
     function saveEdit(event){
      const id = event.target.dataset.id;
      event.target.classList.remove('show');
      const text= document.querySelector(`.forum-bar[data-id='${id}']`).textContent.trim(); 
      console.log(text);
      firebase.firestore().collection('posts').doc(id).update({text})
      // postEdit.posts.add('post-edit');
      // console.log('save')
     }
      
     

  
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

export default home;



