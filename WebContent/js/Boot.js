GameName = {};
GameName.Boot = function(game){
	Phaser.State.call(this);
};
/** @type Phaser.State */
var proto = Object.create(Phaser.State);
GameName.Boot.prototype = proto;

GameName.Boot.prototype = {
	preload: function(){

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);
        this.stage.backgroundColor = '#B4D9E7';
	},
	create: function(){
		this.state.start("Loader");
	},
	update: function(){}
};