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