class Enemi extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, rot, sprite) {
    super(scene, x, y, sprite);
    // display player
    scene.sys.displayList.add(this);
    //??? this make potatoes
    scene.sys.updateList.add(this);
    //this activate the physics
    scene.sys.arcadePhysics.world.enableBody(this, 0);

    this.angle = rot;
    this.vel = 0;
  }
  turnLeft() {
    this.angle -= 6;
    this.setVelocity(
      Math.sin(this.rotation) * this.vel,
      Math.cos(this.rotation) * -this.vel
    );
  }

  turnRight() {
    this.angle += 6;
    this.setVelocity(
      Math.sin(this.rotation) * this.vel,
      Math.cos(this.rotation) * -this.vel
    );
  }

  forward() {
    this.setVelocity(
      Math.sin(this.rotation) * this.vel,
      Math.cos(this.rotation) * -this.vel
    );
  }

  trackPlayer(target) {
    // obj property simplification for dev
    const player = {
      angle: target.angle,
      x: target.x,
      y: target.y
    };
    const ennemi = {
      x: this.x,
      y: this.y,
      angle: this.angle,
      rotation: this.angle < 0 ? 360 + this.angle : this.angle
    };

    // acceleration
    if (this.vel < 150) this.vel += 3;

    // this is where enemiObj ennemis chose to go to left or right

    // Magic!!!!
    let EnnemiPoint = new Phaser.Geom.Point(ennemi.x, ennemi.y);
    let pointToMoveTo = new Phaser.Geom.Point(player.x, player.y);
    let angleBetwenPoint =
      (Phaser.Math.Angle.BetweenPointsY(EnnemiPoint, pointToMoveTo) * 180) /
      Math.PI;
    let roundedOnDegree =
      Math.round(angleBetwenPoint) < 0
        ? 360 + Math.round(angleBetwenPoint)
        : Math.round(angleBetwenPoint);
    let roundedOnAngleEnemiAngle =
      Math.round(ennemi.angle) < 0
        ? 360 + Math.round(ennemi.angle)
        : Math.round(ennemi.angle);
    let BasedOnEnemiAngle = roundedOnDegree + roundedOnAngleEnemiAngle;
    let final =
      BasedOnEnemiAngle > 360 ? BasedOnEnemiAngle - 360 : BasedOnEnemiAngle;

    if (final > 190) {
      this.turnLeft(this);
    } else if (BasedOnEnemiAngle < 170) {
      this.turnRight(this);
    } else {
      this.forward(this);
    }
  }
}
