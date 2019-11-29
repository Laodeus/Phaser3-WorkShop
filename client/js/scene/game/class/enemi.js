class Ennemi {
  constructor(sprite, gameObj) {
    //creating enemies groups
    this.ennemies = gameObj.physics.add.group();

    //create the collider
    gameObj.physics.add.collider(
      gameObj.player.player, // attention au nom recursif
      this.ennemies,
      this.hitingEnnemi,
      null,
      this
    );

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
    let x,y,rot;
    switch(bord)
    {
      case 0:
          x = 20;
          y = Phaser.Math.Between(20, 580);
          rot = 0;
        break;
      case 1:
          x = 1980;
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
    const ennemi = this.ennemies.create(x, y, this.sprite);
    ennemi.setCollideWorldBounds(true);
    ennemi.angle = rot;
    ennemi.vel = 0;
  }

  turnLeft(enemiObj) {
    enemiObj.angle -= 6;
    enemiObj.setVelocity(
      Math.sin(enemiObj.rotation) * enemiObj.vel,
      Math.cos(enemiObj.rotation) * -enemiObj.vel
    );
  }

  turnRight(enemiObj) {
    enemiObj.angle += 6;
    enemiObj.setVelocity(
      Math.sin(enemiObj.rotation) * enemiObj.vel,
      Math.cos(enemiObj.rotation) * -enemiObj.vel
    );
  }

  forward(enemiObj) {
    enemiObj.setVelocity(
      Math.sin(enemiObj.rotation) * enemiObj.vel,
      Math.cos(enemiObj.rotation) * -enemiObj.vel
    );
  }

  hitingEnnemi(player, ennemi) {
    player.disableBody(true, true);
    ennemi.disableBody(true, true);
    this.gameObj.add.text(300,300,"Game Over").setScrollFactor(3);
    this.gameObj.scene.pause()
  }

  ennemiColide(ennemi1, ennemi2) {
    ennemi1.disableBody(true, true);
    ennemi2.disableBody(true, true);

    this.gameObj.player.player.point += 20;
    this.gameObj.player.redisplayPoint();

    this.createEnemies();
    this.createEnemies();
    this.createEnemies();
  }

  trackPlayer(enemiObj, gameObj) {
    // obj property simplification for dev
    const player = {
      angle: gameObj.player.player.angle,
      x: gameObj.player.player.x,
      y: gameObj.player.player.y
    };
    const ennemi = {
      x: enemiObj.x,
      y: enemiObj.y,
      angle: enemiObj.angle,
      rotation:
        enemiObj.angle< 0
          ? 360 + enemiObj.angle
          : enemiObj.angle
    };

    // acceleration
    if (enemiObj.vel < 300) enemiObj.vel += 3;

    // this is where enemiObj ennemis chose to go to left or right
    
    // Magic!!!!
    let EnnemiPoint = new Phaser.Geom.Point(ennemi.x, ennemi.y);
    let pointToMoveTo = new Phaser.Geom.Point(player.x, player.y);
    let angleBetwenPoint = Phaser.Math.Angle.BetweenPointsY(EnnemiPoint, pointToMoveTo) * 180 /Math.PI;
    let roundedOnDegree = Math.round(angleBetwenPoint) < 0 ? 360+Math.round(angleBetwenPoint) :Math.round(angleBetwenPoint);
    let roundedOnAngleEnemiAngle =  Math.round(ennemi.angle) < 0 ? 360+Math.round(ennemi.angle) :Math.round(ennemi.angle);
    let BasedOnEnemiAngle = roundedOnDegree + roundedOnAngleEnemiAngle
    let final = BasedOnEnemiAngle > 360? BasedOnEnemiAngle-360: BasedOnEnemiAngle
    

    if (final > 190) {
      this.turnLeft(enemiObj);
    } else if (BasedOnEnemiAngle < 170) {
      this.turnRight(enemiObj);
    } else {
      this.forward(enemiObj);
    }
  }
}
