(function(){

	angular
		.module('app')
		.config(routes);

	function routes($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('main', {
				templateUrl: 'app/structure/main.template.html',
				controller: 'MainController',
				controllerAs: 'MainVm',
			})

		$locationProvider.html5Mode(true);
	}

})();
