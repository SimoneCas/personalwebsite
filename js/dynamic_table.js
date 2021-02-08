/* link first project */		
$(document).ready(function() {
	var firstRow = $('th:contains("WIDESB"):first').parent();
	var osbRow = $('<tr><th class="input" colspan="5">Wind Integrated Data Enterprise </th></tr>');
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
	var oimRow = $('<tr><th class="input" colspan="5">Oracle Identity Management </th></tr>');
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
	var softRow = $('<tr><th class="input" colspan="5">Sicurezza delle reti </th></tr>');
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
	var nfcRow = $('<tr><th class="input" colspan="5">NFC Android</th></tr>');
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
	var opencvRow = $('<tr><th class="input" colspan="5">OpenCV Face Recognition</th></tr>');
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
		
	var sixthRow = $('th:contains("Monitoraggio processi"):first').parent();
	var acea655Row = $('<tr><th class="input" colspan="5">Monitoraggio processi aziendali</th></tr>');
	acea655Row 
		.addClass('group')
		.insertBefore(sixthRow)
		.click(function(){
			if( $(this).hasClass('open') ){
				$(this)
				.siblings(':contains("Monitoraggio processi")')
				.fadeOut('normal');
			}else{
				$(this)
				.siblings(':contains("Monitoraggio processi")')
				.fadeIn('normal');
			}
			$(this).toggleClass('open');
		})
		.siblings(':contains("Monitoraggio processi")')
		.fadeOut('fast');

	var seventhRow = $('th:contains("Migrazione Office 365"):first').parent();
	var gediRow = $('<tr><th class="input" colspan="5">Migrazione Office 365</th></tr>');
	gediRow 
		.addClass('group')
		.insertBefore(seventhRow)
		.click(function(){
			if( $(this).hasClass('open') ){
				$(this)
				.siblings(':contains("Migrazione Office 365")')
				.fadeOut('normal');
			}else{
				$(this)
				.siblings(':contains("Migrazione Office 365")')
				.fadeIn('normal');
			}
			$(this).toggleClass('open');
		})
		.siblings(':contains("Migrazione Office 365")')
		.fadeOut('fast');

	var eighthRow = $('th:contains("POC Terminali"):first').parent();
	var sisalRow = $('<tr><th class="input" colspan="5">POC Terminali</th></tr>');
	sisalRow 
		.addClass('group')
		.insertBefore(eighthRow)
		.click(function(){
			if( $(this).hasClass('open') ){
				$(this)
				.siblings(':contains("POC Terminali")')
				.fadeOut('normal');
			}else{
				$(this)
				.siblings(':contains("POC Terminali")')
				.fadeIn('normal');
			}
			$(this).toggleClass('open');
		})
		.siblings(':contains("POC Terminali")')
		.fadeOut('fast');

	var ninethRow = $('th:contains("Betting Offer"):first').parent();
	var sisalBORow = $('<tr><th class="input" colspan="5">Betting Offer System</th></tr>');
	sisalBORow 
		.addClass('group')
		.insertBefore(ninethRow)
		.click(function(){
			if( $(this).hasClass('open') ){
				$(this)
				.siblings(':contains("Betting Offer")')
				.fadeOut('normal');
			}else{
				$(this)
				.siblings(':contains("Betting Offer")')
				.fadeIn('normal');
			}
			$(this).toggleClass('open');
		})
		.siblings(':contains("Betting Offer")')
		.fadeOut('fast');

	var tenthRow = $('th:contains("Cashout"):first').parent();
	var sisalCSRow = $('<tr><th class="input" colspan="5">Cashout System</th></tr>');
	sisalCSRow 
		.addClass('group')
		.insertBefore(tenthRow)
		.click(function(){
			if( $(this).hasClass('open') ){
				$(this)
				.siblings(':contains("Cashout")')
				.fadeOut('normal');
			}else{
				$(this)
				.siblings(':contains("Cashout")')
				.fadeIn('normal');
			}
			$(this).toggleClass('open');
		})
		.siblings(':contains("Cashout")')
		.fadeOut('fast');
});