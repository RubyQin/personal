(function(){
	'use strict';

	angular
	    .module('myApp')
	    .factory('movieService',movieService);

	function movieService($http){
		var service = {getData:getData};
		return service;

		function getData(resolve, reject){

            $http({
				method:'GET',
				url:'http://showtime-dev.us-west-1.elasticbeanstalk.com/ping'
			}).then(function(data){
				resolve(data);
			},function(error){
				reject(error);
			})
		}
	}
})();