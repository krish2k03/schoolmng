// START - USED SERVICES
/*
 *	studentService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	studentService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * studentService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('studentListController', ['$scope', 'studentService',
    function ($scope, studentService ) {
		
    	$scope.list = studentService.query();
    	
}]);