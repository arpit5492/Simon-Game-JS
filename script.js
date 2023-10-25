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

nxtSeq(buttonColors);

const makeSound = function(name){
    let audio = new Audio('/sounds/' + name + '.mp3');
    audio.play();
};

// Sound happens when a button is clicked(Any of the below method will work)

// $(".btn").on("click", function() {
//     const userChosenColor = $(this).attr("id");
//     userClickedPattern.push(userChosenColor);
//     // console.log(userClickedPattern);
//     makeSound(userChosenColor);
// });

$(".btn").click(function(){
    const userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern);
    makeSound(userChosenColor);
    animatePress(userChosenColor);
});

// Adding the pressed class(Any of the below method will work)

// $(".btn").on("click", function(){
//     let pressedColor = $(this);
//     pressedColor.addClass("pressed");
//     setTimeout(function(){
//         pressedColor.removeClass("pressed");
//     }, 100);
// });

const animatePress = function(currentColor){
    let pressedColor = $("#"+currentColor);
    pressedColor.addClass("pressed");
    setTimeout(function(){
        pressedColor.removeClass("pressed");
    }, 100);
};

