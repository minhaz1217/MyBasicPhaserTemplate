GameName.Menu = function(game){};
/** @type Phaser.State */
var proto = Object.create(Phaser.State);
GameName.Menu.prototype = proto;

GameName.Menu.prototype = {
	preload: function(){
		
	},
	create: function(){
		
	},
	update: function(){
		this.state.start("Game");
	}
};