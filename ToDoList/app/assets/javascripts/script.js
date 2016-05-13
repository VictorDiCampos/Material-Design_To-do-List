$(document).ready(function(){

	var toDoList = angular.module('todolist', []);
  toDoList.controller('taskListController', function($scope, $http){
  	$scope.tasks = [];

  	$scope.getAll = function(){
  		$http.get('/gettask').success(function(data){
  			$scope.tasks = data;
	    });
  	}

  	$scope.delTask = function(id){
			$http.post('/deltask',{id: id}, {headers:{ 'X-CSRF-Token':  $('meta[name=csrf-token]').attr('content') }}).success(function(data){
				for (var i = 0; i < $scope.tasks.length; i++) {
					if($scope.tasks[i].id === id){												
						$scope.tasks = $scope.tasks.slice(0, i).concat($scope.oldTasks.slice(i+1));
					}				
				};
			});  		
  	}

  	$scope.addTask = function(description){  		
  		$http.post('/newtask',{description: description}, {headers:{ 'X-CSRF-Token':  $('meta[name=csrf-token]').attr('content') }}).success(function(data){  			
  			$newtask = {id: data.todo.id, description: data.todo.description};
  			$scope.tasks.push($newtask);  			
  		});
	
  	}

	});//fim taskListController
	
});//fim $(document).ready
