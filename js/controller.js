
let instance = null;
const PARENT_ID = "drawingArea";

function setup () {
    instance = new PerlinNoise(PARENT_ID, 600, 800);

}

// Drawing code for canvas
function draw() {

    instance.update();
}