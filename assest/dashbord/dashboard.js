import {auth,  signOut, onAuthStateChanged } from '../../firebase.js'

const sidebtn = document.getElementById('sidebtn');
const moblogout = document.getElementById('moblogout');
const logOutBtn = document.querySelector(".logout");
const sidebar = document.querySelector('.sidebar');
let isOpen = false;

function sideBar() {
  isOpen = !isOpen;
  if (isOpen) {
    sidebar.style.display = "none";
} 
else {
    sidebar.style.display = "flex";
  }
 }

const logOut = ()=>{
    signOut(auth).then(() => {
        Toastify({
            text: "LogOut Successfully",
            duration: 3000    
            }).showToast();
    }).catch((error) => {
        Toastify({      
            text: error,
            duration: 3000 
            }).showToast();
    });
    
}


onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = '../../index.html'
    }
  });



logOutBtn.addEventListener('click', logOut);
moblogout.addEventListener('click', logOut);
sidebtn.addEventListener('click' , sideBar);