

class PerlinNoise {

    constructor(parentId, numberOfParticles, noiseScale, numberOfColours) {

        var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
        myCanvas.parent(parentId);

        this.numberOfParticles = numberOfParticles;
        this.noiseScale = noiseScale;
        this.numberOfColours = numberOfColours;
        this.colours = [];
        this.isPaused = true;

        this.setup();
        this.pauseOrResume();
    }

    setup () {

        background(21, 8, 50);

        this.particles = [];

        for (var i = 0; i < this.numberOfColours; i++) {

            this.colours[i] = [];
            this.colours[i][0] = random(0, 255);
            this.colours[i][1] = random(0, 255);
            this.colours[i][2] = random(0, 255);

            this.particles[i] = [];

            for (var j = 0; j < this.numberOfParticles / this.numberOfColours; j++) {

                this.particles[i][j] = new Particle(random(0, width),random(0,height), this.noiseScale);
            }
        }

    }


    // Initial setup of the sketch
    draw () {

        if (!this.isPaused) {

            noStroke();
            smooth();

            for (var i = 0; i < this.numberOfColours; i++) {


                fill(this.colours[i][0], this.colours[i][1], this.colours[i][2], alpha);

                for (var j = 0; j < this.numberOfParticles / this.numberOfColours; j++) {


                    var radius = map(j, 0, this.numberOfParticles / this.numberOfColours, 1, 2);
                    var alpha = map(j, 0, this.numberOfParticles / this.numberOfColours, 0, 250);

                    this.particles[i][j].move();
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

        clear();
        this.setup();
    }

}


class Particle {

    constructor(x, y, noiseScale) {

        this.direction = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.position = createVector(x, y);
        this.speed = 0.4;

        this.noiseScale = noiseScale;

    }

    move () {

        var angle = noise(this.position.x / this.noiseScale, this.position.y / this.noiseScale) * TWO_PI * this.noiseScale;
        this.direction.x = cos(angle);
        this.direction.y = sin(angle);
        this.velocity = this.direction.copy();
        this.velocity.mult(this.speed);
        this.position.add(this.velocity);
    }

    checkEdge () {

        if(this.position.x > width || this.position.x < 0 || this.position.y > height || this.position.y < 0){
            this.position.x = random(50, width);
            this.position.y = random(50, height);
        }
    }

    display (r) {

        ellipse(this.position.x, this.position.y, r, r);
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerWidth);

}