app.controller("ListController", ['getAddress','$scope','$http','$routeParams','$location',
	function(getAddress,$scope, $http, $routeParams, $location){
		// GET ajax
		getAddress.getContacts().success(function(data){
			$scope.contacts = data;
			Users = $scope.contacts;
			// console.log(data);
		});
		// DELETE ajax
		$scope.Delete = function(ids){
			getAddress.deleteContact(ids).success(function(){
				$scope.contacts.splice($routeParams.id, 1);
				getAddress.getContacts().success(function(data){
					$scope.contacts = data;
				});
			});
		};
		// Need to put this in a service
		$scope.go = function(path){
			$location.path(path);
		};
		// Method to GET User
		$scope.getUser = function(contact){
			getAddress.getContact($routeParams.id).success(function(data){
				$scope.contacts = data;
				$location.path('/edit/' + contact.id);
				User = contact;
			});
		};
	}]
);