# PerlinNoise

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
some of these can also be made whilst the drawing is running. The methods used to achieve
these modifications are documented below.

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

## Documentation of Constructor and Other Methods

### `constructor(pg)`
This is the constructor used to initialise a new instance of the `PerlinNoise` object.
#### Parameters
- `pg`- p5.Renderer object passed to constructor, changes functionality of instance of
`PerlinNoise` such that it draws everything to the provided offscreen buffer `pg`
#### Returns
- New instance of `PerlinNoise` set up with default parameters

### `getDefaults()`
Function used to get the default parameters with which a new instance is set up with.
#### Parameters
(None)
#### Returns
- Enum containing the default parameters used to initialise a `PerlinNoise` object; these
include the noise level, speed of particles, number of colours and number of particles.

### `setup()`
This function is used to setup the various parts of the drawing based on the parameters at
the time of calling this function. This is called after the drawing is initialised but
before it is started again using `pauseOrResume`.
#### Parameters
(None)
#### Returns
(None)

### `draw()`
This function is used to update the drawing. It should be called after `setup` has been
called.
#### Parameters
(None)
#### Returns
(None)

### `pauseOrResume()`
This function is used to pause or resume the drawing depending on the current state of
the drawin, ie: if it is paused it will resume and vice versa.
#### Parameters
(None)
#### Returns
(None)

### `reset()`
This function is used to clear the screen or graphics buffer from anything that has been
drawn on it. Note that it will not reset the parameters of the drawing.
#### Parameters
(None)
#### Returns
(None)

### `pauseOrResume()`
This function is used to pause or resume the drawing depending on the current state of
the drawin, ie: if it is paused it will resume and vice versa.
#### Parameters
(None)
#### Returns
(None)

### `setParentId(parentId)`
This function is used to specify an HTML element that the drawing should be in.
#### Parameters
- `parentId`- string that corresponds to an HTML element's ID on the HTML page the drawing
is on
#### Returns
(None)

## Explanation of Example

