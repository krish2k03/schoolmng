// START - USED SERVICES
/*
 *	courseService.create
 *		PARAMS: 
 *		
 *
 *	courseService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	courseService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	examService.findBy_course
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	teacherService.findBy_course
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	studentService.findBy_courses
 *		PARAMS: 
 *					Objectid key - Id of model to search for
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

app.controller('courseEditController', ['$scope', '$location', '$routeParams', '$q', 'courseService', 'examService', 'studentService', 'teacherService', 'teacherService', 'examService', 'studentService',
    function ($scope, $location, $routeParams, $q, courseService , examService , studentService , teacherService , teacherService, examService, studentService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = courseService.get({_id: $scope.id});
        	$scope.external._teacher_course = teacherService.findBy_course({key: $scope.id});
        	$scope.external._exam_course = examService.findBy_course({key: $scope.id});
        	$scope.external._student_courses = studentService.findBy_courses({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new courseService();
        	$scope.external._teacher_course = [];
        	$scope.external._exam_course = [];
        	$scope.external._student_courses = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/courses/');
    		});
    	}
    	
    	$scope.remove = function(){
    		courseService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/courses/');
    		});
    	}
    	
    		
        //manage External relation _course
        		
    	$scope.list_teacher_course = teacherService.query();
    	
    		
        //manage External relation _course
        		
    	$scope.list_exam_course = examService.query();
    	
    		
        //manage External relation _courses
        		
    	$scope.list_student_courses = studentService.query();
    	
}]);