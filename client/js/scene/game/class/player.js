class Player {
  constructor(x, y, sprite, gameObj) {
    //PLAYER
    this.player = gameObj.physics.add.sprite(x, y, sprite);

    //the player won't go out of the world
    this.player.setCollideWorldBounds(true);

    // get the player in the correct position (thank to the sprite.)
    this.player.angle = 90;

    //define the player velocity that will be used by setVelocity
    this.vel = 0;

    //CAMERA
    // making the camera following the player
    gameObj.cameras.main.startFollow(this.player);

    //making sure that the camera will not get out of the world
    gameObj.cameras.main.setBounds(0, 0, gameObj.gameWidth, gameObj.gameHeight);

    //UI PART
    // speed display fixed to camera
    this.displaySpeed = gameObj.add.text(16, 16, `speed : ${this.vel}`);
    this.displaySpeed.setScrollFactor(0); // this line said that the text will not scroll and will be fixed on the screen

    this.displayRotation = gameObj.add.text(
      16,
      64,
      `angle : ${this.player.angle - 90}`
    );
    this.displayRotation.setScrollFactor(0); // this line said that the text will not scroll and will be fixed on the screen
    
    //creating and display point
    
    this.player.point = 0;

    this.displayPoint = gameObj.add.text(
      700,
      16,
      `${this.player.point}`
    );
    this.displayPoint.setScrollFactor(0); // this line said that the text will not scroll and will be fixed on the screen

    if (true) {
      // define the key player key
      this.keyZ = gameObj.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.Z
      );
      this.keyQ = gameObj.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.Q
      );
      this.keyS = gameObj.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.S
      );
      this.keyD = gameObj.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.D
      );
    }
  }

  move() {
    if (this.keyZ.isDown) {
      this.accelerate();
    }
    if (this.keyS.isDown) {
      this.decelerate();
    }
    if (this.keyQ.isDown) {
      this.turnLeft();
    }
    if (this.keyD.isDown) {
      this.turnRight();
    }
  }

  accelerate() {
    if (this.vel < 400) {
      this.vel += 3;
    } else {
    }
    this.player.setVelocity(
      Math.sin(this.player.rotation) * this.vel,
      Math.cos(this.player.rotation) * -this.vel
    ); // 1
    this.displaySpeed.setText(`speed : ${this.vel}`);
  }

  decelerate() {
    if (this.vel > 0) {
      this.vel -= 3;
    }
    this.player.setVelocity(
      Math.sin(this.player.rotation) * this.vel,
      Math.cos(this.player.rotation) * -this.vel
    );
    this.displaySpeed.setText(`speed : ${this.vel}`);
  }

  turnLeft() {
    this.player.setVelocity(
      Math.sin(this.player.rotation) * this.vel,
      Math.cos(this.player.rotation) * -this.vel
    );
    this.player.angle -= 6;
    this.displayRotation.setText(`angle : ${this.player.angle.toFixed(0)}`);
  }

  turnRight() {
    this.player.setVelocity(
      Math.sin(this.player.rotation) * this.vel,
      Math.cos(this.player.rotation) * -this.vel
    );
    this.player.angle += 6;
    this.displayRotation.setText(`angle : ${this.player.angle.toFixed(0)}`);
  }
  redisplayPoint(){
    this.displayPoint.setText(`${this.player.point}`);
  }
}
