(function(){
	'use strict';

	angular
	.module('app', [
		'ui.router',
	])

})();

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
				templateUrl: 'pages/home.template.html',
				controller: 'HomeController',
				controllerAs: 'vm',
				parent: 'main'
			})

		$locationProvider.html5Mode(true);
	}

})();

(function(){
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  function HomeController(){
    let vm = this;
  }

})();

(function(){
	'use strict';

	angular
		.module('app')
		.controller('MainController', MainController);

		function MainController(){
			let vm = this;

		}

})();

//# sourceMappingURL=app.js.map
