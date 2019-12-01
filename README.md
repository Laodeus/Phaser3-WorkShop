# Phaser3-WorkShop

## The docs

all you have to see is the phaser official docs.
I know, it's not the brigtest off all time but.. 
Hey, it will help you the know what to do when your stuck in a forest with a psycho killer behind you :D

if you wanna know the true color of pain, [here](https://phaser.io/) it is...

## And now?

### Setup a basic express server. 

You can clone this repo and get this one or re-write the amurabi-code.
As you want.

why? because of cors... [not the bad folk group](https://www.youtube.com/watch?v=vzerbXFwGCE), [the cross-server concept](https://www.google.com/search?q=cors&rlz=1C1CHBF_frBE877BE877&oq=cors&aqs=chrome.0.69i59l3j0l5.807j0j4&sourceid=chrome&ie=UTF-8).

### And now?

Now, get phaser from the cdn.
no need to search, there it is=>

https://cdnjs.cloudflare.com/ajax/libs/phaser/3.19.0/phaser.min.js

how can you include it? 
the reponse [here](https://sd.keepcalms.com/i/keep-calm-and-read-the-fucking-manual-2.png)

<details>
 <summary>more details here</summary>
 HAHAHAHAHA. GOTCHA.

 No, seriously, you can include it like any javascript frontend library whit a script tag.
</details>

### Create your prime scene

before anything, you have to set the option of your game

and create a phaser object.

<details>
 <summary>more details here</summary>

in a index.js file=>
```javascript
 var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0 }
        }
    },
    scene: [LandingScene]
};

const game = new Phaser.Game(config);
``` 

in another js file.
(don't forget to add it to your HTML file)

```javascript
class LandingScene extends Phaser.Scene{
    constructor() {
        super("LandingScene");
    }

    preload (){
    }

    create (){
    }

    update(){
    }
}
``` 
</details>

### Work with class. 

Why?
Ask phillip.
he as class. 
and class love him... 

a lot...

No, seriously, has he said, about every 3.56 second, object oriented programming is the base of the video-game developpement, so, we will work with class.

so, every part of this little workshop will be classy.

### Where and what 

As you can see, there is 3 predifined func.

1. preload()
        *preload is the func where you will preset your object
        *load your images
2. create()
        *here you will create your object 
        *display it
        *define your key
        *...
3. update()
        *here, you will make your interaction
        *calculate your physics
        *etc...

### Scene Change. 

the first thing that you have to do is get out of your landing scene.

but... if nothing is displayed on your landing scene and nothing is displayed on your menu... you will se no difference between the two scenes... 

what about a background image? 

like [this one](./asset/background.jpg)?
what if i say to you that you can repeat and make this image move? 

let's get code!

<details>
 <summary>more details here</summary>

```javascript
preload (){
        this.width =  this.sys.game.canvas.width
        this.height =  this.sys.game.canvas.height;
        this.load.image("Bg",`./asset/SpaceBackGround.jpg`);

    }

    create (){
        this.background = this.add.tileSprite(400,300,800,600,"Bg").setDisplaySize(this.width, this.height);
        this.movingBackground = this.add.tileSprite(400, 300, 800, 600, "Bg");
        this.movingBackground.alpha = 0.5;


        this.add.text(320,280,"Landing").setColor("rgba(255,255,255,1)").setBackgroundColor("rgba(0,0,0,0.4)");
        this.add.text(320,300,"Press Enter",).setColor("rgba(255,255,255,1)").setBackgroundColor("rgba(0,0,0,0.4)");

        this.input.keyboard.on("keyup",(evt)=>{
            console.log(evt.code);
            if(evt.code == "Enter"){
                this.scene.start("MenuScene");
            }
        });
    }

    update(){
        this.movingBackground.tilePositionX += 0.1;
        this.movingBackground.tilePositionY += 0.1;
        
        this.background.tilePositionX += 0.3;
        this.background.tilePositionY += 0.3;
    }

}
```
</details>

### first interaction.

now that we have a landing page, a menu will be fine.

you have all the key to do it by yourself.

you can do it with the doc and self-esteem

![do it!](https://images.genius.com/2b790e48bcd9779bce4dc5bc74a01118.563x1000x1.png "do it!")


Hint : you can get it with this => 
```javascript

x = this.setText(50,50,"A text"); 
x.setInteractive();
x.on("event",callback ;

```


<details>
 <summary>more details here</summary>

do not forget, a new js file to include to the html file 

```javascript
class MenuScene extends Phaser.Scene{
    constructor() {
        super({key: "MenuScene"});
    }

    preload (){
        this.width =  this.sys.game.canvas.width
        this.height =  this.sys.game.canvas.height;
    }
    create (){

        this.background = this.add.tileSprite(400,300,800,600,"Bg").setDisplaySize(this.width, this.height);
        this.movingBackground = this.add.tileSprite(400, 300, 800, 600, "Bg");
        this.movingBackground.alpha = 0.5;

        let start = this.add.text(100,100,"Start").setColor("rgba(255,255,255,1)").setBackgroundColor("rgba(0,0,0,0.4)");;
        start.setInteractive();
        start.on('pointerover', () => {
            start.setText("Go ahead buddy!"); 
        });

        start.on('pointerdown', () => {
            start.setText("You can always stop now!"); 
        });
        
        start.on('pointerup', () => {
            this.scene.start("GameScene"); 
        });
        
        start.on('pointerout', () => {
            start.setText("Start"); 
        });

        let option = this.add.text(100,200,"Option").setColor("rgba(255,255,255,1)").setBackgroundColor("rgba(0,0,0,0.4)");;
        option.setInteractive();
        
        let quitGame = this.add.text(100,300,"Quit").setColor("rgba(255,255,255,1)").setBackgroundColor("rgba(0,0,0,0.4)");;
        quitGame.setInteractive();
        quitGame.on('pointerover', () => {
            quitGame.setText("Why???!!??"); 
        });

        quitGame.on('pointerdown', () => {
            quitGame.setText("don't leave me! i'm afraid of the dark"); 
        });
        
        quitGame.on('pointerup', () => {
            this.sys.game.destroy(true);    
        });
        
        quitGame.on('pointerout', () => {
            quitGame.setText("Quit"); 
        });

    }
    update(){
        this.movingBackground.tilePositionX += 0.1;
        this.movingBackground.tilePositionY += 0.1;
        
        this.background.tilePositionX += 0.3;
        this.background.tilePositionY += 0.3;
    }
}
```
</details>


## And now, go to the serious buisness! The Game!

## the player

create a new class scene game. 
set a background
create a class player
and set it's constructor to get everything to work.

and finaly, set your object to don't have the possibility to get out of the game.

<details>
 <summary>more details here</summary>

create a player.js, include it in the html file 

```javascript
class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "playerShip");
    // display player 
    scene.sys.displayList.add(this);
    //??? this make potatoes
    scene.sys.updateList.add(this);
    //this activate the physics
    scene.sys.arcadePhysics.world.enableBody(this, 0);

    //the player won't go out of the world
    this.setCollideWorldBounds(true);
    // get the player in the correct position (thank to the sprite.)
  }
}
```

in the preload of the scene game
```javascript
this.load.image("playerShip", "./../../../asset/spaceship_small_blue.png");
```

in the create of the game scene created =>

```javascript

// create the player
    this.player = new Player(this, 300, 300);
```
</details>

## the enemi

create a class that will create a group and add enemies in the group

and a class enemies that will be the shape of the enemies.

<details>
 <summary>more details here</summary>

the enemies industry

```javascript
class IndustryEnnemi {
  constructor(sprite, gameObj, target) {
    //creating enemies groups
    this.ennemies = gameObj.physics.add.group();
    }

  createEnemies() {
    //if X or Y is not assigned, it's random

    let x, y, rot;

    x = x || Phaser.Math.Between(20, 780);
    y = Phaser.Math.Between(20, 580);
    rot = Phaser.Math.Between(-180, 180);

    //adding to the group
    const enemi = new Enemi(this.gameObj, x, y, rot, this.sprite, this.target);
    this.ennemies.add(enemi);
    //set the collide with the world bounds
    enemi.setCollideWorldBounds(true);
  }
}
```
the enemy shape

```javascript
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
```

</details>

## it's alive... ALIIIIIIVE

it's time to move.

make the player to move.
How? 
simple, tie your monster into a table, elevate it at the top of the highest tour and wait for the thunder annnnnd => 

![it's alive!](http://investwithanedge.com/wp-content/uploads/2019/10/102119-IMO-Image-v2.jpg "it's alive!")

no, seriously. 

you hae to bind every key to a variable and triger an action everytime it's pushed.

don't forget, RTFM!

<details>
 <summary>more details here</summary>

in the player player class.
in the constructor 

```javascript

    // get the player in the correct position (thank to the sprite.)
    this.angle = 90;

    //define the player velocity that will be used by setVelocity
    this.vel = 0;

    this.keyZ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    this.keyQ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.keyS = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

```

create some methode in the player class

```javascript
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
```

```javascript

```

</details>

## it's time to destroy things!

everything is set to set the collide.

![war!](http://m.quickmeme.com/img/ef/ef51fdc3c9500345b4b5ecc3a31c7fa6b2b319f9c09caabe6974be9492d8ddac.jpg "war!")

<details>
 <summary>more details here</summary>

in the player player class.
in the constructor 


in the gamescene class, in the preload

```javascript
    this.physics.add.collider(
      this.player, // attention au nom recursif
      this.industryEnnemi.ennemies,
      this.hitingEnnemi,
      null,
      this
    );
```

in the gamescene class, make a new methode

```javascript
  hitingEnnemi(player, ennemi) {
    ennemi.disableBody(true, true);
  }
```
</details>

## Have fun!

you have all the key to improve the game.

get some fun
read the doc
and do all you can to improve this game.

Enjoy ;)


