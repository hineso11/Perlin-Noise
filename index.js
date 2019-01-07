
// MARK: Variables and Constants
var pn = null;

const DRAWING_AREA_ID = "drawingArea";
const PAUSE_RESUME_BUTTON_ID = "pauseResumeButton";
const RESET_BUTTON_ID = "resetButton";
const NOISE_SLIDER_ID = "noiseSlider";
const SPEED_SLIDER_ID = "speedSlider";
const NUMBER_COLOURS_SLIDER_ID = "numberColoursSlider";
const NUMBER_PARTICLES_SLIDER_ID = "numberParticlesSlider";

var pauseResumeButton = null;
var resetButton = null;
var noiseSlider = null;
var speedSlider = null;
var numberColoursSlider = null;
var numberParticlesSlider = null;

// MARK: Method to set up various parts of the DOM when the window loads
window.onload = function () {

    pauseResumeButton = document.getElementById(PAUSE_RESUME_BUTTON_ID);
    resetButton = document.getElementById(RESET_BUTTON_ID);
    noiseSlider = document.getElementById(NOISE_SLIDER_ID);
    noiseSlider.value = Defaults.NOISE_SCALE;
    speedSlider = document.getElementById(SPEED_SLIDER_ID);
    speedSlider.value = Defaults.SPEED;
    numberColoursSlider = document.getElementById(NUMBER_COLOURS_SLIDER_ID);
    numberColoursSlider.value = Defaults.NUMBER_OF_COLOURS;
    numberParticlesSlider = document.getElementById(NUMBER_PARTICLES_SLIDER_ID);
    numberParticlesSlider.value = Defaults.NOISE_SCALE;

    pauseResumeButton.onclick = pauseResume;
    resetButton.onclick = reset;
    noiseSlider.onchange = noiseChanged;
    speedSlider.onchange = speedChanged;
    numberColoursSlider.onchange = numberColoursChanged;
    numberParticlesSlider.onchange = numberParticlesChanged;
};

// MARK: Functions to control the drawing demonstration
function pauseResume () {

    pn.pauseOrResume();
}

function reset () {

    pn.reset();
    pn.setNoiseScale(noiseSlider.valueAsNumber);
    pn.setSpeed(speedSlider.valueAsNumber);
    pn.setup();
}

function noiseChanged () {

    pn.setNoiseScale(noiseSlider.valueAsNumber);
}

function speedChanged () {

    pn.setSpeed(speedSlider.valueAsNumber);
}

function numberColoursChanged () {

    pn.setNumberOfColours(numberColoursSlider.valueAsNumber);
}

function numberParticlesChanged () {

    pn.setNumberOfParticles(numberParticlesSlider.valueAsNumber);
}

// MARK: p5 functions for drawing demonstration
function setup () {

    pn = new PerlinNoise(null);
    pn.setParentId(DRAWING_AREA_ID);

    // Set up the drawing and start it
    pn.setup();
    pn.pauseOrResume();
}

// Drawing code for canvas
function draw() {

    pn.draw();
}