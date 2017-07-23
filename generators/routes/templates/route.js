(function(){
	'use strict';

	angular
    .module('<%= moduleName %>')
		.config(routes);

	function routes($stateProvider) {
		$stateProvider
			.state('', {
				url: '/',
				templateUrl: '',
				controller: '',
				controllerAs: 'vm',
				parent: 'main'
			})
	}

})();
