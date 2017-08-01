var cursors;
var playerdown
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
        game.load.image('car', 'car.png', 52, 49);
        game.load.image('house', 'house.png');
        game.load.image('otherdog', 'dogimage.png', 42, 40);
        game.load.image('tree', 'tree.png', 75, 70);
        game.load.spritesheet('dogdown','1rowspritesheet2.png', 101, 120 );
        game.load.image('dogleft','dogLeft.png');
        game.load.image('dogright','dogRight.png');
        game.load.image('redcardown','carRed(down).png');
        game.load.image('redcarup','carRed(up).png');
        game.load.image('text', 'textbox.jpg');
        game.load.image('bush', 's2-bush.png');
        
    },

    create: function() {
        //Setup
        game.load.start();
        game.world.setBounds(0, 0, 2000, 1200);
        game.physics.startSystem(Phaser.Physics.arcade);

 //Background
        background = game.add.tileSprite(0,0,2000,1200,'background');
        background = fixedToCamera = true;

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
       
//Interactive Obstacle sprites
        redcar = game.add.sprite(0, 1050,'car');
        redcar.scale.setTo(2.5, 2.5);
        house1 = game.add.sprite(400, 0, 'house');
        otherdog = game.add.sprite(1620, 240, 'otherdog');
        otherdog.scale.setTo(0.5, 0.5);
        
//Obstacle sprite

        bush = game.add.sprite(150, 0, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(150, 50, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(150, 100, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(150, 150, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(150, 200, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(150, 250, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(150, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(205, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(260, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(315, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(370, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(805, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(860, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(915, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(970, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1025, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1080, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1135, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1190, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1245, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1300, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1355, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1410, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1465, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1520, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1575, 300, 'bush');
        bush.scale.setTo(0.5, 0.5);

        bush = game.add.sprite(0, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(55, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(110, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(165, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(220, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(275, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(330, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(385, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(440, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(495, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(550, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(605, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(660, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(715, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(770, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(825, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(880, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(935, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(990, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1045, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1100, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1155, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1210, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1265, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1320, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1375, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1430, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1485, 430, 'bush');
        bush.scale.setTo(0.5, 0.5);

        bush = game.add.sprite(1485, 480, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1485, 530, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1485, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1485, 630, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1485, 680, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1485, 730, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1485, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);
        //bush26 = game.add.sprite(1485, 830, 'bush');
        //bush26.scale.setTo(0.5, 0.5);
        //bush26 = game.add.sprite(1485, 880, 'bush');
        //bush26.scale.setTo(0.5, 0.5);
        //bush26 = game.add.sprite(1485, 930, 'bush');
        //bush26.scale.setTo(0.5, 0.5);
        //bush26 = game.add.sprite(1485, 980, 'bush');
        //bush26.scale.setTo(0.5, 0.5);
        //bush26 = game.add.sprite(1485, 1030, 'bush');
        //bush26.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1485, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        
        bush = game.add.sprite(1320, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1320, 630, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1320, 680, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1320, 730, 'bush');
        bush.scale.setTo(0.5, 0.5);

        bush = game.add.sprite(1320, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1375, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1430, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);

        bush = game.add.sprite(1100, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1100, 630, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1100, 680, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1100, 730, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1100, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1100, 830, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1100, 880, 'bush');
        bush.scale.setTo(0.5, 0.5);
        
        bush = game.add.sprite(385, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(385, 830, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(385, 880, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(385, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);

        bush = game.add.sprite(440, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(495, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(550, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(605, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(660, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(715, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(770, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(825, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(880, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);

        bush = game.add.sprite(385, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(440, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(495, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(550, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(605, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(660, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(715, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(770, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(825, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(880, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(935, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(990, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1045, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        //
        bush = game.add.sprite(1100, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1155, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1210, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1265, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1320, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1375, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1430, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);


        //bush27 = game.add.sprite(0, 580, 'bush');
        //bush27.scale.setTo(0.5, 0.5);
        //bush28 = game.add.sprite(55, 580, 'bush');
        //bush28.scale.setTo(0.5, 0.5);
        //bush29 = game.add.sprite(110, 580, 'bush');
        //bush29.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(165, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(220, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(275, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(330, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(385, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(440, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(495, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(550, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(605, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(660, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(715, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(770, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(825, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(880, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(935, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(990, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1045, 580, 'bush');
        bush.scale.setTo(0.5, 0.5);
        
        bush = game.add.sprite(165, 630, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(165, 680, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(165, 730, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(165, 780, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(165, 830, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(165, 880, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(165, 930, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(165, 980, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(165, 1030, 'bush');
        bush.scale.setTo(0.5, 0.5);

        //bush27 = game.add.sprite(0, 1080, 'bush');
        //bush27.scale.setTo(0.5, 0.5);
        //bush28 = game.add.sprite(55, 1080, 'bush');
        //bush28.scale.setTo(0.5, 0.5);
        //bush29 = game.add.sprite(110, 1080, 'bush');
        //bush29.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(165, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(220, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(275, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(330, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(385, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(440, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(495, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(550, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(605, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(660, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(715, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(770, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(825, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(880, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(935, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(990, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1045, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1100, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1155, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1210, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1265, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1320, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1375, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1430, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);
        bush = game.add.sprite(1485, 1080, 'bush');
        bush.scale.setTo(0.5, 0.5);

        tree1 = game.add.sprite(450, 720, 'tree');

//Obstacle settings
        game.physics.enable([playerdown, house1, tree1, redcar], Phaser.Physics.ARCADE);
        car.body.immovable = true;
        house1.body.immovable = true; 
        bush.body.immovable = true;
        
        

    },

    update: function() {
//Interactions
        game.physics.arcade.collide(playerdown,house1)
        game.physics.arcade.collide(redcar, tree1);
//Movement
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        playerdown.body.x -= 4;
        playerdown.animations.play('walkleft');
        playerdown.animations.stop = false;
    }

        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        playerdown.body.x += 4;
        playerdown.animations.play('walkright');
        playerdown.animations.stop = false;
    }
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        playerdown.body.y += 4;
        playerdown.animations.play('walkdown');
        playerdown.animations.stop = false;
    }

        if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        playerdown.body.y -= 4;
        playerdown.animations.play('walkup');
        playerdown.animations.stop = false;  
    }

    //if game.physics.arcade.collide(playerdown, house1)
    //   {
    //   text = game.add.text(game.world.centerX, game.world.centerY, "You are at a house",style)
    //   }    


    },

    render: function() {
      game.debug.spriteInfo(playerdown,20, 32);

    },
}

game.state.add("mainState",mainState);
game.state.start("mainState");
