class Ennemi {
  constructor(sprite, gameObj) {
    //creating enemies groups
    this.ennemies = gameObj.physics.add.group();

    //create the collider
    gameObj.physics.add.collider(
      gameObj.player.player, // attention au nom recursif
      this.ennemies
    );

    gameObj.physics.add.collider(this.ennemies, this.ennemies);

    this.sprite = sprite;
  }

  createEnemies(x, y, gameObj) {
    //if X or Y is not assigned, it's random
    x = x || Phaser.Math.Between(0, 2000);
    y = y || Phaser.Math.Between(0, 600);

    //adding to the group
    const ennemi = this.ennemies.create(x, y, this.sprite);
    ennemi.setCollideWorldBounds(true);
    ennemi.angle = 45;
    ennemi.vel = 0;
  }

  turnLeft(enemiObj) {
    enemiObj.setVelocity(
      Math.sin(enemiObj.rotation) * enemiObj.vel,
      Math.cos(enemiObj.rotation) * -enemiObj.vel
    );
    enemiObj.angle -= 6;
  }

  turnRight(enemiObj) {
    enemiObj.setVelocity(
      Math.sin(enemiObj.rotation) * enemiObj.vel,
      Math.cos(enemiObj.rotation) * -enemiObj.vel
    );
    enemiObj.angle += 6;
  }

  trackPlayer(enemiObj, gameObj) {
    // obj property simplification for dev
    const player = {
      angle: gameObj.player.player.angle,
      x: gameObj.player.player.x,
      y: gameObj.player.player.y
    };
    const ennemi = { x: enemiObj.x, y: enemiObj.y, angle: enemiObj.angle };

    // acceleration
    if (enemiObj.vel < 400) enemiObj.vel += 3;

    // this is where enemiObj ennemis chose to go to left or right
        // how many degrees from enemis? 
        if((Math.atan2(player.y-ennemi.y, player.x-ennemi.x) * ennemi.angle / Math.PI) < 0) {
            this.turnLeft(enemiObj);
        }
        else{
            this.turnRight(enemiObj);
        }

  }
}
