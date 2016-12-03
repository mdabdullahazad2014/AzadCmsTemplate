angular.module('scotchApp').controller('paginationCtrl', function ($scope,$http,$window,filterFilter) {
	
	  $scope.sortType     = 'name'; // set the default sort type
	  $scope.sortReverse  = false;  // set the default sort order
	  $scope.searchFish   = '';     // set the default search/filter term
	  
	 
	  // create the list of sushi rolls 
	  $scope.sushi = [
					    { name: 'Cali Roll', fish: 'Crab', tastiness: 3 },
					    { name: 'Philly', fish: 'Tuna', tastiness: 4 },
					    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
					    { name: 'Rainbow', fish: 'Variety', tastiness: 6 },
					    { name: 'salman', fish: 'Tuna', tastiness: 2 },
					    { name: 'khan', fish: 'papmlet', tastiness: 4 },
					    { name: 'sharukh', fish: 'jelly', tastiness: 7 },
					    { name: 'tammana', fish: 'star', tastiness: 6 },
					    { name: 'akshay', fish: 'Crab', tastiness: 2 },
					    { name: 'raveena', fish: 'Tuna', tastiness: 4 },
					    { name: 'katrina', fish: 'Eel', tastiness: 7 },
					    { name: 'kajol', fish: 'Variety', tastiness: 6 },
					    { name: 'ajay', fish: 'Crab', tastiness: 2 },
					    { name: 'devgan', fish: 'Tuna', tastiness: 4 },
					    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
					    { name: 'jackie', fish: 'Variety', tastiness: 6 },
					    { name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
					    { name: 'Philly', fish: 'Tuna', tastiness: 4 },
					    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
					    { name: 'Rainbow', fish: 'Variety', tastiness: 6 },
					    { name: 'salman', fish: 'Tuna', tastiness: 2 },
					    { name: 'khan', fish: 'papmlet', tastiness: 4 },
					    { name: 'sharukh', fish: 'jelly', tastiness: 7 },
					    { name: 'tammana', fish: 'star', tastiness: 6 },
					    { name: 'akshay', fish: 'Crab', tastiness: 2 },
					    { name: 'raveena', fish: 'Tuna', tastiness: 4 },
					    { name: 'katrina', fish: 'Eel', tastiness: 7 },
					    { name: 'kajol', fish: 'Variety', tastiness: 6 },
					    { name: 'ajay', fish: 'Crab', tastiness: 2 },
					    { name: 'devgan', fish: 'Tuna', tastiness: 4 },
					    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
					    { name: 'jackie', fish: 'Variety', tastiness: 6 },
					    { name: 'akshay', fish: 'Crab', tastiness: 2 },
					    { name: 'raveena', fish: 'Tuna', tastiness: 4 },
					    { name: 'katrina', fish: 'Eel', tastiness: 7 },
					    { name: 'kajol', fish: 'Variety', tastiness: 6 },
					    { name: 'ajay', fish: 'Crab', tastiness: 2 },
					    { name: 'devgan', fish: 'Tuna', tastiness: 4 },
					    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
					    { name: 'jackie', fish: 'Variety', tastiness: 6 },
					    { name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
					    { name: 'Philly', fish: 'Tuna', tastiness: 4 },
					    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
					    { name: 'Rainbow', fish: 'Variety', tastiness: 6 },
					    { name: 'salman', fish: 'Tuna', tastiness: 2 },
					    { name: 'khan', fish: 'papmlet', tastiness: 4 },
					    { name: 'sharukh', fish: 'jelly', tastiness: 7 },
					    { name: 'tammana', fish: 'star', tastiness: 6 },
					    { name: 'akshay', fish: 'Crab', tastiness: 2 },
					    { name: 'raveena', fish: 'Tuna', tastiness: 4 },
					    { name: 'katrina', fish: 'Eel', tastiness: 7 },
					    { name: 'kajol', fish: 'Variety', tastiness: 6 },
					    { name: 'ajay', fish: 'Crab', tastiness: 2 },
					    { name: 'devgan', fish: 'Tuna', tastiness: 4 },
					    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
					    { name: 'jackie', fish: 'Variety', tastiness: 6 },
					    { name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
					    { name: 'Philly', fish: 'Tuna', tastiness: 4 },
					    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
					    { name: 'Rainbow', fish: 'Variety', tastiness: 6 },
					    { name: 'salman', fish: 'Tuna', tastiness: 2 },
					    { name: 'khan', fish: 'papmlet', tastiness: 4 },
					    { name: 'sharukh', fish: 'jelly', tastiness: 7 },
					    { name: 'tammana', fish: 'star', tastiness: 6 },
					    { name: 'akshay', fish: 'Crab', tastiness: 2 },
					    { name: 'raveena', fish: 'Tuna', tastiness: 4 },
					    { name: 'katrina', fish: 'Eel', tastiness: 7 },
					    { name: 'kajol', fish: 'Variety', tastiness: 6 },
					    { name: 'ajay', fish: 'Crab', tastiness: 2 },
					    { name: 'devgan', fish: 'Tuna', tastiness: 4 },
					    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
					    { name: 'jackie', fish: 'Variety', tastiness: 6 },
					    { name: 'akshay', fish: 'Crab', tastiness: 2 },
					    { name: 'raveena', fish: 'Tuna', tastiness: 4 },
					    { name: 'katrina', fish: 'Eel', tastiness: 7 },
					    { name: 'kajol', fish: 'Variety', tastiness: 6 },
					    { name: 'ajay', fish: 'Crab', tastiness: 2 },
					    { name: 'devgan', fish: 'Tuna', tastiness: 4 },
					    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
					    { name: 'jackie', fish: 'Variety', tastiness: 6 }
					];
	  
	  $scope.sort = function(keyname){
	        $scope.sortKey = keyname;   //set the sortKey to the param passed
	        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
	    }
	  
	 // create empty search model (object) to trigger $watch on update
	$scope.search = {};

	$scope.resetFilters = function () {
		// needs to be a function or it won't trigger a $watch
		$scope.search = {};
	};

	// pagination controls
	$scope.currentPage = 1;
	$scope.totalItems = $scope.sushi.length;
	$scope.entryLimit = 8; // items per page
	$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

	// $watch search to update pagination
	$scope.$watch('search.name', function (newVal, oldVal) {
		$scope.filtered = filterFilter($scope.sushi, { fish: newVal });
		$scope.totalItems = $scope.filtered.length;
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
		$scope.currentPage = 1;
	}, true);
	
	  
	  
});