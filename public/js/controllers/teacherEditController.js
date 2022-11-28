// START - USED SERVICES
/*
 *	teacherService.create
 *		PARAMS: 
 *		
 *
 *	teacherService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	teacherService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	examService.findBy_teacher
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
 * teacherService  
 */
// END - REQUIRED RESOURCES

app.controller('teacherEditController', ['$scope', '$location', '$routeParams', '$q', 'courseService', 'examService', 'teacherService', 'courseService', 'examService',
    function ($scope, $location, $routeParams, $q, courseService , examService , teacherService , courseService, examService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = teacherService.get({_id: $scope.id});
        	$scope.external._exam_teacher = examService.findBy_teacher({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new teacherService();
        	$scope.external._exam_teacher = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/teachers/');
    		});
    	}
    	
    	$scope.remove = function(){
    		teacherService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/teachers/');
    		});
    	}
    	
    		
        //manage relation _course
        		
    	$scope.list_course = courseService.query();

    	$scope.contain_course = function(item){
    		if (!$scope.obj._course) return false;
    		return $scope.obj._course.indexOf(item) != -1;
    	}
		    	
		$scope.add_course = function(item){
			if(!$scope.obj._course)
				$scope.obj._course = [];
			$scope.obj._course.push(item);
		}
		
		$scope.remove_course = function(index){
			$scope.obj._course.splice(index, 1);
		}
    		
        //manage External relation _teacher
        		
    	$scope.list_exam_teacher = examService.query();
    	
}]);