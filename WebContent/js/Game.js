GameName.Game = function(game){};
/** @type Phaser.State */
var proto = Object.create(Phaser.State);
GameName.Game.prototype = proto;

GameName.Game.prototype = {
	preload: function(){
		
	},
	create: function(){
		
	},
	update: function(){
		this.state.start("End");
	}
};