
// Initial setup of the sketch
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

// Drawing code for canvas
function draw() {
    background(138, 181, 230);

    fill(0);
    ellipse(width / 2, height / 2, 50);
}

// Method used to dynamically resize the canvas based on the height of the window
function resize () {

    resizeCanvas(window.innerWidth, window.innerHeight);
}

// Set the listener for when the window is resized
window.onresize = resize;
