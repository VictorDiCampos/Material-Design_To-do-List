$(document).ready(function(){

	var toDoList = angular.module('todolist', []);
  toDoList.controller('taskListController', function($scope, $http){
  	$scope.tasks = [];

  	$scope.getAll = function(){
  		$http.get('/gettask').success(function(data){

  			for (var i = 0; i < data.length; i++) {
  				$scope.tasks.push(data[i]);
  			};

	    });
  	}

  	$scope.delTask = function(id){
  		$http.post('/deltask',{id: id}).success(function(data){});
  		$element = $(this).closest('div.task').remove();
  	}

  	$scope.addTask = function(description){  		
  		$http.post('/newtask',{description: description}).success(function(data){
  			console.log(data);
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
			// 	$(".task-list").append($task);

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
