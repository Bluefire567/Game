var game = new Phaser.Game(800,600,Phaser.CANVAS,'game.Div')
    //var bg;
var player;
var cursors;
var facing = 'left';
var look = 'up';
var house;
var tree;

var mainState = {
    preload: function() {
        this.load.image('background', 'https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0424/5908/1431605648965_drop_preview.png');
        this.game.load.spritesheet("dog","Game/dog.png", 42, 40);
        this.game.load.spritesheet("car", "Game/car.png", 52, 49);
        this.game.load.image("house", "Game/house.png", 65, 60);
        this.game.load.image("otherdog", "Game/dogimage.png", 42, 40);
        this.game.load.image("tree", "Game/tree.png", 75, 70);
    
    },

    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.setBounds(0, 0, 900, 600);

        background = this.game.add.sprite(0, 0, 'background');

        player = game.add.sprite(0 , 100, 'dog');
        this.game.physics.enable(player, Phaser.Physics.ARCADE);

        player.body.bounce.y = 0.2;
        player.body.collideWorldBounds = true;
    
        this.game.physics.arcade.gravity.y = 250;

        player.animations.add('left', [13, 14, 15, 16], 13, true);
        player.animations.add('up', [9, 10, 11, 12], 9, true);
        player.animations.add('right', [4, 5, 6, 7], 4, true);
        player.animations.add('down', [1, 2, 3, 4], 1, true);

        //this.game.camera.follow(player);

        cursors = this.game.input.keyboard.createCursorKeys();

        //tree = this.game.add.sprite( , , “tree”);
        //tree.body.immovable = true;
        //house = this.game.add.sprite( , , “house”);
        //house.body.immovable = true;
        //otherdog = this.game.add.sprite( , , “otherdog”);
    

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
    }

        //{player.body.velocity.x = 0

        //if (cursors.left.isDown)
        //{ 
            //player.body.velocity.x = -150;

            //if (facing != 'right')
            //{
               //player.animations.play('left');
                //facing = 'left';
            //}

        //},
        //else if (cursors.right.isDown)
        //{
            //player.body.velocity.x = 150;

            //if (facing != 'right')
                //{ 
                //player.animations.play('right');
                //facing = 'right';
            //}
        //}
        //else
        //{
            //if (facing != 'idle')
            //{
                //player.animations.stop();

                //if (facing == 'left')
                //{
                    //player.frame = 5;
                //}
                //else
                //{
                    //player.frame = 5;
                //}

                //facing = 'idle';
            //}
        //}

    render: function() {

        }
    }


game.state.add("mainState",mainState);
game.state.start("mainState");
