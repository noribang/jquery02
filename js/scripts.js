/* 
When <p> is clicked <img> of walrus will show.
*/
$(document).ready(function() {
	$('p').click(function() {
		$('.walrus-showing').show();
		$('.walrus-hidden').hide();
	});
});