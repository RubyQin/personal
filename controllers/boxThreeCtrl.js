(function(){
	'use strict';

	angular
        .module('myApp')
        .controller('boxThreeCtrl',boxThreeCtrl);

    function boxThreeCtrl(movieService,$scope){
    	
    	$scope.show = false;
    	$scope.data = [];
    	var promise = new Promise(function(resolve, reject){
    		movieService.getData(resolve, reject);
    	});

    	promise.then(function(response){
    		$scope.data = response.data;
    		$scope.$apply();
    	}).catch(function(error){
			console.log('can not get data');
    	});

    	// movieService.getData().then(function successCallback(response){
				// $scope.data = response;
			// },function errorCallback(response){
				// console.log('can not get data');
			// });
    	

    	$scope.showTheaterDiv = function(){
    		$scope.show = true;
    	}

    	$scope.showtime = false;
    }
})();