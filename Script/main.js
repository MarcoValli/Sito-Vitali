$(document).ready(function() {
    var min = Math.ceil(1);
    var max = Math.floor(5);
    var rndCol = Math.floor(Math.random() * (max - min + 1)) + min;
    const coloriBg = ["#f5997e", "ebcbc8", "#8010c0", "#8010c0", "#155e95", "#a0707d"];
    const coloriTxt = ["#f5997e", "ebcbc8", "#8010c0", "#8010c0", "#155e95", "#a0707d"];
    
    $("body").css("background-color",coloriBg[rndCol]);
    $(".colTxt").css("background-color",coloriTxt[rndCol]);
    

    })
    
    
    
