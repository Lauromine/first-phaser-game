require(['player'], function(Player){

	//Parent div of the game
	var gameDiv = document.createElement("div");
	gameDiv.id = 'gameDiv';
	document.body.appendChild(gameDiv);

	var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');
	var player;


	//Boot State
	var boot = function() {}

	boot.prototype = {
		preload : function() {
			game.load.image('loadingBar', 'assets/loading/loadingbar.png');
		},
		create : function() {
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

			game.load.image('player', 'assets/sprites/player/player_idle.png');
		},
		create : function() {
			game.state.start('titlecard');
		}
	}
	
	//TitleCard State
	var titlecard = function(game) {}

	titlecard.prototype = {
		preload : function() {
			
		},
		create : function() {
			game.add.button(200 , 200, 'loadingBar')
		}
	}

	//TitleCard State
	var coreGame = function(game) {}

	coreGame.prototype = {
		preload : function() {
			
		},
		create : function() {

		}
	}


	//Adding states to the game
	game.state.add("boot", boot);
	game.state.add("preload", preload);
	game.state.add("titlecard", titlecard);
	game.state.add("coreGame", coreGame);

	game.state.start('boot');

	function create() {
		//game.world.setBounds
		game.physics.startSystem(Phaser.Physics.P2JS);
		player = new Player({
			game : game
		});

		player.setPhysics();
	}

	function update() {
		player.doAction();
	}


});