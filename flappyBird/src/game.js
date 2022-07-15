import Level from './level';
import Bird from './bird';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.running = false;
  }

  animate() {
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
    
    if (this.running) {
      //This calls this function again, after around 1/60th of a second
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  restart() {
    this.bird = new Bird(this.dimensions);
    this.level = new Level(this.dimensions);
    this.running = false;
    this.animate();
  }

  play() {
    this.bird = new Bird(this.dimensions);
    this.level = new Level(this.dimensions);
    this.running = true;
    this.animate();

    window.requestAnimationFrame(this.animate());
  }
}

