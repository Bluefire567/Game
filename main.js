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
        game.load.image('redcar','car.png');
        game.load.image('bush','s2-bush.png');
        game.load.image('text', 'text.png');
        
    },

    create: function() {
//Setup
        game.load.start();
        game.world.setBounds(0, 0, 1650, 1450);
        game.physics.startSystem(Phaser.Physics.arcade);
//Background
        background = game.add.tileSprite(0,0,1650,1450,'background');

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
        house1 = game.add.sprite( 400, 0, 'house');
        tree1 = game.add.sprite(450, 990, 'tree');
        tree1.scale.setTo(0.7,0.7);
        bush1 = game.add.sprite(150, 0, 'bush');
        bush2 = game.add.sprite(150, 50, 'bush');
        bush3 = game.add.sprite(150, 100, 'bush');
        bush4 = game.add.sprite(150, 150, 'bush');
        bush5 = game.add.sprite(150, 200, 'bush');
        bush6 = game.add.sprite(150, 250, 'bush');
        bush7 = game.add.sprite(150, 300, 'bush');
      
        bush8 = game.add.sprite(205, 300, 'bush');
      
        bush9 = game.add.sprite(260, 300, 'bush');
       
        bush10 = game.add.sprite(315, 300, 'bush');
     
        bush11 = game.add.sprite(370, 300, 'bush');
       
        bush12 = game.add.sprite(805, 300, 'bush');
      
        bush13 = game.add.sprite(860, 300, 'bush');
      
        bush14 = game.add.sprite(915, 300, 'bush');
       
        bush15 = game.add.sprite(970, 300, 'bush');
      
        bush15p5 = game.add.sprite(1025,300, 'bush');
        bush16 = game.add.sprite(1080, 300, 'bush');
    
        bush17 = game.add.sprite(1135, 300, 'bush');
        
        bush18 = game.add.sprite(1190, 300, 'bush');
        bush19 = game.add.sprite(1245, 300, 'bush');
        bush20 = game.add.sprite(1300, 300, 'bush');
        bush21 = game.add.sprite(1355, 300, 'bush');
        bush22 = game.add.sprite(1410, 300, 'bush');
        bush23 = game.add.sprite(1465, 300, 'bush');
        bush24 = game.add.sprite(1520, 300, 'bush');
        bush25 = game.add.sprite(1575, 300, 'bush');

        bush26 = game.add.sprite(0, 500, 'bush');
        bush27 = game.add.sprite(55, 500, 'bush');
        bush28 = game.add.sprite(110, 500, 'bush');
        bush29 = game.add.sprite(165, 500, 'bush');
        bush30 = game.add.sprite(220, 500, 'bush');
        bush31 = game.add.sprite(275, 500, 'bush');
        bush32 = game.add.sprite(330, 500, 'bush');
        bush33 = game.add.sprite(385, 500, 'bush');
        bush34 = game.add.sprite(440, 500, 'bush');
        bush35 = game.add.sprite(495, 500, 'bush');
        bush36 = game.add.sprite(550, 500, 'bush');
        bush37 = game.add.sprite(605, 500, 'bush');
        bush38 = game.add.sprite(660, 500, 'bush');
        bush39 = game.add.sprite(715, 500, 'bush');
        bush41 = game.add.sprite(770, 500, 'bush');
        bush42 = game.add.sprite(825, 500, 'bush');
        bush43 = game.add.sprite(880, 500, 'bush');
        bush44 = game.add.sprite(935, 500, 'bush');
        bush45 = game.add.sprite(990, 500, 'bush');
        bush46 = game.add.sprite(1045, 500, 'bush');
        bush47 = game.add.sprite(1100, 500, 'bush');
        bush48 = game.add.sprite(1155, 500, 'bush');
        bush49 = game.add.sprite(1210, 500, 'bush');
        bush50 = game.add.sprite(1265, 500, 'bush');
        bush51 = game.add.sprite(1320, 500, 'bush');
        bush52 = game.add.sprite(1375, 500, 'bush');
        bush53 = game.add.sprite(1430, 500, 'bush');
        bush54 = game.add.sprite(1485, 500, 'bush');

        bush55 = game.add.sprite(1485, 550, 'bush');
        bush56 = game.add.sprite(1485, 600, 'bush');
        bush57 = game.add.sprite(1485, 650, 'bush');
        bush58 = game.add.sprite(1485, 700, 'bush');
        bush59 = game.add.sprite(1485, 750, 'bush');
        bush60 = game.add.sprite(1485, 800, 'bush');
        bush61 = game.add.sprite(1485, 850, 'bush');
        //bush26 = game.add.sprite(1485, 830, 'bush');
        //bush26 = game.add.sprite(1485, 880, 'bush');
        //bush26 = game.add.sprite(1485, 930, 'bush');
        //bush26 = game.add.sprite(1485, 980, 'bush');
        //bush26 = game.add.sprite(1485, 1030, 'bush');
        bush62 = game.add.sprite(1450, 1130, 'bush');
        
        bush63 = game.add.sprite(1320, 530, 'bush');
        bush64 = game.add.sprite(1320, 580, 'bush');
        bush65 = game.add.sprite(1320, 630, 'bush');
        bush66 = game.add.sprite(1320, 680, 'bush');

        bush67 = game.add.sprite(1320, 880, 'bush');
        bush68 = game.add.sprite(1375, 880, 'bush');
        bush69 = game.add.sprite(1430, 880, 'bush');

        bush70 = game.add.sprite(1100, 780, 'bush');
        bush71 = game.add.sprite(1100, 830, 'bush');
        bush72 = game.add.sprite(1100, 880, 'bush');
        bush73 = game.add.sprite(1100, 930, 'bush');
        bush74 = game.add.sprite(1100, 980, 'bush');
        bush75 = game.add.sprite(1100, 1030, 'bush');
        bush76 = game.add.sprite(1100, 1080, 'bush');
        
        bush77 = game.add.sprite(385, 930, 'bush');
        bush78 = game.add.sprite(385, 980, 'bush');
        bush79 = game.add.sprite(385, 1030, 'bush');
        bush80 = game.add.sprite(385, 1080, 'bush');

        bush81 = game.add.sprite(440, 930, 'bush');
        bush82 = game.add.sprite(495, 930, 'bush');
        bush83 = game.add.sprite(550, 930, 'bush');
        bush84 = game.add.sprite(605, 930, 'bush');
        bush85 = game.add.sprite(660, 930, 'bush');
        bush86 = game.add.sprite(715, 930, 'bush');
        bush87 = game.add.sprite(770, 930, 'bush');
        bush88 = game.add.sprite(825, 930, 'bush');
        bush89 = game.add.sprite(880, 930, 'bush');

        bush90 = game.add.sprite(385, 1130, 'bush');
        bush91 = game.add.sprite(440, 1130, 'bush');
        bush92 = game.add.sprite(495, 1130, 'bush');
        bush93 = game.add.sprite(550, 1130, 'bush');
        bush94 = game.add.sprite(605, 1130, 'bush');
        bush95 = game.add.sprite(660, 1130, 'bush');
        bush96 = game.add.sprite(715, 1130, 'bush');
        bush97 = game.add.sprite(770, 1130, 'bush');
        bush98 = game.add.sprite(825, 1130, 'bush');
        bush99 = game.add.sprite(880, 1130, 'bush');
        bush100 = game.add.sprite(935, 1130, 'bush');
        bush101 = game.add.sprite(990, 1130, 'bush');
        bush102 = game.add.sprite(1045, 1130, 'bush');
        //
        bush103 = game.add.sprite(1100, 1130, 'bush');
        bush104 = game.add.sprite(1150, 1130, 'bush');
        bush105 = game.add.sprite(1200, 1130, 'bush');
        bush106 = game.add.sprite(1250, 1130, 'bush');
        bush107 = game.add.sprite(1300, 1130, 'bush');
        bush108 = game.add.sprite(1350, 1130, 'bush');
        bush109 = game.add.sprite(1400, 1130, 'bush');


        //bush27 = game.add.sprite(0, 580, 'bush');
        //bush28 = game.add.sprite(55, 580, 'bush');
        //bush29 = game.add.sprite(110, 580, 'bush');
        bush110 = game.add.sprite(165, 730, 'bush');
        bush111 = game.add.sprite(220, 730, 'bush');
        bush112 = game.add.sprite(275, 730, 'bush');
        bush113 = game.add.sprite(330, 730, 'bush');
        bush114 = game.add.sprite(385, 730, 'bush');
        bush115 = game.add.sprite(440, 730, 'bush');
        bush116 = game.add.sprite(495, 730, 'bush');
        bush117 = game.add.sprite(550, 730, 'bush');
        bush118 = game.add.sprite(605, 730, 'bush');
        bush120 = game.add.sprite(660, 730, 'bush');
        bush121= game.add.sprite(715, 730, 'bush');
        bush122 = game.add.sprite(770, 730, 'bush');
        bush123 = game.add.sprite(825, 730, 'bush');
        bush124 = game.add.sprite(880, 730, 'bush');
        bush125 = game.add.sprite(935, 730, 'bush');
        bush126 = game.add.sprite(990, 730, 'bush');
        bush127 = game.add.sprite(1045, 730, 'bush');
        
        bush128 = game.add.sprite(165, 930, 'bush');
        bush129 = game.add.sprite(165, 980, 'bush');
        bush130 = game.add.sprite(165, 1030, 'bush');
        bush131 = game.add.sprite(165, 1080, 'bush');
        bush132 = game.add.sprite(165, 1130, 'bush');
        bush133 = game.add.sprite(165, 1180, 'bush');
        bush134 = game.add.sprite(165, 1230, 'bush');
        bush135 = game.add.sprite(165, 1280, 'bush');
        bush136 = game.add.sprite(165, 1330, 'bush');

        //bush27 = game.add.sprite(0, 1080, 'bush');
        //bush28 = game.add.sprite(55, 1080, 'bush');
        //bush29 = game.add.sprite(110, 1080, 'bush');
        bush137 = game.add.sprite(165, 1380, 'bush');
        bush138 = game.add.sprite(220, 1380, 'bush');
        bush139 = game.add.sprite(275, 1380, 'bush');
        bush141 = game.add.sprite(330, 1380, 'bush');
        bush142 = game.add.sprite(385, 1380, 'bush');
        bush143 = game.add.sprite(440, 1380, 'bush');
        bush144 = game.add.sprite(495, 1380, 'bush');
        bush145 = game.add.sprite(550, 1380, 'bush');
        bush146 = game.add.sprite(605, 1380, 'bush');
        bush147 = game.add.sprite(660, 1380, 'bush');
        bush148 = game.add.sprite(715, 1380, 'bush');
        bush149 = game.add.sprite(770, 1380, 'bush');
        bush150 = game.add.sprite(825, 1380, 'bush');
        bush151 = game.add.sprite(880, 1380, 'bush');
        bush152 = game.add.sprite(935, 1380, 'bush');
        bush153 = game.add.sprite(990, 1380, 'bush');
        bush154 = game.add.sprite(1045, 1380, 'bush');
        bush155 = game.add.sprite(1100, 1380, 'bush');
        bush156 = game.add.sprite(1155, 1380, 'bush');
        bush157 = game.add.sprite(1210, 1380, 'bush');
        bush158 = game.add.sprite(1265, 1380, 'bush');
        bush159 = game.add.sprite(1320, 1380, 'bush');
        bush160 = game.add.sprite(1375, 1380, 'bush');
        bush161 = game.add.sprite(1430, 1380, 'bush');
        bush162 = game.add.sprite(1485, 1380, 'bush');

        otherdog = game.add.sprite(1380, 500, 'otherdog');
        otherdog.scale.setTo(0.3, 0.3);
        redcar = game.add.sprite(50,1300,'redcar');
        redcar.scale.setTo(1.4,1.4);
        

//Text  
        //textbox = game.add.sprite(game.world.centerX, game.world.centerY,'text');
        //textbox.fixedToCamara = true;
        //textbox.cameraOffset.setTo(200,550);
        //textbox.scale.setTo(1.5,0.7);
        style = {font: "20px Courier", fontWeight: 'bold', fill: "#000000", align: "left" };
        text = game.add.text(game.world.centerX, game.world.centerY, "It has been nearly a day since you last saw your owner.\nNot that they had shown any regret\nthey left you by the side of the road and drove off.\nIt had been that way your whole life...\njust the fear you lived in day after day until now.\nWhen you were all alone...\nFinding food was hard, but avoiding danger was harder.\nAnd that was your whole life now",style);
        text.fixedToCamera = true;
        text.cameraOffset.setTo(0,400);
        text2 = game.add.text(game.world.centerX, game.world.centerY,'You carefully approached what looked like a large house.\nSniffing around, you could smell the scent of another dog\nyou feet yourself droop...\nYou could not help but imagine the life another dog living here\nBeing fed well, and clean, and ...loved.', style);
        text2.fixedToCamera = true;
        text2.cameraOffset.setTo(0,470);
        text2.visible = false;
        text3 = game.add.text(game.world.centerX, game.world.centerY,'The other dog you stumbled upon was anything but welcoming.\nAfter getting as far away from the dog as you could\nyou started to let yourself relax.\nUntil...you felt a small itch on your leg.\nall at once. Fleas. But what were you to do?\nThere was no one to help...\nno one to clean you or get you any kind of treatment.\nWeakening, you limped off. ', style);
        text3.fixedToCamera = true;
        text3.cameraOffset.setTo(0,400);
        text3.visible = false;
        text4 = game.add.text(game.world.centerX, game.world.centerY,'How long were you out here?\neverything seems filled with traps that you hide from.\nThe nights were worse, the dangers becoming more prominent.\nNot to mention you had no idea where you were...\nwhere you were going...or even what you were doing...\nWas there something you were hoping for?\nso you just passed the time with the only thing you could do:\nSurvive...', style);
        text4.fixedToCamera = true;
        text4.cameraOffset.setTo(0,400);
        text4.visible = false;
        text5 = game.add.text(game.world.centerX, game.world.centerY,'You look for food - nothing there....', style);
        text5.fixedToCamera = true;
        text5.cameraOffset.setTo(0,400);
        text5.visible = false;
        text6 = game.add.text(game.world.centerX, game.world.centerY,'You could not believe the person picked you up and ...pet you?\nNo hitting, kicking, or even yelling.\nInstead, you felt the care they had for you, a new emotion.\nClosing your eyes, you leaned against them, tired, but happy.', style);
        text6.fixedToCamera = true;
        text6.cameraOffset.setTo(0,490);
        text6.visible = false; 



//Obstacle Settings
        game.physics.enable([playerdown,house1,tree1,bush1,bush2,bush3,bush4,bush5, bush6, bush7, bush8, bush9, bush10, bush11, bush12, bush13, bush14, bush15, bush15p5,bush16,bush17,bush18,bush19, bush20, bush21, bush22, bush23, bush24, bush25,bush26,bush27,bush28,bush29,bush30,bush31,bush32,bush33,bush34,bush35,bush36,bush37,bush38,bush39,bush41,bush42,bush43,bush44,bush45,bush46,bush47,bush48,bush49,bush50,bush51,bush52,bush53,bush54,bush55,bush56,bush57,bush58,bush59,bush60,bush61,bush62,bush63,bush64,bush65,bush66,bush67,bush68,bush69,bush67,bush68,bush69,bush70,bush71,bush72,bush73,bush74,bush75,bush76,bush77,bush78,bush79,bush80,bush81,bush82,bush83,bush84,bush85,bush86,bush87,bush88,bush89,bush90,bush91,bush92,bush93,bush94,bush95,bush96,bush97,bush98,bush99,bush100,bush101,bush102,bush103,bush104,bush105,bush106,bush107,bush108,bush109,bush110,bush111,bush112,bush113,bush114,bush115,bush116,bush117,bush118,bush120,bush121,bush122,bush123,bush124,bush125,bush126,bush127,bush128,bush129,bush130,bush131,bush132,bush133,bush134,bush135,bush136,bush137,bush138,bush139,bush141,bush142,bush143,bush144,bush145,bush146,bush147,bush148,bush149,bush150,bush151,bush152,bush153,bush154,bush155,bush156,bush157,bush158,bush159,bush160,bush161,bush162,otherdog,redcar], Phaser.Physics.ARCADE);
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
        bush15p5.body.immovable = true;
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
        bush41.body.immovable = true;
        bush42.body.immovable = true;
        bush43.body.immovable = true;
        bush44.body.immovable = true;
        bush45.body.immovable = true;
        bush46.body.immovable = true;
        bush47.body.immovable = true;
        bush48.body.immovable = true;
        bush49.body.immovable = true;
        bush50.body.immovable = true;
        bush51.body.immovable = true;
        bush52.body.immovable = true;
        bush53.body.immovable = true;
        bush54.body.immovable = true;
        bush55.body.immovable = true;
        bush56.body.immovable = true;
        bush57.body.immovable = true;
        bush58.body.immovable = true;
        bush59.body.immovable = true;
        bush60.body.immovable = true;
        bush61.body.immovable = true;
        bush62.body.immovable = true;
        bush63.body.immovable = true;
        bush64.body.immovable = true;
        bush65.body.immovable = true;
        bush66.body.immovable = true;
        bush67.body.immovable = true;
        bush68.body.immovable = true;
        bush69.body.immovable = true;
        bush70.body.immovable = true;
        bush71.body.immovable = true;
        bush72.body.immovable = true;
        bush73.body.immovable = true;
        bush74.body.immovable = true;
        bush75.body.immovable = true;
        bush76.body.immovable = true;
        bush77.body.immovable = true;
        bush78.body.immovable = true;
        bush79.body.immovable = true;
        bush80.body.immovable = true;
        bush81.body.immovable = true;
        bush82.body.immovable = true;
        bush83.body.immovable = true;
        bush84.body.immovable = true;
        bush85.body.immovable = true;
        bush86.body.immovable = true;
        bush87.body.immovable = true;
        bush88.body.immovable = true;
        bush89.body.immovable = true;
        bush90.body.immovable = true;
        bush91.body.immovable = true;
        bush92.body.immovable = true;
        bush93.body.immovable = true;
        bush94.body.immovable = true;
        bush95.body.immovable = true;
        bush96.body.immovable = true;
        bush97.body.immovable = true;
        bush98.body.immovable = true;
        bush99.body.immovable = true;
        bush100.body.immovable = true;
        bush101.body.immovable = true;
        bush102.body.immovable = true;
        bush103.body.immovable = true;
        bush104.body.immovable = true;
        bush105.body.immovable = true;
        bush106.body.immovable = true;
        bush107.body.immovable = true;
        bush108.body.immovable = true;
        bush109.body.immovable = true;
        bush110.body.immovable = true;
        bush111.body.immovable = true;
        bush112.body.immovable = true;
        bush113.body.immovable = true;
        bush114.body.immovable = true;
        bush115.body.immovable = true;
        bush116.body.immovable = true;
        bush117.body.immovable = true;
        bush118.body.immovable = true;
        bush120.body.immovable = true;
        bush121.body.immovable = true;
        bush122.body.immovable = true;
        bush123.body.immovable = true;
        bush124.body.immovable = true;
        bush125.body.immovable = true;
        bush126.body.immovable = true;
        bush127.body.immovable = true;
        bush128.body.immovable = true;
        bush129.body.immovable = true;
        bush130.body.immovable = true;
        bush131.body.immovable = true;
        bush132.body.immovable = true;
        bush133.body.immovable = true;
        bush134.body.immovable = true;
        bush135.body.immovable = true;
        bush136.body.immovable = true;
        bush137.body.immovable = true;
        bush138.body.immovable = true;
        bush139.body.immovable = true;
        bush141.body.immovable = true;
        bush142.body.immovable = true;
        bush143.body.immovable = true;
        bush144.body.immovable = true;
        bush145.body.immovable = true;
        bush146.body.immovable = true;
        bush147.body.immovable = true;
        bush148.body.immovable = true;
        bush149.body.immovable = true;
        bush150.body.immovable = true;
        bush151.body.immovable = true;
        bush152.body.immovable = true;
        bush153.body.immovable = true;
        bush154.body.immovable = true;
        bush155.body.immovable = true;
        bush156.body.immovable = true;
        bush157.body.immovable = true;
        bush158.body.immovable = true;
        bush159.body.immovable = true;
        bush160.body.immovable = true;
        bush161.body.immovable = true;
        bush162.body.immovable = true;
        otherdog.body.immovable = true;
        redcar.body.immovable = true;

    },

    update: function() {
    game.physics.arcade.collide(playerdown,bush1);
    game.physics.arcade.collide(playerdown,bush2);
    game.physics.arcade.collide(playerdown,bush3);
    game.physics.arcade.collide(playerdown,bush4);
    game.physics.arcade.collide(playerdown,bush5);
    game.physics.arcade.collide(playerdown,bush6);
    game.physics.arcade.collide(playerdown, bush7);
    game.physics.arcade.collide(playerdown, bush8);
    game.physics.arcade.collide(playerdown, bush9);
    game.physics.arcade.collide(playerdown, bush10);
    game.physics.arcade.collide(playerdown, bush11);
    game.physics.arcade.collide(playerdown, bush12);
    game.physics.arcade.collide(playerdown, bush13);
    game.physics.arcade.collide(playerdown, bush14);
    game.physics.arcade.collide(playerdown, bush15);
    game.physics.arcade.collide(playerdown, bush15p5);
    game.physics.arcade.collide(playerdown, bush16);
    game.physics.arcade.collide(playerdown, bush17);
    game.physics.arcade.collide(playerdown, bush18);
    game.physics.arcade.collide(playerdown, bush19);
    game.physics.arcade.collide(playerdown, bush20);
    game.physics.arcade.collide(playerdown, bush21);
    game.physics.arcade.collide(playerdown, bush22);
    game.physics.arcade.collide(playerdown, bush23);
    game.physics.arcade.collide(playerdown, bush24);
    game.physics.arcade.collide(playerdown, bush25);
    game.physics.arcade.collide(playerdown, bush26);
    game.physics.arcade.collide(playerdown, bush27);
    game.physics.arcade.collide(playerdown, bush28);
    game.physics.arcade.collide(playerdown, bush29);
    game.physics.arcade.collide(playerdown, bush30);
    game.physics.arcade.collide(playerdown, bush31);
    game.physics.arcade.collide(playerdown, bush32);
    game.physics.arcade.collide(playerdown, bush33);
    game.physics.arcade.collide(playerdown, bush34);
    game.physics.arcade.collide(playerdown, bush35);
    game.physics.arcade.collide(playerdown, bush36);
    game.physics.arcade.collide(playerdown, bush37);
    game.physics.arcade.collide(playerdown, bush38);
    game.physics.arcade.collide(playerdown, bush39);
    game.physics.arcade.collide(playerdown, bush41);
    game.physics.arcade.collide(playerdown, bush42);
    game.physics.arcade.collide(playerdown, bush43);
    game.physics.arcade.collide(playerdown, bush44);
    game.physics.arcade.collide(playerdown, bush45);
    game.physics.arcade.collide(playerdown, bush46);
    game.physics.arcade.collide(playerdown, bush47);
    game.physics.arcade.collide(playerdown, bush48);
    game.physics.arcade.collide(playerdown, bush49);
    game.physics.arcade.collide(playerdown, bush50);
    game.physics.arcade.collide(playerdown, bush51);
    game.physics.arcade.collide(playerdown, bush52);
    game.physics.arcade.collide(playerdown, bush53);
    game.physics.arcade.collide(playerdown, bush54);
    game.physics.arcade.collide(playerdown, bush55);
    game.physics.arcade.collide(playerdown, bush56);
    game.physics.arcade.collide(playerdown, bush57);
    game.physics.arcade.collide(playerdown, bush58);
    game.physics.arcade.collide(playerdown, bush59);
    game.physics.arcade.collide(playerdown, bush60);
    game.physics.arcade.collide(playerdown, bush61);
    game.physics.arcade.collide(playerdown, bush62);
    game.physics.arcade.collide(playerdown, bush63);
    game.physics.arcade.collide(playerdown, bush64);
    game.physics.arcade.collide(playerdown, bush65);
    game.physics.arcade.collide(playerdown, bush66);
    game.physics.arcade.collide(playerdown, bush67);
    game.physics.arcade.collide(playerdown, bush68);
    game.physics.arcade.collide(playerdown, bush69);
    game.physics.arcade.collide(playerdown, bush70);
    game.physics.arcade.collide(playerdown, bush71);
    game.physics.arcade.collide(playerdown, bush72);
    game.physics.arcade.collide(playerdown, bush73);
    game.physics.arcade.collide(playerdown, bush74);
    game.physics.arcade.collide(playerdown, bush75);
    game.physics.arcade.collide(playerdown, bush76);
    game.physics.arcade.collide(playerdown, bush77);
    game.physics.arcade.collide(playerdown, bush78);
    game.physics.arcade.collide(playerdown, bush79);
    game.physics.arcade.collide(playerdown, bush80);
    game.physics.arcade.collide(playerdown, bush81);
    game.physics.arcade.collide(playerdown, bush82);
    game.physics.arcade.collide(playerdown, bush83);
    game.physics.arcade.collide(playerdown, bush84);
    game.physics.arcade.collide(playerdown, bush85);
    game.physics.arcade.collide(playerdown, bush86);
    game.physics.arcade.collide(playerdown, bush87);
    game.physics.arcade.collide(playerdown, bush88);
    game.physics.arcade.collide(playerdown, bush89);
    game.physics.arcade.collide(playerdown, bush90);
    game.physics.arcade.collide(playerdown, bush91);
    game.physics.arcade.collide(playerdown, bush92);
    game.physics.arcade.collide(playerdown, bush93);
    game.physics.arcade.collide(playerdown, bush94);
    game.physics.arcade.collide(playerdown, bush95);
    game.physics.arcade.collide(playerdown, bush96);
    game.physics.arcade.collide(playerdown, bush97);
    game.physics.arcade.collide(playerdown, bush98);
    game.physics.arcade.collide(playerdown, bush99);
    game.physics.arcade.collide(playerdown, bush100);
    game.physics.arcade.collide(playerdown, bush101);
    game.physics.arcade.collide(playerdown, bush102);
    game.physics.arcade.collide(playerdown, bush103);
    game.physics.arcade.collide(playerdown, bush104);
    game.physics.arcade.collide(playerdown, bush105);
    game.physics.arcade.collide(playerdown, bush106);
    game.physics.arcade.collide(playerdown, bush107);
    game.physics.arcade.collide(playerdown, bush108);
    game.physics.arcade.collide(playerdown, bush109);
    game.physics.arcade.collide(playerdown, bush110);
    game.physics.arcade.collide(playerdown, bush111);
    game.physics.arcade.collide(playerdown, bush112);
    game.physics.arcade.collide(playerdown, bush113);
    game.physics.arcade.collide(playerdown, bush114);
    game.physics.arcade.collide(playerdown, bush115);
    game.physics.arcade.collide(playerdown, bush116);
    game.physics.arcade.collide(playerdown, bush117);
    game.physics.arcade.collide(playerdown, bush118);
    game.physics.arcade.collide(playerdown, bush120);
    game.physics.arcade.collide(playerdown, bush121);
    game.physics.arcade.collide(playerdown, bush122);
    game.physics.arcade.collide(playerdown, bush123);
    game.physics.arcade.collide(playerdown, bush124);
    game.physics.arcade.collide(playerdown, bush125);
    game.physics.arcade.collide(playerdown, bush126);
    game.physics.arcade.collide(playerdown, bush127);
    game.physics.arcade.collide(playerdown, bush128);
    game.physics.arcade.collide(playerdown, bush129);
    game.physics.arcade.collide(playerdown, bush130);
    game.physics.arcade.collide(playerdown, bush131);
    game.physics.arcade.collide(playerdown, bush132);
    game.physics.arcade.collide(playerdown, bush133);
    game.physics.arcade.collide(playerdown, bush134);
    game.physics.arcade.collide(playerdown, bush135);
    game.physics.arcade.collide(playerdown, bush136);
    game.physics.arcade.collide(playerdown, bush137);
    game.physics.arcade.collide(playerdown, bush138);
    game.physics.arcade.collide(playerdown, bush139);
    game.physics.arcade.collide(playerdown, bush141);
    game.physics.arcade.collide(playerdown, bush142);
    game.physics.arcade.collide(playerdown, bush143);
    game.physics.arcade.collide(playerdown, bush144);
    game.physics.arcade.collide(playerdown, bush145);
    game.physics.arcade.collide(playerdown, bush146);
    game.physics.arcade.collide(playerdown, bush147);
    game.physics.arcade.collide(playerdown, bush148);
    game.physics.arcade.collide(playerdown, bush149);
    game.physics.arcade.collide(playerdown, bush150);
    game.physics.arcade.collide(playerdown, bush151);
    game.physics.arcade.collide(playerdown, bush152);
    game.physics.arcade.collide(playerdown, bush153);
    game.physics.arcade.collide(playerdown, bush154);
    game.physics.arcade.collide(playerdown, bush155);
    game.physics.arcade.collide(playerdown, bush156);
    game.physics.arcade.collide(playerdown, bush157);
    game.physics.arcade.collide(playerdown, bush158);
    game.physics.arcade.collide(playerdown, bush159);
    game.physics.arcade.collide(playerdown, bush160);
    game.physics.arcade.collide(playerdown, bush161);
    game.physics.arcade.collide(playerdown, bush162);

    if (game.physics.arcade.collide(playerdown,house1)){
        text.visible =false;
        text3.visible = false;
        text4.visible = false;
        text5.visible = false;
        text6.visible = false;
        text2.visible = true;
        
    }

     else if (game.physics.arcade.collide(playerdown,tree1)){
        text3.visible = false;
        text6.visible = false;
        text5.visible = false;
        text2.visible = false;
        text.visible = false;
        text4.visible = true;
    }

    else if (game.physics.arcade.collide(playerdown,otherdog)){
        text2.visible = false;
        text.visible = false;
        text4.visible = false;
        text5.visible = false;
        text6.visible = false;
        text3.visible = true;
    }


    else if (game.physics.arcade.collide(playerdown,redcar)){
        text4.visible = false;
        text.visible = false;
        text2.visible = false;
        text5.visible = false;
        text3.visible = false;
        text6.visible = true;

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
