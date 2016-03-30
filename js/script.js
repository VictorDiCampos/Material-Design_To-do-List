// var btn_task = document.getElementById('btn-add-task');
// btn_task.onclick = function () {	
// 	var task = document.createElement('div');
// 	var elemento = document.getElementById('task-list');
// 	elemento.appendChild(task);
// };

$(document).ready(function(){
	$btn_add_task = $('.btn-add-task');
	$btn_add_task.click(function(e){
		e.preventDefault();
		$task= '<div class="task"><label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1"><input type="checkbox" id="switch-1" class="mdl-switch__input" checked><span class="mdl-switch__label">'+$(".mdl-textfield__input").val()+ '</span></label><span class="rm-task"><i class="material-icons">clear</i></div>';
		$(".task-list").append($task);

		$('.rm-task').click(function(e) {
			e.preventDefault();
			$element = this.closest('div.task').remove();
		});
		
	});
});