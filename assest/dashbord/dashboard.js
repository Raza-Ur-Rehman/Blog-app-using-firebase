import {auth,  signOut, onAuthStateChanged } from '../../firebase.js'


let sidebtn = document.getElementById('sidebtn');
let sidebar = document.querySelector('.sidebar');
let logout = document.querySelector('.logout');
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

















logout.addEventListener('click', logOut);
sidebtn.addEventListener('click' , sideBar);