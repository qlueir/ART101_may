$("#add-creature").click(
    function(){

    //grab the value from the input
    let crName = $("#crName").val();
    

    //remove the name after it's added
    $("crName").val("");

    //safeguard to prevent inputting when there's nothing typed or over 12 characters long
    if ((crName =="") || (crName.length>12)) { 
    }
    else {
        $("#creature-list").append(crName + ", ");
    }

});

