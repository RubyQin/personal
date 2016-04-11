(function(){
	'use strict';

	angular
	    .module('myApp')
	    .factory('resumeService',resumeService);

	function resumeService(){
		var resume = {};
		resume.images = [{img:'img/resume/1.Jpeg',
		                  number:1},
		                 {img:'img/resume/2.Jpeg',
		                  number:2},
		                 {img:'img/resume/3.Jpeg',
		                  number:3}];
		return resume;
	}
})();