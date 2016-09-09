var audi_settings = 
	'<a-box class="box" color="tomato" position="-3 0.4 -4" depth="1.52" height="0.8" width="0.8"></a-box>' + 
	'<a-box class="box" color="tomato" position="-3 0.4 0" depth="1.52" height="0.8" width="0.8"></a-box>' + 
	'<a-box class="box" color="tomato" position="-3 0.4 4" depth="1.52" height="0.8" width="0.8"></a-box>' +
	'<a-box class="box" color="tomato" position="3 0.4 -4" depth="1.52" height="0.8" width="0.8"></a-box>' +
	'<a-box class="box" color="tomato" position="3 0.4 0" depth="1.52" height="0.8" width="0.8"></a-box>' +
	'<a-box class="box" color="tomato" position="3 0.4 4" depth="1.52" height="0.8" width="0.8"></a-box>' +
	'<a-box class="box" color="pink" position="0 1.225 -1.75" depth="3.5" height="2.45" width="3.5"></a-box>' +
	'<a-plane color="#AAA" position="-7.5 1.05 -9" width="2" height="2.1"></a-plane>' +
	'<a-plane color="#AAA" position="7.5 1.05 -9" width="2" height="2.1"></a-plane>';

var badm_settings = 
	'<a-box class="box" color="tomato" position="5.5 0.4 0" depth="0.8" height="0.8" width="1.52"></a-box>' + 
	'<a-box class="box" color="tomato" position="5.5 0.4 -2.3" depth="0.8" height="0.8" width="1.52"></a-box>' + 
	'<a-box class="box" color="tomato" position="5.5 0.4 2.3" depth="0.8" height="0.8" width="1.52"></a-box>' +
	'<a-box class="box" color="tomato" position="2 0.4 -8" depth="1.52" height="0.8" width="0.8"></a-box>' +
	'<a-box class="box" color="tomato" position="0 0.4 -8" depth="1.52" height="0.8" width="0.8"></a-box>' +
	'<a-box class="box" color="tomato" position="-5.5 0.4 -2" depth="0.8" height="0.8" width="1.52"></a-box>' +
	'<a-box class="box" color="orange" position="0 0.1 8" depth="2" height="0.2" width="2"></a-box>' +
	'<a-box class="box" color="pink" position="-4.95 1.2 -6.75" depth="3.5" height="2.45" width="3.5"></a-box>' +
	'<a-plane color="#AAA" position="6.7 1.05 5.5" width="2" height="2.1" rotation="0 -90 0"></a-plane>' +
	'<a-plane color="#AAA" position="6.7 1.05 -5.5" width="2" height="2.1" rotation="0 -90 0"></a-plane>' +
	'<a-plane color="#AAA" position="-6.7 1.05 0" width="2" height="2.1" rotation="0 90 0"></a-plane>';

$('#audi').click(function() {
	$('#boxes').html(audi_settings);
	changeRoomSize(18, 17);
});

$('#badm').click(function() {
	$('#boxes').html(badm_settings);
	changeRoomSize(18.3, 13.4);
});

function changeRoomSize(length, width) {
	$('#floor').attr('width', width);
	$('#floor').attr('height', length);
	gridsUp(length, width);
	framesUp(length, width);
}

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

$('#add').click(function() {
	var dim = $('#dim').val().trim().split(' ');
	var l = parseFloat(dim[0]);
	var w = parseFloat(dim[1]);
	var h = parseFloat(dim[2]);
	if (dim.length != 3 || !l || !w || !h) {
		alert('Please fill in the dimention with values greater than 0.');
	} else {
		var pos = '0 5 0';
		var box = '<a-box class="box" color="tomato" position="' + pos + '" depth="' + l + '" height="' + h + '" width="' + w + '"></a-box>';
		$('#boxes').append(box);
		$('#dim').val('');
	}
});

$('body').on('click', function() {
	console.log($(this));
	if ($(this).hasClass('box')) {
		console.log('hi');
	}
});

function start() {
	gridsUp(20, 17);
	framesUp(20, 17);
	element = document.getElementsByTagName('a-scene')[0];
	element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
	element.addEventListener('click', function() {
		element.requestPointerLock();
	}, false);
	document.addEventListener('pointerlockchange', lockChangeHandler, false);
	document.addEventListener('mozpointerlockchange', lockChangeHandler, false);
}

function canvasLoop(event) {
	var rotation = $('#camera').attr('rotation');
	var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
	var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
	var y = parseFloat(rotation.y) - movementX * 0.12;
	var x = parseFloat(rotation.x) - movementY * 0.12;
	x = Math.max( -90, Math.min(90, x) );
	$('#camera').attr('rotation', x + ' ' + y + ' ' + rotation.z);
}

function lockChangeHandler() {
	if(document.pointerLockElement === element || document.mozPointerLockElement === element) {
		document.addEventListener("mousemove", canvasLoop, false);
	} else {
		document.removeEventListener("mousemove", canvasLoop, false);
	}
}

function gridsUp(length, width) {
	$('#grids').html("");
	for (var i = -length/2.0 + 0.5; i < length/2.0; i+=0.5) {
		var hori = '<a-plane class="grid" color="white" material="emissive: white" width="' + width + '" height="0.2" rotation="-90 0 0" position="0 -0.002 ' + i + '"></a-plane>';
		$('#grids').append(hori);
	}
	for (var i = -width/2.0 + 0.5; i < width/2.0; i+=0.5) {
		var hori = '<a-plane class="grid" color="white" width="0.2" height="' + length + '" rotation="-90 0 0" position="' + i + ' -0.001 0"></a-plane>';
		$('#grids').append(hori);
	}
}

function framesUp(length, width) {
	var levelHeight = 10;
	var strokeWidth = 0.08;
	var strokeColor = "white";
	$('#frames').html("");
	$('#frames').append("<a-box color=" + strokeColor + " width='" + width + "' height='" + strokeWidth + "' depth='" + strokeWidth + "' position='0 " + levelHeight + " " + -length/2 + "'></a-box color=" + strokeColor + ">");
	$('#frames').append("<a-box color=" + strokeColor + " width='" + width + "' height='" + strokeWidth + "' depth='" + strokeWidth + "' position='0 " + levelHeight + " " + length/2 + "'></a-box color=" + strokeColor + ">");
	$('#frames').append("<a-box color=" + strokeColor + " width='" + strokeWidth + "' height='" + strokeWidth + "' depth='" + length + "' position='" + -width/2 + " " + levelHeight + " 0'></a-box color=" + strokeColor + ">");
	$('#frames').append("<a-box color=" + strokeColor + " width='" + strokeWidth + "' height='" + strokeWidth + "' depth='" + length + "' position='" + width/2 + " " + levelHeight + " 0'></a-box color=" + strokeColor + ">");
	$('#frames').append("<a-box color=" + strokeColor + " width='" + strokeWidth + "' height='" + levelHeight + "' depth='" + strokeWidth + "' position='" + width/2 + " " + levelHeight/2 + " " + length/2 + "'></a-box color=" + strokeColor + ">");
	$('#frames').append("<a-box color=" + strokeColor + " width='" + strokeWidth + "' height='" + levelHeight + "' depth='" + strokeWidth + "' position='" + -width/2 + " " + levelHeight/2 + " " + length/2 + "'></a-box color=" + strokeColor + ">");
	$('#frames').append("<a-box color=" + strokeColor + " width='" + strokeWidth + "' height='" + levelHeight + "' depth='" + strokeWidth + "' position='" + width/2 + " " + levelHeight/2 + " " + -length/2 + "'></a-box color=" + strokeColor + ">");
	$('#frames').append("<a-box color=" + strokeColor + " width='" + strokeWidth + "' height='" + levelHeight + "' depth='" + strokeWidth + "' position='" + -width/2 + " " + levelHeight/2 + " " + -length/2 + "'></a-box color=" + strokeColor + ">");
}

var element;
start();
