define(['controller'],function(Controller){

	function Player (pParams) {
		var params = pParams || {};
		var game = params.game || {};

		this.x = params.x || 0;
		this.y = params.y || 0;

		this.sprite = game.add.sprite(this.x, this.y, 'player');

		this.inventory = {};

		this.speed = {
			x : 100,
			y : 100,
			jump : -300
		}

		this.setModeNormal();

		this.controller = new Controller();

		//Controls related
		this.hasJumped = false;
	}

	Player.prototype.setPhysics = function() {
		var sprite = this.sprite;
		var game   = sprite.game;
		game.physics.p2.enable(sprite);

		sprite.body.gravity.y = 300;
		sprite.body.collideWorldBounds = true;
		sprite.body.bounce.y = 0.2;
	}

	Player.prototype.doAction = function() {};

	Player.prototype.doActionNormal = function () {
		this.doControls();
	}

	Player.prototype.setModeNormal = function () {
		this.doAction = this.doActionNormal;
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