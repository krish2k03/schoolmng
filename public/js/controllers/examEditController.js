// START - USED SERVICES
/*
 *	examService.create
 *		PARAMS: 
 *		
 *
 *	examService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	examService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	teacherService.list
 *		PARAMS: 
 *		
 *
 *	courseService.list
 *		PARAMS: 
 *		
 *
 *	studentService.list
 *		PARAMS: 
 *		
 *
 *	examService.validate
 *		PARAMS: 
 *					String id - id of exam
 *		RETURN: Boolean
 *				
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * courseService  
 * examService  
 * studentService  
 * teacherService  
 */
// END - REQUIRED RESOURCES

app.controller('examEditController', ['$scope', '$location', '$routeParams', '$q', 'courseService', 'examService', 'studentService', 'teacherService', 'courseService', 'studentService', 'teacherService',
    function ($scope, $location, $routeParams, $q, courseService , examService , studentService , teacherService , courseService, studentService, teacherService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = examService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new examService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/exams/');
    		});
    	}
    	
    	$scope.remove = function(){
    		examService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/exams/');
    		});
    	}
    	
    		
        //manage relation _course
        		
    	$scope.list_course = courseService.query();

    		
        //manage relation _student
        		
    	$scope.list_student = studentService.query();

    		
        //manage relation _teacher
        		
    	$scope.list_teacher = teacherService.query();

}]);