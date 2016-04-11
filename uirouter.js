(function() {
	'use strict';

	angular
	    .module('myApp',['ui.router'])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/app/child');  
            $stateProvider
                .state('app', {
                url:'/app',
                templateUrl:'pages/header.tpl.html'     
            }).state('app.child', {
            url:'/child',
            templateUrl:'pages/child.html'
            }).state('app.boxone',{
            url:'/boxone',
            templateUrl:'pages/boxone.html'
            }).state('app.boxtwo',{
            url:'/boxtwo',
            templateUrl:'pages/boxtwo.html'
            });
       
        });
})(); 

