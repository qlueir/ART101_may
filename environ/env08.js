$(document).ready()
    //variables
    let OST = new Audio ('OST.mp3')
    OST.play('OST.mp3')
    OST.loop = true
    let munch = new Audio ('munch.mp3')
    let explosion = new Audio ('explosion.mp3')
    let ending = new Audio ('battle.mp3')
    let yippee = new Audio ('yippee-tbh.mp3');

    //play battle music when click on expand + OST pause
    $(".ending").click(function() {
        ending.play();
        OST.pause();

        //gun image follows mouse
        $(document).mousemove(function(event) {
            $("#creature").css({
            left: event.pageX - 60,
            top: event.pageY - 60,
            position: "absolute"
    });


    });


    //yes+no button click replaces with new text + image + audio
    $(".yes, .no").click(function() {

        //stop battle.mp3
        ending.pause();
        ending.currentTime = 0;
        ending.src = "";
        
        if ($(this).hasClass("yes")){
            $(".yes").html("Kitty has exploded!");
            let image = document.getElementById("cat");
            image.src = "images/exploding_cat.gif";
            explosion.play();
            }
    
        else {
            $(".no").html("You've killed Guppy!");
            let image = document.getElementById("guppy");
            image.src = "images/Vert.webp";
            munch.play();
            }
    });

    //*clikc on peephole image transform into cat image and show text DOESNT WORK :(
    /*
    $(".peeping").click(function() {
        $('#peephole').attr('src', 'images/cat_point5.jpg');
        $(".showtext").show();
    });
    */

});

    //guppy bounce animation
    const image = document.getElementById('guppy');

    let position = 0;
    let velocity = 1;
    const bounceHeight = 100;

    function bounce() {
    position += velocity;
    
    if (position >= bounceHeight || position <= 0) {
    velocity = -velocity;
    }
    
    image.style.transform = `translateY(${position}px)`;
    
    requestAnimationFrame(bounce);
    }
    bounce();


    //cat go yippe when mouse hovers
    $("#cat").hover(function(){
        yippee.play();
    });
    
    
    