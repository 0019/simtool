/* ------------------------------ Room Specifications ---------------------------- */
$('button').click(function() {
	$('.focused').removeClass('focused');
	$(this).addClass('focused');
});

$('.directory').click(function() {
	room = $(this).attr('id');
	$.ajax({
		url: 'http://zichao.co:4000/' + room,
		type: 'GET',
		dataType: 'html',
		success: function(data) {
			$('#boxes').html(data);
		},
		error: function(error) {
			alert(error);
		}
	});
});

$('#audi').click(function() {
	//$('#boxes').html(audi_settings);
	envRotation = -90;
	var y = $('#camera').attr('rotation').y;
	rotateCompass(y);
	changeRoomSize(18, 17);
});

$('#badm').click(function() {
	//$('#boxes').html(badm_settings);
	envRotation = -90;
	var y = $('#camera').attr('rotation').y;
	rotateCompass(y);
	changeRoomSize(18.3, 13.4);
});

$('#shakes').click(function() {
	//$('#boxes').html(shakes_settings);
	envRotation = -90;
	var y = $('#camera').attr('rotation').y;
	rotateCompass(y);
	changeRoomSize(12.38, 9.3);
});

$('#omar').click(function() {
	//$('#boxes').html(omar_settings);
	envRotation = -90;
	var y = $('#camera').attr('rotation').y;
	rotateCompass(y);
	changeRoomSize(12.38, 9.3);
});

/* ---------------------------------------- Control Panel Controlling ----------------------------------------- */
function changeRoomSize(len, wid) {
	length = len;
	width = wid;
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
		changeRoomSize(length, width);
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
		var box = '<a-box class="box new" position="' + pos + '" depth="' + l + '" height="' + h + '" width="' + w + '"></a-box>';
		$('#boxes').append(box);
		$('#dim').val('');
	}
});

/* ------------------------------------------- Listeners for Camera Vertical Movements ---------------------------------------- */
$('body').on('keydown', function(e) {
	if (!moving) {
		if (e.keyCode == 81) { // q
			moving = true;
			interval = setInterval(function() {
				var pos = $('#camera').attr('position');
				var x = pos.x;
				var y = pos.y;
				var z = pos.z;
				y += 0.03;
				$('#camera').attr('position', x + ' ' + y + ' ' + z);
			}, 10);
		} else if (e.keyCode == 69) { //e
			moving = true;
			interval = setInterval(function() {
				var pos = $('#camera').attr('position');
				var x = pos.x;
				var y = pos.y;
				var z = pos.z;
				y -= 0.03;
				$('#camera').attr('position', x + ' ' + y + ' ' + z);
			}, 10);
		}
	}
});

$('body').on('keyup', function(e) {
	if (e.keyCode == 81 || e.keyCode == 69) {
		moving = false;
		clearInterval(interval);
	}
});

function start() {
	rotateCompass(0);
	changeRoomSize(20, 17);
	gridsUp(20, 17);
	framesUp(20, 17);
	var plInterval = setInterval(function() {
		element = document.getElementsByTagName('canvas')[0];
		if (element != undefined) {
			console.log("PL activated");
			clearInterval(plInterval);
			trigerPL(element);
		}
	}, 10);
}

function trigerPL(element) {
	element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
	element.addEventListener('click', function() {
		element.requestPointerLock();
	}, false);
	document.addEventListener('pointerlockchange', lockChangeHandler, false);
	document.addEventListener('mozpointerlockchange', lockChangeHandler, false);
}

function rotateCompass(deg) {
	var compass = document.getElementById('compass');
	deg += envRotation;
	compass.style.webkitTransform = 'rotate(' + deg + 'deg)';
	compass.style.mozTransform = 'rotate(' + deg + 'deg)';
	compass.style.msTransform = 'rotate(' + deg + 'deg)';
}

function canvasLoop(event) {
	var rotation = $('#camera').attr('rotation');
	var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
	var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
	var y = parseFloat(rotation.y) - movementX * 0.12;
	var x = parseFloat(rotation.x) - movementY * 0.12;
	x = Math.max( -90, Math.min(90, x) );
	rotateCompass(y);
	$('#camera').attr('rotation', x + ' ' + y + ' ' + rotation.z);
}

function lockChangeHandler() {
	if(document.pointerLockElement === element || document.mozPointerLockElement === element) {
		document.addEventListener("mousemove", canvasLoop, false);
		$('#control_panel').hide();
		$('#compass_box').css('right', '20px');
	} else {
		document.removeEventListener("mousemove", canvasLoop, false);
		clearSelection();
		$('#control_panel').show();
		$('#compass_box').css('right', '320px');
	}
}

function gridsUp(length, width) {
	$('#grids').html("");
	for (var i = -length/2.0 + 0.5; i < length/2.0; i+=0.5) {
		var hori = '<a-plane class="grid" color="white" width="' + width + '" height="0.2" rotation="-90 0 0" position="0 -0.02 ' + i + '"></a-plane>';
		$('#grids').append(hori);
	}
	for (var i = -width/2.0 + 0.5; i < width/2.0; i+=0.5) {
		var hori = '<a-plane class="grid" color="white" width="0.2" height="' + length + '" rotation="-90 0 0" position="' + i + ' -0.01 0"></a-plane>';
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

var element, length, width, room, entryPwd;
var envRotation = 0;
var speed = 1;
var interval = null;
var moving = false;
start();

/* -------------------------------------------Call For An Army--------------------------------------------------- */

var Person = function(index) {
	this.index = index;
}

var army = [];

$('#populate').click(function() {
	var number = $('#num_ppl').val() ? $('#num_ppl').val() : 0;
	assemble(number, length, width);
});


function assemble(number, length, width) {
	$('#people').html("");
	var solider = "";
	for (var i = 0; i < number; i++) {
		var x = Math.random() * width - width / 2;
		var z = Math.random() * length - length / 2;
		var r = Math.random() * 360;
		console.log(x, z);
		solider += '<a-entity position="' + x + ' 0 ' + z + '" rotation="0 ' + r + ' 0" scale="0.53 0.53 0.53" obj-model="obj: #spiderman; mtl: #spidermanmtl"></a-entity>';
	}
	$('#people').append(solider);
}

/* ---------------------------------------- Logic On Selection -------------------------------------------- */
$(document).ready(function() {
	$('body').on('click', '.box, a-plane:not(#floor)', function() {
		$(this).addClass('selected');
		$(this).attr('color', 'green');
		$(this).attr('opacity', '0.8');
		$('.selected a-box').attr('color', 'green');
		$('.selected a-box').attr('opacity', '0.8');
	});
});

$('body').keydown(function(e) {
	if (e.keyCode == 67) {
		clearSelection();
	}
});

function clearSelection() {
	$('.new').attr('color', 'white');
	$('.table').attr('color', 'tomato');
	$('.fence').attr('color', 'yellow');
	$('.qa').attr('color', 'yellow');
	$('.sa').attr('color', 'lightblue');
	$('.castle').attr('color', 'pink');
	$('.label').attr('color', 'white');
	$('.chair').attr('color', 'orange');
	$('.door').attr('color', '#AAA');
	$('a-box').attr('opacity', '1');
	$('.label').attr('opacity', '1');
	$('.fence').attr('opacity', '0.5');
	$('.selected').removeClass('selected');
}

/* -------------------------------------------- Free Style Controlling ------------------------------------------ */
$('body').keydown(function(e) {
	if (e.keyCode == 38) { //up arrow, z-
		$('.selected').each(function(i) {
			var pos = $(this).attr('position');
			var z = pos.z - 0.1 * speed;
			var newpos = String(pos.x + ' ' + pos.y + ' ' + z);
			$(this).attr('position', newpos);
		});
	} else if (e.keyCode == 40) { //down arrow, z+
		$('.selected').each(function(i) {
			var pos = $(this).attr('position');
			var z = pos.z + 0.1 * speed;
			var newpos = String(pos.x + ' ' + pos.y + ' ' + z);
			$(this).attr('position', newpos);
		});
	} else if (e.keyCode == 37) { //left arrow, x-
		[].forEach.call(document.getElementsByClassName('selected'), function(ele) {
			var pos = ele.getAttribute('position');
			var x = pos.x - 0.1 * speed;
			ele.setAttribute('position', x + ' ' + pos.y + ' ' + pos.z);
		});
	} else if (e.keyCode == 39) { //right arrow, x+
		[].forEach.call(document.getElementsByClassName('selected'), function(ele) {
			var pos = ele.getAttribute('position');
			var x = pos.x + 0.1 * speed;
			ele.setAttribute('position', x + ' ' + pos.y + ' ' + pos.z);
		});
	} else if (e.keyCode == 188) { //smaller, r-
		[].forEach.call(document.getElementsByClassName('selected'), function(ele) {
			var rot = ele.getAttribute('rotation');
			if (rot == null)
				rot= {'x':'0', 'y':'0', 'z':'0'};
			var r = rot.y - 5 * speed;
			ele.setAttribute('rotation', rot.x + ' ' + r + ' ' + rot.z);
		});
	} else if (e.keyCode == 190) { //larger, r+
		[].forEach.call(document.getElementsByClassName('selected'), function(ele) {
			var rot = ele.getAttribute('rotation');
			if (rot == null)
				rot= {'x':'0', 'y':'0', 'z':'0'};
			var r = rot.y + 5 * speed;
			ele.setAttribute('rotation', rot.x + ' ' + r + ' ' + rot.z);
		});
	} else if (e.keyCode == 33) { //page up, y+
		$('.selected').each(function() {
			var pos = $(this).attr('position');
			var y = pos.y + 0.1 * speed;
			$(this).attr('position', pos.x + ' ' + y + ' ' + pos.z);
		});
	} else if (e.keyCode == 34) { //page down, y-
		$('.selected').each(function() {
			var pos = $(this).attr('position');
			var y = pos.y - 0.1 * speed;
			$(this).attr('position', pos.x + ' ' + y + ' ' + pos.z);
		});
	} else if (e.keyCode == 35) { //end, put to ground
		$('.selected').each(function() {
			var pos = $(this).attr('position');
			var height = $(this).attr('height');
			var y = height / 2;
			$(this).attr('position', pos.x + ' ' + y + ' ' + pos.z);
		});
	}
});


/* --------------------------------------------- Authtication ------------------------------------------------- */
$('#save').click(function() {
	auth();
});

$('#pwdInput').keydown(function(e) {
	if (e.keyCode == 13) { // enter
		entryPwd = $('#pwdInput').val();
		sendData(entryPwd);
		quitAuth();
	}
});

$('#auth').click(function() {
	quitAuth();
});

$('#pwdInput').click(function(event) {
	event.stopPropagation();
});

function quitAuth() {
	$('#auth').hide();
	$('#pwdInput').val('');
	$('#pwdInput').attr('placeholder', 'key in the password, and press enter');
}

function sendData(pwd) {
	var dest = room + '_save';
	//var boxes = document.getElementById('boxes');
	//boxes.flushToDOM();
	var settings = $('#boxes').html();
	$.ajax({
		type: 'POST',
		url: 'http://zichao.co:4000/' + dest + '/?pwd=' + pwd,
		dataType: 'html',
		data: settings,
		success: function() {
			alert('Saved to ' + room);
		},
		error: function(error) {
			entryPwd = undefined;
			if (error.status == 401) {
				alert("Not authorized");
			} else {
				alert('Unrecognised operation');
				console.log(error);
			}
		}
	});
}

function auth() {
	if (entryPwd != undefined) sendData(entryPwd);
	else $('#auth').show();
}
