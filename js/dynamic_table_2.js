/* link first project */		
$(document).ready(function() {
	var firstRow = $('th:contains("OneImageForDay"):first').parent();
	var oneImageRow = $('<tr><th class="input" colspan="5">OneImageForDay website </th></tr>');
	oneImageRow
		.addClass('group')
		.insertBefore(firstRow)
		.click(function(){
			if( $(this).hasClass('open') ){
				$(this)
				.siblings(':contains("OneImageForDay")')
				.fadeOut('normal');
			}else{
				$(this)
				.siblings(':contains("OneImageForDay")')
				.fadeIn('normal');
			}
			$(this).toggleClass('open');
		})
		.siblings(':contains("OneImageForDay")')
		.fadeOut('fast');
		
	
});