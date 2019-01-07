// MARK: Variables
var pn = null; // Used to hold the PerlinNoise instance

// MARK: Constants
// HMTL Element IDs used to get elements for interaction with DOM
const DRAWING_AREA_ID = "drawingArea";
const PAUSE_RESUME_BUTTON_ID = "pauseResumeButton";
const HELP_BUTTON_ID = "helpButton";
const RESET_BUTTON_ID = "resetButton";
const NOISE_SLIDER_ID = "noiseSlider";
const SPEED_SLIDER_ID = "speedSlider";
const NUMBER_COLOURS_SLIDER_ID = "numberColoursSlider";
const NUMBER_PARTICLES_SLIDER_ID = "numberParticlesSlider";
// Variables used to hold references to elements in the DOM
var pauseResumeButton = null;
var resetButton = null;
var helpButton = null;
var noiseSlider = null;
var speedSlider = null;
var numberColoursSlider = null;
var numberParticlesSlider = null;

// Set function to set up various parts of the DOM when the window loads
window.onload = function () {

    // Find all necessary parts of the DOM and set their default values
    pauseResumeButton = document.getElementById(PAUSE_RESUME_BUTTON_ID);
    resetButton = document.getElementById(RESET_BUTTON_ID);
    helpButton = document.getElementById(HELP_BUTTON_ID);
    noiseSlider = document.getElementById(NOISE_SLIDER_ID);
    noiseSlider.value = Defaults.NOISE_SCALE;
    speedSlider = document.getElementById(SPEED_SLIDER_ID);
    speedSlider.value = Defaults.SPEED;
    numberColoursSlider = document.getElementById(NUMBER_COLOURS_SLIDER_ID);
    numberColoursSlider.value = Defaults.NUMBER_OF_COLOURS;
    numberParticlesSlider = document.getElementById(NUMBER_PARTICLES_SLIDER_ID);
    numberParticlesSlider.value = Defaults.NOISE_SCALE;

    // Set the event listeners to corresponding functions that handle changes made by user
    pauseResumeButton.onclick = pauseResume;
    resetButton.onclick = reset;
    helpButton.onclick = showHelp;
    noiseSlider.onchange = noiseChanged;
    speedSlider.onchange = speedChanged;
    numberColoursSlider.onchange = numberColoursChanged;
    numberParticlesSlider.onchange = numberParticlesChanged;
};

// MARK: Functions
// Function used to pause or resume the drawing
function pauseResume () {

    pn.pauseOrResume();
}

// Function to reset the drawing
function reset () {

    // Reset the drawing in PerlinNoise instance
    pn.reset();
    // Set the parameters of the drawing to whatever the sliders currently are
    pn.setNoiseScale(noiseSlider.valueAsNumber);
    pn.setSpeed(speedSlider.valueAsNumber);
    pn.setNumberOfColours(numberColoursSlider.valueAsNumber);
    pn.setNumberOfParticles(numberParticlesSlider.valueAsNumber);
    // Setup the drawing so it's ready to be drawn
    pn.setup();
}

// Function to show the user instructions on how to use the demonstration
function showHelp () {

    alert("Alter the sliders to change the properties of the drawing and use the buttons to control the drawing." +
        "\n\nPlease note that altering the number of colours or particles will reset the drawing." +
        "\n\nRefer to README.md for further information on the use of PerlinNoise.");
}

// Function used to handle changes made by the user to the noise level
function noiseChanged () {

    pn.setNoiseScale(noiseSlider.valueAsNumber);
}

// Function used to handle changes made by the user to the speed
function speedChanged () {

    pn.setSpeed(speedSlider.valueAsNumber);
}

// Function used to handle changes made by the user to the number of colours
function numberColoursChanged () {

    pn.setNumberOfColours(numberColoursSlider.valueAsNumber);
}

// Function used to handle changes made by the user to the number of particles
function numberParticlesChanged () {

    pn.setNumberOfParticles(numberParticlesSlider.valueAsNumber);
}

// Function called by p5 module to setup the drawing
function setup () {

    // Initialise the PerlinNoise class instance with null for optional graphics parameter
    pn = new PerlinNoise(null);
    // Set the ID of the drawing area div on demonstration page
    pn.setParentId(DRAWING_AREA_ID);

    // Set up the drawing and start it
    pn.setup();
    pn.pauseOrResume();
}

// Function called by p5 module to update the drawing
function draw() {

    pn.draw();
}

// Function called to handle changes in window size
function windowResized() {

    // Resize the canvas according to the new window size
    resizeCanvas(window.innerWidth, window.innerWidth);

}