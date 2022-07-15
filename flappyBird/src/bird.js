const CONSTANTS = {
    GRAVITY:  0.8,
    FLAP_SPEED:  -8,
    TERMINAL_VEL:  12,
    BIRD_WIDTH:  40,
    BIRD_HEIGHT:  30
  };

export default class Bird {
    constructor(dimensions) {
        this.velocity = 0;
        this.dimensions = {width: dimensions.width, height: dimensions.height};
        this.x = 120;
        this.y = this.dimensions.height / 2;
        this.position = {x: this.x, y: this.y};
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, 30, 40);
    }

    animate(ctx) {
        this.move();
        this.drawBird(ctx);
    }

    move() {
        this.y += this.velocity
        this.velocity += CONSTANTS.GRAVITY;
    }

    flap() {
        this.velocity = -8;
    }


  }
  