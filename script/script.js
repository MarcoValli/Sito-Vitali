$(document).ready(function() {
    var min = Math.ceil(0);
    var max = Math.floor(4);
    var rndCol = Math.floor(Math.random() * (max - min +1)) + min;
    const coloriBg = ["#f5997e", "#ebcbc8", "#8010c0",  "#155e95", "#a0707d"];
    const coloriTxt = ["#a80030", "#195c64", "#ff01c1", "#abeeff", "#99121b"];
    
    $("body").css("background-color",coloriBg[rndCol]);
    $(".colTxt").css("color",coloriTxt[rndCol]);
    

    })