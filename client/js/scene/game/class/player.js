class Player {
  constructor(x, y, sprite) {
    //PLAYER
    this.player = this.physics.add.sprite(x, y, sprite);

    //the player won't go out of the world
    this.player.setCollideWorldBounds(true);

    // get the player in the correct position (thank to the sprite.)
    this.player.angle = 90;

    //define the player velocity that will be used by setVelocity
    this.vel = 0;

    //CAMERA
    // making the camera following the player
    this.cameras.main.startFollow(this.player);

    //making sure that the camera will not get out of the world
    this.cameras.main.setBounds(0, 0, this.gameWidth, this.gameHeight);

    //UI PART
    // speed display fixed to camera
    this.displaySpeed = this.add.text(16, 16, `speed : ${this.vel}`);
    this.displaySpeed.setScrollFactor(0); // this line said that the text will not scroll and will be fixed on the screen

    this.displayRotation = this.add.text(
      16,
      64,
      `angle : ${this.player.angle - 90}`
    );
    this.displayRotation.setScrollFactor(0); // this line said that the text will not scroll and will be fixed on the screen
  }
}
