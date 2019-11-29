class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "playerShip");
    scene.sys.displayList.add(this);
  }
}
