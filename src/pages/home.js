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
      //name: user.displayName,
      likes:0,
      //user_id: user.uid,
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
        <span class="user-post">👩‍💻${post.data().uid}:</span>
        <span class="text-muted">colocar data e hora</span>
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
  
  //document.getElementById("posts").innerHTML = "Carregando..."
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
    // const post = {
    //   text:text,
    //   likes:0,
    //   uid: uid, 
    //   comments:[]}
    // document.getElementById('postText').value = post.text;
    //  post = document.getElementById('postText').value;
    const id = event.target.dataset.id;
    let atualizar = firebase.firestore().collection('posts').doc(id);
    let updateSingle = atualizar.update({text:''});
    return atualizar.update({
      post
    }).then(function(){
      app.loadPosts()
    })
    //let updateSingle = atualizar.update({text:''});
        
  }
  //let atualizar = db.collection('cities').doc('DC');

  // Set the 'capital' field of the city
  //let updateSingle = atualizar.update({capital: true});
  //     console.log("edita ai ai")
  
  

  // function commentPost(event){
  //   // const id = event.target.dataset.id;
  //   // postsCollection = firebase.firestore().collection('posts').doc(id).post.comments{
  //     `<li>`
     
  //   const commentTemplate = ` ${Input({ class: 'js-comment-input', placeholder: 'comente aqui',
  //    type: 'text' })} <br> `
   
  //  `<span id="comentarios">`
  //   document.getElementById("comentarios").innerHTML =commentTemplate;`
    // </span>
    // </li>
    //` }
      // .then(function () {
      //    app.loadPosts()
      // })
    
    // }
 


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
