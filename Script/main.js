$(document).ready(function() {
    
    const colori = ["#f5997e", "ebcbc8", "#8010c0", "#8010c0", "#155e95", "#a0707d"];
    const ColoreRandom = colori[Math.floor(Math.random() * colori.length)];
    $(".sfondo").css("background-color",ColoreRandom);
});

    var bgcol1 = "#f5997e";
    var bgcol2 = "#ebcbc8";
    var bgcol3 = "#8010c0";
    var bgcol4 = "#155e95";
    var bgcol5 = "#a0707d";

    function bgColRandomizer() {
       
        min = Math.ceil(1);
        max = Math.floor(5);
        comb = Math.floor(Math.random() * (max - min + 1)) + min;
        var bgColor = ("bgcol" + comb);
        
        return bgColor};
    
    
     function lancio (colore){
        
        $(".sfondo").css("background-color",colore);
        console.log(colore);
        
    }
    var col = bgColRandomizer();
       
    lancio(col);
    
    })
    
    
    
