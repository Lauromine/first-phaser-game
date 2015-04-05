require(['sprites/player', 'sprites/platform', 'game'], function(Player, Platform, game){

	//Parent div of the game
	var gameDiv = document.createElement("div");
	gameDiv.id = 'gameDiv';
	document.body.appendChild(gameDiv);

	var player;

	//Boot State
	var boot = function() {}

	boot.prototype = {
		preload : function() {
			game.load.image('loadingBar', 'assets/loading/loadingbar.png');
		},
		create : function() {
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
			game.state.start('preload');
			
		},
		update : function() {

		}
	}

	//Preload state
	var preload = function(game) {}

	preload.prototype = {
		preload: function() {
			//Adding the loading bar
			var loadingBar = game.add.sprite(game.world.centerX, game.world.centerY,'loadingBar');
			loadingBar.anchor.set(0.5);
			game.load.setPreloadSprite(loadingBar);
			var textStyle = {font : "36px Arial", fill : "#fff"};
			var text  = game.add.text(game.world.centerX, game.world.centerY-100, "Loading", textStyle);
			text.anchor.set(0.5);

			//Images loadings
			game.load.image('player', 'assets/sprites/player/player_idle.png');
			game.load.image('platform_test', 'assets/sprites/platforms/platform_test.png');
			game.load.image('sky', 'assets/background/background.png');
		},
		create : function() {
			game.state.start('titlecard');
		}
	}
	
	//TitleCard State
	var titlecardState = function(game) {}

	titlecardState.prototype = {
		preload : function() {
			
		},
		create : function() {
			var titleTextStyle = {font : "36px Arial", fill : "#fff"};
			var titleText = game.add.text(game.world.centerX, game.world.centerY, "TitleCard", titleTextStyle);
			
			game.add.button(200 , 200, 'loadingBar', this.loadCoreGame, this);
		},
		loadCoreGame : function () {
			game.state.start('coreGame');
		}
	}

	//TitleCard State
	var coreGame = function(game) {}

	coreGame.prototype = {
		preload : function() {
			
		},
		create : function() {
			game.world.setBounds(0, 0, 4000, 1920);
			var sky = game.add.sprite(0, 0, 'sky');
			sky.z = 0;

			game.physics.startSystem(Phaser.Physics.ARCADE);
			player = new Player();
			game.gameObjects.hasDoAction.push(player);
			player.setPhysics();

			game.camera.follow(player.sprite);

			var platform = new Platform({
				group : game.gameObjects.groups.platforms,
				x : 0,
				y : game.world.height - 64
			});
			platform.sprite.scale.set = (7, 1);
			Platform.enablePhysicsOnGroup();
			

		},
		update : function() {
			game.physics.arcade.collide(player.sprite, game.gameObjects.groups.platforms);

			for (var i = game.gameObjects.hasDoAction.length-1; i >= 0; i--) {
				game.gameObjects.hasDoAction[i].doAction();
			}
			
		}
	}


	//Adding states to the game
	game.state.add("boot", boot);
	game.state.add("preload", preload);
	game.state.add("titlecard", titlecardState);
	game.state.add("coreGame", coreGame);

	game.state.start('boot');
});