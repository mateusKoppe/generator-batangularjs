(function(){
	'use strict';

	angular
		.module('app')
		.config(routes);

	function routes($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('main', {
				templateUrl: 'structure/main.template.html',
				controller: 'MainController',
				controllerAs: 'MainVm',
			})
			.state('home', {
				url: '/',
				templateUrl: 'layouts/home.template.html',
				controller: 'HomeController',
				controllerAs: 'vm',
				parent: 'main'
			})

		$locationProvider.html5Mode(false);
	}

})();
