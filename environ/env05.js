$("button").click(function() {

    if ($(this).hasClass("yes")){
    $(".yes").html("Kitty has exploded!");
    var image = document.getElementById("cat");
    image.src = "images/exploding_cat.gif";
    }
    
    else {
    $(".no").html("You've killed Guppy!");
    var image = document.getElementById("guppy");
    image.src = "images/Vert.webp";
    }

});

var audio = new Audio ('yippee-tbh.mp3');
var audio2 = new Audio ('')
//create var for fish tank audio?^^

$("#cat").hover(function(){

      audio.play();
//only play once per hover
});

$("html") audio2.play ('')
//fish tank audio loop
//play battle music when click on expand
//stop battle music after player click yes/no button
//continue fish tank audio


