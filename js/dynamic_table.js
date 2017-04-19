/* link first project */		
$(document).ready(function() {
	var firstRow = $('th:contains("WIDESB"):first').parent();
	var osbRow = $('<tr><th class="input" colspan="5">Technology Reply - Wind Integrated Data Enterprise </th></tr>');
	osbRow
		.addClass('group')
		.insertBefore(firstRow)
		.click(function(){
			if( $(this).hasClass('open') ){
				$(this)
				.siblings(':contains("WIDESB")')
				.fadeOut('normal');
			}else{
				$(this)
				.siblings(':contains("WIDESB")')
				.fadeIn('normal');
			}
			$(this).toggleClass('open');
		})
		.siblings(':contains("WIDESB")')
		.fadeOut('fast');
		
	var secondRow = $('th:contains("IAM"):first').parent();
	var oimRow = $('<tr><th class="input" colspan="5">Technology Reply - Oracle Identity Management </th></tr>');
	oimRow
		.addClass('group')
		.insertBefore(secondRow)
		.click(function(){
			if( $(this).hasClass('open') ){
				$(this)
				.siblings(':contains("IAM")')
				.fadeOut('normal');
			}else{
				$(this)
				.siblings(':contains("IAM")')
				.fadeIn('normal');
			}
			$(this).toggleClass('open');
		})
		.siblings(':contains("IAM")')
		.fadeOut('fast');

	var thirdRow = $('th:contains("Sicurezza"):first').parent();
	var softRow = $('<tr><th class="input" colspan="5">Soft-strategy - Sicurezza delle reti </th></tr>');
	softRow
		.addClass('group')
		.insertBefore(thirdRow)
		.click(function(){
			if( $(this).hasClass('open') ){
				$(this)
				.siblings(':contains("Sicurezza")')
				.fadeOut('normal');
			}else{
				$(this)
				.siblings(':contains("Sicurezza")')
				.fadeIn('normal');
			}
			$(this).toggleClass('open');
		})
		.siblings(':contains("Sicurezza")')
		.fadeOut('fast');

var fourthRow = $('th:contains("NFC"):first').parent();
	var nfcRow = $('<tr><th class="input" colspan="5">Elis Consulting - NFC Android </th></tr>');
	nfcRow
		.addClass('group')
		.insertBefore(fourthRow)
		.click(function(){
			if( $(this).hasClass('open') ){
				$(this)
				.siblings(':contains("NFC")')
				.fadeOut('normal');
			}else{
				$(this)
				.siblings(':contains("NFC")')
				.fadeIn('normal');
			}
			$(this).toggleClass('open');
		})
		.siblings(':contains("NFC")')
		.fadeOut('fast');

var fifthRow = $('th:contains("Face"):first').parent();
	var opencvRow = $('<tr><th class="input" colspan="5">Gruppo MCR - OpenCV Face Recognition</th></tr>');
	opencvRow
		.addClass('group')
		.insertBefore(fifthRow)
		.click(function(){
			if( $(this).hasClass('open') ){
				$(this)
				.siblings(':contains("Face")')
				.fadeOut('normal');
			}else{
				$(this)
				.siblings(':contains("Face")')
				.fadeIn('normal');
			}
			$(this).toggleClass('open');
		})
		.siblings(':contains("Face")')
		.fadeOut('fast');
		
	var sixthRow = $('th:contains("655"):first').parent();
	var acea655Row = $('<tr><th class="input" colspan="5">Technology Reply Roma - Acea Monitoraggio 655</th></tr>');
	acea655Row 
		.addClass('group')
		.insertBefore(sixthRow)
		.click(function(){
			if( $(this).hasClass('open') ){
				$(this)
				.siblings(':contains("655")')
				.fadeOut('normal');
			}else{
				$(this)
				.siblings(':contains("655")')
				.fadeIn('normal');
			}
			$(this).toggleClass('open');
		})
		.siblings(':contains("655")')
		.fadeOut('fast');
});