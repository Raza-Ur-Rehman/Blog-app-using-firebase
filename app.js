// import {app} from './firebase.js';

let sidebtn = document.getElementById('sidebtn');
let sidebar = document.querySelector('.sidebar');
let isOpen = false;

function sideBar() {
  isOpen = !isOpen;
  if (isOpen) {
    sidebar.style.display = "none";
    // sidebar.classList.remove("d-flex")
    // console.log("hello");
    
} 
else {
    sidebar.style.display = "flex";

    // sidebar.classList.add("d-flex")
  }
 }

sidebtn.addEventListener('click' , sideBar)












