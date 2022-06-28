var input = document.querySelector(".input");
var button = document.querySelector(".button");
var copy = document.querySelector(".copy");

button.addEventListener("click", function(){
    copy.textContent = input.value;
    input.value = "";
});