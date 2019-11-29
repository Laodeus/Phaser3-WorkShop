class IndustryEnnemi {
  constructor(sprite, gameObj, target) {
    //creating enemies groups
    this.ennemies = gameObj.physics.add.group();

    gameObj.physics.add.collider(
      this.ennemies,
      this.ennemies,
      this.ennemiColide,
      null,
      this
    );

    this.sprite = sprite;
    this.gameObj = gameObj;
  }

  createEnemies() {
    //if X or Y is not assigned, it's random
    const bord = Phaser.Math.Between(0, 3);
    let x, y, rot;
    switch (bord) {
      case 0:
        x = 20;
        y = Phaser.Math.Between(20, 580);
        rot = 0;
        break;
      case 1:
        x = 780;
        y = Phaser.Math.Between(20, 580);
        rot = 180;
        break;
      case 2:
        x = x || Phaser.Math.Between(20, 780);
        y = 20;
        rot = 90;
        break;
      case 3:
        x = x || Phaser.Math.Between(20, 780);
        y = 580;
        rot = 90;
        break;
    }

    //adding to the group
    const enemi = new Enemi(this.gameObj, x, y, rot, this.sprite, this.target);
    this.ennemies.add(enemi);
    enemi.setCollideWorldBounds(true);
  }

  ennemiColide(ennemi1, ennemi2) {
    ennemi1.disableBody(true, true);
    ennemi2.disableBody(true, true);

    this.gameObj.player.point += 20;
    this.gameObj.player.redisplayPoint();

    this.createEnemies(this.target);
    this.createEnemies(this.target);
    this.createEnemies(this.target);
  }
}
