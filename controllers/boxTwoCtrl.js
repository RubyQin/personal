(function(){
	'use strict';

	angular
	    .module('myApp')
	    .controller('boxtwoCtrl',boxtwoCtrl);
 
    function boxtwoCtrl(Xmen){
    	var vm = this;
    	vm.showXmen = false; 
    	vm.showXMENFun = function(){
    		return vm.showXmen = true;
    	}

		vm.data = Xmen;
		vm.result = [];
		//vm.selection = {};

        
        //vm.selection = vm.data.cast[0]; 

    }
})();