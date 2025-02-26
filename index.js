let inp = document.querySelector("#addMovieInput");
let movieList = document.querySelector("ul");
let filterBtn= document.querySelector("#filterBtn")
let filterSec = document.querySelector("#filterSec");
let closeBtn = document.querySelector(".bi-x-square-fill");
let clearInput = () => {
    inp.value = ""; 
}

function addMovie() {
    let userTypedText = inp.value;
    let li = document.createElement("li");
    let textToInsert = document.createTextNode(userTypedText);
    li.appendChild(textToInsert);
    movieList.appendChild(li);
    console.log(movieList);
    
    clearInput();
}
filterBtn.addEventListener("click",()=>{
    console.log("ok");
    
    filterSec.classList.remove("hiddenFilterSec");
    filterSec.classList.add("filterSec");
})
closeBtn.addEventListener("click",()=>{
    filterSec.classList.add("hiddenFilterSec");
    filterSec.classList.remove("filterSec");
})