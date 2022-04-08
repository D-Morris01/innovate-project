console.log ("JavaScript is workking.")

function displayDate(id) {
    document.getElementById("date").innerHTML = Date();
}

function checkCookies() {
    let text = "";
    if (navigator.cookieEnabled === true) {
        text = "cookies are enabled";
    } else {
        text = "cookies are not enabled";
    } document.getElementById("cookie").innerHTML = text;
}

function sendAlert() {
    alert(location.hostname);
}