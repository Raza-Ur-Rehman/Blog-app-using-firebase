import { db,collection,addDoc,getDocs,doc, deleteDoc,} from "../../firebase.js"
let loader = document.getElementById('loader');
const blogCard = document.getElementById("blog-data");
const dataNotFound = document.getElementById("no-data");
loader.style.display = 'none';
// fetch data from firebase and show on dashboard page
const getBlogs = async () => {
    loader.style.display = 'block';
    try {
        const querySnapshot = await getDocs(collection(db, "userBlog"));
        if(querySnapshot.empty){
            dataNotFound.style.display = 'flex';
            // loader.style.display = 'none';
        }
        querySnapshot.forEach((doc) => {
                        
          const { Title, Author, Content, Category, Date } = doc.data();
          blogCard.innerHTML += `
              <div class="col-lg-3 mycard">
                  <div class="card">
                    <div class="card-img position-relative">
                        <a href="#" class="btn text-bg-light position-absolute" id="blog-category">${Category}</a>
                        <img src="../image/img1.png" alt="" class="object-fit-cover" id="blog-image">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title" id="blog-title">
                            ${Title}
                        </h5>
                        <p class="card-text" id="blog-content">
                            ${Content}
                        </p> 
                    </div>
                    <div class="card-body d-flex justify-content-between">
                        <p class="card-text ">Author : <span id="blog-author">${Author} </span> </p>
                        <p class="card-text ">Date : <span id="blog-date"> ${Date}</span></p>
                    </div>
                    <div class="mb-3 d-flex justify-content-around">
                        <button class="btn fs-5 fw-semibold" onclick="editData('${doc.id}',this)">
                            <i class="fas fa-edit "></i> Edit
                        </button>
                        <button class="btn fs-5 fw-semibold "onclick="deleteData('${doc.id}',this)">
                         <i class="fas fa-trash-alt"></i> Delete
                        </button>
                    </div>
                  </div>
              </div>`;
        });
    } 
    catch (error) {
        Toastify({
            text: error,
            duration: 3000,
          }).showToast();
          return;
    }
    finally{
        // console.log("Error getting documents: ", error);
        loader.style.display = 'none';
         
    }
};
getBlogs();

window.editData = async(id) => {
    // get blog data to edit
    // open modal and show data
    console.log("edit");
    
}
window.deleteData = async (id , button) => {
    // delete blog data from firebase
    // show toast message
    // console.log('delete', id, button);
    
    button.innerHTML = "<div class='spinner'></div>"
    try {
        await deleteDoc(doc(db, "userBlog", id));
        getBlogs(); 
        Toastify({
            text: "Blog Deleted Successfully",
            duration: 3000,
        }).showToast();
        // after delete refresh data
    }
    catch (error) {
        Toastify({
            text: error,
            duration: 3000,
          }).showToast();
        console.log(error);  
}
finally {
    getBlogs();
}
    // await deleteDoc(doc(db, "cities", "DC"));
}
 




















