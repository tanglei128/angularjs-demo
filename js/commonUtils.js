telcomApp.factory("telcomUtils", [
function() {

	function isEmpty(value) {
		return isUndefined(value) || value === '' || value === null || value !== value;
	}

	function isUndefined(value) {
		return typeof value === 'undefined';
	}

	var utils = {
		isEmpty : isEmpty
	};
	return utils;

}]);
