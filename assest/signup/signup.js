import {auth , createUserWithEmailAndPassword ,onAuthStateChanged} from '../../firebase.js'

let formFeild = document.querySelectorAll("form input");
const [signupUserName, signupUserEmail, signupUserPass] = formFeild;
let signUpBtn = document.getElementById('signupBtn');
let loader = document.getElementById('loader');


const signUp = ()=>{
    event.preventDefault();
    // loader.style.display = "block";
    signUpBtn.innerText = 'loading....'
     createUserWithEmailAndPassword(auth, signupUserEmail.value, signupUserPass.value)
  .then((userCredential) => {
    const user = userCredential.user;
    signUpBtn.innerText = 'SignUp'
    // Toastify({
        
    //     text: 'Signup Successfully',

    //     duration: 3000
        
    //     }).showToast();

    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    signUpBtn.innerText = 'SignUp'
    Toastify({
        
        text: `${errorMessage}`,

        duration: 3000
        
        }).showToast();
  });
    
 }

 signUpBtn.addEventListener('click',signUp);

 onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../dashbord/dashboard.html'
    }
  });


