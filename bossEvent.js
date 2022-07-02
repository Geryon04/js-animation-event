//Crear un evento en que si el jugador hace clic en el boss, este se movera
var boss = document.querySelector("#ball");

boss.addEventListener("click", function(){
    boss.classList.add("ball-move-click");
});