class PerlinNoise {

    constructor() {


    }

    // Initial setup of the sketch
    doSomething () {


        background(21, 8, 50);
    }

}

noise = null;

function setup () {
    createCanvas(window.innerWidth, window.innerHeight);
    noise = new PerlinNoise();

}

// Drawing code for canvas
function draw() {

    noise.doSomething();
}