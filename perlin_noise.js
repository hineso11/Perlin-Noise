

class PerlinNoise {

    constructor(parentId, numberOfParticles, noiseScale, numberOfColours, pg) {

        this.pg = pg;

        if (this.pg) {


        } else {

            var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
            myCanvas.parent(parentId);
        }

        this.numberOfParticles = numberOfParticles;
        this.noiseScale = noiseScale;
        this.numberOfColours = numberOfColours;
        this.colours = [];
        this.isPaused = true;

        this.setup();
        this.pauseOrResume();
    }

    setup () {

        if (this.pg) {

            this.pg.background(21, 8, 50);
        } else {

            background(21, 8, 50);

        }

        this.particles = [];

        for (var i = 0; i < this.numberOfColours; i++) {

            this.colours[i] = [];
            this.colours[i][0] = random(0, 255);
            this.colours[i][1] = random(0, 255);
            this.colours[i][2] = random(0, 255);

            this.particles[i] = [];

            for (var j = 0; j < this.numberOfParticles / this.numberOfColours; j++) {

                if (this.pg) {

                    this.particles[i][j] = new Particle(random(0, this.pg.width),random(0,this.pg.height), this.noiseScale, this.pg);
                } else {

                    this.particles[i][j] = new Particle(random(0, width),random(0,height), this.noiseScale, this.pg);
                }

            }
        }

    }


    // Initial setup of the sketch
    draw () {

        if (!this.isPaused) {

            if (this.pg) {

                this.pg.noStroke();
                this.pg.smooth();
            } else {

                noStroke();
                smooth();
            }


            for (var i = 0; i < this.numberOfColours; i++) {

                if (this.pg) {


                    this.pg.fill(this.colours[i][0], this.colours[i][1], this.colours[i][2], alpha);
                } else {

                    fill(this.colours[i][0], this.colours[i][1], this.colours[i][2], alpha);
                }



                for (var j = 0; j < this.numberOfParticles / this.numberOfColours; j++) {

                    if (this.pg) {

                        var radius = this.pg.map(j, 0, this.numberOfParticles / this.numberOfColours, 1, 2);
                        var alpha = this.pg.map(j, 0, this.numberOfParticles / this.numberOfColours, 0, 250);
                    } else {
                        var radius = map(j, 0, this.numberOfParticles / this.numberOfColours, 1, 2);
                        var alpha = map(j, 0, this.numberOfParticles / this.numberOfColours, 0, 250);
                    }

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

        if (this.pg) {

            this.pg.clear();
        } else {


            clear();
        }
        this.setup();
    }

}


class Particle {

    constructor(x, y, noiseScale, pg) {

        this.direction = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.position = createVector(x, y);
        this.speed = 0.4;

        this.noiseScale = noiseScale;

        this.pg = pg;

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

function windowResized() {

    resizeCanvas(window.innerWidth, window.innerWidth);

}