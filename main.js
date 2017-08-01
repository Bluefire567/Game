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
        game.load.image('bush','s2-bush.png');
        game.load.image('text', 'text.png');
        
    },

    create: function() {
//Setup
        game.load.start();
        game.world.setBounds(0, 0, 2000, 1200);
        game.physics.startSystem(Phaser.Physics.arcade);
//Background
        background = game.add.tileSprite(0,0,2000,1200,'background');

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
       
        redcar = game.add.sprite(0,200,'redcardown');
        house1 = game.add.sprite( 400, 0, 'house');
        bush1 = game.add.sprite(150, 0, 'bush');
        bush1.scale.setTo(0.5, 0.5);
        bush2 = game.add.sprite(150, 50, 'bush');
        bush2.scale.setTo(0.5, 0.5);
        bush3 = game.add.sprite(150, 100, 'bush');
        bush3.scale.setTo(0.5, 0.5);
        bush4 = game.add.sprite(150, 150, 'bush');
        bush4.scale.setTo(0.5, 0.5);
        bush5 = game.add.sprite(150, 200, 'bush');
        bush5.scale.setTo(0.5, 0.5);
        bush6 = game.add.sprite(150, 250, 'bush');
        bush6.scale.setTo(0.5, 0.5);
        bush7 = game.add.sprite(150, 300, 'bush');
        bush7.scale.setTo(0.5, 0.5);
        bush8 = game.add.sprite(205, 300, 'bush');
        bush8.scale.setTo(0.5, 0.5);
        bush9 = game.add.sprite(260, 300, 'bush');
        bush9.scale.setTo(0.5, 0.5);
        bush10 = game.add.sprite(315, 300, 'bush');
        bush10.scale.setTo(0.5, 0.5);
        bush11 = game.add.sprite(370, 300, 'bush');
        bush11.scale.setTo(0.5, 0.5);
        bush12 = game.add.sprite(805, 300, 'bush');
        bush12.scale.setTo(0.5, 0.5);
        bush13 = game.add.sprite(860, 300, 'bush');
        bush13.scale.setTo(0.5, 0.5);
        bush14 = game.add.sprite(915, 300, 'bush');
        bush14.scale.setTo(0.5, 0.5);
        bush15 = game.add.sprite(970, 300, 'bush');
        bush15.scale.setTo(0.5, 0.5);
        bush40 = game.add.sprite(1025, 300, 'bush');
        bush40.scale.setTo(0.5, 0.5);
        bush16 = game.add.sprite(1080, 300, 'bush');
        bush16.scale.setTo(0.5, 0.5);
        bush17 = game.add.sprite(1135, 300, 'bush');
        bush17.scale.setTo(0.5, 0.5);
        bush18 = game.add.sprite(1190, 300, 'bush');
        bush18.scale.setTo(0.5, 0.5);
        bush19 = game.add.sprite(1245, 300, 'bush');
        bush19.scale.setTo(0.5, 0.5);
        bush20 = game.add.sprite(1300, 300, 'bush');
        bush20.scale.setTo(0.5, 0.5);
        bush21 = game.add.sprite(1355, 300, 'bush');
        bush21.scale.setTo(0.5, 0.5);
        bush22 = game.add.sprite(1410, 300, 'bush');
        bush22.scale.setTo(0.5, 0.5);
        bush23 = game.add.sprite(1465, 300, 'bush');
        bush23.scale.setTo(0.5, 0.5);
        bush24 = game.add.sprite(1520, 300, 'bush');
        bush24.scale.setTo(0.5, 0.5);
        bush25 = game.add.sprite(1575, 300, 'bush');
        bush25.scale.setTo(0.5, 0.5);

        bush26 = game.add.sprite(0, 430, 'bush');
        bush26.scale.setTo(0.5, 0.5);
        bush27 = game.add.sprite(55, 430, 'bush');
        bush27.scale.setTo(0.5, 0.5);
        bush28 = game.add.sprite(110, 430, 'bush');
        bush28.scale.setTo(0.5, 0.5);
        bush29 = game.add.sprite(165, 430, 'bush');
        bush29.scale.setTo(0.5, 0.5);
        bush30 = game.add.sprite(220, 430, 'bush');
        bush30.scale.setTo(0.5, 0.5);
        bush31 = game.add.sprite(275, 430, 'bush');
        bush31.scale.setTo(0.5, 0.5);
        bush32 = game.add.sprite(330, 430, 'bush');
        bush32.scale.setTo(0.5, 0.5);
        bush33 = game.add.sprite(385, 430, 'bush');
        bush33.scale.setTo(0.5, 0.5);
        bush34 = game.add.sprite(440, 430, 'bush');
        bush34.scale.setTo(0.5, 0.5);
        bush35 = game.add.sprite(495, 430, 'bush');
        bush35.scale.setTo(0.5, 0.5);
        bush36 = game.add.sprite(550, 430, 'bush');
        bush36.scale.setTo(0.5, 0.5);
        bush37 = game.add.sprite(605, 430, 'bush');
        bush37.scale.setTo(0.5, 0.5);
        bush38 = game.add.sprite(660, 430, 'bush');
        bush38.scale.setTo(0.5, 0.5);
        bush39 = game.add.sprite(715, 430, 'bush');
        bush39.scale.setTo(0.5, 0.5);
        bush41 = game.add.sprite(770, 430, 'bush');
        bush41.scale.setTo(0.5, 0.5);
        bush42 = game.add.sprite(825, 430, 'bush');
        bush42.scale.setTo(0.5, 0.5);
        bush43 = game.add.sprite(880, 430, 'bush');
        bush43.scale.setTo(0.5, 0.5);
        bush44 = game.add.sprite(935, 430, 'bush');
        bush44.scale.setTo(0.5, 0.5);
        bush45 = game.add.sprite(990, 430, 'bush');
        bush45.scale.setTo(0.5, 0.5);
        bush46 = game.add.sprite(1045, 430, 'bush');
        bush46.scale.setTo(0.5, 0.5);
        bush47 = game.add.sprite(1100, 430, 'bush');
        bush47.scale.setTo(0.5, 0.5);
        bush48 = game.add.sprite(1155, 430, 'bush');
        bush48.scale.setTo(0.5, 0.5);
        bush49 = game.add.sprite(1210, 430, 'bush');
        bush49.scale.setTo(0.5, 0.5);
        bush50 = game.add.sprite(1265, 430, 'bush');
        bush50.scale.setTo(0.5, 0.5);
        bush51 = game.add.sprite(1320, 430, 'bush');
        bush51.scale.setTo(0.5, 0.5);
        bush52 = game.add.sprite(1375, 430, 'bush');
        bush52.scale.setTo(0.5, 0.5);
        bush53 = game.add.sprite(1430, 430, 'bush');
        bush53.scale.setTo(0.5, 0.5);
        bush54 = game.add.sprite(1485, 430, 'bush');
        bush54.scale.setTo(0.5, 0.5);

        bush55 = game.add.sprite(1485, 480, 'bush');
        bush55.scale.setTo(0.5, 0.5);
        bush56 = game.add.sprite(1485, 530, 'bush');
        bush56.scale.setTo(0.5, 0.5);
        bush57 = game.add.sprite(1485, 580, 'bush');
        bush57.scale.setTo(0.5, 0.5);
        bush58 = game.add.sprite(1485, 630, 'bush');
        bush58.scale.setTo(0.5, 0.5);
        bush59 = game.add.sprite(1485, 680, 'bush');
        bush59.scale.setTo(0.5, 0.5);
        bush60 = game.add.sprite(1485, 730, 'bush');
        bush60.scale.setTo(0.5, 0.5);
        bush61 = game.add.sprite(1485, 780, 'bush');
        bush61.scale.setTo(0.5, 0.5);
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
        bush62 = game.add.sprite(1485, 1080, 'bush');
        bush62.scale.setTo(0.5, 0.5);
        
        bush63 = game.add.sprite(1320, 580, 'bush');
        bush63.scale.setTo(0.5, 0.5);
        bush64 = game.add.sprite(1320, 630, 'bush');
        bush64.scale.setTo(0.5, 0.5);
        bush65 = game.add.sprite(1320, 680, 'bush');
        bush65.scale.setTo(0.5, 0.5);
        bush66 = game.add.sprite(1320, 730, 'bush');
        bush66.scale.setTo(0.5, 0.5);

        bush67 = game.add.sprite(1320, 780, 'bush');
        bush67.scale.setTo(0.5, 0.5);
        bush68 = game.add.sprite(1375, 780, 'bush');
        bush68.scale.setTo(0.5, 0.5);
        bush69 = game.add.sprite(1430, 780, 'bush');
        bush69.scale.setTo(0.5, 0.5);

        bush70 = game.add.sprite(1100, 580, 'bush');
        bush70.scale.setTo(0.5, 0.5);
        bush71 = game.add.sprite(1100, 630, 'bush');
        bush71.scale.setTo(0.5, 0.5);
        bush72 = game.add.sprite(1100, 680, 'bush');
        bush72.scale.setTo(0.5, 0.5);
        bush73 = game.add.sprite(1100, 730, 'bush');
        bush73.scale.setTo(0.5, 0.5);
        bush74 = game.add.sprite(1100, 780, 'bush');
        bush74.scale.setTo(0.5, 0.5);
        bush75 = game.add.sprite(1100, 830, 'bush');
        bush75.scale.setTo(0.5, 0.5);
        bush76 = game.add.sprite(1100, 880, 'bush');
        bush76.scale.setTo(0.5, 0.5);
        
        bush77 = game.add.sprite(385, 780, 'bush');
        bush77.scale.setTo(0.5, 0.5);
        bush78 = game.add.sprite(385, 830, 'bush');
        bush78.scale.setTo(0.5, 0.5);
        bush79 = game.add.sprite(385, 880, 'bush');
        bush79.scale.setTo(0.5, 0.5);
        bush80 = game.add.sprite(385, 930, 'bush');
        bush80.scale.setTo(0.5, 0.5);

        bush81 = game.add.sprite(440, 780, 'bush');
        bush81.scale.setTo(0.5, 0.5);
        bush82 = game.add.sprite(495, 780, 'bush');
        bush82.scale.setTo(0.5, 0.5);
        bush83 = game.add.sprite(550, 780, 'bush');
        bush83.scale.setTo(0.5, 0.5);
        bush84 = game.add.sprite(605, 780, 'bush');
        bush84.scale.setTo(0.5, 0.5);
        bush85 = game.add.sprite(660, 780, 'bush');
        bush85.scale.setTo(0.5, 0.5);
        bush86 = game.add.sprite(715, 780, 'bush');
        bush86.scale.setTo(0.5, 0.5);
        bush87 = game.add.sprite(770, 780, 'bush');
        bush87.scale.setTo(0.5, 0.5);
        bush88 = game.add.sprite(825, 780, 'bush');
        bush88.scale.setTo(0.5, 0.5);
        bush89 = game.add.sprite(880, 780, 'bush');
        bush89.scale.setTo(0.5, 0.5);

        bush90 = game.add.sprite(385, 930, 'bush');
        bush90.scale.setTo(0.5, 0.5);
        bush91 = game.add.sprite(440, 930, 'bush');
        bush91.scale.setTo(0.5, 0.5);
        bush92 = game.add.sprite(495, 930, 'bush');
        bush92.scale.setTo(0.5, 0.5);
        bush93 = game.add.sprite(550, 930, 'bush');
        bush93.scale.setTo(0.5, 0.5);
        bush94 = game.add.sprite(605, 930, 'bush');
        bush94.scale.setTo(0.5, 0.5);
        bush95 = game.add.sprite(660, 930, 'bush');
        bush95.scale.setTo(0.5, 0.5);
        bush96 = game.add.sprite(715, 930, 'bush');
        bush96.scale.setTo(0.5, 0.5);
        bush97 = game.add.sprite(770, 930, 'bush');
        bush97.scale.setTo(0.5, 0.5);
        bush98 = game.add.sprite(825, 930, 'bush');
        bush98.scale.setTo(0.5, 0.5);
        bush99 = game.add.sprite(880, 930, 'bush');
        bush99.scale.setTo(0.5, 0.5);
        bush100 = game.add.sprite(935, 930, 'bush');
        bush100.scale.setTo(0.5, 0.5);
        bush101 = game.add.sprite(990, 930, 'bush');
        bush101.scale.setTo(0.5, 0.5);
        bush102 = game.add.sprite(1045, 930, 'bush');
        bush102.scale.setTo(0.5, 0.5);
        //
        bush103 = game.add.sprite(1100, 930, 'bush');
        bush103.scale.setTo(0.5, 0.5);
        bush104 = game.add.sprite(1155, 930, 'bush');
        bush104.scale.setTo(0.5, 0.5);
        bush105 = game.add.sprite(1210, 930, 'bush');
        bush105.scale.setTo(0.5, 0.5);
        bush106 = game.add.sprite(1265, 930, 'bush');
        bush106.scale.setTo(0.5, 0.5);
        bush107 = game.add.sprite(1320, 930, 'bush');
        bush107.scale.setTo(0.5, 0.5);
        bush108 = game.add.sprite(1375, 930, 'bush');
        bush108.scale.setTo(0.5, 0.5);
        bush109 = game.add.sprite(1430, 930, 'bush');
        bush109.scale.setTo(0.5, 0.5);


        //bush27 = game.add.sprite(0, 580, 'bush');
        //bush27.scale.setTo(0.5, 0.5);
        //bush28 = game.add.sprite(55, 580, 'bush');
        //bush28.scale.setTo(0.5, 0.5);
        //bush29 = game.add.sprite(110, 580, 'bush');
        //bush29.scale.setTo(0.5, 0.5);
        bush110 = game.add.sprite(165, 580, 'bush');
        bush110.scale.setTo(0.5, 0.5);
        bush111 = game.add.sprite(220, 580, 'bush');
        bush111.scale.setTo(0.5, 0.5);
        bush112 = game.add.sprite(275, 580, 'bush');
        bush112.scale.setTo(0.5, 0.5);
        bush113 = game.add.sprite(330, 580, 'bush');
        bush113.scale.setTo(0.5, 0.5);
        bush114 = game.add.sprite(385, 580, 'bush');
        bush114.scale.setTo(0.5, 0.5);
        bush115 = game.add.sprite(440, 580, 'bush');
        bush115.scale.setTo(0.5, 0.5);
        bush116 = game.add.sprite(495, 580, 'bush');
        bush116.scale.setTo(0.5, 0.5);
        bush117 = game.add.sprite(550, 580, 'bush');
        bush117.scale.setTo(0.5, 0.5);
        bush118 = game.add.sprite(605, 580, 'bush');
        bush118.scale.setTo(0.5, 0.5);
        bush120 = game.add.sprite(660, 580, 'bush');
        bush120.scale.setTo(0.5, 0.5);
        bush121= game.add.sprite(715, 580, 'bush');
        bush121.scale.setTo(0.5, 0.5);
        bush122 = game.add.sprite(770, 580, 'bush');
        bush122.scale.setTo(0.5, 0.5);
        bush123 = game.add.sprite(825, 580, 'bush');
        bush123.scale.setTo(0.5, 0.5);
        bush124 = game.add.sprite(880, 580, 'bush');
        bush124.scale.setTo(0.5, 0.5);
        bush125 = game.add.sprite(935, 580, 'bush');
        bush125.scale.setTo(0.5, 0.5);
        bush126 = game.add.sprite(990, 580, 'bush');
        bush126.scale.setTo(0.5, 0.5);
        bush127 = game.add.sprite(1045, 580, 'bush');
        bush127.scale.setTo(0.5, 0.5);
        
        bush128 = game.add.sprite(165, 630, 'bush');
        bush128.scale.setTo(0.5, 0.5);
        bush129 = game.add.sprite(165, 680, 'bush');
        bush129.scale.setTo(0.5, 0.5);
        bush130 = game.add.sprite(165, 730, 'bush');
        bush130.scale.setTo(0.5, 0.5);
        bush131 = game.add.sprite(165, 780, 'bush');
        bush131.scale.setTo(0.5, 0.5);
        bush132 = game.add.sprite(165, 830, 'bush');
        bush132.scale.setTo(0.5, 0.5);
        bush133 = game.add.sprite(165, 880, 'bush');
        bush133.scale.setTo(0.5, 0.5);
        bush134 = game.add.sprite(165, 930, 'bush');
        bush134.scale.setTo(0.5, 0.5);
        bush135 = game.add.sprite(165, 980, 'bush');
        bush135.scale.setTo(0.5, 0.5);
        bush136 = game.add.sprite(165, 1030, 'bush');
        bush136.scale.setTo(0.5, 0.5);

        //bush27 = game.add.sprite(0, 1080, 'bush');
        //bush27.scale.setTo(0.5, 0.5);
        //bush28 = game.add.sprite(55, 1080, 'bush');
        //bush28.scale.setTo(0.5, 0.5);
        //bush29 = game.add.sprite(110, 1080, 'bush');
        //bush29.scale.setTo(0.5, 0.5);
        bush137 = game.add.sprite(165, 1080, 'bush');
        bush137.scale.setTo(0.5, 0.5);
        bush138 = game.add.sprite(220, 1080, 'bush');
        bush138.scale.setTo(0.5, 0.5);
        bush139 = game.add.sprite(275, 1080, 'bush');
        bush139.scale.setTo(0.5, 0.5);
        bush141 = game.add.sprite(330, 1080, 'bush');
        bush141.scale.setTo(0.5, 0.5);
        bush142 = game.add.sprite(385, 1080, 'bush');
        bush142.scale.setTo(0.5, 0.5);
        bush143 = game.add.sprite(440, 1080, 'bush');
        bush143.scale.setTo(0.5, 0.5);
        bush144 = game.add.sprite(495, 1080, 'bush');
        bush144.scale.setTo(0.5, 0.5);
        bush145 = game.add.sprite(550, 1080, 'bush');
        bush145.scale.setTo(0.5, 0.5);
        bush146 = game.add.sprite(605, 1080, 'bush');
        bush146.scale.setTo(0.5, 0.5);
        bush147 = game.add.sprite(660, 1080, 'bush');
        bush147.scale.setTo(0.5, 0.5);
        bush148 = game.add.sprite(715, 1080, 'bush');
        bush148.scale.setTo(0.5, 0.5);
        bush149 = game.add.sprite(770, 1080, 'bush');
        bush149.scale.setTo(0.5, 0.5);
        bush150 = game.add.sprite(825, 1080, 'bush');
        bush150.scale.setTo(0.5, 0.5);
        bush151 = game.add.sprite(880, 1080, 'bush');
        bush151.scale.setTo(0.5, 0.5);
        bush152 = game.add.sprite(935, 1080, 'bush');
        bush152.scale.setTo(0.5, 0.5);
        bush153 = game.add.sprite(990, 1080, 'bush');
        bush153.scale.setTo(0.5, 0.5);
        bush154 = game.add.sprite(1045, 1080, 'bush');
        bush154.scale.setTo(0.5, 0.5);
        bush155 = game.add.sprite(1100, 1080, 'bush');
        bush155.scale.setTo(0.5, 0.5);
        bush156 = game.add.sprite(1155, 1080, 'bush');
        bush156.scale.setTo(0.5, 0.5);
        bush157 = game.add.sprite(1210, 1080, 'bush');
        bush157.scale.setTo(0.5, 0.5);
        bush158 = game.add.sprite(1265, 1080, 'bush');
        bush158.scale.setTo(0.5, 0.5);
        bush159 = game.add.sprite(1320, 1080, 'bush');
        bush159.scale.setTo(0.5, 0.5);
        bush160 = game.add.sprite(1375, 1080, 'bush');
        bush160.scale.setTo(0.5, 0.5);
        bush161 = game.add.sprite(1430, 1080, 'bush');
        bush161.scale.setTo(0.5, 0.5);
        bush162 = game.add.sprite(1485, 1080, 'bush');
        bush162.scale.setTo(0.5, 0.5);
        otherdog = game.add.sprite(1620, 240, 'otherdog');
        otherdog.scale.setTo(0.5, 0.5);
        tree1 = game.add.sprite(450, 720, 'tree');

        //Text  
        //textbox = game.add.sprite(game.world.centerX, game.world.centerY,'text');
        //textbox.fixedToCamara = true;
        //textbox.cameraOffset.setTo(200,550);
        //textbox.scale.setTo(1.5,0.7);
        style = {font: "30px Courier", fontWeight: 'bold', fill: "#000000", align: "center" };
        text = game.add.text(game.world.centerX, game.world.centerY, "Hello!",style);
        text.fixedToCamera = true;
        text.cameraOffset.setTo(0,570);


//Obstacle Settings
        game.physics.enable([playerdown,house1,tree1,bush1,bush2,bush3,bush4,], Phaser.Physics.ARCADE);
        house1.body.immovable = true; 
        tree1.body.immovable = true;
        bush1.body.immovable = true;
        bush2.body.immovable = true;
        bush3.body.immovable = true;
        bush4.body.immovable = true;
        bush5.body.immovable = true;
        bush6.body.immovable = true;
        bush7.body.immovable = true;
        bush8.body.immovable = true;
        bush9.body.immovable = true;
        bush10.body.immovable = true;
        bush11.body.immovable = true;
        bush12.body.immovable = true;
        bush13.body.immovable = true;
        bush14.body.immovable = true;
        bush15.body.immovable = true;
        bush16.body.immovable = true;
        bush17.body.immovable = true;
        bush18.body.immovable = true;
        bush19.body.immovable = true;
        bush20.body.immovable = true;
        bush21.body.immovable = true;
        bush22.body.immovable = true;
        bush23.body.immovable = true;
        bush24.body.immovable = true;
        bush25.body.immovable = true;
        bush26.body.immovable = true;
        bush27.body.immovable = true;
        bush28.body.immovable = true;
        bush29.body.immovable = true;
        bush30.body.immovable = true;
        bush31.body.immovable = true;
        bush32.body.immovable = true;
        bush33.body.immovable = true;
        bush34.body.immovable = true;
        bush35.body.immovable = true;
        bush36.body.immovable = true;
        bush37.body.immovable = true;
        bush38.body.immovable = true;
        bush39.body.immovable = true;
        bush40.body.immovable = true;
        bush42.body.immovable = true;
        bush44.body.immovable = true;
        bush46.body.immovable = true;
        bush48.body.immovable = true;
        bush50.body.immovable = true;
        bush52.body.immovable = true;
        bush54.body.immovable = true;
        bush56.body.immovable = true;
        bush58.body.immovable = true;
        bush60.body.immovable = true;
        bush62.body.immovable = true;
        bush64.body.immovable = true;
        bush66.body.immovable = true;
        bush68.body.immovable = true;
        bush70.body.immovable = true;
        bush72.body.immovable = true;
        bush74.body.immovable = true;
        bush76.body.immovable = true;
        bush78.body.immovable = true;
        bush80.body.immovable = true;
        bush82.body.immovable = true;
        bush84.body.immovable = true;
        bush86.body.immovable = true;
        bush88.body.immovable = true;
        bush90.body.immovable = true;
        bush92.body.immovable = true;
        bush94.body.immovable = true;
        bush96.body.immovable = true;
        bush98.body.immovable = true;
        bush100.body.immovable = true;
        bush102.body.immovable = true;
        bush104.body.immovable = true;
        bush106.body.immovable = true;
        bush108.body.immovable = true;
        bush110.body.immovable = true;
        bush112.body.immovable = true;
        bush114.body.immovable = true;
        bush116.body.immovable = true;
        bush118.body.immovable = true;
        bush120.body.immovable = true;
        bush122.body.immovable = true;
        bush124.body.immovable = true;
        bush126.body.immovable = true;
        bush128.body.immovable = true;
        bush130.body.immovable = true;
        bush132.body.immovable = true;
        bush134.body.immovable = true;
        bush136.body.immovable = true;
        bush138.body.immovable = true;
        bush142.body.immovable = true;
        bush144.body.immovable = true;
        bush146.body.immovable = true;
        bush148.body.immovable = true;
        bush150.body.immovable = true;
        bush152.body.immovable = true;
        bush154.body.immovable = true;
        bush156.body.immovable = true;
        bush158.body.immovable = true;
        bush160.body.immovable = true;
        bush162.body.immovable = true;
        otherdog.body.immovable = true;
        redcar.body.immovable = true;
    },

    update: function() {
    game.physics.arcade.collide(playerdown,tree1);
    game.physics.arcade.collide(playerdown,bush1);
    game.physics.arcade.collide(playerdown,bush2);
    game.physics.arcade.collide(playerdown,bush3);
    game.physics.arcade.collide(playerdown,bush4);

    if (game.physics.arcade.collide(playerdown,house1))
    {
        text.setText('you found a house!')
    }


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
