// START - USED SERVICES
/*
 *	studentService.create
 *		PARAMS: 
 *		
 *
 *	studentService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	studentService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	examService.findBy_student
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	courseService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * courseService  
 * examService  
 * studentService  
 */
// END - REQUIRED RESOURCES

app.controller('studentEditController', ['$scope', '$location', '$routeParams', '$q', 'courseService', 'examService', 'studentService', 'courseService', 'examService',
    function ($scope, $location, $routeParams, $q, courseService , examService , studentService , courseService, examService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = studentService.get({_id: $scope.id});
        	$scope.external._exam_student = examService.findBy_student({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new studentService();
        	$scope.external._exam_student = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/students/');
    		});
    	}
    	
    	$scope.remove = function(){
    		studentService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/students/');
    		});
    	}
    	
    		
        //manage relation _courses
        		
    	$scope.list_course = courseService.query();

    	$scope.contain_course = function(item){
    		if (!$scope.obj._courses) return false;
    		return $scope.obj._courses.indexOf(item) != -1;
    	}
		    	
		$scope.add_course = function(item){
			if(!$scope.obj._courses)
				$scope.obj._courses = [];
			$scope.obj._courses.push(item);
		}
		
		$scope.remove_course = function(index){
			$scope.obj._courses.splice(index, 1);
		}
    		
        //manage External relation _student
        		
    	$scope.list_exam_student = examService.query();
    	
}]);