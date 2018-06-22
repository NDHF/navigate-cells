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

//var position = (x + "," + y + "," + z);

console.log(position);

function navigate(direction) {

    if (direction === "forward") {
        if (museumArray[x - 1][y][z] === undefined) {
            console.log("Not permitted");
        } else {
            x--;
            console.log(x + "," + y + "," + z);
        }
    }

    if (direction === "backward") {
        if (museumArray[(x + 1)][y][z] === undefined) {
            console.log("Not permitted");
        } else {
            x++;
            console.log(x + "," + y + "," + z);
        }
    }

    if (direction === "left") {
        if (museumArray[x][y - 1][z] === undefined) {
            console.log("Not permitted");
        } else {
            y--;
            console.log(x + "," + y + "," + z);
        }
    }

    if (direction === "right") {
        if (museumArray[x][y + 1][z] === undefined) {
            console.log("Not permitted");
        } else {
            y++;
            console.log(x + "," + y + "," + z);
        }
    }

    if (direction === "cw") {
        if (z === 4) {
            z = 0;
            console.log(x + "," + y + "," + z);
        } else {
            z++;
         console.log(x + "," + y + "," + z);
        }
    }

    if (direction === "ccw") {
        if (z === 0) {
            z = 4;
            console.log(x + "," + y + "," + z);
        } else {
            z--;
            console.log(x + "," + y + "," + z);
        }
    }

}; 