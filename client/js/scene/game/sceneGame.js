class GameScene extends Phaser.Scene{
    constructor(){
        super({key:"GameScene"})
        this.gameWidth = 2000;
        this.gameHeight = 600;
        
    }

    preload (){
        this.width =  this.sys.game.canvas.width
        this.height =  this.sys.game.canvas.height;
        
        this.load.image("Bg",`./asset/SpaceBackGround.jpg`);
        this.load.image("playerShip","./../../../asset/spaceship_small_blue.png");
        this.load.image("ennemiShip","./../../../asset/spaceship_small_red.png");
    }


    create (){
        // changing scene size
        this.physics.world.setBounds(0, 0, this.gameWidth, this.gameHeight);

        // adding a tileSrpite
        this.background = this.add.tileSprite(this.gameWidth/2,this.gameHeight/2,this.gameWidth,this.gameHeight,"Bg");
        this.background = this.add.tileSprite(this.gameWidth,this.gameHeight,this.gameWidth*3,this.gameHeight*3,"Bg").setAlpha(0.5).setScrollFactor(3);

        // create the player
        this.player = this.physics.add.sprite(50, 300, 'playerShip');
        this.player.setCollideWorldBounds(true);
        
        // get the player in the correct position (thank to the sprite.)
        this.player.angle = 90;


        // making the camera following the player
        this.cameras.main.startFollow(this.player);

        //making sure that the camera will not get out of the world
        this.cameras.main.setBounds(0, 0,this.gameWidth, this.gameHeight);

        //define the player velocity that will be used by setVelocity
        this.vel = 0;

        // speed display fixed to camera
        this.displaySpeed = this.add.text(16,16,`speed : ${this.vel}`);
        this.displaySpeed.setScrollFactor(0); // this line said that the text will not scroll and will be fixed on the screen
        


        this.displayRotation = this.add.text(16,64,`angle : ${this.player.angle-90}`);
        this.displayRotation.setScrollFactor(0); // this line said that the text will not scroll and will be fixed on the screen

        // define the key player key
        this.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        

    }

    update(){

        if (this.keyZ.isDown){
            if(this.vel < 400){
                this.vel += 3;
            }else{
                
            }
            this.player.setVelocity(Math.sin(this.player.rotation) * this.vel, Math.cos(this.player.rotation) * -this.vel);  // 1
            this.displaySpeed.setText(`speed : ${this.vel}`);
        }
        if (this.keyS.isDown){
            if(this.vel > 0){
                this.vel -= 3;
            }
            this.player.setVelocity(Math.sin(this.player.rotation) * this.vel, Math.cos(this.player.rotation) * -this.vel);
            this.displaySpeed.setText(`speed : ${this.vel}`);
        }
        if (this.keyQ.isDown){  
            this.player.setVelocity(Math.sin(this.player.rotation) * this.vel, Math.cos(this.player.rotation) * -this.vel);
            this.player.angle -= 6;
            this.displayRotation.setText(`angle : ${(this.player.angle).toFixed(0)}`);
        }
        if (this.keyD.isDown){
            this.player.setVelocity(Math.sin(this.player.rotation) * this.vel, Math.cos(this.player.rotation) * -this.vel);
            this.player.angle += 6;
            this.displayRotation.setText(`angle : ${(this.player.angle).toFixed(0)}`);
        }
        

    }

}