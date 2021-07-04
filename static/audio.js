const myAudio = Object.create(null);
const Audio = window.Audio;

let click = new Audio("sounds/click.mp3");
let send = new Audio("sounds/send.mp3");

//function that plays the audio files
myAudio.click = function () {
    click.play();
};
myAudio.send = function () {
    send.play();
};
myAudio.search = function () {
    send.play();
};
export default Object.freeze(myAudio);