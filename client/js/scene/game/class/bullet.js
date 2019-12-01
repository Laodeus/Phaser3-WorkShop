class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, vel, angle) {
    super(scene, x, y, "bullet");
    // display player
    scene.sys.displayList.add(this);
    //??? this make potatoes
    scene.sys.updateList.add(this);
    //this activate the physics
    scene.sys.arcadePhysics.world.enableBody(this, 0);
    this.vel = vel;
    this.angle = angle;
  }
  move() {
    //if outOfWorld
    //destroy

    this.setVelocity(
      Math.sin(this.rotation) * 600,
      Math.cos(this.rotation) * -600
    );
  }
}
