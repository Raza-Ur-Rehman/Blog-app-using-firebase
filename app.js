// import {app} from './firebase.js';

let sidebtn = document.getElementById('sidebtn');
let sidebar = document.querySelector('.sidebar');
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

sidebtn.addEventListener('click' , sideBar)












