setInterval(function(){
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);

    var bg = "background: rgb(" + red + "," + green + "," + blue + ");";
    var element = document.getElementById("change");
    element.style = bg;

}, 2000);