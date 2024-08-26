import {auth , signInWithEmailAndPassword,onAuthStateChanged ,sendPasswordResetEmail,signInWithPopup, GoogleAuthProvider} from '../../firebase.js'

let formFeild = document.querySelectorAll("form input");
const [ loginEmail, loginPass] = formFeild;
let loginBtn = document.getElementById('loginBtn');
let forgetPassBtn = document.getElementById('forgetpass');
let googleBtn = document.getElementById('googlebtn');
// let loader = document.getElementById('loader');
const provider = new GoogleAuthProvider();


const signIn = ()=>{
    event.preventDefault();
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
 const googleSignIn = ()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    Toastify({      
      text: 'Login Successfully',
      duration: 3000   
      }).showToast();
    
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({      
      text: `${errorMessage}`,
      duration: 3000   
      }).showToast();
  });
}

const forgetPass = ()=>{
    sendPasswordResetEmail(auth, loginEmail.value)
  .then(() => {
    Toastify({      
        text: "Please Check Email Forget Password",
        duration: 3000
        }).showToast();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({      
        text: errorMessage,
        duration: 3000
        }).showToast();
  });
}
loginBtn.addEventListener('click',signIn);
googleBtn.addEventListener('click',googleSignIn);
forgetPassBtn.addEventListener('click',forgetPass);

 onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../dashbord/dashboard.html'
    }
  });












