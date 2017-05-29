/* 
When <p> is clicked <img> of walrus will show.
*/
$(document).ready(function() {
	$('.clickable').click(function() {
		$('.walrus-showing').toggle();
		$('.walrus-hidden').toggle();
	});
});