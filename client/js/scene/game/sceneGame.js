class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
    this.gameWidth = 1000;
    this.gameHeight = 600;
    this.i = 0;
  }

  preload() {
    this.width = this.sys.game.canvas.width;
    this.height = this.sys.game.canvas.height;

    this.load.image("Bg", `./asset/SpaceBackGround.jpg`);
    this.load.image("playerShip", "./../../../asset/spaceship_small_blue.png");
    this.load.image("ennemiShip", "./../../../asset/spaceship_small_red.png");
  }

  create() {
    // changing scene size
    this.physics.world.setBounds(0, 0, this.gameWidth, this.gameHeight);

    //need to be a sprite if I want to move the background
    this.background = this.physics.add.sprite(
      this.gameWidth / 2,
      this.gameHeight / 2,
      "Bg"
    );

    //need to be a sprite if I want to move the background
    this.background2 = this.physics.add
      .sprite(this.gameWidth / 2, this.gameHeight / 2, "Bg")
      .setAlpha(0.5);
    this.background2.angle = 90; //set an angle to no recognize the 2 backgrounds

    // create the player
    this.player = new Player(this, 50, 300);

    //temp
    this.ennemy = this.physics.add.sprite(500, 300, "ennemiShip");
    this.ennemy.setCollideWorldBounds(true);
    this.ennemy.setVelocity(-100, 0);

    this.physics.add.collider(this.player, this.ennemy);

    // define the key player key
    this.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  }

  update() {
    if (this.keyQ.isDown) {
      this.player.turnLeft();
    }
    if (this.keyD.isDown) {
      this.player.turnRight();
    }
    this.moveBg();
    if (this.ennemy.x < -32) {
      this.ennemy.setVelocity(0, 0);
    }
  }

  //move the background
  moveBg() {
    //set a velocity the first background
    this.background.setVelocity(-50, 0);
    if (this.background.x < -500) {
      this.background.x = 500; //reset the position
    }

    //set a velocity the second background
    this.background2.setVelocity(-150, 0);
    if (this.background2.x < -1000) {
      this.background2.x = 1000; //reset the position
    }
  }

  hitboth(player, ennemy) {
    if (this.i < 3) {
      console.log(player);
      this.i++;
    }
  }
}
