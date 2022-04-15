// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, who, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
      this.isFiring = false;
      this.moveSpeed = 2;
      this.who = who;

      this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }

    update() {
        // fire button
        if(keyF[this.who].isDown && (!this.isFiring)) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }

        

        // left/right movement
        if(keyLEFT[this.who].isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed;
        }
        else if(keyRIGHT[this.who].isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
        }

        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }

        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }

    reset () {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}