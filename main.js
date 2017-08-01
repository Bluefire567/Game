var player;
var cursors;
var playerdown
var playerleft
var playerright
var house;
var tree;
var redcar;
var text;
var xpos;
var ypos;
var edge;
var side;
var platforms;
var style;

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
        game.load.image('text', 'textbox.jpg')
        
    },

    create: function() {
//Setup
        game.load.start();
        game.world.setBounds(0, 0, 2000, 1200);
        game.physics.startSystem(Phaser.Physics.arcade);
//Background
        background = game.add.tileSprite(0,0,2000,1200,'background');
        background = fixedToCamara = true;
//Text
        style = { font: "50px Arial", fill: "#ff0044", align: "center" };
        text = game.add.text(game.world.centerX, game.world.centerY, "HELLO",style)
        text.fixedToCamera = true;
        text.cameraOffset.setTo(0,550);

//Main sprite
        playerdown = game.add.sprite(0 , 100, 'dogdown');
//Player movement
        game.physics.enable(playerdown , Phaser.Physics.ARCADE);
        game.camera.follow(playerdown);
        playerdown.body.collideWorldBounds = true;
        playerdown.frame = 1; 
        //Player sprite Animations
        playerdown.animations.add('walkdown',[0,1,2,3], 10, true);
        playerdown.animations.add('walkright',[4,5,6,7], 10, true);
        playerdown.animations.add('walkup',[8,9,10,11], 10, true);
        playerdown.animations.add('walkleft',[12,13,14,15], 10, true);
//Obstacles
        tree1 = game.add.sprite( 260, 140, 'tree');
        redcar = game.add.sprite(0,200,'redcardown');
        house1 = game.add.sprite( 400, 0, 'house');
//Obstacle Settings
        game.physics.enable([playerdown,house1, tree1, redcar], Phaser.Physics.ARCADE);
        redcar.body.immovable = true;
        house1.body.immovable = true; 
        tree1.body.immovable = true; 
    },

    update: function() {
        game.physics.arcade.collide(playerdown,house1)
        game.physics.arcade.collide(playerdown,tree1)
    //Movement
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        playerdown.body.moves = true;
        playerdown.body.velocity.x -= 4;
        playerdown.animations.play('walkleft');
    }

        else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    { 
            playerdown.body.moves = true;
            playerdown.body.velocity.x += 4;
            playerdown.animations.play('walkright');
    }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        playerdown.body.moves = true;
        playerdown.body.velocity.y -= 4;
        playerdown.animations.play('walkup');
    }

        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        playerdown.body.moves = true;
        playerdown.body.velocity.y += 4;
        playerdown.animations.play('walkdown');
          
    }
        else 
    {
        playerdown.body.velocity.y = 0;
        playerdown.body.velocity.x = 0;
        playerdown.body.moves = false;
        playerdown.animations.stop()
    }


    },

    render: function() {
      game.debug.spriteInfo(playerdown,20, 32);

    },
}

game.state.add("mainState",mainState);
game.state.start("mainState");
