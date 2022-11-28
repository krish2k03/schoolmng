

var app = angular.module('schoolmng_App', [
'ngRoute',
'ngResource'
]).config(function ($routeProvider) {
	
	$routeProvider
	
//DO NOT EDIT THIS ROUTES, USE NEXT COMMENT SECTION

// START - ROUTE
	.when('/home', {
	  templateUrl: 'html/Home.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/courses/:id', {
	  templateUrl: 'html/courseEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/courses', {
	  templateUrl: 'html/courseList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/exams/:id', {
	  templateUrl: 'html/examEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/exams', {
	  templateUrl: 'html/examList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/students/:id', {
	  templateUrl: 'html/studentEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/students', {
	  templateUrl: 'html/studentList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/teachers/:id', {
	  templateUrl: 'html/teacherEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/teachers', {
	  templateUrl: 'html/teacherList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})

// END - ROUTE

// INSERT HERE YOUR CUSTOM ROUTES
		

// DEFAULT ROUTES
    .when('/profile', {
      templateUrl: 'js/security/profile/Profile.html',
      resolve: {
          user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
      },
    })
    .when('/manage-users', {
      templateUrl: 'js/security/manageUser/UsersList.html',
      resolve: {
          user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.hasRole("ADMIN"); }]
      },
    })
    .when('/manage-users/:id', {
      templateUrl: 'js/security/manageUser/UsersEdit.html',
      resolve: {
          user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.hasRole("ADMIN"); }]
      },
    })
	.when('/login', {
	    templateUrl: 'html/Login.html',
	    controller: 'LoginController'
	})
	.when('/logout', {
	      templateUrl: 'html/Login.html',
	      controller: 'LogoutController',
    	  resolve: {
    		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
    	  },
	})
	.when('/', {
	      templateUrl: 'html/Home.html',
    	  resolve: {
    		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
    	  },
	})
	.otherwise({
		templateUrl: 'html/404.html',
	});
	
});