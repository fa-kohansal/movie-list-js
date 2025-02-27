let inp = document.querySelector("#addMovieInput");
let movieList = document.querySelector("ul");
let filterBtn= document.querySelector("#filterBtn")
let filterSec = document.querySelector("#filterSec");
let closeBtn = document.querySelector(".bi-x-square-fill");
let filterInput = document.querySelector("#filterInput");
let li = document.createElement("li");
let myMovie=[]
let clearInput = () => {
    inp.value = ""; 
}

function addMovie() {
    let userTypedText = inp.value;
    if(userTypedText.trim()===""){
        alert("please enter a movie name")
    }
    else{
        myMovie.push(userTypedText);
        console.log(myMovie);
        // myMovie.forEach((movie) => {
        //     li.textContent = movie;
        //     movieList.appendChild(li);
        // });
        displayMovies(myMovie)
        clearInput();

    }
    
}
function displayMovies(movies){
    movieList.innerHTML= "";
    movies.forEach((movie)=>{
        let li = document.createElement("li");
        li.textContent = movie;
        movieList.appendChild(li);
    })
}

filterBtn.addEventListener("click",()=>{
    console.log("ok");
    
    filterSec.classList.remove("hiddenFilterSec");
    filterSec.classList.add("filterSec");
})
closeBtn.addEventListener("click",()=>{
    filterSec.classList.add("hiddenFilterSec");
    filterSec.classList.remove("filterSec");
        displayMovies(myMovie);

})
function filterItems(){
    let filterText = filterInput.value.toLowerCase();
    let filteredMovie= myMovie.filter(movie=>movie.toLowerCase().includes(filterText));
    displayMovies(filteredMovie)
}