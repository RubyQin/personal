(function(){
	'use strict';
    
    angular
        .module('myApp')
        .controller('boxOneCtrl',boxOneCtrl);

    function boxOneCtrl(resumeService){
        var vm = this;
        vm.showresume = false;
        vm.showresumediv = function(){
        	return vm.showresume = true;
        }

        vm.data = resumeService;
        vm.selected = vm.data.images[0].img;

        vm.showoneresume = function(index){
        	vm.selected = vm.data.images[index].img;
        }

    }

})();