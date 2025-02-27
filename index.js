let inp = document.querySelector("#addMovieInput");
let movieList = document.querySelector("ul");
let filterBtn= document.querySelector("#filterBtn")
let filterSec = document.querySelector("#filterSec");
let closeBtn = document.querySelector(".bi-x-square-fill");
let filterInput = document.querySelector("#filterInput");
let li = document.createElement("li");
let myMovie=[]

//function for clearing add input 
let clearInput = () => {
    inp.value = ""; 
}

// function for adding movie name on movie list 
function addMovie() {
    let userTypedText = inp.value;
    if(userTypedText.trim()===""){
        alert("please enter a movie name")
    }
    else{
        myMovie.push(userTypedText);
        console.log(myMovie);
        
        displayMovies(myMovie)
        clearInput();

    }
    
}

// function for showing the movie's name on the list
function displayMovies(movies){
    movieList.innerHTML= "";
    movies.forEach((movie)=>{
        let li = document.createElement("li");
        li.textContent = movie;
        movieList.appendChild(li);
    })
}

// function for filtering the movie list
filterBtn.addEventListener("click",()=>{
    console.log("ok");
    
    filterSec.classList.remove("hiddenFilterSec");
    filterSec.classList.add("filterSec");
})

// function for closing the filter section
closeBtn.addEventListener("click",()=>{
    filterSec.classList.add("hiddenFilterSec");
    filterSec.classList.remove("filterSec");
        displayMovies(myMovie);

})

// filter for movie list
function filterItems(){
    let filterText = filterInput.value.toLowerCase();
    let filteredMovie= myMovie.filter(movie=>movie.toLowerCase().includes(filterText));
    displayMovies(filteredMovie)
}