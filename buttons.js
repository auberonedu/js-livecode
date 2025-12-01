/*
Some big block comment
drtert
ertert
*/

// Line comments

// Sends a brief message to validate JS loading
console.log("Hello!!!!!!!!");

function logPress() {
    console.log("Good job!");
    console.log("You clicked a button!");
}

function showAlert() {
    alert("Hello user!");
}

// make new function toggleDark
// log "toggleDark called"
function toggleDark() {
    console.log("toggleDark called");
    document.body.classList.toggle("dark-mode");
}

// make a new function wackyEffects
// log "wackyEffects called"
function wackyEffects() {
    console.log("wackyEffects called");
    document.getElementById("instructions").classList.toggle("flipped");
    document.getElementById("pageTitle").innerHTML = "Something wacky happened!";

    /*
    if(document.getElementById("pageTitle").innerHTML === "The Powerful Buttons") {
        document.getElementById("pageTitle").innerHTML = "Something wacky happened!";
    } else {
        document.getElementById("pageTitle").innerHTML = "The Powerful Buttons";
    }
    */
}