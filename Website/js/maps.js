function button(){
    $('#move').animate({
        left: 20,
        right: 20
    }, 700)
    $('#move').animate({
        left: 15,
        right: 10
    }, 700)
    requestAnimationFrame(button)
}

var i = 1;

window.onload = () => {
    if (i === 1) {
        document.getElementById("mapsimage").innerHTML =
        '<img src="../../Image Source/maps/Ascent-Map-removebg-preview.png" alt="">';

        document.getElementById("mapsname").innerHTML = "Ascent";
        document.getElementById("desc").innerHTML =
            "Ascent has two locations that are separated by an open playground for small battles for positions and shootouts. Each location can be reinforced with an irreversible bomb door; once installed, you must destroy it or find another way to get through. Give up as little land as possible.";
    } else if (i === 2) {
        document.getElementById("mapsimage").innerHTML =
        '<img src="../../Image Source/maps/Bind-Map-removebg-preview.png" alt="">';

        document.getElementById("mapsname").innerHTML = "Bind";
        document.getElementById("desc").innerHTML =
            "Bind is a map that has the unique mechanic of teleporters. Teleporters allow players to rotate from one side of the map to the other and can be extremely good for quickly rotating if things go poorly at one site.";
    } else if (i === 3) {
        document.getElementById("mapsimage").innerHTML =
        '<img src="../../Image Source/maps/Haven-Map-removebg-preview.png" alt="">';

        document.getElementById("mapsname").innerHTML = "Haven";
        document.getElementById("desc").innerHTML =
            "Bind is a map that has the unique mechanic of teleporters. Teleporters allow players to rotate from one side of the map to the other and can be extremely good for quickly rotating if things go poorly at one site.";
    } else if (i === 4) {
        document.getElementById("mapsimage").innerHTML =
        '<img src="../../Image Source/maps/Split-Map-removebg-preview.png" alt="">';

        document.getElementById("mapsname").innerHTML = "Split";
        document.getElementById("desc").innerHTML =
            "Split is a map located in and inspired by Tokyo in Japan. It has two sites for the spike and features four ropes that can be climbed by the players. The hard access to B and the hard rotation makes mid control very important on this map.";
    }

    $('#mapsimage img').fadeOut(0)
    $('#mapsimage img').fadeIn(500)

    $('#description-container').slideUp(0)
    if (window.matchMedia("(max-width: 1000px)").matches){
        $('#description-container').slideDown(1000)
    }
    else
    {
        $('#description-container').show(1000)
    }

    button()
}

function nextimg() {
    if (i >= 4) {
        i = 1;
    } else {
        i = i + 1;
    }
    window.onload()
}

function previmg() {
    if (i <= 1) {
        i = 4;
    } else {
        i = i - 1;
    }
    window.onload()
}
