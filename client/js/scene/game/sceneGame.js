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
    this.player = new Player(this,300, 300);

    //create the general ennemies
    this.ennemies = new Ennemi("ennemiShip",this);
    //adding an enemi
    this.ennemies.createEnemies(null,null,this);
    this.ennemies.createEnemies(null,null,this);
  }

  update() {
    this.player.move();

    // every update, for every child, we try to get the player
    this.ennemies.ennemies.children.iterate((child)=>{
      // if the player is at our right, we move right, if the player is at left, we turn left.
      this.ennemies.trackPlayer(child, this);
    })

  }
}
