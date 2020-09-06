function bulletTravel() {

    for (let i = 9; i >= 0; i--) {
        let seashellDiv = document.getElementById(i);
        let bullet = document.createElement("div");
        bullet.setAttribute("class", "bullet");
        seashellDiv.appendChild(bullet);
    }
};

function divGenerator() {
    for (var i = 0; i <= 10; i++) {
        let container = document.getElementById("container");
        var seashellDiv = document.createElement("div");
        seashellDiv.setAttribute("class", "seashellDiv");
        seashellDiv.id = i;
        container.appendChild(seashellDiv);
    }
};

document.addEventListener("keydown", function (event) {

    if (event.key === " ") {
        console.log("spacebar");
        bulletTravel();
    }
});

divGenerator();

// bulletTravel();



/* 

theParent = document.getElementById("theParent");
theKid = document.createElement("div");
theKid.innerHTML = 'Are we there yet?';

// append theKid to the end of theParent
theParent.appendChild(theKid);

// prepend theKid to the beginning of theParent
theParent.insertBefore(theKid, theParent.firstChild);

*/