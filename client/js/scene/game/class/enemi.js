class Ennemi {
    constructor(sprite, gameObj) {
        //creating enemies groups
        this.ennemies = gameObj.physics.add.group();
        //create the collider
        gameObj.physics.add.collider(
            gameObj.player.player, // attention au nom recursif
            this.ennemies
        );

        this.sprite = sprite;
    }

    createEnemies(x,y,gameObj){
        //if X or Y is not assigned, it's random
        x = x || Phaser.Math.Between(0, 2000);
        y = y || Phaser.Math.Between(0, 600);
        
        //adding to the group
        this.ennemies.create(x,y,this.sprite);
        console.log()
        console.log("ennemies add")
        console.log(this.ennemies)
    }
}