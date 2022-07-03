//Crear un evento en que si el jugador hace clic en el boss, este se movera
var boss = document.querySelector("#ball");
var gun = document.querySelector("#gun");
var ammo = document.querySelector("#ammo");

boss.addEventListener("click", function(){
    boss.classList.add("ball-move-click");
});

gun.addEventListener("click", function(){
    ammo.classList.add("gun-ammo");
});