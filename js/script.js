var audi_left_center = 3.15;
var audi_left_left = 8;
var audi_mid_top = 4;
var table_height = 0.8 / 2;
var chair_height = 0.5 / 2;
var audi_other_z = -5.5;
var audi_other_x = 2.2;
var chair_sep = 0.65;

var audi_settings = 
	'<a-box class="box table" mixin="table" position="-' + audi_left_center + ' 0.4 -' + audi_mid_top + '"></a-box>' + 
	'<a-box class="box table" mixin="table" position="-' + audi_left_center + ' 0.4 0"></a-box>' + 
	'<a-box class="box table" mixin="table" position="-' + audi_left_center + ' 0.4 ' + audi_mid_top + '"></a-box>' +
	'<a-box class="box table" mixin="table" position="' + audi_left_center + ' 0.4 -' + audi_mid_top + '"></a-box>' +
	'<a-box class="box table" mixin="table" position="' + audi_left_center + ' 0.4 0"></a-box>' +
	'<a-box class="box table" mixin="table" position="' + audi_left_center + ' 0.4 ' + audi_mid_top + '"></a-box>' +
	//Castle
	//'<a-entity class="box">' + 
		'<a-box class="box castle" color="pink" position="0 1.2 0" depth="4.5" height="2.4" width="3.5"></a-box>' +
		'<a-plane class="label" geometry="width:3 height:2.5" rotation="-90 0 0" position="0 2.45 0" material="src:#ac"></a-plane>' +
		'<a-plane class="label" geometry="width:3 height:2.5" position="0 1.2 2.26" material="src:#ac"></a-plane>' +
	//'</a-entity>'
	door(7.5, -9, 0) +
	door(-7.5, -9, 0) +
	//labels
	'<a-plane class="label" mixin="table_label_rotated" rotation="-90 -90 0" position="-' + audi_left_center + ' 0.81 -' + audi_mid_top + '" material="src:#alu"></a-plane>' +
	'<a-plane class="label" mixin="table_label_rotated" rotation="-90 -90 0" position="-' + audi_left_center + ' 0.81 0" material="src:#alm"></a-plane>' +
	'<a-plane class="label" mixin="table_label_rotated" rotation="-90 -90 0" position="-' + audi_left_center + ' 0.81 ' + audi_mid_top + '" material="src:#all"></a-plane>' +
	'<a-plane class="label" mixin="table_label_rotated" rotation="-90 -90 0" position="' + audi_left_center + ' 0.81 -' + audi_mid_top + '" material="src:#aru"></a-plane>' +
	'<a-plane class="label" mixin="table_label_rotated" rotation="-90 -90 0" position="' + audi_left_center + ' 0.81 0" material="src:#arm"></a-plane>' +
	'<a-plane class="label" mixin="table_label_rotated" rotation="-90 -90 0" position="' + audi_left_center + ' 0.81 ' + audi_mid_top + '" material="src:#arl"></a-plane>' +
	//chair left
	fiveChairs(-audi_left_left, audi_mid_top, 90) +
	fiveChairs(-audi_left_left, 0, 90) +
	fiveChairs(-audi_left_left, -audi_mid_top, 90) +
	//Chair right upper
	fiveChairs(audi_left_left, audi_mid_top, 90) +
	fiveChairs(audi_left_left, 0, 90) +
	fiveChairs(audi_left_left, -audi_mid_top, 90) +
	//chairs right
	coupleChairs(audi_left_center + 0.7, audi_mid_top + 1.2, 0) +
	coupleChairs(audi_left_center + 0.7, 1.2, 0) +
	coupleChairs(audi_left_center + 0.7, -audi_mid_top + 1.2, 0) +
	//chairs left
	coupleChairs(-audi_left_center - 0.7, audi_mid_top + 1.2, 0) +
	coupleChairs(-audi_left_center - 0.7, 1.2, 0) +
	coupleChairs(-audi_left_center - 0.7, -audi_mid_top + 1.2, 0) +
	//chairs
	fiveChairs(audi_other_x, audi_other_z, 0);

var badm_center_x = 2.5;
var badm_center_z = 3.0;
var badm_right_right = 5.5;
var badm_upper_right = 3.5;
var badm_corner_z = -6.5;
var badm_upper_z = -8;
var badm_upper_mid = 0.5;
var badm_upper_lower = -6;

var badm_settings = 
	'<a-box class="table box" mixin="table" rotation="0 90 0" position="' + badm_right_right + ' ' + table_height + ' 0"></a-box>' + 
	'<a-box class="table box" mixin="table" rotation="0 90 0" position="' + badm_right_right + ' ' + table_height + ' ' + String(-badm_center_z) + '"></a-box>' + 
	'<a-box class="table box" mixin="table" rotation="0 90 0" position="' + badm_right_right + ' ' + table_height + ' ' + badm_center_z + '"></a-box>' +
	'<a-box class="table box" mixin="table" position="' + badm_upper_right + ' ' + table_height + ' ' + badm_upper_z + '"></a-box>' +
	'<a-box class="table box" mixin="table" position="' + badm_upper_mid + ' ' + table_height + ' ' + badm_upper_z + '"></a-box>' +
	'<a-box class="table box" mixin="table" rotation="0 90 0" position="' + String(-badm_right_right) + ' ' + table_height + ' -2"></a-box>' +
	'<a-box class="table box" color="#fbd" position="0 0.1 8" depth="2" height="0.2" width="2"></a-box>' +
	//Castle
	//'<a-entity class="box">' + 
		'<a-box class="box castle" color="pink" position="-4.95 1.225 -7.40" depth="3.5" height="2.45" width="3.5"></a-box>' +
		'<a-plane class="label" geometry="width:2.45 height:2.45" position="-3.15 1.225 -7.4" rotation="0 90 0" material="src:#bc"></a-plane>' +
		'<a-plane class="label" geometry="width:2.45 height:2.45" position="-4.95 1.225 -5.5" material="src:#bc"></a-plane>' +
	//'</a-entity>' +
	door(6.7, 5.5, 90) +
	door(6.7, -5.5, 90) +
	door(-6.7, 0, 90) +
	'<a-plane geometry="width:2 height:0.4" position="-7.7 3 -2" rotation="0 0 0" material="src:#sp;side:double"></a-plane>' +
	//labels
	'<a-plane class="label" mixin="table_label" rotation="-90 0 0" position="' + badm_right_right + ' 0.81 0" material="src:#alm"></a-plane>' +
	'<a-plane class="label" mixin="table_label" rotation="-90 0 0" position="' + badm_right_right + ' 0.81 ' + String(-badm_center_z) + '" material="src:#aru"></a-plane>' +
	'<a-plane class="label" mixin="table_label" rotation="-90 0 0" position="' + badm_right_right + ' 0.81 ' + badm_center_z + '" material="src:#arm"></a-plane>' +
	'<a-plane class="label" mixin="table_label_rotated" rotation="-90 -90 0" position="' + badm_upper_right + ' 0.81 ' + badm_upper_z + '" material="src:#all"></a-plane>' +
	'<a-plane class="label" mixin="table_label_rotated" rotation="-90 -90 0" position="' + badm_upper_mid + ' 0.81 ' + badm_upper_z + '" material="src:#alu"></a-plane>' +
	'<a-plane class="label" mixin="table_label" rotation="-90 0 0" position="' + String(-badm_right_right) + ' 0.81 -2" material="src:#arl"></a-plane>' +
	//labels
	'<a-plane geometry="width:1.6 height:0.5" position="-5.7 0.25 3" rotation="-90 180 0" material="src:#qa"></a-plane>' +
	'<a-plane geometry="width:1.8 height:0.8" position="0 0.25 8" rotation="-90 180 0" material="src:#pb"></a-plane>' +
	//chair right
	coupleChairs(badm_right_right - 0.2, badm_center_z + 0.85, 0) +
	coupleChairs(badm_right_right - 0.2, 0.85, 0) +
	coupleChairs(badm_right_right - 0.2, -badm_center_z + 0.85, 0) +
	//chairs middle
	fiveChairs(badm_center_x, -badm_center_z - 0.2, 90) + 
	fiveChairs(badm_center_x, 0, 90) + 
	fiveChairs(badm_center_x, badm_center_z + 0.2, 90) + 
	//Chairs corner
	fiveChairs(badm_right_right, badm_corner_z, 90) + 
	//Chairs upper
	coupleChairs(badm_upper_mid + 0.85, badm_upper_z + 0.2, 90) +
	coupleChairs(badm_upper_right + 0.85, badm_upper_z + 0.2, 90) +
	//Chair Upper lower
	fiveChairs(badm_upper_mid, badm_upper_lower, 0) +
	fiveChairs(-2.0, -4, 45) + 
	//Chair left
	coupleChairs(-badm_right_right + 0.2, -2.85, 180) +
	fiveChairs(-4, -2, 90) +
	//'<a-entity class="box">' +
		'<a-box class="box sa" position="-4.2 0.1 6.65" width="5" height="0.2" depth="5" color="lightblue"></a-box>' +
		'<a-plane geometry="width:3.2 height:2.45" position="-4.2 0.25 6.65" rotation="-90 180 0" material="src:#sa"></a-plane>' +
	//'</a-entity>' +
	'<a-box class="box qa" position="5.7 0.1 8.65" width="2" height="0.2" depth="1" color="#ff6"></a-box>' +
	//'<a-entity class="box">' +
		'<a-box class="box qa" position="-5.7 0.1 3" width="2" height="0.2" depth="2" color="#ff6"></a-box>' +
		//fences
		'<a-plane class="fence" geometry="width:2 height:0.8" position="-5.7 0.4 2" rotation="0 0 0" material="color:yellow;opacity:0.5;side:double"></a-plane>' +
		'<a-plane class="fence" geometry="width:2 height:0.8" position="-4.7 0.4 3" rotation="0 90 0" material="color:yellow;opacity:0.5;side:double"></a-plane>';
	//'</a-entity>';

var shakes_lower_z = 4;
var shakes_right_x = 1.5;
var shakes_left_x = 2;
var shakes_door_z = 5;

var omar_lower_z = 1.5;
var omar_right_x = 1.5;

var shakes_settings = table(-shakes_left_x, 3 * omar_lower_z, 90) +
					  table(-shakes_left_x, omar_lower_z, 90) +
					  table(-shakes_left_x, -omar_lower_z, 90) +
					  fiveChairs(shakes_right_x, 3 * omar_lower_z, 90) +
				  	  fiveChairs(shakes_right_x - 0.65, omar_lower_z, 90) +
				  	  fiveChairs(shakes_right_x, -omar_lower_z, 90) +
				  	  door(4.65, shakes_door_z, 90) +
				  	  door(4.65, -shakes_door_z, 90) +
					  '<a-box class="box qa" position="-3.65 0.1 -5.2" width="2" height="0.2" depth="2" color="#ff6"></a-box>' +
					  //fences
					  '<a-plane class="fence" geometry="width:2 height:0.8" position="-3.65 0.4 -4.2" rotation="0 0 0" material="color:yellow;opacity:0.5;side:double"></a-plane>' +
					  '<a-plane class="fence" geometry="width:2 height:0.8" position="-2.65 0.4 -5.2" rotation="0 90 0" material="color:yellow;opacity:0.5;side:double"></a-plane>' +
					  //
					  '<a-plane mixin="table_label" rotation="-90 0 0" position="' + String(-shakes_left_x) + ' 0.81 ' + String(3 * omar_lower_z) + '" material="src:#alm"></a-plane>' +
					  '<a-plane mixin="table_label" rotation="-90 0 0" position="' + String(-shakes_left_x) + ' 0.81 ' + omar_lower_z + '" material="src:#alu"></a-plane>' +
					  '<a-plane mixin="table_label" rotation="-90 0 0" position="' + String(-shakes_left_x) + ' 0.81 ' + String(-omar_lower_z) + '" material="src:#aru"></a-plane>' +
					  '<a-plane mixin="table_label" rotation="-90 0 0" position="-3.65 0.25 -5.2" material="src:#qa"></a-plane>' +
					  '<a-plane geometry="width:5 height:2.5" position="0 5 -6.19" material="src:#ss; side: double"></a-plane>';
					  /*
					  table(-shakes_left_x, shakes_lower_z, 90) + 
					  table(-shakes_left_x, 0, 90) +
					  table(-shakes_left_x, -shakes_lower_z, 90) +
					  fiveChairs(shakes_right_x, shakes_lower_z, 90) +
					  fiveChairs(shakes_right_x, 0, 90) +
					  fiveChairs(shakes_right_x, -shakes_lower_z, 90) +
					  door(4.65, shakes_door_z, 90) +
					  door(4.65, -shakes_door_z, 90) +
					  '<a-plane mixin="table_label" rotation="-90 0 0" position="' + String(-shakes_left_x) + ' 0.81 ' + shakes_lower_z + '" material="src:#alm"></a-plane>' +
					  '<a-plane mixin="table_label" rotation="-90 0 0" position="' + String(-shakes_left_x) + ' 0.81 0" material="src:#alu"></a-plane>' +
					  '<a-plane mixin="table_label" rotation="-90 0 0" position="' + String(-shakes_left_x) + ' 0.81 ' + String(-shakes_lower_z) + '" material="src:#aru"></a-plane>';
					  */

var omar_settings = table(-shakes_left_x, 3 * omar_lower_z, 90) +
					table(-shakes_left_x, omar_lower_z, 90) +
					table(-shakes_left_x, -omar_lower_z, 90) +
					fiveChairs(shakes_right_x, 3 * omar_lower_z, 90) +
				  	fiveChairs(shakes_right_x - 0.65, omar_lower_z, 90) +
				  	fiveChairs(shakes_right_x, -omar_lower_z, 90) +
				  	door(4.65, shakes_door_z, 90) +
				  	door(4.65, -shakes_door_z, 90) +
					'<a-box class="box qa" position="-3.65 0.1 -5.2" width="2" height="0.2" depth="2" color="#ff6"></a-box>' +
					'<a-plane mixin="table_label" rotation="-90 0 0" position="' + String(-shakes_left_x) + ' 0.81 ' + String(3 * omar_lower_z) + '" material="src:#arl"></a-plane>' +
					'<a-plane mixin="table_label" rotation="-90 0 0" position="' + String(-shakes_left_x) + ' 0.81 ' + omar_lower_z + '" material="src:#all"></a-plane>' +
					'<a-plane mixin="table_label" rotation="-90 0 0" position="' + String(-shakes_left_x) + ' 0.81 ' + String(-omar_lower_z) + '" material="src:#arm"></a-plane>' +
					'<a-plane mixin="table_label" rotation="-90 0 0" position="-3.65 0.25 -5.2" material="src:#qa"></a-plane>' +
					 //fences
					 '<a-plane class="fence" geometry="width:2 height:0.8" position="-3.65 0.4 -4.2" rotation="0 0 0" material="color:yellow;opacity:0.5;side:double"></a-plane>' +
					 '<a-plane class="fence" geometry="width:2 height:0.8" position="-2.65 0.4 -5.2" rotation="0 90 0" material="color:yellow;opacity:0.5;side:double"></a-plane>' +
					 //
					'<a-plane geometry="width:5 height:2.5" position="0 5 -6.19" material="src:#oo; side: double"></a-plane>';

function fiveChairs(x, z, r) {
	return '<a-entity class="box" rotation="0 ' + r + ' 0" position="' + x + ' ' + chair_height + ' ' + z + '">' +
		   '<a-box class="chair" mixin="chair" position="0 0 0"></a-box>' +
		   '<a-box class="chair" mixin="chair" position="' + String(-chair_sep) + ' 0 0"></a-box>' +
		   '<a-box class="chair" mixin="chair" position="' + String(-2 * chair_sep) + ' 0 0"></a-box>' +
		   '<a-box class="chair" mixin="chair" position="' + String(chair_sep) + ' 0 0"></a-box>' +
		   '<a-box class="chair" mixin="chair" position="' + String(2 * chair_sep) + ' 0 0"></a-box>' +
		   '</a-entity>';
}

function coupleChairs(x, z, r) {
	return '<a-entity class="box" rotation="0 ' + r + ' 0" position="' + x + ' ' + chair_height + ' ' + z + '">' +
		   '<a-box class="chair" mixin="chair" position="0 0 0"></a-box>' +
		   '<a-box class="chair" mixin="chair" position="' + String(+chair_sep) + ' 0 0"></a-box>' +
		   '</a-entity>';
}

function table(x, z, r) {
	return '<a-box class="box" mixin="table" rotation="0 ' + r + ' 0" position="' + x + ' ' + table_height + ' ' + z + '"></a-box>' +
			coupleChairs(x - 0.51, z - 0.85, 0);
}

function door(x, z, r) {
	var door_height = 2.1 / 2;
	return '<a-plane class="door"  mixin="door" position="' + x + ' ' + door_height + ' ' + z + '" rotation="0 ' + r + ' 0"></a-plane>';
}

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
