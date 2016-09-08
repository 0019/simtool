$('#room').click(function() {
	var width = $('#rw').val() ? $('#rw').val() : 0;
	var length = $('#rl').val() ? $('#rl').val() : 0;
	console.log(width, length);
	if (!width || !length) {
		alert('Please fill in the dimention with values greater than 0.');
	} else {
		$('#floor').attr('width', width);
		$('#floor').attr('height', length);
	}
});

$('#box').click(function() {
	var width = $('#bw').val() ? $('#bw').val() : 0;
	var length = $('#bl').val() ? $('#bl').val() : 0;
	var height = $('#bh').val() ? $('#bh').val() : 0;
	if (!width || !length || !height) {
		alert('Please fill in the dimention with values greater than 0.');
	} else {
		var pos = '0 ' + parseFloat(height) / 2 + ' 0';
		var box = '<a-box color="tomato" position="' + pos + '" depth="' + length + '" height="' + height + '" width="' + width + '"></a-box>';
		$('#scene').append(box);
	}
});
