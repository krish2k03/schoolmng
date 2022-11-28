// START - USED SERVICES
/*
 *	examService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	examService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * examService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('examListController', ['$scope', 'examService',
    function ($scope, examService ) {
		
    	$scope.list = examService.query();
    	
}]);