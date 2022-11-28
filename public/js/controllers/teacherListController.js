// START - USED SERVICES
/*
 *	teacherService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	teacherService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * teacherService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('teacherListController', ['$scope', 'teacherService',
    function ($scope, teacherService ) {
		
    	$scope.list = teacherService.query();
    	
}]);