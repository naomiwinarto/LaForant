function button(){
    $('#move').animate({
        left: 20,
        right: 20
    }, 700)
    $('#move').animate({
        left: 10,
        right: 10
    }, 700)
    requestAnimationFrame(button)
}

var i = 1;

window.onload = () => {
    if (i === 1) {
        document.getElementById("agentsname").innerHTML = "<div>Breach</div>";
        document.getElementById("agentsimage").innerHTML = '<img src="../../Image Source/characters/Breach.png" alt="">';
        
        var agentskill = document.querySelectorAll(".skillimg");
        agentskill[0].innerHTML =
            '<img src="../../Image Source/skills/Breach/aftershock-white.png" alt="">';
        agentskill[1].innerHTML =
            '<img src="../../Image Source/skills/Breach/fault-line-white.png" alt="">';
        agentskill[2].innerHTML =
            '<img src="../../Image Source/skills/Breach/flashpoint-white.png" alt="">';
        agentskill[3].innerHTML =
            '<img src="../../Image Source/skills/Breach/rolling-thunder-white.png" alt="">';
        
        var agentskillname = document.querySelectorAll(".skillname");
        agentskillname[0].innerHTML = "Aftershock";
        agentskillname[1].innerHTML = "Fault Line";
        agentskillname[2].innerHTML = "Flashpoint";
        agentskillname[3].innerHTML = "Rolling Thunder";
        
        var agentskilldesc = document.querySelectorAll(".desc");
        agentskilldesc[0].innerHTML =
            "Equip a fusion charge. Fire the charge to set a slow-actin burst through the wall. The burst dows heavy damage to anyone caught in its area.";
        agentskilldesc[1].innerHTML =
            "Equip a seismic blast. Hold Fire to increase the distance. Release to set off the quake, dazing all players in its zone and in a line up to the zone.";
        agentskilldesc[2].innerHTML =
            "Equip a blinding charge. Fire the charge to set a fast-acting burst through the wall. The charge detonates to blind all players looking at it.";
        agentskilldesc[3].innerHTML =
            "Equip a seismic charge. Fire to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.";
    } else if (i === 2) {
        document.getElementById("agentsname").innerHTML = "<div>Jett</div>";
        document.getElementById("agentsimage").innerHTML = '<img src="../../Image Source/characters/Jett.png" alt="">';
        
        var agentskill = document.querySelectorAll(".skillimg");
        agentskill[0].innerHTML =
            '<img src="../../Image Source/skills/Jett/blade-storm-white.png" alt="">';
        agentskill[1].innerHTML =
            '<img src="../../Image Source/skills/Jett/cloudburst-white.png" alt="">';
        agentskill[2].innerHTML =
            '<img src="../../Image Source/skills/Jett/tailwind-white.png" alt="">';
        agentskill[3].innerHTML =
            '<img src="../../Image Source/skills/Jett/updraft-white.png" alt="">';
        
        var agentskillname = document.querySelectorAll(".skillname");
        agentskillname[0].innerHTML = "Blade Storm";
        agentskillname[1].innerHTML = "Cloudburst";
        agentskillname[2].innerHTML = "Tailwind";
        agentskillname[3].innerHTML = "Updraft";
        
        var agentskilldesc = document.querySelectorAll(".desc");
        agentskilldesc[0].innerHTML =
            "Equip a set of highly accurate throwing knives that recharge on an opponent. Fire to throw a single knife at your target. Alternative Fire to throw all remaining daggers at your target.";
        agentskilldesc[1].innerHTML =
            "Instantly throw a projectile that expands into a brief vision cloud on impact with a surface. Hold the ability key to curve the cloud in the direction of your crosshair.";
        agentskilldesc[2].innerHTML =
            "Instantly propel in the direction she is moving. If Jett is standing still, she will propel forward.";
        agentskilldesc[3].innerHTML =
            "Instantly propel Jett high into the air.";
    } else if (i === 3) {
        document.getElementById("agentsname").innerHTML = "<div>Phoenix</div>";
        document.getElementById("agentsimage").innerHTML = '<img src="../../Image Source/characters/Phoneix.png" alt="">';
        
        var agentskill = document.querySelectorAll(".skillimg");
        agentskill[0].innerHTML =
            '<img src="../../Image Source/skills/phoneix/blaze-white.png" alt="">';
        agentskill[1].innerHTML =
            '<img src="../../Image Source/skills/phoneix/curveball-white.png" alt="">';
        agentskill[2].innerHTML =
            '<img src="../../Image Source/skills/phoneix/hot-hands-white.png" alt="">';
        agentskill[3].innerHTML =
            '<img src="../../Image Source/skills/phoneix/run-it-back-white.png" alt="">';
        
        var agentskillname = document.querySelectorAll(".skillname");
        agentskillname[0].innerHTML = "Blaze";
        agentskillname[1].innerHTML = "Curveball";
        agentskillname[2].innerHTML = "Hot Hands";
        agentskillname[3].innerHTML = "Run It Back";
        
        var agentskilldesc = document.querySelectorAll(".desc");
        agentskilldesc[0].innerHTML =
            "Equip a flame wall. Fire to create a line of flames that moves forward creating a wall that blocks vision and damages players passing through it. Hold Fire to bend the wall in the direction of your crosshair.";
        agentskilldesc[1].innerHTML =
            "Equip a flare orb that detonates shortly after throwing. Fire to curve the flare orb to the left, detonating and blinding any player who sees the orb. Alternate fire to curve the flare orb to the right.";
        agentskilldesc[2].innerHTML =
            "Equip a fireball. Fire to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.";
        agentskilldesc[3].innerHTML =
            'Instantly place a marker at Phoenix"s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.';
    } else if (i === 4) {
        document.getElementById("agentsname").innerHTML = "<div>Sage</div>";
        document.getElementById("agentsimage").innerHTML = '<img src="../../Image Source/characters/Sage.png" alt="">';
        
        var agentskill = document.querySelectorAll(".skillimg");
        agentskill[0].innerHTML =
            '<img src="../../Image Source/skills/Sage/barrier-orb-white.png" alt="">';
        agentskill[1].innerHTML =
            '<img src="../../Image Source/skills/Sage/healing-orb-white.png" alt="">';
        agentskill[2].innerHTML =
            '<img src="../../Image Source/skills/Sage/resurrection-white.png" alt="">';
        agentskill[3].innerHTML =
            '<img src="../../Image Source/skills/Sage/slow-orb-white.png" alt="">';
        
        var agentskillname = document.querySelectorAll(".skillname");
        agentskillname[0].innerHTML = "Barrier Orb";
        agentskillname[1].innerHTML = "Healing Orb";
        agentskillname[2].innerHTML = "Resurrection";
        agentskillname[3].innerHTML = "Slow Orb";
        
        var agentskilldesc = document.querySelectorAll(".desc");
        agentskilldesc[0].innerHTML =
            "Equip a barrier orb. Fire places a solid wall. Alternate fire rotates the targeter.";
        agentskilldesc[1].innerHTML =
            "Equip a healing orb. Fire with your crosshairs over a damaged ally to activate a heal-over-time on them. Alternate fire while Sage is damaged to activate a self heal-over-time.";
        agentskilldesc[2].innerHTML =
            "Equip an ability. Fire with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.";
        agentskilldesc[3].innerHTML =
            "Equip an orb that slows whoever walks on them after being thrown on the ground.";
    } else if (i === 5) {
        document.getElementById("agentsname").innerHTML = "<div>Viper</div>";
        document.getElementById("agentsimage").innerHTML = '<img src="../../Image Source/characters/Viper.png" alt="">';
        
        var agentskill = document.querySelectorAll(".skillimg");
        agentskill[0].innerHTML =
            '<img src="../../Image Source/skills/Viper/poison-cloud-white.png" alt="">';
        agentskill[1].innerHTML =
            '<img src="../../Image Source/skills/Viper/snake-bite-white.png" alt="">';
        agentskill[2].innerHTML =
            '<img src="../../Image Source/skills/Viper/toxic-screen-white.png" alt="">';
        agentskill[3].innerHTML =
            '<img src="../../Image Source/skills/Viper/vipers-pit-white.png" alt="">';
        
        var agentskillname = document.querySelectorAll(".skillname");
        agentskillname[0].innerHTML = "Poison Cloud";
        agentskillname[1].innerHTML = "Snake Bite";
        agentskillname[2].innerHTML = "Toxic Screen";
        agentskillname[3].innerHTML = "Vipers Pit";
        
        var agentskilldesc = document.querySelectorAll(".desc");
        agentskilldesc[0].innerHTML =
            "Equip a gas emitter. Fire to throw the emitter that perpetually remains throughout the round. Re-use the ability to create a toxic gas cloud at the cost of fuel.";
        agentskilldesc[1].innerHTML =
            "Equip a chemical launcher. Fire to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.";
        agentskilldesc[2].innerHTML =
            "Equip a gas emitter launcher. Fire to deploy a long line of gas emitters. Re-use the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be re-used more than once.";
        agentskilldesc[3].innerHTML =
            "Equip a chemical sprayer. Fire to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.";
    } 

    $('#agentsimage img').slideUp(0)
    $('#agentsimage img').slideDown(500)
    $('#agentsname').hide(0)
    $('#agentsname').show(600)

    $('.skill-container').hide(0)
    $('#one').show(600)
    $('#two').show(450)
    $('#three').show(300)
    $('#four').show(150)

    $('.desc').css({
        display: "none"
    })

    button()
}

if (window.matchMedia("(max-width: 800px)").matches){
    $('#one').click( () => {
        $('#one .desc').slideToggle(100)
        $('#two .desc').slideUp(100)
        $('#three .desc').slideUp(100)
        $('#four .desc').slideUp(100)
    })
    $('#two').click( () => {
        $('#one .desc').slideUp(100)
        $('#two .desc').slideToggle(100)
        $('#three .desc').slideUp(100)
        $('#four .desc').slideUp(100)
    })
    $('#three').click( () => {
        $('#one .desc').slideUp(100)
        $('#two .desc').slideUp(100)
        $('#three .desc').slideToggle(100)
        $('#four .desc').slideUp(100)
    })
    $('#four').click( () => {
        $('#one .desc').slideUp(100)
        $('#two .desc').slideUp(100)
        $('#three .desc').slideUp(100)
        $('#four .desc').slideToggle(100)
    })
} else {
    $('#one').hover( () => {
        $('#one .desc').slideToggle(100)
    })
    $('#two').hover( () => {
        $('#two .desc').slideToggle(100)
    })
    $('#three').hover( () => {
        $('#three .desc').slideToggle(100)
    })
    $('#four').hover( () => {
        $('#four .desc').slideToggle(100)
    })
}

function nextimg() {
    if (i >= 5) {
        i = 1;
    } else {
        i = i + 1;
    }
    window.onload()
}

function previmg() {
    if (i <= 1) {
        i = 5;
    } else {
        i = i - 1;
    }
    window.onload()
}
