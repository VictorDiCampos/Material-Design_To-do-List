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
					
					console.log("id-Task:", id);
					console.log("id-atual:", $scope.tasks[i].id);

					if($scope.tasks[i].id === id){
						// $scope.tasks(data[i]);
						$scope.oldTasks = $scope.tasks;
						console.log("oldTasks: ", $scope.oldTasks);
						$scope.tasks = $scope.tasks.slice(0, i);
						console.log("slice: ", $scope.tasks);
						$scope.oldTasks = $scope.oldTasks.slice(i+1);
						console.log("resto: ", $scope.oldTasks);
						$scope.tasks.concat($scope.oldTasks);
						console.log("final: ", $scope.tasks);
					}				
				};
			});  		
  	}

  	$scope.addTask = function(description){  		
  		$http.post('/newtask',{description: description}, {headers:{ 'X-CSRF-Token':  $('meta[name=csrf-token]').attr('content') }}).success(function(data){
  			// console.log(data);
  			$scope.tasks.push(data);
  		});

  	// 	$input = $('.mdl-textfield__input');
			// $label = $('.mdl-textfield__label');

			// if($input.val().length > 0) {				

			// 	$task = '<div class="task">'
			// 	+'<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">'
			// 	+'<input type="checkbox" id="switch-1" class="mdl-switch__input">'
			// 	+'<span class="mdl-switch__label">'+$(".mdl-textfield__input").val()+ '</span>'
			// 	+'</label><span class="rm-task"><i class="material-icons">clear</i></div>';

			// 	$task = '<div class="task" ng-repeat='task in tasks'>'
   //      +'<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">'
   //      +'<input type="checkbox" id="switch-1" class="mdl-switch__input">'
   //      +'<span class="mdl-switch__label" data-id={{task.id}}>{{task.description}}</span>'
   //      +'</label>'
   //      +'<span class="rm-task" ng-click="delTask(task.id)"><i class="material-icons">clear</i>'
   //      +'</div>';
				// $(".task-list").append($task);

			// 	ids.push( data.todo.id );
				
			// }

			// else if ( $input.val().length === 0 && $('.input-error').length === 0 ) {
			// 	$label.css('color', 'red');		
			// 	$message = '<span class="input-error">O campo a cima e obrigatorio.</span>';
			// 	$(".add-task").append($message);			
			// }
  		
  	}

	});//fim taskListController

	
});//fim $(document).ready
