define(['keyboardConstants'], function(KeyboardConst){
	function Controller () {
		var gameDiv = document.getElementById('gameDiv');

		this.left   = 0;
		this.right  = 0;
		this.up     = 0;
		this.down   = 0;
		this.jump   = false;

		this.addKeyboardListeners();
	}

	Controller.prototype.onKeyDown = function(pEvent) {
		switch(pEvent.keyCode) {
			case KeyboardConst.LEFT : this.left = 1;
				break;
			case KeyboardConst.UP : this.up = 1;
				break;
			case KeyboardConst.RIGHT : this.right = 1;
				break;
			case KeyboardConst.DOWN : this.down = 1;
				break;
			case KeyboardConst.SPACE : this.jump = true;
				break;
		}
	}

	Controller.prototype.onKeyUp = function(pEvent) {
		switch(pEvent.keyCode) {
			case KeyboardConst.LEFT : this.left = 0;
				break;
			case KeyboardConst.UP : this.up = 0;
				break;
			case KeyboardConst.RIGHT : this.right = 0;
				break;
			case KeyboardConst.DOWN : this.down = 0;
				break;
			case KeyboardConst.SPACE : this.jump = false;
				break;
		}
	}

	//Add the Keyboard Listeners
	Controller.prototype.addKeyboardListeners = function() {
		var that = this;

		this.eventListenerKeyDown = document.addEventListener('keydown', function(pEvent) {
			that.onKeyDown(pEvent);
		});

		this.eventListenerKeyUp = document.addEventListener('keyup', function(pEvent) {
			that.onKeyUp(pEvent);
		});
	}

	Controller.prototype.removeKeyboardListeners = function() {

	}

	return Controller;
})