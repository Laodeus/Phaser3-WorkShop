class Ennemy {
  constructor(y, sprite, gameObj, player) {
    this.player = player;
    this.gameObj = gameObj;
    //intialize
    this.ennemy = gameObj.physics.add.sprite(500, y, sprite);

    //set the good angle
    this.ennemy.angle = -90;

    this.vel = 150;

    // gameObj.physics.add.collider(
    //   this.player.player,
    //   this.ennemy,
    //   this.hitPlayer,
    //   null,
    //   this
    // );
  }

  get checkCollision() {
    return this.ennemy.checkCollision;
  }
  move() {
    this.gameObj.physics.moveToObject(
      this.ennemy,
      this.player.player,
      this.vel
    );
  }

  hitPlayer() {
    console.log(this.player.hp);
  }
}
