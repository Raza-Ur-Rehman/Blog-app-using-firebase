import { db,collection,addDoc,getDocs,} from "../../firebase.js"
let loader = document.getElementById('loader');
const blogCard = document.getElementById("blog-data");
loader.style.display = 'none';
// fetch data from firebase and show on dashboard page
const showBlogs = async () => {
    loader.style.display = 'block';
    try {
        const querySnapshot = await getDocs(collection(db, "userBlog"));
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
                        <button class="btn fs-5 fw-semibold">
                            <i class="fas fa-edit "></i> Edit
                        </button>
                        <button class="btn fs-5 fw-semibold">
                         <i class="fas fa-trash-alt"></i> Delete
                        </button>
                    </div>
                  </div>
              </div>`;
        });
    } 
    catch (error) {
        console.log(error);
    }
    finally{
        // console.log("Error getting documents: ", error);
        loader.style.display = 'none';
    }
};
showBlogs();






















