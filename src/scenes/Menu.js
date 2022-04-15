class Menu extends Phaser.Scene {
    constructor () {
        super("menu");
    }

    preload() {
       // load audio
       // audio from ZapSplat
       this.load.audio('sfx_select', './assets/start.wav');
       this.load.audio('sfx_explosion', './assets/truckexplosion.mp3');
       this.load.audio('sfx_rocket', './assets/bark.wav');
    }

    create() {
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#ADD8E6',
            color: '#000',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height/2 - ( borderUISize + borderPadding)*2, 'CHASING CARS', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2,game.config.height/2 - borderUISize - borderPadding, 'Player 1: Use A and D to move and W to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2,game.config.height/2, 'Player 2: Use ← and → to move and ↑ to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#ffffbf';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('play');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('play');    
        }
      }
}