/* 
When <p> is clicked <img> of walrus will show.
*/
$(document).ready(function() {
	$('.clickable').click(function() {
		$('#initially-hidden').toggle();
		$('#initially-showing').toggle();
	});
});