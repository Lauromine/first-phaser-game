define([], function() {
	function addDoActionCapabilites (object) {
		console.log(object.prototype);

		object.prototype.doAction = function () {
			console.log(this);
		}

		object.prototype.doActionNormal = function () {

		}

		object.prototype.setModeNormal = function () {
			object.doAction = object.doActionNormal;
		}
	}

	

	return addDoActionCapabilites;
});