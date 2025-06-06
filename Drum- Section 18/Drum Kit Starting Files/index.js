
var allButtons = document.querySelectorAll("button");

allButtons.forEach(function (btn) {
    // أضف eventListener هنا
    btn.addEventListener("click", handClick)
});
function handClick() {

    var buttonInnerHTML = this.innerHTML
    //    this.style.color = "white";
    makeSound(buttonInnerHTML);



    buttonAnimation(buttonInnerHTML);
}


document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":

            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":

            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":

            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;



        case "d":

            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;


        case "j":

            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;



        case "k":

            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;



        case "l":

            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey) {


    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");

    }, 100)
}

//  var audio = new Audio('./sounds/crash.mp3');
//     audio.play();