// Tomas Hickman, Chasing Cars, 4/14/2022, 4 or 5 hours
// 60 Changed Theme/UI/Sounds to Dogs Chasing Cars
// 30 Added simulatnious 2 players (and gave them each a score)
// 05 Allowed player to control the dog while chasing
// 05 Created a delay at the start during which a race buzzer beeps ("beep, beep, beep, beeeep") Custom, but I'm pretty confident it's worth at least 5 points.
//
// Sound effects are from zapsplat.com

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
};

//define borderUISize, and check the rest of the tutorial

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
