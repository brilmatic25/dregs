const button = document.querySelector(".button");

window.addEventListener('scroll', () => {
    let value= window.scrollY;
    if (value > 2300) {
        button.style.display = "block";
        }
        else {
            button.style.display = "none";
        }
    });