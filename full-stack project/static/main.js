$(document).ready(function(){
    $("#activate-dark-mode").click(function(){
        $("body").toggleClass("dark-mode")
});
});

function checkCookies() {
    let text = "";
    if (navigator.cookieEnabled === true) {
        text = "cookies are enabled";
    } else {
        text = "cookies are not enabled";
    } document.getElementById("cookie").innerHTML = text;
}
