var player;
var cursors;
var playerdown
var playerleft
var playerright
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
        game.load.spritesheet('dogdown','1rowspritesheet2.png', 101, 120 );
        game.load.image('dogleft','dogLeft.png');
        game.load.image('dogright','dogRight.png');
        game.load.image('redcardown','carRed(down).png');
        game.load.image('redcarup','carRed(up).png');
        
    },


    create: function() {
        game.load.start();
        game.world.setBounds(0, 0, 900, 600);
        
        background = game.add.sprite(0, 0, 'background');
        //playerleft = game.add.sprite(200, 400, 'dogleft');
        //playerright = game.add.sprite(200, 500, 'dogright');
        cardown = game.add.sprite(0,200,'redcardown');
        carup  = game.add.sprite(0,400, 'redcarup');
        tree1 = game.add.sprite( 260, 140, 'tree');
        house1 = game.add.sprite( 400, 0, 'house');
        playerdown = game.add.sprite(0 , 100, 'dogdown');
        playerdown.frame = 1; 
        playerdown.animations.add('walkdown',[0,1,2,3], 10, true);
        playerdown.animations.add('walkright',[4,5,6,7], 10, true);
        playerdown.animations.add('walkup',[8,9,10,11], 10, true);
        playerdown.animations.add('walkleft',[12,13,14,15], 10, true);
       
        //otherdog1 = game.add.sprite( 200, 400, 'otherdog');

        //tree.body.immovable = true;
        //player.body.bounce.y = 0.2;
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        //game.physics.enable(player, Phaser.Physics.ARCADE)
        //game.physics.arcade.gravity.y = 250;
        cursors = game.input.keyboard.createCursorKeys();
        //game.camera.follow(player);
    

    },

    update: function() {
        playerdown.animations.stop= true;
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        playerdown.x -= 4;
        playerdown.animations.play('walkleft');
        playerdown.animations.stop = false;
    }

        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        playerdown.x += 4;
        playerdown.animations.play('walkright');
        playerdown.animations.stop = false;
    }
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        playerdown.y += 4;
        playerdown.animations.play('walkdown');
        playerdown.animations.stop = false;
    }

        if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        playerdown.y -= 4;
        playerdown.animations.play('walkup');
        playerdown.animations.stop = false;
    }
    },

    render: function() {
        game.debug.spriteInfo(playerdown,20, 32);

    }
}

game.state.add("mainState",mainState);
game.state.start("mainState");
