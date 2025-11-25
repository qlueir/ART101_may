$(document).ready()

    //variables
    let OST = new Audio ('OST.mp3')
    OST.play('OST.mp3')
    OST.loop = true

    let munch = new Audio ('munch.mp3')
    let explosion = new Audio ('explosion.mp3')
    let ending = new Audio ('battle.mp3')
    let yippee = new Audio ('yippee-tbh.mp3');

    //button goes to bothpages2 + battle music start + OST pause
    $(".nextpage").click(function() {
        ending.play();
        OST.pause();

        $(".ch1").hide();
        $(".ch2").show();

    });

    //gun image follows mouse
    $(document).mousemove(function(event) {
        $("#shotgun").css({
        left: event.pageX - 60,
        top: event.pageY - 60,
        position: "absolute"
        });
    });

    //yes+no button click replaces with new text + image + audio
    $(".yes, .no").click(function() {

        ending.pause();
        ending.currentTime = 0;
        
        if ($(this).hasClass("yes")){
            $(".yes").html("Kitty has exploded!");
            $("#catsmile").attr("src", "images/exploding_cat.gif");
            explosion.play();
        } else {
            $(".no").html("You've killed Guppy!");
            $("#vert").show();
            munch.play();
        }
    });


    //hover on peephole image transform into cat image + yippe sound
    
    $(".peeping").hover(function() {
        $('#peephole').attr('src', 'images/cat_point5.jpg');
        yippee.play();
    }, function() {
        $('#peephole').attr('src', 'images/peephole.webp');
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