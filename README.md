# Perlin Noise- P5 Summative

## Quickstart
The implementation of PerlinNoise in a project can be as simple as follows:
```
// Function called by p5 module to setup the drawing
function setup () {

    // Initialise the PerlinNoise class instance without optional graphics parameter
    pn = new PerlinNoise();

    // Set up the drawing and start it
    pn.setup();
    pn.pauseOrResume();
}

// Function called by p5 module to update the drawing
function draw() {

    pn.draw();
}
```
Optionally, one can specify a graphics object to draw to instead of a canvas as follows:
```
// Function called by p5 module to setup the drawing
function setup () {

    createCanvas(710, 400);
    pg = createGraphics(400, 250);

    // Initialise the PerlinNoise class instance with optional graphics parameter
    pn = new PerlinNoise(pg);

    // Set up the drawing and start it
    pn.setup();
    pn.pauseOrResume();
}

// Function called by p5 module to update the drawing
function draw() {

    // Update the PerlinNoise drawing
    pn.draw();
    // Draw the image graphics buffer to the screen
    image(pg, 150, 75);
}
```

## Customising the Drawing
There are a number of customisations that can easily be made to the drawing before it is started,
some of these can also be made whilst the drawing is running.


### Altering the noise level of the drawing
The noise level of the drawing can be altered either before the drawing starts running or
whilst the drawing is running using the `setNoiseLevel` function. An example of this is given
below:
```
pn.setNoiseLevel(1000);
```
Please note that the sensible range of values to be used for the noise level is between
0 and 2000 and the default value is 800.

### Altering the speed of particles in the drawing
The speed of particles in the drawing can be altered either before the drawing starts
running or whilst the drawing is running using the `setSpeed` function. An example
of this is given below:
```
pn.setSpeed(0.8);
```
Please note that the sensible range of values to be used for the speed is between
0 and 5 and the default value is 0.4.

### Altering the number of colours in the drawing
The number of colours in the drawing can be altered either before the drawing starts
running or whilst the drawing is running using the `setNumberOfColours` function. An example
of this is given below:
```
pn.setNumberOfColours(5);
```
Please note that the sensible range of values to be used for the number of colours is between
1 and 7 and the default value is 3. Also, please be advised that altering the number of colours
whilst the drawing is running will result in it resetting.

### Altering the number of particles in the drawing
The number of particles in the drawing can be altered either before the drawing starts
running or whilst the drawing is running using the `setNumberOfParticles` function. An example
of this is given below:
```
pn.setNumberOfParticles(1000);
```
Please note that the sensible range of values to be used for the number of particles is between
0 and 5000 and the default value is 800. Also, please be advised that altering the
number of particles whilst the drawing is running will result in it resetting.