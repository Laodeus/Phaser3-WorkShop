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
    scene: [GameScene, LandingScene,MenuScene,]
};

const game = new Phaser.Game(config);

