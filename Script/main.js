$(document).ready(function() {
    
    const colori = ["#f5997e", "ebcbc8", "#8010c0", "#8010c0", "#155e95", "#a0707d"];
    const ColoreRandom = colori[Math.floor(Math.random() * colori.length)];
    $(".sfondo").css("background-color",ColoreRandom);
});
    
    
