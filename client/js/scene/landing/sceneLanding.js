class LandingScene extends Phaser.Scene{
    constructor() {
        super("LandingScene");
    }

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