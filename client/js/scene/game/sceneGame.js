class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
    this.gameWidth = 800;
    this.gameHeight = 600;
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

    // adding a tileSrpite
    this.background = this.add.tileSprite(
      this.gameWidth / 2,
      this.gameHeight / 2,
      this.gameWidth,
      this.gameHeight,
      "Bg"
    );
    this.background = this.add
      .tileSprite(
        this.gameWidth,
        this.gameHeight,
        this.gameWidth * 3,
        this.gameHeight * 3,
        "Bg"
      )
      .setAlpha(0.5)
      .setScrollFactor(3);

    // create the player
    this.player = new Player(this, 300, 300);

    //create the general ennemies
    this.industryEnnemi = new IndustryEnnemi("ennemiShip", this);
    //adding an enemi
    this.industryEnnemi.createEnemies(this.player, this);
    this.industryEnnemi.createEnemies(this.player, this);

    this.physics.add.collider(
      this.player, // attention au nom recursif
      this.industryEnnemi.ennemies,
      this.hitingEnnemi,
      null,
      this
    );
  }

  update() {
    this.player.move();
    // every update, for every child, we try to get the player
    this.industryEnnemi.ennemies.children.iterate(child => {
      // if the player is at our right, we move right, if the player is at left, we turn left.
      child.trackPlayer(this.player);
    });
  }

  hitingEnnemi(player, ennemi) {
    console.log("game over");
    player.disableBody(true, true);
    ennemi.disableBody(true, true);
    this.add.text(300, 300, "Game Over").setScrollFactor(3);
    this.scene.pause();
  }
}
