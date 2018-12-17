class PerlinNoise {
    
    constructor(parentId, numberOfParticles, noiseScale) {

        var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
        myCanvas.parent(parentId);

        this.numberOfParticles = numberOfParticles;
        this.noiseScale = noiseScale;

        background(21, 8, 50);

        this.particles_a = [];
        this.particles_b = [];
        this.particles_c = [];

        for(var i = 0; i < this.numberOfParticles / 3; i++){
            this.particles_a[i] = new Particle(random(0, width),random(0,height), this.noiseScale);
            this.particles_b[i] = new Particle(random(0, width),random(0,height), this.noiseScale);
            this.particles_c[i] = new Particle(random(0, width),random(0,height), this.noiseScale);
        }
    }

    // Initial setup of the sketch
    update () {

        noStroke();
        smooth();
        for(var i = 0; i < this.numberOfParticles / 3; i++){
            var radius = map(i,0,this.numberOfParticles / 3,1,2);
            var alpha = map(i,0,this.numberOfParticles / 3,0,250);

            fill(69,33,124,alpha);
            this.particles_a[i].move();
            this.particles_a[i].display(radius);
            this.particles_a[i].checkEdge();

            fill(7,153,242,alpha);
            this.particles_b[i].move();
            this.particles_b[i].display(radius);
            this.particles_b[i].checkEdge();

            fill(255,255,255,alpha);
            this.particles_c[i].move();
            this.particles_c[i].display(radius);
            this.particles_c[i].checkEdge();
        }
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