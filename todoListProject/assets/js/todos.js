// Checking-off the completed Todo's
$('ul').on("click", "li", function() {
	$(this).toggleClass('completed');
});

//Deleting completed Todo's
$('ul').on("click", "span", function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
});

//Adding new Todo's to the list
$('input[type="text"]').keypress(function(element) {
	if(element.which === 13) {
		var todoText = $(this).val();
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
		$(this).val("");
	}
});

//Toggling Form element
$('.fa-plus').click(function() {
	$('input[type="text"]').fadeToggle(200);
}); 