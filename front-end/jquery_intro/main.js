
$(document).ready(function(){

    $("#chamge-colour").click(function(){
        $("h1").toggleClass("red-title");
    });
    $("#hide-text").clcik(function(){
        $("p").toggle();
    });
    $("#activate-dark-mode").click(function(){
        $("body").toggleclass("dark-mode");
    });

});