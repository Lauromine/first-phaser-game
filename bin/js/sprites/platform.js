define(['game'], function(game) {
	

	function Platform (pParams) {
		var params = pParams || {};
		this.x = params.x || 0;
		this.y = params.y || 0;
		this.platformType = params.platformType || 'platform_test';

		this.sprite = game.add.sprite(this.x, this.y, this.platformType);

		this.constructor.getGroup().add(this.sprite);
	}

	Platform.prototype.setPosition = function(x, y) {
		if(!typeof x === "number" || !typeof y === number) {
			console.log('Not a number');
			return;
		} 

	}

	Platform.getGroup = function() {
		if(game.gameObjects.groups.platforms === undefined || game.gameObjects.groups.platforms === null) {
			game.gameObjects.groups.platforms = game.add.group();
		}
		return game.gameObjects.groups.platforms;
	}

	Platform.enablePhysicsOnGroup = function() {
		this.getGroup().forEach(function(platform){
			game.physics.arcade.enable(platform);
			//platform.body.gravity.y = 30;
			platform.body.immovable = true;
		});
	}
	return Platform;
});