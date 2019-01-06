
// MARK: Variables and Constants
var pn = null;

const PARENT_ID = "drawingArea";
const PAUSE_RESUME_BUTTON_ID = "pauseResumeButton";
const RESET_BUTTON_ID = "resetButton";
const NOISE_SLIDER_ID = "noiseSlider";
const SPEED_SLIDER_ID = "speedSlider";

var pauseResumeButton = null;
var resetButton = null;
var noiseSlider = null;
var speedSlider = null;

// MARK: Method to set up various parts of the DOM when the window loads
window.onload = function () {

    pauseResumeButton = document.getElementById(PAUSE_RESUME_BUTTON_ID);
    resetButton = document.getElementById(RESET_BUTTON_ID);
    noiseSlider = document.getElementById(NOISE_SLIDER_ID);
    noiseSlider.value = Defaults.NOISE_SCALE;
    speedSlider = document.getElementById(SPEED_SLIDER_ID);
    speedSlider.value = Defaults.SPEED;

    pauseResumeButton.onclick = pauseResume;
    resetButton.onclick = reset;
    noiseSlider.onchange = noiseChanged;
    speedSlider.onchange = speedChanged;

};

// MARK: Functions to control the drawing demonstration
function pauseResume () {

    pn.pauseOrResume();
}

function reset () {

    pn.reset();
    pn.setup();
}

function noiseChanged () {

    pn.setNoiseScale(noiseSlider.valueAsNumber);
}

function speedChanged () {

    pn.setSpeed(speedSlider.valueAsNumber);
}


// MARK: p5 functions for drawing demonstration
function setup () {

    pn = new PerlinNoise(PARENT_ID, null);

    // Set up the drawing and start it
    pn.setup();
    pn.pauseOrResume();
}

// Drawing code for canvas
function draw() {

    pn.draw();
}