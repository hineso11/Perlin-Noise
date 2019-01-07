var Defaults = {

    NUMBER_OF_PARTICLES : 800,
    NOISE_SCALE : 400,
    SPEED : 0.4,
    NUMBER_OF_COLOURS : 3,
};


class PerlinNoise {

    // MARK: Constructors

    // Initialise class with parent id of HTML element to display in, total number of particles,
    // noise scale, number of colours in graphic and optional graphics object
    constructor(pg) {


        // Save the graphics object in the class
        this.pg = pg;

        if (!this.pg) {
            // If there is no graphics object, create a canvas to display drawing on
            this.myCanvas = createCanvas(window.innerWidth, window.innerHeight);
        }

        // Initialise variables with given parameter values
        this.numberOfParticles = Defaults.NUMBER_OF_PARTICLES;
        this.noiseScale = Defaults.NOISE_SCALE;
        this.speed = Defaults.SPEED;
        this.numberOfColours = Defaults.NUMBER_OF_COLOURS;
        this.colours = [];
        this.isPaused = true;


    }

    // MARK: Functions
    // Function used to set up the drawing
    setup () {

        // Set the background for the drawing
        if (this.pg) {

            this.pg.background(21, 8, 50);
        } else {

            background(21, 8, 50);

        }

        // Initialise array for particles arrays to be held in
        this.particles = [];

        // For each colour that the drawing should have
        for (var i = 0; i < this.numberOfColours; i++) {

            // Create a random colour and store it
            this.colours[i] = [];
            this.colours[i][0] = random(0, 255);
            this.colours[i][1] = random(0, 255);
            this.colours[i][2] = random(0, 255);

            // Initialise index of particles array for this colour
            this.particles[i] = [];

            // Loop through (number of particles / number of colours) times so that equal number of each colour are created
            for (var j = 0; j < this.numberOfParticles / this.numberOfColours; j++) {

                // Create new particle object
                if (this.pg) {

                    this.particles[i][j] = new Particle(random(0, this.pg.width),random(0,this.pg.height), this.pg);
                } else {

                    this.particles[i][j] = new Particle(random(0, width),random(0,height), this.pg);
                }

            }
        }

    }


    // Function used to update the drawing
    draw () {

        // Only update drawing if the drawing isn't paused
        if (!this.isPaused) {

            if (this.pg) {

                this.pg.noStroke();
                this.pg.smooth();
            } else {

                noStroke();
                smooth();
            }

            // Loop through each colour particle
            for (var i = 0; i < this.numberOfColours; i++) {


                // Fill using the current colour
                if (this.pg) {

                    this.pg.fill(this.colours[i][0], this.colours[i][1], this.colours[i][2], alpha);
                } else {

                    fill(this.colours[i][0], this.colours[i][1], this.colours[i][2], alpha);
                }

                // For each particle in this colour
                for (var j = 0; j < this.numberOfParticles / this.numberOfColours; j++) {

                    // Create the radius of particle and its alpha
                    if (this.pg) {

                        var radius = this.pg.map(j, 0, this.numberOfParticles / this.numberOfColours, 1, 2);
                        var alpha = this.pg.map(j, 0, this.numberOfParticles / this.numberOfColours, 0, 250);
                    } else {
                        var radius = map(j, 0, this.numberOfParticles / this.numberOfColours, 1, 2);
                        var alpha = map(j, 0, this.numberOfParticles / this.numberOfColours, 0, 250);
                    }

                    this.particles[i][j].move(this.noiseScale, this.speed);
                    this.particles[i][j].display(radius);
                    this.particles[i][j].checkEdge();

                }

            }
        }


    }

    pauseOrResume () {

        this.isPaused = !this.isPaused;
    }

    reset () {

        if (this.pg) {

            this.pg.clear();
        } else {


            clear();
        }
    }

    setParentId (parentId) {

        this.myCanvas.parent(parentId);
    }

    setNoiseScale (noiseScale) {

        this.noiseScale = noiseScale;
    }

    setSpeed (speed) {

        this.speed = speed;
    }

    setNumberOfColours (numberOfColours) {

        this.numberOfColours = numberOfColours;
        this.reset();
        this.setup();
    }

    setNumberOfParticles (numberOfParticles) {

        this.numberOfParticles = numberOfParticles;
        this.reset();
        this.setup();
    }

}


class Particle {

    constructor(x, y, pg) {

        this.direction = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.position = createVector(x, y);

        this.pg = pg;

    }

    move (noiseScale, speed) {

        var angle = noise(this.position.x / noiseScale, this.position.y / noiseScale) * TWO_PI * noiseScale;
        this.direction.x = cos(angle);
        this.direction.y = sin(angle);
        this.velocity = this.direction.copy();
        this.velocity.mult(speed);
        this.position.add(this.velocity);
    }

    checkEdge () {

        if (this.pg) {

            if(this.position.x > this.pg.width || this.position.x < 0 || this.position.y > this.pg.height || this.position.y < 0){
                this.position.x = random(50, this.pg.width);
                this.position.y = random(50, this.pg.height);
            }
        } else {

            if(this.position.x > width || this.position.x < 0 || this.position.y > height || this.position.y < 0){
                this.position.x = random(50, width);
                this.position.y = random(50, height);
            }
        }


    }

    display (r) {
        if (this.pg) {

            this.pg.ellipse(this.position.x, this.position.y, r, r);
        } else {

            ellipse(this.position.x, this.position.y, r, r);
        }
    }
}