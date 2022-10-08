function openNav(){
    let a = document.getElementById("side-nav");
    let b = document.getElementById("open");
    a.style.width = "320px";
    b.style.visibility = "hidden";
    b.style.transition = "0s";

}

function closeNav(){
    let a = document.getElementById("side-nav");
    let b = document.getElementById("open");
    a.style.width = "0";
    b.style.visibility = "visible";
}