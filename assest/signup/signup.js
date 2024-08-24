import {auth , createUserWithEmailAndPassword} from '../../firebase.js'

let formFeild = document.querySelectorAll("form input");
const [signupUserName, signupUserEmail, signupUserPass] = formFeild;
let signUpBtn = document.getElementById('signupBtn');
let loader = document.getElementById('loader');


const signUp = ()=>{
    event.preventDefault();
    // console.log(loader);
    loader.style.display = "block";
     createUserWithEmailAndPassword(auth, signupUserEmail.value, signupUserPass.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
    
 }

 signUpBtn.addEventListener('click',signUp);




