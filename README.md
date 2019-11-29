# Phaser3-WorkShop

##The docs

all you have to see is the phaser official docs.
I know, it's not the brigtest off all time but.. 
Hey, it will help you the know what to do when your stuck in a forest with a psycho killer behind you :D

if you wanna know the true color of pain, [here](https://phaser.io/) it is...

##And now?

###Setup a basic express server. 

You can clone this repo and get this one or re-write the amurabi-code.
As you want.

why? because of cors... [not the bad folk group](https://www.youtube.com/watch?v=vzerbXFwGCE), [the cross-server concept](https://www.google.com/search?q=cors&rlz=1C1CHBF_frBE877BE877&oq=cors&aqs=chrome.0.69i59l3j0l5.807j0j4&sourceid=chrome&ie=UTF-8).

###And now?

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

###Create your prime scene

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

###Work with class. 

Why?
Ask phillip.
he as class. 
and class love him... 

a lot...

No, seriously, has he said, about every 3.56 second, object oriented programming is the base of the video-game developpement, so, we will work with class.

so, every part of this little workshop will be classy.

###Where and what 

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

###Scene Change. 

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



