class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, rot, sprite) {
      super(scene, x, y, sprite);
      // display player 
      scene.sys.displayList.add(this);
      //??? this make potatoes
      scene.sys.updateList.add(this);
      //this activate the physics
      scene.sys.arcadePhysics.world.enableBody(this, 0);
  
      //the player won't go out of the world
      this.setCollideWorldBounds(true);

      this.angle = rot;
      this.vel = 0;
    }
}