var game = new Phaser.Game(800,600,Phaser.CANVAS,'game.Div')
var mainState = {
    preload: function() {
        this.load.image('background', 'https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0424/5908/1431605648965_drop_preview.png');
      
    },

    create: function() {
    	this.background = this.game.add.sprite(0, 0, 'background');
        
        
    },

    update: function() {

    },

    render: function() {

    }
}

game.state.add("mainState",mainState);
game.state.start("mainState");
