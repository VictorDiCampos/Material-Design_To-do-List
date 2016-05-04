$(document).ready(function(){
	// $.get( '/gettask', function( data ) {
	// 	console.log( "Load was performed." );
	// });

	$.post('/gettask', {id: 43}, function(data){
		// console.log(data.todo.description);
	});


  // $task = '<div class="task"><label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1"><input type="checkbox" id="switch-1" class="mdl-switch__input"><span class="mdl-switch__label">'+data.todo.description+ '</span></label><span class="rm-task"><i class="material-icons">clear</i></div>';			
	// $(".task-list").append($task);

	$btn_add_task = $('.btn-add-task');
	$btn_add_task.click(function(e){

		// $.post('/teste', {description: $(".mdl-textfield__input").val()}, function(data){
		//   console.log(data.todo.description);
	 //  });

	  $.post('/newtask', {description: $(".mdl-textfield__input").val()}, function(data){
		  // console.log(data.todo.description);
			
			$input = $('.mdl-textfield__input');
			$label = $('.mdl-textfield__label');

			if($input.val().length > 0) {
				e.preventDefault();

				$task = '<div class="task"><label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1"><input type="checkbox" id="switch-1" class="mdl-switch__input"><span class="mdl-switch__label">'+$(".mdl-textfield__input").val()+ '</span></label><span class="rm-task"><i class="material-icons">clear</i></div>';
				$(".task-list").append($task);

				$('.rm-task').click(function(e) {
					e.preventDefault();

		  		$.post('/deltask', {id: data.todo.id}, function(data){});

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
