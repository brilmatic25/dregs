const blackHole = document.querySelector(".black-hole-img");
const hummingbird = document.querySelector(".hummingbird");
const diaspora = document.querySelector("diaspora");

window.addEventListener('scroll', () => {
    var value = window.scrollY;
    blackHole.style.transform = "rotate("+value*5+"deg)";
});


window.addEventListener('scroll', () => {
    var value = window.scrollY;
    hummingbird.style.transform = "translate("+(value%500)/10+"vw, "+-(value%500)/10+"vh)";
});

window.addEventListener('scroll', () => {
    var value = window.scrollY;
    diaspora.style.transform = "scale("(+value%100)/100+")";
});