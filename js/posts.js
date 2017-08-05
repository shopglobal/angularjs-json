var myapp = angular.module('myApp',[]);

myapp.controller('postController', function($scope,$http){
    $scope.content = null;
     $http.get('https://jsonplaceholder.typicode.com/posts').
        success(function(data, status, headers, config) {
        	$scope.valid = true;
            $scope.contents=data;
        }).error(function(data, status, headers, config) {
        	$scope.valid = false;
        	$scope.contents = "Something went wrong";
   		});

   		$scope.select = function(item) {
	        $scope.selectedItem = item;
	    };
});
