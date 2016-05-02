// var btn_task = document.getElementById('btn-add-task');
// btn_task.onclick = function () {	
// 	var task = document.createElement('div');
// 	var elemento = document.getElementById('task-list');
// 	elemento.appendChild(task);
// };

$(document).ready(function(){
	$btn_add_task = $('.btn-add-task');
	$btn_add_task.click(function(e){

		$input = $('.mdl-textfield__input');
		$label = $('.mdl-textfield__label');

		if ( $input.val().length === 0 && $('.input-error').length === 0 ) {
			$label.css('color', 'red');
			// alert("Insert a description for the new task.");
			$message = '<span class="input-error">O campo a cima e obrigatorio.</span>';
			$(".add-task").append($message);			
		
		} else if($input.val().length > 0) {
			e.preventDefault();

			$task = '<div class="task"><label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1"><input type="checkbox" id="switch-1" class="mdl-switch__input"><span class="mdl-switch__label">'+$(".mdl-textfield__input").val()+ '</span></label><span class="rm-task"><i class="material-icons">clear</i></div>';
			$(".task-list").append($task);

			$('.rm-task').click(function(e) {
				e.preventDefault();
				$element = this.closest('div.task').remove();
			});
		}

		
	});
});