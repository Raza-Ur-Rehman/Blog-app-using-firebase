import {auth , signInWithEmailAndPassword,onAuthStateChanged} from '../../firebase.js'

let formFeild = document.querySelectorAll("form input");
const [ loginEmail, loginPass] = formFeild;
let loginBtn = document.getElementById('loginBtn');
// let loader = document.getElementById('loader');


const signIn = ()=>{
    event.preventDefault();
    // loader.style.display = "block";
    loginBtn.innerText = 'loading....'
    signInWithEmailAndPassword(auth, loginEmail.value, loginPass.value)
  .then((userCredential) => {
    const user = userCredential.user;
    loginBtn.innerText = 'Login'
    Toastify({
        
        text: 'Login Successfully',

        duration: 3000
        
        }).showToast();
        
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    loginBtn.innerText = 'Login'
    Toastify({
        
        text: `${errorMessage}`,

        duration: 3000
        
        }).showToast();
  });
    
 }

 loginBtn.addEventListener('click',signIn);

 onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../dashbord/dashboard.html'
    }
  });












