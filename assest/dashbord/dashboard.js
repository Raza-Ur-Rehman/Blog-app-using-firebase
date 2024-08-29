import { auth, signOut, onAuthStateChanged , db, collection, addDoc,getDocs } from "../../firebase.js";

const sidebtn = document.getElementById("sidebtn");
const moblogout = document.getElementById("moblogout");
const logOutBtn = document.querySelector(".logout");
const sidebar = document.querySelector(".sidebar");
let isOpen = false;
// side bar function
function sideBar() {
  isOpen = !isOpen;
  if (isOpen) {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "flex";
  }
}

//  logOut function
const logOut = () => {
  signOut(auth)
    .then(() => {
      Toastify({
        text: "LogOut Successfully",
        duration: 3000,
      }).showToast();
    })
    .catch((error) => {
      Toastify({
        text: error,
        duration: 3000,
      }).showToast();
    });
};

// state change function
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../../index.html";
  }
});

logOutBtn.addEventListener("click", logOut);
moblogout.addEventListener("click", logOut);
sidebtn.addEventListener("click", sideBar);

// create blog function

let formFeild = document.querySelectorAll(
  ".blogmodal form input, textarea, select"
);
const [inputTitle, inputAuthor, inputDate, inputImage] = formFeild;
const addBlogBtn = document.getElementById("add-blog-btn");

const createblog = async() => {
  event.preventDefault();
  if (
    inputTitle.value.trim() !== "" &&
    inputAuthor.value.trim() !== "" &&
    inputDate.value.trim() !== "" &&
    inputImage.value.trim() !== "" &&
    inputCategory.value.trim() !== "" &&
    inputContent.value.trim() !== ""
  ) {
    addBlogBtn.innerHTML = "<div class='spinner'></div>"
    try {
        const docRef = await addDoc(collection(db, `${inputCategory.value} Blog`), {
          Title: inputTitle.value,
          Author: inputAuthor.value,
          Date: inputDate.value,
          Category: inputCategory.value,
          Content : inputContent.value
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        addBlogBtn.innerHTML = "Add+";
      }
      finally{
        addBlogBtn.innerHTML = "Add+";
        Toastify({
          text: "Blog Added Successfully",
          duration: 3000,
        }).showToast();
        inputTitle.value = "";
        inputAuthor.value = "";
        inputDate.value = "";
        inputImage.value = "";
        inputCategory.value = "";
        inputContent.value = "";
      }

    
  } else {
    Toastify({
      text: "All fields are required",
      duration: 3000,
    }).showToast();
    return;
  }
};

addBlogBtn.addEventListener("click", createblog);


// get blog function 

const blogCard = document.getElementById("blog-data");

const showBlog = async() => {
  const querySnapshot = await getDocs(collection(db, `${inputCategory.value} Blog`));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
  
}
showBlog();