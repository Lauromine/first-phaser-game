define([], function() {
	var game = new Phaser.Game(1600, 900, Phaser.AUTO, 'gameDiv');

	//Array containing all gameObjects
	game.gameObjects = {};
	game.gameObjects.hasDoAction = [];
	game.gameObjects.groups = {};
	return game;
});