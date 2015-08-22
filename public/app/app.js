var app = angular.module('addressBook', ['ngRoute']),
    Users = null,
    User = null;

app.config(['$routeProvider',
	function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'app/partials/list/list.html',
            controller: 'ListController'
        })
        .when('/addContact', {
            templateUrl: 'app/partials/add/addContact.html',
            controller: 'AddController'
        })
        .when('/edit/:id', {
            templateUrl: 'app/partials/edit/edit.html',
            controller: 'EditController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);