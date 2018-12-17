
let instance = null;
const PARENT_ID = "drawingArea";
const COLOURS = [[69,33,124], [7,153,242], [255,255,255], [134, 244, 66], [187, 65, 244]];

function setup () {
    instance = new PerlinNoise(PARENT_ID, 600, 800, 5, COLOURS);

}

// Drawing code for canvas
function draw() {

    instance.update();
}