'use strict';
var telcomApp = angular.module("telcomApp", ["ngRoute", "ngSanitize", "ui.bootstrap", "ui.select"]);

telcomApp.config(['$routeProvider', function ($routeProvider) {
   $routeProvider  
		// .when('/', {
		// 	// template:'this is index!',
		// })
       .when('/', {
           templateUrl : "apps/telcom/content.html",
           controller : "contentController"
       })
       .when('/demo', {
           templateUrl : "apps/telcom/demo.html",
           controller : "demoController"
       })
       .when('/hehe', {
           templateUrl : "apps/telcom/hehe.html",
           controller : "heheController"
       })
       .when('/printers',{template:'this is printer page!'})
		.otherwise({
		   redirectTo: '/' 
		});
}]);

telcomApp.directive("shenDirective",function(){

    return {
        restrict: 'E',
        template:"<h1>this is my test 中国</h1>"
    }
})



//angular 1.6 url bug solution
telcomApp.config(['$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
}]);

telcomApp.config(['$httpProvider',function($httpProvider) {
	$httpProvider.interceptors.push('telcomInterceptor');
}]);