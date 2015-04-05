define([], function() {
	function Platform (pParams) {
		var params = pParams || {};
		this.x = params.x || 0;
		this.y = params.y || 0;
		this.platformType = params.platformType || 'platform_test';

		this.game = params.game || {};
		var game = this.game;

		this.sprite = this.game.add.sprite(this.x, this.y, this.platformType)
	}

	Platform.prototype.setPosition = function(x, y) {
		if(!typeof x === "number" || !typeof y === number) {
			console.log('Not a number');
			return;
		} 

	}

	return Platform;
});