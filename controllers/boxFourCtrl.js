(function(){
    'use strict';
    
    angular
        .module('myApp')
        .controller('boxFourCtrl',boxFourCtrl);
    
    function boxFourCtrl($http){
        var vm = this;
        vm.mname = 'Angry Birds';
        vm.showSecondDiv = false;
        vm.movieData = [];
        //8a22a32ba4b56e48d0fbd671bfe7c11f
        //https://api.themoviedb.org/3/movie/550?api_key=8a22a32ba4b56e48d0fbd671bfe7c11f
        vm.showResult = function(){
            vm.showSecondDiv = true;
            var base = 'http://api.themoviedb.org/3/',
                mode = 'search/movie?query=',
                key = '&api_key=8a22a32ba4b56e48d0fbd671bfe7c11f',
                //callback = '&callback = JSON_CALLBACK',
                url = base + mode + vm.mname + key;
            $http.get(url).then(function(response){
                console.log(response);
                vm.movieData = response.data.results;
                console.log(JSON.stringify(vm.movieData));
            },function(response){
                alert('bad request');
            });
        }   
    }
})();