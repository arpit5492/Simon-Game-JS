const buttonColors = ['red', 'blue', 'green', 'yellow'];
const gamePattern = [];
const userClickedPattern = [];
const nxtSeq = function(arr) {
    const random = Math.random();
    const randomNum = (Math.floor((random * 4)));
    gamePattern.push(arr[randomNum]);
    // console.log(randomNum);
    const randomChosenColor = arr[randomNum];
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    // let audio = new Audio('/sounds/' + randomChosenColor + '.mp3');
    // audio.play();
};

const makeSound = function(name){
    let audio = new Audio('/sounds/' + name + '.mp3');
    audio.play();
};

nxtSeq(buttonColors);

$(".btn").on("click", function() {
    const userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern);
    makeSound(userChosenColor);
});