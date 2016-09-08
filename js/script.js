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
	var l = parseInt(dim[0]);
	var w = parseInt(dim[1]);
	var h = parseInt(dim[2]);
	if (dim.length != 3 || !l || !w || !h) {
		alert('Please fill in the dimention with values greater than 0.');
	} else {
		var pos = '0 ' + parseFloat(h) / 2 + ' 0';
		var box = '<a-box color="tomato" position="' + pos + '" depth="' + l + '" height="' + h + '" width="' + w + '"></a-box>';
		$('#scene').append(box);
		$('#dim').val('');
	}
});

function start() {
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

var element;
start();
