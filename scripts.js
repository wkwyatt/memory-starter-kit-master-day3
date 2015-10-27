var cards = [
	'<img src="img/default/monsters-01.png">', '<img src="img/default/monsters-02.png">', 
	'<img src="img/default/monsters-03.png">', '<img src="img/default/monsters-04.png">', 
	'<img src="img/default/monsters-05.png">', '<img src="img/default/monsters-06.png">', 
	'<img src="img/default/monsters-07.png">', '<img src="img/default/monsters-08.png">', 
	'<img src="img/default/monsters-09.png">', '<img src="img/default/monsters-11.png">', 
	'<img src="img/default/monsters-13.png">', '<img src="img/default/monsters-14.png">', 
	'<img src="img/default/monsters-15.png">', '<img src="img/default/monsters-16.png">', ];
var tilesFlipped = 0;
var boardSize = 8;
var memoryArray = cards.slice(0, (boardSize / 2));
memoryArray = $.merge(memoryArray, memoryArray);

function randSort(array) {
	var newArray = [];
	var inArray = [];
	for (var i = 0; i < array.length; i++) {
	}
}

$(document).ready(function() {

	// Randomize array


	for(i = 0; i < boardSize; i++) {
		var rand = Math.floor(Math.random() * boardSize);
		$('#mg_contents').append('<div class="mg_tile mg_tile-' + i + '"><div class="mg_tile-inner"><div class="mg_tile-outside"></div><div class="mg_tile-inside"></div></div></div>');
		$('.mg_tile-'+i).find('.mg_tile-inside').html(memoryArray[rand]);
	}

	$('.mg_tile').click(function() {
		// Flip card animation
		$(this).animate({rotateY: "180deg"}, 1500);

		/* Hide tiles if more than two are flipped */
		if($('.mg_tile-inside:visible').length == 2) {
			$('.mg_tile-inside').hide();
		}

		$(this).find('.mg_tile-inside').show();

		if($('.mg_tile-inside:visible').length == 2) {
			$('.mg_tile-inside').each(function() {
				var card = $(this).attr('card');
			});
		}
	});
})