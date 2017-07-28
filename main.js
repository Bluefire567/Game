var player;
var cursors;
var playerdown
var playerleft
var playerright
var house1;
var tree1;
var text;
var xpos;
var ypos;
var edge;
var side;
var platforms;

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
        //Setup
        game.load.start();
        game.world.setBounds(0, 0, 2000, 1200);
        game.physics.startSystem(Phaser.Physics.P2JS);
        background = game.add.tileSprite(0,0,2000,1200,'background');
        background = fixedToCamara = true;



        //Main sprite
        playerdown = game.add.sprite(0 , 100, 'dogdown');
        //Sprite movement
        game.physics.enable(playerdown, Phaser.Physics.ARCADE);

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
       
        tree1 = game.add.sprite( 260, 140, 'tree');
        tree1.
        //Sprites  
        redcar = game.add.sprite(0,200,'redcardown');
        house1 = game.add.sprite( 400, 0, 'house');
       
        //tree1.body.immovable = true;
        //redcar.body.immovable = true;
        //house1.body,.immovable = true;

        

        //ame.physics.enable([playerdown, tree1] , Phaser.Physics.ARCADE);

        //tree.body.immovable = true;
        //player.body.bounce.y = 0.2;
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        //game.physics.enable(player, Phaser.Physics.ARCADE)
        //game.physics.arcade.gravity.y = 250;
        //playerdown.body.collideWorldBounds = true;
        game.physics.enable(tree1,redcar,house1);
        game.physics.collide(playerup, house1, redcar, tree1); 
        cursors = game.input.keyboard.createCursorKeys();
       
    

    },

    update: function() {
        //window.graphics = 'graphics';
        //if (game.physics.arcade.collide(player,tree1,null,null))
        //{
//            createTextBox(graphics);
       //     var space = input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
       //     text = game.add.text(xpos -140, 310, "Such delicious food out!\nI want to try everything. ",{font: "10pt Courier", fill: "#DC9CD2", stroke: "#BF7FCE", strokeThickness: 0 });
       //     text.destroy(); //not it
       //     text = game.add.text(xpos -140, 310, "Ohhhhhh… My stomach, it hurts.\nMaybe I shouldn’t have tried all of them.",{font: "10pt Courier", fill: "#DC9CD2", stroke: "#BF7FCE", strokeThickness: 1 });
        //    space.onDown.add(function () {   actionOnClick(graphics, text); game.paused = false;});
        //    },

        game.physics.arcade.collide(player, tree);
        game.physics.arcade.collide(player, house);


    
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

    },

    //createTextBox: function(){
    //draw a rectangle
    //graphics.lineStyle(0);
    //graphics.beginFill(0x333333, 1);
    //player.events.onInputOver.add(function() {  graphics.graphicsData[0].fillColor = 0x5B5B5B; });
    //graphics.drawRect(xpos-170, 200, 350, 100);
   // graphics.endFill();

    //window.graphics = graphics;
   // },

   // actionOnClick: function(graphics, text){
   // graphics.destroy();
   // text.destroy();
    

} 

//var goingUp = false;
 
//function gameLoop() {
    //if (car.y >= bottomOfRange) {
        //goingUp = true;
    //}
    //else if (car.y <= topOfRange) {
        //goingUp = false;
    //}
     
    //if (goingUp) {
        //car.y -= ufo.ySpeed;
    //} else {
        //car.y += ufo.ySpeed;
    //}
     
    //car.x += ufo.xSpeed;
//}


game.state.add("mainState",mainState);
game.state.start("mainState");