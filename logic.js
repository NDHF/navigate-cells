// A simple function for navigating a multidimensional array

//Even though I am navigating in two-dimensional space, my array has three dimensions:
    //One for going up and down
    //One for going side to side
    //One for rotating in place

//This array will attempt to approximate the museum I work at:

// Within the sub-sub-arrays:
    //0 = north
    //1 = east
    //2 = south
    //3 = west

// For example, each index in the array can be an html img tag of a perspective in a room, allowing the user to click through an area in Myst-fashion

var museumArray = [

[ [          ], [          ], [          ], [          ] ],
[ [          ], [          ], [0, 1, 2, 3], [          ] ],
[ [          ], [          ], [0, 1, 2, 3], [          ] ],
[ [          ], [0, 1, 2, 3], [0, 1, 2, 3], [          ] ],
[ [          ], [0, 1, 2, 3], [0, 1, 2, 3], [          ] ],
[ [          ], [          ], [0, 1, 2, 3], [          ] ],
[ [          ], [          ], [          ], [          ] ]

];

var x = 5;
var y = 2;
var z = 0;

function navigate(direction) {

if (z === 0) {
    if (direction === "forward") {
        if (museumArray[(x - 1)][y][z] === undefined) {
            console.log("Not permitted");
        } else {
            x--;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    } else if (direction === "backward") {
        if (museumArray[(x + 1)][y][z] === undefined) {
            console.log("Not permitted");
        } else {
            x++;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    } else if (direction === "left") {
        if (museumArray[x][(y - 1)][z] === undefined) {
            console.log("Not permitted");
        } else {
            y--;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    } else if (direction === "right") {
        if (museumArray[x][(y + 1)][z] === undefined) {
            console.log("Not permitted");
        } else {
            y++;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    }

} else if (z === 1) {
    if (direction === "forward") {
        if (museumArray[x][(y + 1)][z] === undefined) {
            console.log("Not permitted");
        } else {
            y++;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    } else if (direction === "backward") {
        if (museumArray[x][(y - 1)][z] === undefined) {
            console.log("Not permitted");
        } else {
            y--;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    } else if (direction === "left") {
        if (museumArray[(x - 1)][y][z] === undefined) {
            console.log("Not permitted");
        } else {
            x--;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    } else if (direction === "right") {
        if (museumArray[(x + 1)][y][z] === undefined) {
            console.log("Not permitted");
        } else {
            x++;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    }

} else if (z === 2) {
    if (direction === "forward") {
        if (museumArray[(x + 1)][y][z] === undefined) {
            console.log("Not permitted");
        } else {
            x++;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    } else if (direction === "backward") {
        if (museumArray[(x - 1)][y][z] === undefined) {
            console.log("Not permitted");
        } else {
            x--;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    } else if (direction === "left") {
        if (museumArray[x][(y + 1)][z] === undefined) {
            console.log("Not permitted");
        } else {
            y++;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    } else if (direction === "right") {
        if (museumArray[x][(y - 1)][z] === undefined) {
            console.log("Not permitted");
        } else {
            y--;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    }

} else if (z === 3) {
    if (direction === "forward") {
        if (museumArray[x][(y - 1)][z] === undefined) {
            console.log("Not permitted");
        } else {
            y--;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    } else if (direction === "backward") {
        if (museumArray[x][(y + 1)][z] === undefined) {
            console.log("Not permitted");
        } else {
            y++;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    } else if (direction === "left") {
        if (museumArray[(x + 1)][y][z] === undefined) {
            console.log("Not permitted");
        } else {
            x++;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    } else if (direction === "right") {
        if (museumArray[x - 1][y][z] === undefined) {
            console.log("Not permitted");
        } else {
            x--;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    }

}

if (direction === "cw") {
    if (z === 3) {
        z = 0;
        console.log(x + "," + y + "," + z);
        getLocation();
    } else {
        z++;
     console.log(x + "," + y + "," + z);
     getLocation();
    }
}

if (direction === "ccw") {
    if (z === 0) {
        z = 3;
        console.log(x + "," + y + "," + z);
        getLocation();
    } else {
        z--;
        console.log(x + "," + y + "," + z);
        getLocation();
    }

}

    }; 

function getLocation() {
    if ((x === 5) && (y === 2)) {
        console.log("You are in the front yard.");

        if (z === 0) {
            console.log("You are facing towards the front door.");
        } else if (z === 1) {
            console.log("You are looking west on Simpson Street toward Public Road.");
        } else if (z === 2) {
            console.log("You are facing away from the front door.");
        } else if (z === 3) {
            console.log("You are looking east on Simpson Street, toward the historic business district.");
        } 

    }

    if ((x === 4) && (y === 1)) {
        console.log("You are in the business exhibit.");

        if (z === 0) {
            console.log("You are facing towards our upcoming Notable Persons exhibit.");
        } else if (z === 1) {
            console.log("You are facing towards the foyer.");
        } else if (z === 2) {
            console.log("You are facing our historic businesses exhbit, and the harmonium.");
        } else if (z === 3) {
            console.log("You are looking towards the window.");
        } 

    }

    if ((x === 4) && (y === 2)) {
        console.log("You are in the foyer.");

        if (z === 0) {
            console.log("You are facing toward the mining equipment exhibit. You can see the house's original colonade feature, and above it, the check tag board from the Black Diamond Mine.");
        } else if (z === 1) {
            console.log("You are facing towards our displays for Lafayette High School, the Great Snowstorm of 1913, and the Lafayette Elementary fire of 1964");
        } else if (z === 2) {
            console.log("You are facing toward Simpson Street. You can see a display on the Lewis House, and the Black Diamond Mine");
        } else if (z === 3) {
            console.log("You are looking toward our Dr. Wolf bookcase, and the business exhibit.");
        } 
    }

    if ((x === 3) && (y === 1)) {
        console.log("You are in the high school exhibit.");

        if (z === 0) {
            console.log("You are facing towards our Johnny Manazanares Trophy case. These trophies were won by Lafayette High Students.");
        } else if (z === 1) {
            console.log("You are looking back toward the mining equipment room. On the right are two baseball jerseys from Lafayette's past.");
        } else if (z === 2) {
            console.log("You are looking towards our TV, where we show the short, two-part documentary Stories of Lafayette.");
        } else if (z === 3) {
            console.log("You are looking at our sliding display, with a collection of facts and photos from city history.");
        } 
        
    }

    if ((x === 3) && (y === 2)) {
        console.log("You are in the mining equipment exhibit.");

        if (z === 0) {
            console.log("You are facing towards our scale model of the Simpson Mine, and displays about historic Lafayette mines.");
        } else if (z === 1) {
            console.log("You are facing towards our maps of Lafayette coal mines, and a mining tool display.");
        } else if (z === 2) {
            console.log("You are looking back towards the foyer.");
        } else if (z === 3) {
            console.log("You are looking at our upright mine tool display, featuring hard hats, lanterns, and samples of coal. To the right of the case, you may enter the high school exhibit.");
        } 
        
    }

    if ((x === 2) && (y === 2)) {
        console.log("You are in the kitchen exhibit.");

        if (z === 0) {
            console.log("You are looking towards our back porch, containing our farming exhibit.");
        } else if (z === 1) {
            console.log("You are looking at our coffee machine, and a map of the Northern Coal Field from the late 1970s.");
        } else if (z === 2) {
            console.log("You are looking at our glassware display, featuring a china set owned by town founder Mary Miller, sets of depression and carnival glass, and glass containing uranium. To the left is a doorway back to the mining equipment exhibit");
        } else if (z === 3) {
            console.log("You are facing towards our restroom. The pantry is on the right.");
        } 
    }

    if ((x === 1) && (y === 2)) {
        console.log("You are in the farming exhibit.");

        if (z === 0) {
            console.log("You are facing towards our museum back door. On the left is a two-man timber saw, about six feet long");
        } else if (z === 1) {
            console.log("You are facing towards our farming tool display.");
        } else if (z === 2) {
            console.log("On the left, a doorway leads back to the kitchen exhibit. In front of you is a wooden table, brought here by covered wagon in the 1860s.");
        } else if (z === 3) {
            console.log("You are looking towards Harrison Avenue. In front of the window is a hand-powered washing machine, and to the left, along the wall, is an old wine press.");
        } 
    }

};