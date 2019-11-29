class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "playerShip");
    this.scene = scene;
    // display player
    scene.sys.displayList.add(this);
    //??? this make potatoes
    scene.sys.updateList.add(this);
    //this activate the physics
    scene.sys.arcadePhysics.world.enableBody(this, 0);

    //the player won't go out of the world
    this.setCollideWorldBounds(true);
    // get the player in the correct position (thank to the sprite.)
    this.angle = 90;

    //define the player velocity that will be used by setVelocity
    this.vel = 0;

    //CAMERA
    // making the camera following the player
    scene.cameras.main.startFollow(this);

    //making sure that the camera will not get out of the world
    scene.cameras.main.setBounds(0, 0, scene.gameWidth, scene.gameHeight);

    //UI PART
    // speed display fixed to camera
    this.displaySpeed = scene.add.text(16, 16, `speed : ${this.vel}`);
    this.displaySpeed.setScrollFactor(0); // this line said that the text will not scroll and will be fixed on the screen

    this.displayRotation = scene.add.text(16, 64, `angle : ${this.angle - 90}`);
    this.displayRotation.setScrollFactor(0); // this line said that the text will not scroll and will be fixed on the screen

    //creating and display point

    this.point = 0;

    this.displayPoint = scene.add.text(700, 16, `${this.point}`);
    this.displayPoint.setScrollFactor(0); // this line said that the text will not scroll and will be fixed on the screen

    // define the key player key
    this.keyZ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    this.keyQ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.keyS = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyE = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
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
    if (this.keyE.isDown) {
      this.shoot();
    }
  }
  accelerate() {
    if (this.vel < 400) {
      this.vel += 3;
    } else {
    }
    this.setVelocity(
      Math.sin(this.rotation) * this.vel,
      Math.cos(this.rotation) * -this.vel
    ); // 1
    this.displaySpeed.setText(`speed : ${this.vel}`);
  }

  decelerate() {
    if (this.vel > 0) {
      this.vel -= 3;
    }
    this.setVelocity(
      Math.sin(this.rotation) * this.vel,
      Math.cos(this.rotation) * -this.vel
    );
    this.displaySpeed.setText(`speed : ${this.vel}`);
  }

  turnLeft() {
    this.setVelocity(
      Math.sin(this.rotation) * this.vel,
      Math.cos(this.rotation) * -this.vel
    );
    this.angle -= 6;
    this.displayRotation.setText(`angle : ${this.angle.toFixed(0)}`);
  }

  turnRight() {
    this.setVelocity(
      Math.sin(this.rotation) * this.vel,
      Math.cos(this.rotation) * -this.vel
    );
    this.angle += 6;
    this.displayRotation.setText(`angle : ${this.angle.toFixed(0)}`);
  }
  redisplayPoint() {
    this.displayPoint.setText(`${this.point}`);
  }

  shoot() {
    let shoot = new Bullet(this.scene, this.x, this.y, 200, this.angle);

    this.scene.bullets.add(shoot);
  }
}
