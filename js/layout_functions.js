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
	return '<a-box class="box table" mixin="table" rotation="0 ' + r + ' 0" position="' + x + ' ' + table_height + ' ' + z + '"></a-box>' +
			coupleChairs(x - 0.51, z - 0.85, 0);
}

function door(x, z, r) {
	var door_height = 2.1 / 2;
	return '<a-plane class="door"  mixin="door" position="' + x + ' ' + door_height + ' ' + z + '" rotation="0 ' + r + ' 0"></a-plane>';
}

