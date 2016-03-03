GameName.Loader = function(game){};
/** @type Phaser.State */
var proto = Object.create(Phaser.State);
GameName.Loader.prototype = proto;

GameName.Loader.prototype = {
	preload: function(){
	},
	create: function(){
		this.state.start("Menu");
	},
	update: function(){		
	}
};