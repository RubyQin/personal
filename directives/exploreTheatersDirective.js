(function(){
	'use strict';

	angular
	    .module('myApp')
	    .directive('exploreTheaters',exploreTheaters);

	function exploreTheaters(){
		return{
			restrict:'E',
			scope:{
				showDiv:'=',
			    movieData:'='},
		    templateUrl:'directives/exploreTheaters.html'
		}
	}
})();