$(function() {

    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    $("body").css({
    
        backgroundColor: '#' + randomColor
    
    });
    
});