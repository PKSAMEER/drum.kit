var noofdrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < noofdrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var drumbutt = this.innerHTML;
        sound(drumbutt);
        animebut(drumbutt);
    });
}

document.addEventListener("keypress", function (press) {
    sound(press.key);
    animebut(press.key);
});

function sound(key) {
    switch (key) {
        case ("w"):
            var audio1 = new Audio("tom-1.mp3");
            audio1.play();
            break;

        case ("a"):
            var audio2 = new Audio("tom-2.mp3");
            audio2.play();
            break;

        case ("s"):
            var audio3 = new Audio("tom-3.mp3");
            audio3.play();
            break;

        case ("d"):
            var audio4 = new Audio("tom-4.mp3");
            audio4.play();
            break;

        case ("j"):
            var audio5 = new Audio("snare.mp3");
            audio5.play();
            break;

        case ("k"):
            var audio6 = new Audio("crash.mp3");
            audio6.play();
            break;

        case ("l"):
            var audio7 = new Audio("kick-bass.mp3");
            audio7.play();
            break;
        default:

    }

}

function animebut(currentkey) {
    var anibut = document.querySelector("." + currentkey);
    anibut.classList.add("pressedbut");

    setTimeout(function () {
        anibut.classList.remove("pressedbut");
    }, 100);
}