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
    },


    create: function() {
        game.load.start();
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0, 0, 900, 600);
        background = game.add.sprite(0, 0, 'background');
        player = game.add.sprite(0 , 100, 'dog');
        //game.physics.enable(player, Phaser.Physics.ARCADE)
        tree1 = game.add.sprite( 200, 300, 'tree');
        house1 = game.add.sprite( 200, 200, 'house');
        otherdog1 = game.add.sprite( 200, 400, 'otherdog');
        tree.body.immovable = true;
        
        player.body.bounce.y = 0.2;
        player.body.collideWorldBounds = true;
        cursors = game.input.keyboard.createCursorKeys();


        //game.physics.arcade.gravity.y = 250;

        player.animations.add('left', [13, 14, 15, 16], 13, true);
        player.animations.add('up', [9, 10, 11, 12], 9, true);
        player.animations.add('right', [4, 5, 6, 7], 4, true);
        player.animations.add('down', [1, 2, 3, 4], 1, true);

        //this.game.camera.follow(player);
    

    },

    update: function() {        
        if (cursors.left.isDown)
            {
                //  Move to the left
               player.body.velocity.x = -150;
               player.body.velocity.y = 0;
               this.game.camera.x -= 1.25;
               player.animations.play('left');
            }
        else if (cursors.right.isDown)
            {
               //  Move to the right
               player.body.velocity.x = 150;
               player.body.velocity.y = 0;
               this.game.camera.x += 1.25;
               player.animations.play('right');
            }
         else if(cursors.up.isDown){
               player.body.velocity.y = -150;
               player.body.velocity.x = 0;
               player.animations.play("up");
            }
         else if(cursors.down.isDown){
               player.body.velocity.y = 150;
               player.body.velocity.x = 0;
               player.animations.play("down");
            }
         else
            {
                //  Stand still
               player.animations.stop();
                
               player.body.velocity.x = 0;
               player.body.velocity.y = 0;
            }
  
    },

    render: function() {


    }
}

game.state.add("mainState",mainState);
game.state.start("mainState");

game.state.add("mainState",mainState);
game.state.start("mainState");
