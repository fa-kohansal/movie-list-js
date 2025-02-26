let inp = document.querySelector("#addMovieInput");
let movieList = document.querySelector("ul");

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



