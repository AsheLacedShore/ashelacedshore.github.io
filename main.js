function clicked() {
    //console.log(document.getElementById("topnav").hasChildNodes());
    var topnav = document.getElementById("topnav");
    topnav.onclick = function() {
        console.log("DIV clicked!");
    }
    topnav.click();
}