telcomApp.factory("telcomInterceptor", ["$q", "$location","$window","$rootScope",
function($q, $location,$window,$rootScope) {
	var interceptor = {
		'request' : function(config) {
            return config;
		},
		'response' : function(response) {
			return response;
		},
		'requestError' : function(responseError) {

			return responseError;
		},
		'responseError' : function(rejection) {

			return rejection;
		}
	};
	return interceptor;
}]);


