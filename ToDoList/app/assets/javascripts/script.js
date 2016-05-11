// var tasks = function() {
// 	var init = function() {
// 		console.log('iniciou');
// 		getTasks();
// 	}

// 	var getTasks = function() {
// 		alert('pegar task');
// 		var task = {id: 2, description: 'asdasdas'};
// 		setTask(task);
// 	}

// 	var setTask = function(task) {
// 		console.log(task, 'inserir no html')
// 		$('fsdf').on('click', clickRemoveTask);
// 	}

// 	var clickRemoveTask = function() {
// 		$(this)
// 	}

// 	return { init: init };
// }();

// JQUERY TEMPLATE

// $(document).ready(tasks.init);

$(document).ready(function(){
	// $.get( '/gettask', function( data ) {
	// 	console.log( "Load was performed." );
	// });

	$.ajax({
	  type: "GET",
	  url: "/gettask",
	  dataType: "JSON",
	  data: { 'description': '' },
	  success: function(data) {

	  	var ids = [];

	    for (var i = 0; i < data.length; ++i) {
	  		$task = '<div class="task"><label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1"><input type="checkbox" id="switch-1" class="mdl-switch__input"><span class="mdl-switch__label">'+data[i].description+ '</span></label><span class="rm-task"><i class="material-icons">clear</i></div>';			
				$(".task-list").append($task);
	    };


			$('.rm-task').click(function(e) {
				e.preventDefault();

				for (var i = 0; i < data.length; ++i) {

					$spanText = $(this).closest("div.task").find("span.mdl-switch__label").text();
					$taskDesc = data[i].description;

					if ( $spanText == $taskDesc ) {						

			  		$.post('/deltask', {id: data[i].id}, function(data){});

		 			 	$element = this.closest('div.task').remove();

					};

				};

			});
	  }
	});

	var ids = [];

	$btn_add_task = $('.btn-add-task');
	$btn_add_task.click(function(e){

	  $.post('/newtask', {description: $(".mdl-textfield__input").val()}, function(data){
		  // console.log(data.todo.description);
			
			$input = $('.mdl-textfield__input');
			$label = $('.mdl-textfield__label');

			if($input.val().length > 0) {
				e.preventDefault();

				$task = '<div class="task">'
				+'<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">'
				+'<input type="checkbox" id="switch-1" class="mdl-switch__input">'
				+'<span class="mdl-switch__label">'+$(".mdl-textfield__input").val()+ '</span>'
				+'</label><span class="rm-task"><i class="material-icons">clear</i></div>';
				$(".task-list").append($task);

				ids.push( data.todo.id );

				$rm_task = $('.rm-task');
				$rm_task.click(function(e) {
					e.preventDefault();

					$description = $(this).closest("div.task").find("span.mdl-switch__label").text();

					$.ajax({
						type: "GET",
						url: "/gettask",
						dataType: "JSON",
						data: { 'description': '' },
						success: function(data) {

							$currentId = -1;

							for (var i = 0; i < ids.length; ++i) {

								if ( data[i].description === $description) {							
									$currentId = data[i].id;									
								};

							};							

							if( $currentId >= 0 ){					
								$.post('/deltask', {id: $currentId}, function(data){});
							};

						}
					});
					
					$element = this.closest('div.task').remove();

				});
			}

			else if ( $input.val().length === 0 && $('.input-error').length === 0 ) {
				$label.css('color', 'red');		
				$message = '<span class="input-error">O campo a cima e obrigatorio.</span>';
				$(".add-task").append($message);			
			}

	  });

	return false;

	});

});



































$(document).ready(function(){
	angular.module('toDoList', []);

  angular.module('toDoList').controller('taskListController', function($scope){
  	
  });
});