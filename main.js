var player;
var cursors;
var facing = 'left';
var look = 'up';
var house1;
var tree1;
var otherdog1
var game = new Phaser.Game(800,600,Phaser.CANVAS,'game.Div')
var mainState = {
    preload: function() {
        game.load.image('background','background.png');
        game.load.image("dog","dog2.png");
        game.load.image('car', 'car2.png', 52, 49);
        game.load.image('house', 'house.png');
        game.load.image('otherdog', 'dogimage.png', 42, 40);
        game.load.image('tree', 'tree.png', 75, 70);
        game.load.image('dogleft','dogRight.png');
        game.load.image('dogright','dogRight.png');
        game.load.image('redcardown','carRed(down)');
        game.load.image('redcarup','carRed(up)');
        
    },


    create: function() {
        game.load.start();
        game.world.setBounds(0, 0, 900, 600);
        background = game.add.sprite(0, 0, 'background');
        player = game.add.sprite(0 , 100, 'dog');
        playerleft = game.add.sprite(200, 400, 'dogleft');
        playerright = game.add.sprite(200, 500, 'dogright');
        cardown = game.add.sprite(0,200,'redcardown');
        carup  = game.add.sprite(0,400, 'redcarup');
        tree1 = game.add.sprite( 200, 300, 'tree');
        house1 = game.add.sprite( 200, 200, 'house');
        //otherdog1 = game.add.sprite( 200, 400, 'otherdog');
        tree.body.immovable = true;
        
        player.body.bounce.y = 0.2;
        player.body.collideWorldBounds = true;
        cursors = game.input.keyboard.createCursorKeys();
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        //game.physics.enable(player, Phaser.Physics.ARCADE)
        //game.physics.arcade.gravity.y = 250;

        player.animations.add('left', [13, 14, 15, 16], 13, true);
        player.animations.add('up', [9, 10, 11, 12], 9, true);
        player.animations.add('right', [4, 5, 6, 7], 4, true);
        player.animations.add('down', [1, 2, 3, 4], 1, true);

        //this.game.camera.follow(player);
    

    },

    update: function() {

    },

    render: function() {


    }
}

game.state.add("mainState",mainState);
game.state.start("mainState");

game.state.add("mainState",mainState);
game.state.start("mainState");
