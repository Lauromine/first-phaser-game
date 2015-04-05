define(['game','controller', 'add_do_action_capabilities'],function(game, Controller, addDoActionCapabilities){

	function Player (pParams) {
		var params = pParams || {};
		var initX  = params.x || 0;
		var initY  = params.y || 0;

		this.sprite = game.add.sprite(initX, initY, 'player');
		this.spritetest = game.add.sprite(0, 0, 'loadingBar');
		
		this.sprite.addChild(this.spritetest);

		this.inventory = {};

		this.speed = {
			x : 800,
			y : 800,
			jump : -500
		}

		//Adds basic doActionMethods
		//addDoActionCapabilities(this);
		this.setModeNormal();

		this.controller = new Controller();
		//Controls related
		this.hasJumped = false;

		game.gameObjects.hasDoAction.push(this);
	}

	Player.prototype.setPhysics = function() {
		var sprite = this.sprite;
		game.physics.arcade.enable(sprite);

		sprite.body.gravity.y = 500;
		sprite.body.collideWorldBounds = true;
		sprite.body.bounce.y = 0.2;
	}

	Player.prototype.doAction = function () {
		
	}

	Player.prototype.setModeNormal = function () {
		this.doAction = this.doActionNormal;
	}

	Player.prototype.doActionNormal = function () {
		this.doControls();
	}

	Player.prototype.doControls = function () {
		var controller = this.controller;
		var playerBody = this.sprite.body;


		//LEFT && RIGHT
		if(controller.left > 0) {
			playerBody.velocity.x = -this.speed.x * controller.left;
		}
		else if (controller.right > 0) playerBody.velocity.x =  this.speed.x * controller.right;

		if (controller.right === 0 && controller.left === 0) playerBody.velocity.x = 0;

		//JUMP
		if (controller.jump && !this.hasJumped) {
			playerBody.velocity.y = this.speed.jump;
		}
		this.hasJumped = controller.jump;
	}

	return Player;
})