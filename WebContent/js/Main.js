window.onload = function() {
	// Create your Phaser game and inject it into an auto-created canvas.
	// We did it in a window.onload event, but you can do it anywhere (requireJS
	// load, anonymous function, jQuery dom ready, - whatever floats your boat)
	var gameWidth = 800;
	var gameHeight = 600;
	var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO);
	game.state.add("Boot", GameName.Boot);
	game.state.add("Loader", GameName.Loader);
	game.state.add("Menu", GameName.Menu);
	game.state.add("Game", GameName.Game);
	game.state.add("End", GameName.End);
	
	game.state.start("Boot");
};
