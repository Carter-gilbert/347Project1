function hamMenu() {
    var x = document.getElementById("mynavBar");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}