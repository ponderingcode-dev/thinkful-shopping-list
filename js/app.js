$(document).ready(function(){

	$('#item').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#btnAddItem').click();
		};
	});	

	$('#btnAddItem').click(function(){
		var itemName = $('#item').val();
		if(!$.trim($('#item').val())) {
			alert('Please enter text to add to the list');
		} else {
			$('#items').append('<li><i class="fa fa-square-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;' + itemName + '&nbsp;&nbsp;<i class="fa fa-trash-o delete" aria-hidden="true"></i></li>');
		};
        $('#item').val("");
	});
	
    $('#items').on('click', '.delete', function(){$(this).parent().remove()});
	$('#items').on('click', '.fa-square-o', function(){$(this).removeClass('fa-square-o'); $(this).addClass('fa-check-square-o')});
	$('#items').on('click', '.fa-check-square-o', function(){$(this).removeClass('fa-check-square-o'); $(this).addClass('fa-square-o')});
});