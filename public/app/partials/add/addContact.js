app.controller('AddController', ['getAddress', '$scope', '$http', '$location',
	function(getAddress, $scope, $http, $location){
		// Add Contact Method
		$scope.add = function(){
			var contact = {
				firstName: $scope.firstName,
				lastName: $scope.lastName,
				email: $scope.email
			};
			// POST ajax
			getAddress.addContact(JSON.stringify(contact))
			.success(function(){
				$location.path("/");
			})
			.error(function (err) {
				alert(err);
			});
		};
		// Need to put this in a service
		$scope.go = function(path){
			$location.path(path);
		};
}]);