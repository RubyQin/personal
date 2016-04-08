(function() {
	'use strict';

	angular
	    .module('myApp',['ui.router'])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/app/child1');  
            $stateProvider
                .state('app', {
                url:'/app',
                templateUrl:'pages/header.tpl.html'     
            }).state('app.child', {
            url:'/child1',
            templateUrl:'pages/child.html'
        });
       
    });
})(); 

