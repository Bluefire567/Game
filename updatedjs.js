var player;
var background;
var cursors;
var car;
var facing = 'left';
var look = 'up';
var house1;
var tree1;
var otherdog1;
var graphics;
var showDialogue = false;
var text;
var game = new Phaser.Game(800,600,Phaser.CANVAS,'game.Div')
var mainState = {
    preload: function() {
        game.load.image('background','background.png');
        game.load.image("dog","dog2.png");
        game.load.image('car', 'car2.png', 52, 49);
        game.load.image('house', 'house.png');
        game.load.image('otherdog', 'dogimage.png', 42, 40);
        game.load.image('tree', 'tree.png', 75, 70);
        game.load.spritesheet('dogdown','dogspritedown.png',96, 120);
        game.load.image('dogleft','dogLeft.png');
        game.load.image('dogright','dogRight.png');
        game.load.image('redcardown','carRed(down).png');
        game.load.image('redcarup','carRed(up).png');
        
    },

    create: function() {
        game.load.start();
        game.world.setBounds(0, 0, 900, 600);
        //player.body.collideWorldBounds = true;
        background = game.add.sprite(0, 0, 'background');
        //playerleft = game.add.sprite(200, 400, 'dogleft');
        //playerright = game.add.sprite(200, 500, 'dogright');
        //cardown = game.add.sprite(0,200,'redcardown');
        //carup  = game.add.sprite(0,400, 'redcarup');
        tree1 = game.add.sprite( 260, 140, 'tree');
        house1 = game.add.sprite( 400, 0, 'house');
        //playerdown = game.add.sprite(0 , 100, 'dogdown');
        //playerdown.frame = 1; 
        //playerdown.animations.add('walk',[0,1,2,3], 10, true);
       
        //otherdog1 = game.add.sprite( 200, 400, 'otherdog');

        //tree.body.immovable = true;
        //player.body.bounce.y = 0.2;
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        //game.physics.enable(player, Phaser.Physics.ARCADE)
        //game.physics.arcade.gravity.y = 250;
        //player.animations.add('left', [13, 14, 15, 16], 13, true);
        //player.animations.add('up', [9, 10, 11, 12], 9, true);
        //player.animations.add('right', [4, 5, 6, 7], 4, true);
        //player.animations.add('down', [1, 2, 3, 4], 1, true);
        cursors = game.input.keyboard.createCursorKeys();
        //game.camera.follow(player);
    

    },

    update: function() {
    
    var graphics = game.add.graphics(20, 100);
    var text;
    showDialogue = false;
    var xpos = Math.round(player.position.x);
    //var ypos = Math.round(player.position.y);


    window.graphics = graphics;
    
      if(this.game.physics.arcade.collide(player,tree1,null,null,this)){
                this.game.paused = true;
                createTextBox(graphics);
                var space = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
                text = this.game.add.text(xpos -140, 310, "Such delicious food out!\nI want to try everything. ",{font: "10pt Courier", fill: "#DC9CD2", stroke: "#BF7FCE", strokeThickness: 0 });
                text.destroy(); //not it
                text = this.game.add.text(xpos -140, 310, "Ohhhhhh… My stomach, it hurts.\nMaybe I shouldn’t have tried all of them.",{font: "10pt Courier", fill: "#DC9CD2", stroke: "#BF7FCE", strokeThickness: 1 });
                space.onDown.add(function () {   actionOnClick(graphics, text); this.game.paused = false;}, this);
            }
    
      if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        player.x -= 4;
    }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        player.x += 4;
    }

        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        player.y += 4;
        player.animations.play('walk');
    }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        player.y += 4;
    }
    
    },

    render: function() {
        game.debug.spriteInfo(player,20, 32);

    }
}

function createTextBox(graphics,text){
    // draw a rectangle
    var xpos = Math.round(player.position.x);
    var ypos = Math.round(player.position.y);
    graphics.lineStyle(0);
    graphics.beginFill(0x333333, 1);
    player.events.onInputOver.add(function() {  graphics.graphicsData[0].fillColor = 0x5B5B5B; }, this);
    graphics.drawRect(xpos-170, 200, 350, 100);
    graphics.endFill();

    window.graphics = graphics;

function actionOnClick(graphics, text){
    graphics .destroy();
    text.destroy();
    

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
}