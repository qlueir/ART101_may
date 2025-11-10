$(document).ready()
    //variables
    let OST = new Audio ('OST.mp3')
    OST.play('OST.mp3')
    OST.loop = true
    let munch = new Audio ('munch.mp3')
    let explosion = new Audio ('explosion.mp3')
    let ending = new Audio ('battle.mp3')
    let yippee = new Audio ('yippee-tbh.mp3');

    //yes+no button click replaces with new text + image + audio
    $("button").click(function() {

        
        if ($(this).hasClass("yes")){
            $(".yes").html("Kitty has exploded!");
            var image = document.getElementById("cat");
            image.src = "images/exploding_cat.gif";
            explosion.play();
            }
    
        else {
            $(".no").html("You've killed Guppy!");
            var image = document.getElementById("guppy");
            image.src = "images/Vert.webp";
            munch.play();
            }
    });


    //play battle music when click on expand + OST pause
    $(".ending").click(function() {
        ending.play();
        OST.pause();

        //ending audio pause after yes + no button clicked doesn't work :/
        $("button").one("click", function() {
            ending.pause();
        });
        
    });

    //cat go yippe when mouse hovers
    $("#cat").hover(function(){
        yippee.play();
    });
    
    
    