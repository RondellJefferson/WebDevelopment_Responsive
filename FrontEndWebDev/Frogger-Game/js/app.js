// Enemies our player must avoid.
var Enemy = function (leftRight, upDown, howFast) {

    // Determines the x and y axis and the speed of the enemy.
    this.leftRight = leftRight;
    this.upDown = upDown;
    this.howFast = howFast;

    // The image of the enemy (cockroach).
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game.
// Parameter: dt, a time delta between ticks.
Enemy.prototype.update = function (dt) {

    // This Multiplies the speed by the dt parameter on the x axis.
    this.leftRight += this.howFast * dt;

    // Once enemies disappear, they reappear with different speeds.
    if (this.leftRight > 510) {
        this.leftRight = -50;
        this.howFast = 100 + Math.floor(Math.random() * 222);
    };

    // Collisions between the player and the enemies.
    if (player.leftRight < this.leftRight + 80 &&
        player.leftRight + 80 > this.leftRight &&
        player.upDown < this.upDown + 60 &&
        60 + player.upDown > this.upDown) {
        player.leftRight = 202;
        player.upDown = 405;
    };
};

// Shows the enemy on the game.
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.leftRight, this.upDown);
};

// Player class focusing on x and y axis.
var Player = function (leftRight, upDown) {

    this.leftRight = leftRight;
    this.upDown = upDown;

    //The image of the player of char-boy.
    this.player = 'images/char-boy.png';
};

Player.prototype.update = function (dt) {

};

// Shows the image of the player in the game engine.
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.leftRight, this.upDown);
};

// Allows the user to use the arrow keys to jump from tile to tile
Player.prototype.handleInput = function (keyPress) {
    // Moves the player left and not off the board.
    if (keyPress == 'left' && this.leftRight > 0) {
        this.leftRight -= 102;
    };

    // Moves the player right and not off the board.
    if (keyPress == 'right' && this.leftRight < 405) {
        this.leftRight += 102;
    };

    // Moves the player up and not off the board.
    if (keyPress == 'up' && this.upDown > 0) {
        this.upDown -= 83;
    };

    // Moves the player down and not off the board.
    if (keyPress == 'down' && this.upDown < 405) {
        this.upDown += 83;
    };

    // Once player reaches the water, player is reset to the beginning position.
    if (this.upDown < 0) {
        setTimeout(() => {
            this.leftRight = 202;
            this.upDown = 405;
        }, 100);
    };
};


// All enemies are placed in an array.
var allEnemies = [];

// Location of the 3 enemies.
var enemyLocation = [63, 147, 230];


// Starts game with Enemies moving at a constant speed.
enemyLocation.forEach(function (locationY) {
    enemy = new Enemy(0, locationY, 200);
    allEnemies.push(enemy);
});

// The starting location of the player is located at x=200, y=405
var player = new Player(200, 405);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
